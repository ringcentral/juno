import { RcClasses, UnitMap } from '../../../../foundation';
import { RcDialogActionsProps } from '../DialogActions';

export const RcDialogActionsClasses = RcClasses<RcDialogActionsProps>(
  [],
  'RcDialogActions',
);

export const RcDialogActionsSizes: UnitMap<
  NonNullable<RcDialogActionsProps['size']>,
  number[]
> = {
  small: [4],
  medium: [3, 6, 6],
};
