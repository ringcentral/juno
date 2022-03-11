import React, { useRef } from 'react';

import { px, useResizeObserver } from '../../../foundation';
import { getRoundOffset, roundBadgeMarginKey } from './BadgeUtils';

/**
 * modify round badge offset to correct position,
 * only trigger when host element height change
 * @param badgeRef badge
 */
export const useRoundBadgeOffset = (badgeRef: React.RefObject<HTMLElement>) => {
  const currHeightRef = useRef(0);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useResizeObserver(
    badgeRef,
    ([badgeObsEntry]) => {
      const height = badgeObsEntry.contentRect.height;

      const element = badgeObsEntry.target as HTMLElement;

      if (currHeightRef.current === height) return;

      currHeightRef.current = height;

      const offset = getRoundOffset(height / 2);

      element.style.setProperty(roundBadgeMarginKey, px(offset));
    },
    { mode: 'throttle' },
  );
};
