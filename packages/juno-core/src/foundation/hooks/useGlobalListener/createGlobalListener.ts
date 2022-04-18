import { SyntheticEvent } from 'react';

import { getRefElement, RefOrElementOrCallback } from '../../utils';

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

export type CreateGlobalListenerConfig = {
  /**
   * custom key for determining different event group, default is same as `key`
   */
  customKey?: string;
  /**
   * custom binding event target, default is `window`
   */
  target?: RefOrElementOrCallback | EventTarget;
};
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

export const createGlobalListener = <T extends SyntheticEvent>(
  key: string,
  listener: (event?: T) => void,
  options?: AddEventListenerOptions | boolean,
  {
    customKey = key,
    target: targetProp = window,
  }: CreateGlobalListenerConfig = {},
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

      target?.addEventListener(key, exec, options);
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

      target?.removeEventListener(key, _savedEvent.exec, options);
      globalListenerEventMap.delete(customKey);
    }
  };

  return {
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
