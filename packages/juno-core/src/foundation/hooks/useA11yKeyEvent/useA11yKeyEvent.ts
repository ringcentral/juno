import { useEventCallback } from '../useEventCallback';

export type useA11yKeyEventOptions = {
  /**
   * that event should only trigger from target element, ignore all `propagation` events
   */
  onlyOnFocus?: boolean;
  /**
   * is that need preventDefault when trigger `callBack`,
   * @default true
   */
  preventDefault?: boolean;
  /**
   * check point for `event.key`
   *
   * @default ['Enter', ' ']
   */
  checkKeys?: string[];
};

const defaultCheckKeys = ['Enter', ' '];
/**
 * bind event with a11y keyboard, `space`, `enter`, only trigger when key includes in `checkKeys`
 *
 * that will auto preventDefault by default, if you don't want that, set `false` with `preventDefault`
 */
export const useA11yKeyEvent = (
  fn?: Function,
  {
    onlyOnFocus,
    preventDefault = true,
    checkKeys = defaultCheckKeys,
  }: useA11yKeyEventOptions = {},
) => {
  return useEventCallback((event: React.KeyboardEvent<HTMLElement>) => {
    if (!fn || (onlyOnFocus && event.target !== event.currentTarget)) return;

    if (checkKeys.includes(event.key)) {
      if (preventDefault) event.preventDefault();

      fn(event);
    }
  });
};
