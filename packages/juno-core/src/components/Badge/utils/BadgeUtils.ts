import { RcClasses } from '../../../foundation';
import { RcBadgeProps } from '../Badge';

export const RcBadgeClasses = RcClasses<RcBadgeProps>(
  ['badge', 'invisible'],
  'RcBadge',
);

export const roundBadgeMarginKey = '--badge-round-margin';

const sqrt2 = Math.sqrt(2);
const powBy = sqrt2 - 1; // 0.292893218813452

/**
 * a circle inside square, that diagonal of a square to circle distance to be the round offset.
 * @param x that circle r
 * @returns the distance of that offset
 */
export const getRoundOffset = (x: number) => {
  return (x * powBy) / sqrt2;
};
