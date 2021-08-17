import { RcClasses, spacing, UnitMap } from '../../../../foundation';
import { RcMenuItemProps, RcMenuItemSize } from '../MenuItem';

export const RcMenuItemClasses = RcClasses<RcMenuItemProps>(
  ['checked', 'unchecked', 'gutters', 'dense'],
  'RcMenuItem',
);

export const RcMenuItemTopAndBottomPaddings: UnitMap<RcMenuItemSize> = {
  medium: spacing(1),
  large: spacing(2),
};

export const RcMenuItemLeftAndRightPaddings: UnitMap<RcMenuItemSize> = {
  medium: spacing(4),
  large: spacing(5),
};
