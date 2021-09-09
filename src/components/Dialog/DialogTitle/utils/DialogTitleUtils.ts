import { RcClasses, UnitMap } from '../../../../foundation';
import { RcTypographyVariant } from '../../../Typography';
import { RcDialogTitleProps } from '../DialogTitle';

export const RcDialogTitleClasses = RcClasses<RcDialogTitleProps>(
  [],
  'RcDialogTitle',
);

export const RcDialogTitleSpacings: UnitMap<
  NonNullable<RcDialogTitleProps['size']>,
  number[]
> = {
  small: [4],
  medium: [4, 6],
};

export const RcDialogTitleTypographyVariant: UnitMap<
  NonNullable<RcDialogTitleProps['size']>,
  RcTypographyVariant
> = {
  small: 'subheading2',
  medium: 'title2',
};
