import {
  RcClasses,
  RcPaletteProp,
  spacing,
  UnitMap,
} from '../../../../foundation';
import { RcListItemColor, RcListItemProps, RcListItemSize } from '../ListItem';

const RcListItemPrefix = 'RcListItem';

export const RcListItemMultilineClassName = `${RcListItemPrefix}-multiline`;

export const RcListItemClasses = RcClasses<RcListItemProps>(
  ['focusVisible', 'gutters', 'dense', 'selected'],
  RcListItemPrefix,
);

export const RcListItemTopAndBottomPaddings: UnitMap<RcListItemSize> = {
  small: spacing(1),
  medium: spacing(1.25),
};

export const colorMap: UnitMap<RcListItemColor, RcPaletteProp> = {
  primary: 'interactive.f01',
  secondary: 'highlight.f02',
  black: 'action.grayLight',
};

export const RcListItemRippleClasses = RcClasses<
  RcListItemProps['TouchRippleProps']
>(['rippleVisible'], 'RcListItemTouchRipple');
