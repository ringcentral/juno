import { useEffect, useRef } from 'react';

/**
 * get previous render value
 * @param cb that get method of target value
 * @param isDefault if set `true`, the first time will get value from `cb`
 * @returns previous value get from `cb`
 */
export function usePrevious<T, K extends boolean>(cb: () => T, isDefault?: K) {
  const ref = useRef(isDefault ? cb() : undefined);

  useEffect(() => {
    ref.current = cb();
  });

  return ref.current as T | (K extends true ? never : undefined);
}
