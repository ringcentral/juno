import { MutableRefObject, useRef } from 'react';

/**
 * provide a ref for only calculate `cb` once
 * prevent `useRef(getValue())`, that `getValue` calculate every re-render
 *
 * @param cb that get method of get this ref init value, only calculate once
 * @returns same as `useRef` result
 *
 */
export function useResultRef<T>(cb: () => T) {
  const renderRef = useRef(0);
  const ref = useRef<T>();

  if (renderRef.current === 0) {
    ref.current = cb();
    renderRef.current = 1;
  }

  return ref as MutableRefObject<T>;
}
