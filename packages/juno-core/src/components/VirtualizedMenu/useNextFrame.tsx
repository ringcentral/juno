import { useRef, useLayoutEffect } from 'react';

export const useNextFrame = () => {
  const rafIdRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
    }
  }, []);

  return (task: Function) => {
    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
    }

    rafIdRef.current = requestAnimationFrame(() => {
      rafIdRef.current = requestAnimationFrame(() => {
        rafIdRef.current = null;
        task();
      });
    });
  };
};
