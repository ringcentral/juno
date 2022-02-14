import { useCallback, useEffect } from 'react';

import throttle from 'lodash/throttle';

import { useEventCallback } from '../useEventCallback';

/**
 * provide a throttle method for throttle method
 * @param fn method for throttle
 * @param throttleTime throttle timeout value, default is  `200`ms
 */
export const useThrottle = <F extends (...args: any[]) => any>(
  fn: F,
  debounceTime: number = 200,
) => {
  const memoFn = useEventCallback(fn);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const throttleFn = useCallback(throttle(memoFn, debounceTime), []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => throttleFn.cancel(), []);

  return throttleFn;
};
