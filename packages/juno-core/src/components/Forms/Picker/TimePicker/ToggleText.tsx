import React, {
  ButtonHTMLAttributes,
  forwardRef,
  memo,
  useImperativeHandle,
} from 'react';

import { runKeyHandler } from '@material-ui/pickers/_shared/hooks/useKeyDown';

import {
  styled,
  useChange,
  useEventCallback,
  useRefState,
} from '../../../../foundation';
import { TIME_SYSTEM_TEXT } from './constant';
import { StyledTimeIconButton } from './styles';
import { RcClickFiledStyleProps } from './TimePicker';
import { RcTimePickerUtils } from './utils';
import { isClick } from './utils/A11yUtils';

type ToggleTextProps = {
  /** when user click th display text to change */
  onUpdateValue: (value: TIME_SYSTEM_TEXT) => void;
  /** trigger when inner update */
  onInnerChange?: (value: TIME_SYSTEM_TEXT) => void;
  /** initial value */
  value: TIME_SYSTEM_TEXT;
  /** get label for screen reader */
  getScreenReaderLabel?: (value: string) => string;
  /** trigger when confirm value */
  onClose: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
} & RcClickFiledStyleProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'value'>;

type ToggleTextRef = {
  value: TIME_SYSTEM_TEXT;
};

const _ToggleText = memo(
  forwardRef<ToggleTextRef, ToggleTextProps>(
    (
      {
        onUpdateValue,
        onInnerChange,
        value,
        size,
        disabled,
        getScreenReaderLabel,
        onClose,
        ...rest
      },
      ref,
    ) => {
      const [innerValueRef, setInnerValue] = useRefState(value);

      useChange(
        () => {
          if (innerValueRef.current !== value) {
            setInnerValue(value, false);
          }
        },
        () => value,
      );

      const innerValue = innerValueRef.current;

      const label = getScreenReaderLabel?.(innerValue);

      const nextValue =
        innerValue === TIME_SYSTEM_TEXT.AM
          ? TIME_SYSTEM_TEXT.PM
          : TIME_SYSTEM_TEXT.AM;

      const handleClick = useEventCallback((event: React.MouseEvent) => {
        if (disabled || !isClick(event)) return;
        onUpdateValue(nextValue);
      });

      const handleToggleKeyDown = useEventCallback(
        (event: React.KeyboardEvent<HTMLButtonElement>) => {
          if (disabled) {
            return;
          }

          const togglePeriod = () => {
            setInnerValue(nextValue);
            onInnerChange?.(nextValue);
          };

          const keydownSubmit = () => {
            event.stopPropagation();
            onUpdateValue(innerValue);
            onClose(event);
          };

          runKeyHandler(event.nativeEvent as KeyboardEvent, {
            ArrowUp: togglePeriod,
            ArrowDown: togglePeriod,
            Enter: keydownSubmit,
            ' ': keydownSubmit,
          });
        },
      );

      useImperativeHandle(
        ref,
        () => ({
          value: innerValue,
        }),
        [innerValue],
      );

      return (
        <StyledTimeIconButton
          wrapperSize={size}
          onClick={handleClick}
          onKeyDown={handleToggleKeyDown}
          disabled={disabled}
          color="informative.f02"
          aria-live="assertive"
          aria-label={label}
          {...rest}
        >
          <>{innerValue}</>
        </StyledTimeIconButton>
      );
    },
  ),
);

const ToggleText = styled(_ToggleText)`
  margin-left: ${({ size }) => RcTimePickerUtils[size!].timeSystem.margin};
`;

ToggleText.displayName = 'ToggleText';

export { ToggleText };
export type { ToggleTextProps, ToggleTextRef };
