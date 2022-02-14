import { useEffect, useRef } from 'react';

/**
 * cancelable sleep method.
 *
 * - sleep: a promise sleep
 * - cancel: cancel that sleep event
 * - getSleeping: get current sleeping state
 */
export const useSleep = () => {
  const timeoutIdRef = useRef<number>();
  const rejectRef = useRef<(reason?: any) => void>();
  const sleepingRef = useRef(false);

  const clearCurrTimeout = () => {
    const id = timeoutIdRef.current;
    sleepingRef.current = false;

    if (id !== undefined) window.clearTimeout(id);
  };

  const sleep = (time: number) =>
    new Promise<void>((resolve, reject) => {
      clearCurrTimeout();

      sleepingRef.current = true;
      rejectRef.current = reject;

      timeoutIdRef.current = window.setTimeout(() => {
        sleepingRef.current = false;
        resolve();
      }, time);
    });

  const cancel = () => {
    clearCurrTimeout();
    rejectRef.current?.();
  };

  useEffect(() => {
    return () => {
      clearCurrTimeout();
    };
  }, []);

  return {
    /**
     * sleep method, that will be cancelable with `cancel`,
     * and when trigger many time that will always clear previous sleep
     */
    sleep,
    /**
     * cancel current sleep timer
     */
    cancel,
    /**
     * return is current is sleeping
     */
    getSleeping: () => sleepingRef.current,
  };
};
