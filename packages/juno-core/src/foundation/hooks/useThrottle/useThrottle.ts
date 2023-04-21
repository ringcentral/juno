import { useCallback, useEffect } from 'react';

import throttle from 'lodash/throttle';
import { ThrottleSettings } from 'lodash';

import { useEventCallback } from '../useEventCallback';

/**
 * provide a throttle method for throttle method
 * @param fn method for throttle
 * @param throttleTime throttle timeout value, default is  `200`ms
 * @param throttleSettings throttle setting object, more detail see `lodash`
 */
export const useThrottle = <F extends (...args: any[]) => any>(
  fn: F,
  throttleTime: number = 200,
  throttleSettings?: ThrottleSettings,
) => {
  const memoFn = useEventCallback(fn);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const throttleFn = useCallback(
    throttle(memoFn, throttleTime, throttleSettings),
    [],
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => throttleFn.cancel(), []);

  return throttleFn;
};
