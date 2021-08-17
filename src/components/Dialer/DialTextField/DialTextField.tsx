import React, {
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react';

import {
  combineProps,
  getSelectionPosition,
  RcBaseProps,
  setSelectionPosition,
  styled,
  useEventCallback,
  useForkRef,
  useKeyDownOnce,
  useThemeProps,
} from '../../../foundation';
import { RcTextField, RcTextFieldProps } from '../../Forms/TextField';
import { RcDialPadOnChangeReason } from '../DialPad';
import { ACCEPTABLE_KEYS } from '../DialPad/utils';
import { useRcDialerContext } from '../utils';
import { DialTextFieldStyle } from './styles';
import { getDialPadValueOnlyRegex, useFixedEndSelection } from './utils';

type RcDialTextFieldProps = {
  /** current value */
  value: string;
  /** emit when value change */
  onChange(value: string): any;
  /**
   * emit latest trigger value, that will be helpful when you in `keypadMode`,
   * `reason` for trigger from what event
   */
  onEmit?: (value: string, reason: RcDialPadOnChangeReason) => void;
  /** only allow keypad value */
  onlyAllowKeypadValue?: boolean;
  /**
   * is that in keypad mode, keypad mode
   *
   * 1. can't select text
   * 2. can't delete text
   * 3. can't change cursor position
   * 4. keep focus position in the latest
   * 5. non maxLength
   */
  keypadMode?: boolean;
} & RcBaseProps<
  RcTextFieldProps,
  | 'onChange'
  | 'value'
  | 'onClear'
  | 'clearBtn'
  | 'clearButtonProps'
  | 'clearLabel'
>;

const _RcDialTextField = forwardRef<any, RcDialTextFieldProps>(
  (inProps: RcDialTextFieldProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcDialTextField' });
    const {
      children,
      value,
      onChange,
      onEmit,
      onKeyPress,
      onKeyDown,
      onKeyUp,
      inputRef: inputRefProp,
      inputProps: inputPropsProp,
      InputProps: InputPropsProp,
      onlyAllowKeypadValue,
      keypadMode,
      ...rest
    } = props;

    const dialerContext = useRcDialerContext();

    const {
      ref: inputRef,
      onFocus: onKeypadModeFocus,
      onKeyDown: onKeypadModeKeyDown,
      onClick: onKeypadModeClick,
    } = useFixedEndSelection();

    const forkContextRef = useForkRef(dialerContext.inputRef!, inputRef);
    const forkInputRef = useForkRef(inputRefProp!, forkContextRef);

    const scrollToPositionRef = useRef<number | undefined>();
    const isNotTriggerRefocusRef = useRef(false);

    const maxLength = keypadMode ? undefined : inputPropsProp?.maxLength;

    const checkNotReFocus = useEventCallback(
      (reason: RcDialPadOnChangeReason, isFocus?: boolean) => {
        const elm = inputRef.current;

        const isInputFocus = isFocus ?? document.activeElement === elm;

        if (reason !== 'click' && !isInputFocus) {
          // ! both keydown and touch, only when focus need re-focus
          isNotTriggerRefocusRef.current = true;
        }
      },
    );

    /**
     * outside clear via this method, with check current input state
     */
    useImperativeHandle(
      dialerContext.onClearRef,
      () => (e, reason) => {
        // * when clear from keyboard,
        // * must need re-focus, so not check,
        if (reason !== 'keyboard') {
          checkNotReFocus(reason);
        }
        scrollToPositionRef.current = 0;
        onChange?.('');
      },
      [checkNotReFocus, onChange],
    );

    /**
     * outside delete value via this method, with check current input state
     */
    useImperativeHandle(
      dialerContext.onDeleteRef,
      () => (e, reason) => {
        const elm = inputRef.current;

        if (elm && value?.length) {
          const isFocus = document.activeElement === elm;

          let toPosition: number | undefined;
          let toValue: string | undefined;

          if (isFocus) {
            const { position, isSelectRange } = getSelectionPosition(inputRef);

            if (isSelectRange) {
              toPosition = position.start;
              toValue =
                value.slice(0, position.start) + value.slice(position.end);
            } else if (position.start > 0) {
              toPosition = position.start - 1;
              toValue = value.slice(0, toPosition) + value.slice(position.end);
            }
          } else {
            toPosition = value.length - 1;
            toValue = value.slice(0, -1);
          }

          if (toValue !== undefined) {
            // * when delete from keyboard and value to be empty,
            // * must need re-focus, so not check,
            if (!(reason === 'keyboard' && toValue === '')) {
              checkNotReFocus(reason);
            }
            scrollToPositionRef.current = toPosition;
            onChange?.(toValue);
          }
        }
      },
      [checkNotReFocus, inputRef, onChange, value],
    );

    /**
     * outside change value via this method, with check current input state
     */
    useImperativeHandle(
      dialerContext.onInsertRef,
      () => (addValue, reason) => {
        const elm = inputRef.current;

        if (elm) {
          const isFocus = document.activeElement === elm;

          let toPosition: number;
          let toValue: string;

          // * when keypadMode also add value at latest
          if (!isFocus || keypadMode) {
            toValue = value + addValue;
            toPosition = toValue.length;
          } else {
            const { position } = getSelectionPosition(inputRef);

            toValue =
              value.slice(0, position.start) +
              addValue +
              value.slice(position.end);
            toPosition = position.start + 1;
          }

          if (
            maxLength === undefined ||
            (maxLength !== undefined && toValue.length <= maxLength)
          ) {
            checkNotReFocus(reason, isFocus);

            scrollToPositionRef.current = toPosition;
            onChange?.(toValue);
            onEmit?.(addValue, reason);
          }
        }
      },
      [
        checkNotReFocus,
        inputRef,
        keypadMode,
        maxLength,
        onChange,
        onEmit,
        value,
      ],
    );

    useLayoutEffect(() => {
      const scrollToPosition = scrollToPositionRef.current;

      if (!isNotTriggerRefocusRef.current && scrollToPosition !== undefined) {
        setSelectionPosition(inputRef, {
          start: scrollToPosition,
          end: scrollToPosition,
          scrollIntoView: true,
        });
      }

      scrollToPositionRef.current = undefined;
      isNotTriggerRefocusRef.current = false;
    });

    const events = useKeyDownOnce<HTMLInputElement>(ACCEPTABLE_KEYS, {
      onKeyDown: (e) => {
        dialerContext.dialPadActionRef?.current?.playAudio(e.key);

        if (keypadMode) {
          if (['Delete', 'Backspace'].includes(e.key)) {
            e.preventDefault();
            e.stopPropagation();
          }

          onKeypadModeKeyDown(e);
        }
        onKeyDown?.(e);
      },
      onKeyUp,
    });

    const handleChange = useEventCallback(
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const currValue = e.target.value;

        // * handle copy paste
        if (onlyAllowKeypadValue) {
          const filterValue = (
            currValue.match(getDialPadValueOnlyRegex()) || []
          ).join('');

          if (filterValue === value) return;

          const newValue = filterValue.slice(-1);
          if (newValue !== '') {
            onEmit?.(newValue, 'keyboard');
          }

          onChange(filterValue);
          return;
        }

        onChange(currValue);
      },
    );

    const handleKeyPress = useEventCallback(
      (e: React.KeyboardEvent<HTMLDivElement>): void => {
        onKeyPress?.(e);

        if (onlyAllowKeypadValue) {
          const isMatch = getDialPadValueOnlyRegex().test(e.key);
          if (!isMatch) {
            e.preventDefault();
            e.stopPropagation();
          }
        }
      },
    );

    const InputProps = useMemo(
      () =>
        combineProps(
          {
            onFocus: keypadMode ? onKeypadModeFocus : undefined,
            onClick: keypadMode ? onKeypadModeClick : undefined,
            onKeyPress: handleKeyPress,
            onChange: handleChange,
            onKeyDown: events.onKeyDown,
            onKeyUp: events.onKeyUp,
          },
          InputPropsProp,
        ),
      [
        InputPropsProp,
        events.onKeyDown,
        events.onKeyUp,
        handleChange,
        handleKeyPress,
        keypadMode,
        onKeypadModeClick,
        onKeypadModeFocus,
      ],
    );

    const inputProps = useMemo(() => ({ ...inputPropsProp, maxLength }), [
      inputPropsProp,
      maxLength,
    ]);

    return (
      <RcTextField
        ref={ref}
        inputRef={forkInputRef}
        clearBtn={false}
        value={value}
        variant="borderLess"
        inputProps={inputProps}
        InputProps={InputProps}
        autoComplete="off"
        {...rest}
      >
        {children}
      </RcTextField>
    );
  },
);

const RcDialTextField = styled(_RcDialTextField)`
  ${DialTextFieldStyle}
`;

RcDialTextField.defaultProps = {
  inputProps: {
    maxLength: 30,
  },
  textVariant: 'headline1',
};

RcDialTextField.displayName = 'RcDialTextField';

export { RcDialTextField, RcDialTextFieldProps };
