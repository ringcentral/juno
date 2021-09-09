import { RcClasses, UnitMap } from '../../../../foundation';
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
