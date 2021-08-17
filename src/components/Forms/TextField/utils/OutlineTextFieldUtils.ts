import { RcClasses, typography, UnitMap } from '../../../../foundation';
import { RcTextFieldProps, RcOutlineTextSize } from '../TextField';

export const RcOutlineTextFieldInputClasses = RcClasses<
  RcTextFieldProps['InputProps']
>(['input', 'root', 'focused', 'disabled', 'error'], 'RcOutlineTextFieldInput');

export const RcOutlineTextFieldSpaces: UnitMap<
  RcOutlineTextSize,
  {
    outside: number;
    insideLeft?: number;
    inside: number;
  }
> = {
  small: {
    outside: 3,
    inside: 2,
  },
  medium: {
    outside: 4,
    inside: 3,
    insideLeft: 4,
  },
  large: {
    outside: 4,
    inside: 3,
    insideLeft: 4,
  },
};

export const RcOutlineTextFieldLabelMargins: UnitMap<RcOutlineTextSize> = {
  small: 5,
  medium: 5.5,
  large: 6,
};

export const RcOutlineTextFieldHeights: UnitMap<RcOutlineTextSize> = {
  small: 32,
  medium: 40,
  large: 48,
};

export const RcOutlineTextFieldFontStyles: UnitMap<RcOutlineTextSize> = {
  small: typography('body1'),
  medium: typography('subheading1'),
  large: typography('subheading1'),
};

export const RcOutlineTextFieldIconSizes: UnitMap<
  RcOutlineTextSize,
  {
    width: any;
    height: any;
  }
> = {
  small: { width: 16, height: 16 },
  medium: { width: 20, height: 20 },
  large: { width: 20, height: 20 },
};
