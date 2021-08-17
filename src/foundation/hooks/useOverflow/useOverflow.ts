import { useRef } from 'react';

import { PerformanceOptions, useResizeObserver } from '../useResizeObserver';

/**
 * trigger when overflow state change
 */
export const useOverflow = (
  /** target element ref */
  innerRef: React.RefObject<HTMLElement>,
  /** trigger when `ResizeObserver` emit */
  cb: (
    state: boolean,
    value: {
      scrollWidth: number;
      clientWidth: number;
      scrollHeight: number;
      clientHeight: number;
    },
  ) => void,
  /**
   * performance options, `mode`, `time`, `ignoreFireWhenObserve`
   *
   * @default { mode: 'throttle' time: 200 }
   */
  performance: PerformanceOptions = {
    mode: 'throttle',
    time: 200,
  },
) => {
  // * not have default value for that can trigger change first time.
  const showRef = useRef<boolean>();

  return useResizeObserver(
    innerRef,
    () => {
      if (innerRef.current) {
        const {
          scrollWidth,
          clientWidth,
          scrollHeight,
          clientHeight,
        } = innerRef.current;

        const show = scrollWidth > clientWidth || scrollHeight > clientHeight;

        if (showRef.current !== show) {
          showRef.current = show;

          cb(show, {
            scrollWidth,
            clientWidth,
            scrollHeight,
            clientHeight,
          });
        }
      }
    },
    performance,
  );
};
