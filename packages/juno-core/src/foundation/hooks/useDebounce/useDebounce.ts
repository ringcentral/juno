import { useCallback, useEffect } from 'react';

import debounce from 'lodash/debounce';
import { DebounceSettings } from 'lodash';

import { useEventCallback } from '../useEventCallback';

/**
 * provide a debounce method for debounce method
 * @param fn method for debounce
 * @param debounceTime debounce timeout value, default is  `200`ms
 * @param debounceSettings debounce setting object, more detail see `lodash`
 */
export const useDebounce = <F extends (...args: any[]) => any>(
  fn: F,
  debounceTime: number = 200,
  debounceSettings?: DebounceSettings,
) => {
  const memoFn = useEventCallback(fn);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceFn = useCallback(
    debounce(memoFn, debounceTime, debounceSettings),
    [],
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => debounceFn.cancel(), []);

  return debounceFn;
};
