import { UnitMap } from '../../../foundation';
import { RcTypographyVariant, RcTypographyWeight } from '../Typography';

export const MuiDefaultColor = [
  'initial',
  'inherit',
  'primary',
  'secondary',
  'textPrimary',
  'textSecondary',
  'error',
];

export const RcCustomTypographyVariant: UnitMap<
  RcTypographyVariant,
  React.ElementType
> = {
  display4: 'h1',
  display3: 'h2',
  display2: 'h3',
  display1: 'h4',
  headline1: 'h5',
  headline2: 'h5',
  title2: 'h6',
  title1: 'h6',
  subheading2: 'h6',
  subheading1: 'h6',
  body2: 'p',
  body1: 'p',
  caption2: 'p',
  caption1: 'p',
  inherit: 'p',
};

export const RcCustomTypographyWeight: UnitMap<RcTypographyWeight, number> = {
  normal: 400,
  bold: 700,
};
