import {
  palette2,
  PaletteReturnType,
  RcClasses,
  RcTypographyKeys,
  UnitMap,
} from '../../../../foundation';
import { RcButtonColor, RcButtonProps, RcButtonSize } from '../Button';

export const RcButtonClasses = RcClasses<RcButtonProps>(
  ['disabled', 'contained', 'text', 'outlined', 'endIcon', 'startIcon'],
  'RcButton',
);

export const RcButtonColors: UnitMap<RcButtonColor, PaletteReturnType> = {
  primary: palette2('interactive', 'b02'),
  secondary: palette2('highlight', 'b03'),
  negative: palette2('danger', 'b04'),
  positive: palette2('success', 'b04'),
  action: palette2('neutral', 'elevation'),
  neutral: palette2('neutral', 'b04'),
};

export const RcButtonTextColors: UnitMap<RcButtonColor, PaletteReturnType> = {
  primary: palette2('interactive', 'f01'),
  secondary: palette2('highlight', 'f02'),
  negative: palette2('danger', 'f02'),
  positive: palette2('success', 'f02'),
  action: palette2('neutral', 'f01'),
  neutral: palette2('neutral', 'f04'),
};

export const RcButtonTypographies: UnitMap<RcButtonSize, RcTypographyKeys> = {
  xsmall: 'caption1',
  small: 'caption2',
  medium: 'body2',
  large: 'body2',
  xlarge: 'subheading2',
};

export const RcButtonHeights: UnitMap<RcButtonSize> = {
  xsmall: 24,
  small: 28,
  medium: 32,
  large: 36,
  xlarge: 48,
};

export const RcButtonMinWidths: UnitMap<RcButtonSize> = {
  xsmall: 0,
  small: 0,
  medium: 88,
  large: 96,
  xlarge: 140,
};

export const RcButtonPadding: UnitMap<RcButtonSize, number> = {
  xsmall: 2,
  small: 4,
  medium: 3,
  large: 4,
  xlarge: 5,
};

export const RcButtonIconSpace: UnitMap<RcButtonSize, number> = {
  xsmall: 1,
  small: 1.5,
  medium: 2,
  large: 2,
  xlarge: 3,
};
