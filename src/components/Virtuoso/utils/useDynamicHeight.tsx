import { useRef } from 'react';

import { usePrevious } from '../../../foundation';

type UseDynamicHeightParams = {
  /** total items count */
  itemCount: number;
  /** max-height of container */
  maxContainerHeight?: number | '100%';
  /** trigger when container height need change */
  onContainerHeightChange?: (number: number) => void;
};

/**
 * auto calculate container height
 */
export const useDynamicHeight = ({
  itemCount,
  maxContainerHeight,
  onContainerHeightChange,
}: UseDynamicHeightParams) => {
  const prevItemCount = usePrevious(() => itemCount);

  const fullHeight = maxContainerHeight === '100%';

  const maxContainerSize = fullHeight ? -1 : (maxContainerHeight as number);
  const containerHeighRef = useRef(maxContainerSize);

  if (!fullHeight) {
    // * when prev item count is zero, and current is not zero, set hight for vl to trigger totalListHeightChanged to re-change height
    if (prevItemCount === 0 && itemCount !== 0) {
      containerHeighRef.current = maxContainerSize;
    } else if (itemCount === 0) {
      // * when item count is zero always height to zero, when zero init
      containerHeighRef.current = 0;
    }
  }

  return {
    containerHeighRef,
    totalListHeightChanged: (height: number) => {
      if (!fullHeight) {
        const containerHeigh = containerHeighRef.current;

        let changeHeight = -1;

        if (height < containerHeigh) {
          changeHeight = height;
        } else if (containerHeigh !== maxContainerSize) {
          changeHeight = Math.min(height, maxContainerSize);
        }

        if (changeHeight !== -1) {
          containerHeighRef.current = changeHeight;
          onContainerHeightChange?.(changeHeight);
        }
      }
    },
    style: {
      height: fullHeight ? '100%' : containerHeighRef.current,
    },
  };
};
