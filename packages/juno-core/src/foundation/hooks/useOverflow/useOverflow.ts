import { useRef } from 'react';

import { getRefElement, RefOrElementOrCallback } from '../../utils';
import { PerformanceOptions, useResizeObserver } from '../useResizeObserver';

/**
 * trigger when overflow state change
 */
export const useOverflow = (
  /** target element ref */
  target: RefOrElementOrCallback,
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
    target,
    () => {
      const element = getRefElement(target);

      if (!element) return;

      const { scrollWidth, clientWidth, scrollHeight, clientHeight } = element;

      const show = scrollWidth > clientWidth || scrollHeight > clientHeight;

      if (showRef.current === show) return;

      // only emit when state change
      showRef.current = show;
      cb(show, {
        scrollWidth,
        clientWidth,
        scrollHeight,
        clientHeight,
      });
    },
    performance,
  );
};
