import { DependencyList, useLayoutEffect, useRef } from 'react';

import { useEventCallback } from '../useEventCallback';

/**
 * only trigger when re-render, not trigger on component first render
 */
export const useOnReRender = (cb: () => any, deps?: DependencyList) => {
  const count = useRef(0);
  const method = useEventCallback(cb);

  useLayoutEffect(() => {
    if (count.current === 0) {
      count.current = 1;
      return () => {};
    }

    const destroy = method();

    return destroy;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
