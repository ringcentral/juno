import React, {
  forwardRef,
  HTMLAttributes,
  memo,
  useImperativeHandle,
  useMemo,
  useRef,
  useLayoutEffect,
} from 'react';

import { runKeyHandler } from '@material-ui/pickers/_shared/hooks/useKeyDown';
import {
  ArrowDown as ArrowDownIcon,
  ArrowUp as ArrowUpIcon,
} from '@ringcentral/juno-icon';

import {
  RcBaseProps,
  styled,
  useChange,
  useDepsChange,
  useEventCallback,
  useForceUpdate,
  useRefState,
} from '../../../../foundation';
import { RcIconButtonSize } from '../../../Buttons/IconButton';
import { StyledNumberPicker } from './styles/StyledNumberPicker';
import { StyledTimeIconButton } from './styles/StyledTimeIconButton';
import { RcClickFiledStyleProps } from './TimePicker';
import { pad } from './utils';

type Range = {
  min?: number;
  max?: number;
};

type NumberPickerProps = {
  /** min number */
  min?: number;
  /** max number */
  max?: number;
  /** when user click the display number */
  onClick?: () => void;
  /** selected value */
  value: number;
  /** data source of the number array */
  source: number[];
  /** trigger when want update value */
  onUpdateValue: (value?: number) => void;
  /** trigger when inner update */
  onInnerChange?: (value?: number) => void;
  /** trigger when confirm value */
  onClose: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  /** automationId, used for test */
  automationId?: string;
  /** get label for screen reader */
  getScreenReaderLabel?: (value: string) => string;
  /** each step value */
  step: number;
  /** render value fn */
  renderValue?: (value: number) => string;
  /**
   * If `true`, the `NumberPicker` element will be focused during the first mount.
   */
  autoFocus?: boolean;
} & RcClickFiledStyleProps &
  RcBaseProps<HTMLAttributes<HTMLDivElement>, 'onClick' | 'onChange'>;

type NumberPickerRef = {
  value: number;
  setRange: React.Dispatch<React.SetStateAction<Range>>;
};

const _NumberPicker = forwardRef<NumberPickerRef, NumberPickerProps>(
  (props, ref) => {
    const {
      onClick,
      value,
      onUpdateValue,
      onKeyDown,
      source,
      automationId,
      size,
      min: minProp,
      max: maxProp,
      onClose,
      step,
      onInnerChange,
      renderValue,
      getScreenReaderLabel,
      autoFocus,
      ...rest
    } = props;
    const forceUpdate = useForceUpdate();
    const [innerValueRef, setInnerValue] = useRefState(value, forceUpdate);

    const rangeRef = useRef<Range>({ max: maxProp, min: minProp });
    const pickerRef = useRef<HTMLInputElement | null>(null);

    useLayoutEffect(() => {
      if (autoFocus) {
        pickerRef.current!.focus();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useDepsChange(() => {
      rangeRef.current = { max: maxProp, min: minProp };
    }, [maxProp, minProp]);

    useChange(
      () => {
        if (innerValueRef.current !== value) {
          setInnerValue(value, false);
        }
      },
      () => value,
    );

    const innerValue = innerValueRef.current;

    const index = Math.floor(innerValue / step);

    const isFirst = index === 0;
    const isLatest = index === source.length - 1;

    const firstValue = source[0];
    const latestValue = source[source.length - 1];

    const decreaseValue = isFirst ? latestValue : source[index - 1];
    const increaseValue = isLatest ? firstValue : source[index + 1];

    const { min, max } = rangeRef.current;

    const decreaseDisabled = isFirst
      ? !!(max !== undefined && latestValue > max)
      : !!(min !== undefined && decreaseValue < min);

    const increaseDisabled = isLatest
      ? !!(min !== undefined && firstValue < min)
      : !!(max !== undefined && increaseValue > max);

    const showValue = useMemo(() => {
      if (renderValue) {
        return renderValue(innerValue);
      }
      return pad(innerValue);
    }, [innerValue, renderValue]);

    const label = getScreenReaderLabel?.(showValue);

    const handleKeyDown = useEventCallback((event) => {
      const keydownSubmit = () => {
        event.stopPropagation();
        onUpdateValue(innerValueRef.current);
        onClose(event);
      };

      const handleInnerValueChange = (toValue: number) => {
        setInnerValue(toValue);
        onInnerChange?.(toValue);
      };

      runKeyHandler(event, {
        ArrowUp: () => {
          if (increaseDisabled) {
            return;
          }
          handleInnerValueChange(increaseValue);
        },
        ArrowDown: () => {
          if (decreaseDisabled) {
            return;
          }
          handleInnerValueChange(decreaseValue);
        },
        Enter: keydownSubmit,
        ' ': keydownSubmit,
      });
      onKeyDown?.(event);
    });

    useImperativeHandle(
      ref,
      () => ({
        value: innerValue,
        setRange: (newRange: Range) => {
          const range = rangeRef.current;

          if (range.max !== newRange.max || range.min !== newRange.min) {
            let currentValue = -1;

            if (
              newRange.max !== undefined &&
              innerValueRef.current > newRange.max
            ) {
              currentValue = newRange.max;
            }

            if (
              newRange.min !== undefined &&
              innerValueRef.current < newRange.min
            ) {
              currentValue = newRange.min;
            }

            rangeRef.current = newRange;

            if (currentValue !== -1) {
              setInnerValue(currentValue, false);
            }

            forceUpdate();
          }
        },
      }),
      [forceUpdate, innerValue, innerValueRef, setInnerValue],
    );

    const iconSize: RcIconButtonSize = (() => {
      switch (size) {
        case 'small':
          return 'medium';
        case 'medium':
        default:
          return 'large';
      }
    })();

    return (
      <StyledNumberPicker
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-live="assertive"
        aria-label={label}
        ref={pickerRef}
        data-focusable
        {...rest}
      >
        <StyledTimeIconButton
          tabIndex={-1}
          size={iconSize}
          color="neutral.f04"
          wrapperSize={size}
          disabled={increaseDisabled}
          onClick={() => {
            onUpdateValue(increaseValue);
          }}
          symbol={ArrowUpIcon}
          data-test-automation-id={
            automationId && `${automationId}-prev-pagination`
          }
          aria-label="Arrow Up"
        />
        <StyledTimeIconButton
          wrapperSize={size}
          tabIndex={-1}
          onClick={onClick}
          data-test-automation-id={automationId && `${automationId}-text`}
        >
          <>
            {
              // TODO: that <></> will fix when `RcIconButton` ready
              showValue
            }
          </>
        </StyledTimeIconButton>
        <StyledTimeIconButton
          tabIndex={-1}
          size={iconSize}
          color="neutral.f04"
          wrapperSize={size}
          disabled={decreaseDisabled}
          onClick={() => {
            onUpdateValue(decreaseValue);
          }}
          symbol={ArrowDownIcon}
          data-test-automation-id={
            automationId && `${automationId}-next-pagination`
          }
          aria-label="Arrow Down"
        />
      </StyledNumberPicker>
    );
  },
);

const NumberPicker = styled(memo(_NumberPicker))``;

NumberPicker.displayName = 'NumberPicker';

export { NumberPicker };
export type { NumberPickerProps, NumberPickerRef };
