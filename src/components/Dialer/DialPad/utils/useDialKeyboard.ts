import { KeyboardEventHandler, useRef } from 'react';

import { useEventCallback } from '../../../../foundation';
import { ACCEPTABLE_KEYS } from './DialPadUtils';
import { RcDialPadControl } from './types';

export type UseDialKeyboard = {
  onKeyDown?: KeyboardEventHandler;
  onKeyUp?: KeyboardEventHandler;
};

/**
 * Provide you can get event apply on trigger events area
 * @param options onKeyDown, onKeyUp that you also want apply on target
 * @returns  onKeyDown, onKeyUp, control
 */
export const useDialKeyboard = ({
  onKeyDown: onKeyDownArg,
  onKeyUp: onKeyUpArg,
}: UseDialKeyboard = {}) => {
  const control = useRef<RcDialPadControl>(null);

  // we need `onKeyup` & `onKeydown` to get called in same amount, but also make sure of the performance.
  const keyBufferRef = useRef<string[]>([]);

  const onKeyDown = useEventCallback<KeyboardEventHandler>((e) => {
    onKeyDownArg?.(e);

    const key = e.key;
    if (!ACCEPTABLE_KEYS.includes(key)) return;
    e.preventDefault();
    e.stopPropagation();

    const buffer = keyBufferRef.current;
    if (!buffer.includes(key)) {
      keyBufferRef.current = [...buffer, key];
      control.current?.handleKeyboardEffect(key, false);
    }
  });

  const onKeyUp = useEventCallback<KeyboardEventHandler>((e) => {
    onKeyUpArg?.(e);

    const key = e.key;
    if (!ACCEPTABLE_KEYS.includes(key)) return;
    e.preventDefault();
    e.stopPropagation();

    keyBufferRef.current = keyBufferRef.current.filter(
      (bufferedKey) => bufferedKey !== key,
    );
    control.current?.handleKeyboardEffect(key, true);
  });

  return { onKeyDown, onKeyUp, control };
};
