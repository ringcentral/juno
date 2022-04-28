import React, {
  forwardRef,
  HTMLAttributes,
  Ref,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';

import {
  RcBaseProps,
  styled,
  useEventCallback,
  useForkRef,
  useKeyboardMoveFocus,
  UseLongPressEventReason,
  useOnlyOneFocusable,
  useThemeProps,
} from '../../../foundation';
import { RcIconButtonProps } from '../../Buttons/IconButton';
import { RcIconButtonClasses } from '../../Buttons/IconButton/utils';
import { RcVisuallyHidden } from '../../VisuallyHidden';
import { RcDialPadButton, RcDialPadButtonProps } from '../DialPadButton';
import { useRcDialerContext } from '../utils';
import { DialPadStyle } from './styles';
import type {
  DIALER_PAD_ICON_VALUES,
  DialPadSoundMap,
  RcDialPadAction,
  RcDialPadControl,
} from './utils';
import {
  ACCEPTABLE_KEYS,
  DIALER_PAD_ICONS,
  DIALER_PAD_PLUS,
  useKeyAudio,
} from './utils';

type RcDialPadOnChangeReason = UseLongPressEventReason | 'customKeyboard';

type RcDialPadProps = {
  /** for custom window */
  externalWindow?: Window;
  /**
   * trigger when value change, `reason` for trigger from what event
   *
   * `reason` will be `customKeyboard` when it trigger by `useDiaKeyboard`.
   */
  onChange?: (value: string, reason: RcDialPadOnChangeReason) => void;
  /** keypad sounds */
  sounds?: DialPadSoundMap;
  /** volume of keypad sound */
  volume?: number;
  /** is keypad sound muted */
  muted?: boolean;
  /** long press '0' time to typing '+' */
  longPressDelay?: number;
  /**
   * time of persist button background when manual trigger by 'actionRef'
   * button background will not persist if persistBgTime less than 0
   * @default 200
   * */
  persistBgTime?: number;
  /**
   * make that dialPad size auto fixed container width
   *
   * @default true
   */
  autoSize?: boolean;
  /** can manual trigger audio by ref */
  action?: Ref<RcDialPadAction>;
  /**
   * control inner action,
   * ### you should use with `useDialKeyboard`
   */
  control?: Ref<RcDialPadControl>;
  /** method to get addition props for below each `DialPadButton` */
  getDialPadButtonProps?: (
    value: DIALER_PAD_ICON_VALUES,
  ) => RcBaseProps<RcIconButtonProps, 'value' | 'onKeyDown' | 'onFocus'> &
    Record<any, any>;
} & RcBaseProps<HTMLAttributes<HTMLDivElement>, 'onChange'> &
  Pick<RcDialPadButtonProps, 'classes'>;

const _RcDialPad = forwardRef<HTMLDivElement, RcDialPadProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcDialPad' });
    const {
      sounds,
      volume,
      autoSize,
      muted,
      classes,
      onChange: onChangeProp,
      longPressDelay,
      action,
      persistBgTime,
      control,
      getDialPadButtonProps,
      externalWindow = window,
      ...divProps
    } = props;

    const containerRef = useRef<HTMLDivElement>(null);
    const hiddenRef = useRef<HTMLDivElement>(null);

    const keyTimerMapRef = useRef<Record<string, number>>({});

    const forkRef = useForkRef(containerRef, ref);

    const { onInsertRef, dialPadActionRef } = useRcDialerContext();

    const focusedIndexRef = useRef(0);

    const { focusIndex, getItemProps, moveFocusedId } = useOnlyOneFocusable({
      focusedIndexRef,
      containerRef,
    });

    const dialButtonKey = `${moveFocusedId}-dial-button`;

    const { onKeyFocusedIndexHandle } = useKeyboardMoveFocus({
      options: DIALER_PAD_ICONS,
      focusedIndexRef,
      infinite: true,
      columns: 3,
      onFocusedIndexChange: (event, toIndex) => {
        focusedIndexRef.current = toIndex;
        focusIndex(toIndex);

        event.preventDefault();
      },
    });

    const play = useKeyAudio({
      volume: volume!,
      muted: muted!,
      sounds,
    });

    const playAudio = useEventCallback((value: string) => {
      const key = value === DIALER_PAD_PLUS ? '0' : value;

      const keyButtonElm = containerRef.current?.querySelector(
        `[${dialButtonKey}="${key}"]`,
      );

      if (keyButtonElm) {
        // * to keep color when quick trigger insert key or click very quick
        const oldTimer = keyTimerMapRef.current[key];
        if (oldTimer) clearTimeout(oldTimer);

        keyButtonElm.classList.add(RcIconButtonClasses.persistBg);

        keyTimerMapRef.current[key] = window.setTimeout(() => {
          keyButtonElm.classList.remove(RcIconButtonClasses.persistBg);

          delete keyTimerMapRef.current[key];
        }, persistBgTime);
      }

      return play(value);
    });

    const handleChange: RcDialPadProps['onChange'] = (value, reason) => {
      playAudio(value);
      onInsertRef?.current?.(value, reason);
      onChangeProp?.(value, reason);
    };

    const handleKeyboardEffect = useEventCallback(
      (value: string, isKeyup: boolean) => {
        if (isKeyup) {
          handleChange(value, 'customKeyboard');

          const toIndex = ACCEPTABLE_KEYS.findIndex((x) => x === value);
          focusedIndexRef.current = toIndex;
          // * mean that current focus on that dialPad, move focus to dialPad container
          if (
            externalWindow.document.activeElement?.getAttribute(
              dialButtonKey,
            ) !== null
          ) {
            hiddenRef.current?.focus();
          }
        }
      },
    );

    const handleKeyEffect = useEventCallback(
      (value: string, reason: RcDialPadOnChangeReason) => {
        handleChange(value, reason);
      },
    );

    const forkActionRef = useForkRef(dialPadActionRef!, action!);

    useImperativeHandle(forkActionRef, () => ({ playAudio }), [playAudio]);

    useImperativeHandle(control, () => ({ handleKeyboardEffect }), [
      handleKeyboardEffect,
    ]);

    // * clean when unmount
    useEffect(
      () => () => {
        for (const timer of Object.values(keyTimerMapRef.current)) {
          clearTimeout(timer);
        }
      },
      [],
    );

    return (
      <div ref={forkRef} {...divProps}>
        <RcVisuallyHidden ref={hiddenRef} tabIndex={-1} />
        {DIALER_PAD_ICONS.map(([symbol, key, additionLabel], index) => {
          const ariaLabelArr: string[] = additionLabel
            ? [key, additionLabel]
            : [key];

          return (
            <RcDialPadButton
              classes={classes}
              symbol={symbol}
              key={key}
              value={key}
              onKeyEffect={handleKeyEffect}
              externalWindow={externalWindow}
              {...getItemProps(index)}
              aria-label={ariaLabelArr.join(',')}
              onKeyDown={onKeyFocusedIndexHandle}
              {...{ [dialButtonKey]: key }}
              {...getDialPadButtonProps?.(key)}
              {...(key === '0'
                ? {
                    longPressValue: DIALER_PAD_PLUS,
                    longPressDelay,
                  }
                : {})}
            />
          );
        })}
      </div>
    );
  },
);

/** @release */
const RcDialPad = styled(_RcDialPad)`
  ${DialPadStyle}
`;

RcDialPad.defaultProps = {
  persistBgTime: 200,
  volume: 1,
  muted: false,
  longPressDelay: 1000,
};

RcDialPad.displayName = 'RcDialPad';

export { RcDialPad };

export type { RcDialPadAction, RcDialPadOnChangeReason, RcDialPadProps };
