import { useEffect, useRef } from 'react';

import { getRefElement, logInDev, RefOrElementOrCallback } from '../../utils';
import { useEventCallback } from '../useEventCallback';

export const globalListenerEventMap = new Map<
  string,
  {
    /**
     * listener exec method
     */
    exec: (e: any) => void;
    /**
     * all listener
     */
    listeners: Set<(e: any) => void>;
  }
>();

/**
 * create globalListener handler for share one listener event
 *
 * @example
 * ```ts
 * const globalListener = createGlobalListener('focus', () => { console.log('focus') });
 * const globalListener2 = createGlobalListener('focus', () => { console.log('focus') });
 * globalListener.listen();
 * globalListener2.listen();
 *
 * => // that will only create an event listener on window, but every callback will get emit value when event triggered
 * ```
 */
export const createGlobalListener = (
  key: string,
  listener: EventListener,
  {
    customKey = key,
    target: targetProp = window,
  }: {
    /**
     * custom key for determining different event group, default is same as `key`
     */
    customKey?: string;
    /**
     * custom binding event target, default is `window`
     */
    target?: RefOrElementOrCallback | EventTarget;
  } = {},
) => {
  let listening = false;

  const getMapValue = () => globalListenerEventMap.get(customKey);

  const addListener = () => {
    if (listening) return;

    const savedEvent = getMapValue();

    if (!savedEvent?.exec) {
      const exec = (e: any) => {
        const event = getMapValue();

        event?.listeners.forEach((c) => c(e));
      };

      globalListenerEventMap.set(customKey, {
        exec,
        listeners: new Set([listener]),
      });

      const target = getRefElement(targetProp as any);

      target?.addEventListener(key, exec);
    } else {
      savedEvent.listeners.add(listener);
    }
    listening = true;
  };

  const removeListener = () => {
    if (!listening) return;
    listening = false;

    const _savedEvent = getMapValue();

    if (!_savedEvent) return;

    const { listeners } = _savedEvent;

    listeners.delete(listener);

    if (listeners.size === 0) {
      const target = getRefElement(targetProp as any);

      target?.removeEventListener(key, _savedEvent.exec);
      globalListenerEventMap.delete(customKey);
    }
  };

  return {
    /**
     * bind listener again
     */
    listen: () => addListener(),
    /**
     * remove listener
     */
    remove: () => removeListener(),
    /**
     * current listener state
     */
    get state() {
      return {
        /**
         * current listener state count
         */
        get count() {
          return getMapValue()?.listeners.size || 0;
        },
        /**
         * is that be listening
         */
        listening,
      };
    },
  };
};

type CreateGlobalListenerParams = Parameters<typeof createGlobalListener>;
/**
 * bind global event, when you bind same key event,
 * that will reuse one event listener and trigger both callback once that listener be triggered.
 *
 * also you can control listener with method `listen` and `remove`
 * and get listener `state` for check listener count number and current listing state.
 *
 * - `target`: custom binding event target, default is `window`
 * - `customKey`: custom key for determining different event group, default is same as `key`
 * - `startImmediately`: start listener immediately, default is `true`
 *
 * * `key`, `options` only work when set first time, never change after first render
 *
 * @example
 * ```ts
 * useGlobalListener('keyup', () => console.log('window key up1'))
 * useGlobalListener('keyup', () => console.log('window key up2'))
 * useGlobalListener('keyup', () => console.log('window key up3'))
 *
 * => // that will only create an event listener on `window`, but every callback will get emit value when event triggered
 * ```
 */
export function useGlobalListener(
  key: CreateGlobalListenerParams[0],
  listener: CreateGlobalListenerParams[1],
  options: CreateGlobalListenerParams[2] & {
    /**
     * start listening when component mounted
     *
     * @default true
     */
    startImmediately?: boolean;
  } = {},
) {
  const { startImmediately = true } = options;

  const _listener = useEventCallback(listener as any);

  const { current: globalListener } = useRef(
    createGlobalListener(key, _listener, options),
  );

  if (process.env.NODE_ENV !== 'production') {
    const { customKey = key, target: targetProp = window } = options;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      const target = getRefElement(targetProp as any);

      if (target !== window && customKey === key) {
        logInDev({
          component: 'useGlobalListener',
          message:
            'When you custom binding event target, you must custom key for determining different event group',
          level: 'error',
        });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  }

  useEffect(() => {
    if (startImmediately) {
      globalListener.listen();
    }
    return globalListener.remove;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return globalListener;
}
