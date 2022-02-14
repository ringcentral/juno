import { useRef } from 'react';

const defaultEverTargetValue = (value: any) => !!value;

/**
 * that value ever to be `you want value`
 * Return true when the value ever to be `you want value` once.
 *
 * @example
 * ```ts
 * // once that isOpen is true, that result will always be `true`
 * const isEverOpen = useEver(isOpen);
 *
 * const isEverToBe2 = useEver(count, (val) => val === 2);
 * ```
 */
export const useEver = <T>(
  /** to be checked value */
  value: T,
  /**
   * value ever to be callback, default when value to be exited.
   *
   * @default (value) => !!value
   */
  targetValue: (value: T) => boolean = defaultEverTargetValue,
) => {
  const result = useRef(false);

  if (!result.current) {
    result.current = targetValue(value);
  }

  return result.current;
};
