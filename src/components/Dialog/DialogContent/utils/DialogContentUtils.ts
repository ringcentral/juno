import { RcClasses, UnitMap } from '../../../../foundation';
import { RcDialogSize } from '../../Dialog';
import { RcDialogContentProps } from '../DialogContent';

export const RcDialogContentClasses = RcClasses<RcDialogContentProps>(
  ['dividers'],
  'RcDialogContent',
);

export const RcDialogContentSpacings: UnitMap<RcDialogSize, number[]> = {
  xsmall: [0, 3.5, 3],
  small: [],
  medium: [],
  large: [],
  fullScreen: [],
};
