import { RcClasses, spacing, UnitMap } from '../../../../foundation';
import { RcMenuItemProps, RcMenuItemSize } from '../MenuItem';

export const RcMenuItemPrefix = 'RcMenuItem';
export const RcMenuItemRipplePrefix = `${RcMenuItemPrefix}TouchRipple`;
export const RcMenuItemClasses = RcClasses<RcMenuItemProps>(
  ['checked', 'unchecked', 'gutters', 'dense', 'selected'],
  RcMenuItemPrefix,
);

export const RcMenuItemTopAndBottomPaddings: UnitMap<RcMenuItemSize> = {
  medium: spacing(1),
  large: spacing(2),
};

export const RcMenuItemLeftAndRightPaddings: UnitMap<RcMenuItemSize> = {
  medium: spacing(4),
  large: spacing(5),
};

export const RcMenuItemRippleClasses = RcClasses<
  RcMenuItemProps['TouchRippleProps']
>(['rippleVisible'], RcMenuItemRipplePrefix);
