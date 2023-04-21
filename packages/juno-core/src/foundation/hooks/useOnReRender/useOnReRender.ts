import { DependencyList, useLayoutEffect, useRef, useEffect } from 'react';

import { useEventCallback } from '../useEventCallback';

/**
 * only trigger when re-render, not trigger on component first render
 */
export const useOnReRender = (
  cb: () => any,
  deps?: DependencyList,
  isLayout = true,
) => {
  const count = useRef(0);
  const method = useEventCallback(cb);
  const isLayoutRef = useRef(isLayout);

  const useTargetEffect = isLayoutRef.current ? useLayoutEffect : useEffect;

  useTargetEffect(() => {
    if (count.current === 0) {
      count.current = 1;
      return () => {};
    }

    const destroy = method();

    return destroy;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
