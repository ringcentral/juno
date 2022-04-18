import { SyntheticEvent, useEffect, useRef } from 'react';

import { getRefElement, RefOrElementOrCallback } from '../../utils';
import { useEventCallback } from '../useEventCallback';

export type UseEventListenerAction = {
  listen: () => void;
  remove: () => void;
};

export type UseEventListenerConfig = {
  /**
   * start listening when component mounted
   *
   * @default true
   */
  startImmediately?: boolean;
};

export function useEventListener<T = SyntheticEvent>(
  target: RefOrElementOrCallback | EventTarget,
  key: string,
  callback: (event?: T) => void,
  config?: UseEventListenerConfig,
): UseEventListenerAction;

export function useEventListener<T = SyntheticEvent>(
  target: RefOrElementOrCallback | EventTarget,
  key: string,
  callback: (event?: T) => void,
  options?: AddEventListenerOptions | boolean,
  config?: UseEventListenerConfig,
): UseEventListenerAction;

/**
 * bind event when component mount and auto remove event when destroy.
 * can remove listener by call returned function or pass empty 'target'.
 *
 * @param target
 * listener will be removed when target is changed to null,
 * or rebinding to new element when `ref.current` change
 * @returns a method object
 * - listen() listen listener again, if that have listener, that will not listen again
 * - remove() remove listener
 * @example
 * ```ts
 * useEventListener(window, 'keyup', () => console.log('window key up'))
 * ```
 */
export function useEventListener<T = SyntheticEvent>(
  target: RefOrElementOrCallback | EventTarget,
  key: string,
  callback: (event?: T) => void,
  ...args: any[]
) {
  const { options, config } = getListenerOverloadOption(args);

  const { startImmediately = true } = config || {};

  const listener = useEventCallback(callback as any);

  const cancelRef = useRef<() => void>(() => {});
  const bindRef = useRef<() => void>(() => {});

  const currentRefElm = getRefElement(target as any);

  useEffect(() => {
    if (!target) return;
    const currentElm = getRefElement(target as any);

    if (!currentElm) {
      return cancelRef.current;
    }

    bindRef.current = () => currentElm.addEventListener(key, listener, options);
    cancelRef.current = () =>
      currentElm.removeEventListener(key, listener, options);

    if (startImmediately) {
      bindRef.current();
    }

    return cancelRef.current;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, currentRefElm]);

  return {
    listen: () => bindRef.current(),
    remove: () => cancelRef.current(),
  };
}

function getListenerOverloadOption(args: any[]) {
  let options: AddEventListenerOptions | boolean | undefined;
  let config: UseEventListenerConfig | undefined;

  if (typeof args[0] === 'boolean') {
    options = args[0];
    config = args[1];
  } else {
    const { startImmediately, ...restOptions } = {
      ...(args[0] || {}),
      ...(args[1] || {}),
    } as AddEventListenerOptions & UseEventListenerConfig;
    options = restOptions;

    config = {
      startImmediately,
    };
  }

  return { options, config };
}
