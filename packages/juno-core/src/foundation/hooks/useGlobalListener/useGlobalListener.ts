import { SyntheticEvent, useEffect, useRef } from 'react';

import { getRefElement, logInDev } from '../../utils';
import { useEventCallback } from '../useEventCallback';
import {
  createGlobalListener,
  CreateGlobalListenerConfig,
} from './createGlobalListener';

type GlobalListener = ReturnType<typeof createGlobalListener>;

export type UseGlobalListenerConfig = CreateGlobalListenerConfig & {
  /**
   * start listening when component mounted
   *
   * @default true
   */
  startImmediately?: boolean;
};

export function useGlobalListener<T extends SyntheticEvent>(
  key: string,
  listener: (event?: T) => void,
  config?: UseGlobalListenerConfig,
): GlobalListener;

export function useGlobalListener<T extends SyntheticEvent>(
  key: string,
  listener: (event?: T) => void,
  options?: AddEventListenerOptions | boolean,
  config?: UseGlobalListenerConfig,
): GlobalListener;

/**
 * bind global event, when you bind same key event,
 * that will reuse one event listener and trigger both callback once that listener be triggered.
 *
 * also you can control listener with method `listen` and `remove`
 * and get listener `state` for check listener count number and current listing state.
 *
 * config:
 * - `target`: custom binding event target, default is `window`
 * - `customKey`: custom key for determining different event group, default is same as `key`
 * - `startImmediately`: start listener immediately, default is `true`
 *
 * * `key`, `options` only work when set first time, never change after first render
 *
 * @example
 * ```ts
 * useGlobalListener('keyup', () => console.log('window key up1'))
 *
 * useGlobalListener('keyup', () => console.log('window key up2'))
 *
 * useGlobalListener('touchend', () => console.log('window key up3'), {
 *  target: someWantHostElement,
 *  customKey: 'hostTouchend',
 * })
 *
 * useGlobalListener('touchend', () => console.log('window key up3'), { passive: false }, {
 *  target: someWantHostElement,
 *  customKey: 'hostTouchend',
 * })
 *
 * => // that will only create an event listener on `window`, but every callback will get emit value when event triggered
 * ```
 */
export function useGlobalListener<T extends SyntheticEvent>(
  key: string,
  listener: (event?: T) => void,
  ...args: any[]
) {
  const { options, config } = getListenerOverloadOption(args);

  const {
    customKey = key,
    target: targetProp = window,
    startImmediately = true,
  } = config || {};

  const _listener = useEventCallback(listener as any);

  const { current: globalListener } = useRef(
    createGlobalListener(key, _listener, options, {
      customKey,
      target: targetProp,
    }),
  );

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (customKey === key) {
        if (Object.keys(options).length > 0) {
          logInDev({
            component: 'useGlobalListener',
            message:
              'when have set options, suggest you also bind customKey, otherwise, it may use previous listener without same options',
            level: 'warn',
          });
        }

        const target = getRefElement(targetProp as any);

        if (target !== window) {
          logInDev({
            component: 'useGlobalListener',
            message:
              'When you custom binding event target, you must custom key for determining different event group',
            level: 'error',
          });
        }
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

function getListenerOverloadOption(args: any[]) {
  let options: AddEventListenerOptions | boolean | undefined;
  let config: UseGlobalListenerConfig | undefined;

  if (typeof args[0] === 'boolean') {
    options = args[0];
    config = args[1];
  } else {
    const { startImmediately, customKey, target, ...restOptions } = {
      ...(args[0] || {}),
      ...(args[1] || {}),
    } as AddEventListenerOptions & UseGlobalListenerConfig;

    options = restOptions;

    config = {
      startImmediately,
      customKey,
      target,
    };
  }

  return { options, config };
}
