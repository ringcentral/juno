import { RcClasses, UnitMap } from '../../../../foundation';
import { RcDialogSize } from '../../Dialog';
import { RcDialogActionsProps } from '../DialogActions';

export const RcDialogActionsClasses = RcClasses<RcDialogActionsProps>(
  [],
  'RcDialogActions',
);

export const RcDialogActionsSizes: UnitMap<RcDialogSize, number[]> = {
  xsmall: [2, 3.5, 4],
  small: [],
  medium: [],
  large: [],
  fullScreen: [],
};
