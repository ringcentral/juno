import { RcClasses, UnitMap } from '../../../../foundation';
import { RcDialogContentProps } from '../DialogContent';

export const RcDialogContentClasses = RcClasses<RcDialogContentProps>(
  ['dividers'],
  'RcDialogContent',
);

export const getRcDialogContentSpacings = (isDividers?: boolean) => {
  const spacings: UnitMap<
    NonNullable<RcDialogContentProps['size']>,
    number[]
  > = {
    small: isDividers ? [3, 4] : [0, 4, 1],
    medium: isDividers ? [3, 6] : [0, 6, 3],
  };

  return spacings;
};
