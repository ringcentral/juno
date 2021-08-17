import debounce from 'lodash/debounce';
import { useCallback, useEffect } from 'react';

import { useEventCallback } from '../useEventCallback';

/**
 * provide a debounce method for debounce method
 * @param fn method for debounce
 * @param debounceTime debounce timeout value, default is  `200`ms
 */
export const useDebounce = <F extends (...args: any[]) => any>(
  fn: F,
  debounceTime: number = 200,
) => {
  const memoFn = useEventCallback(fn);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceFn = useCallback(debounce(memoFn, debounceTime), []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => debounceFn.cancel(), []);

  return debounceFn;
};
