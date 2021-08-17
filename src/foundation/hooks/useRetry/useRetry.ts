/* eslint-disable no-await-in-loop */
import { useRef } from 'react';

import { useSleep } from '../useSleep';

export type UseRetryOptions = {
  /** times count that retry when `cb` return `false` */
  retryTimes: number;
  /** retry interval time */
  intervalTime: number;
  /** trigger when retry start */
  onStart?: () => void;
  /** trigger when retry be cancel */
  onSuccess?: (
    /** retry times */
    times?: number,
  ) => void;
  /** trigger when retry complete */
  onComplete?: (
    /** retry times */
    times?: number,
  ) => void;
  /** trigger when retry be cancel */
  onCancel?: () => void;
};

/**
 * retry times when exec callback fail
 *
 * * `retry`: that will auto add `times` end of your call back
 * * `cancel`: cancel that retry event, that only cancel inner interval promise, **if you need cancel your `cb` promise, you should handle by yourself.**
 */
export const useRetry = <
  T extends (...args: any[]) => boolean | Promise<boolean>
>(
  /**
   * exec callback, when you want to end that retry, return `true` with your callback
   */
  cb: T,
  /** retry options */
  options?: UseRetryOptions,
) => {
  const { sleep, cancel: cancelSleep } = useSleep();
  const isCancelRef = useRef(true);

  const complete = () => {
    isCancelRef.current = true;
    options?.onComplete?.();
  };

  const cancel = () => {
    if (!isCancelRef.current) {
      // * when outside cancel
      options?.onCancel?.();
      complete?.();
    }

    cancelSleep();
  };

  const retry = async (...args: Parameters<T>) => {
    cancel();
    isCancelRef.current = false;

    options?.onStart?.();

    // * when exec success, just return directly.
    if (await cb(...args)) {
      if (!isCancelRef.current) {
        options?.onSuccess?.();
        complete();
      }
      return;
    }

    if (!options) return;

    const { retryTimes, intervalTime, onSuccess } = options;

    for (let i = 0; i < retryTimes; i++) {
      if (isCancelRef.current) {
        return;
      }

      try {
        await sleep(intervalTime);
      } catch (error) {
        return;
      }

      if (await cb(...args, i)) {
        if (!isCancelRef.current) {
          onSuccess?.();
          complete();
        }
        return;
      }
    }

    complete();
  };

  return {
    /**
     * retry method, that will be cancelable with `cancel`,
     * and when trigger many time that will always clear previous retry
     */
    retry,
    /**
     * cancel current retry
     */
    cancel,
  };
};
