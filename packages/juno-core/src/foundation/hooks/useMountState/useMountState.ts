import { useEffect, useRef } from 'react';

/**
 * get that component mounted state `ref`
 *
 * @example
 *
 * ```ts
    const isMountedRef = useMountState();

    if (isMountedRef.current) {
      console.log('component mounted');
    }
 *
 * ```
 */
export const useMountState = () => {
  const isMountedRef = useRef(false);

  useEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return isMountedRef;
};
