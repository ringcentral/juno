import { useState } from 'react';

import { useEventCallback } from '../useEventCallback';

/**
 * a method for trigger force update
 * @returns force update method
 */
export function useForceUpdate(): () => void {
  const [, dispatch] = useState<{}>(Object.create(null));

  const memoizedDispatch = useEventCallback((): void => {
    dispatch(Object.create(null));
  });

  return memoizedDispatch;
}
