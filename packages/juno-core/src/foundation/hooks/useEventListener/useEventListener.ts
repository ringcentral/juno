import { useEffect, useRef } from 'react';

import { getRefElement, RefOrElementOrCallback } from '../../utils';
import { useEventCallback } from '../useEventCallback';

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
export function useEventListener(
  target?: RefOrElementOrCallback | EventTarget,
  ...o: Parameters<EventTarget['addEventListener']>
) {
  const [key, cb, options] = o;
  const listener = useEventCallback(cb as any);

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

    bindRef.current();

    return cancelRef.current;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, currentRefElm]);

  return {
    listen: () => bindRef.current(),
    remove: () => cancelRef.current(),
  };
}
