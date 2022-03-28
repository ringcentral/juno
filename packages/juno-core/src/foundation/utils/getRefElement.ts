import { RefObject } from 'react';

import { isRef } from './isRef';

export type RefOrElementOrCallback<T extends HTMLElement = HTMLElement> =
  | RefObject<T>
  | (() => T)
  | T;

/**
 * get element from React ref or callback
 */
export const getRefElement = <T extends HTMLElement = HTMLElement>(
  ref: RefOrElementOrCallback<T>,
): T | null => {
  if (typeof ref === 'function') {
    return ref();
  }

  if (isRef(ref)) {
    return ref.current;
  }

  return ref;
};
