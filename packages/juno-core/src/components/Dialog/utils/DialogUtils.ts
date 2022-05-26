import { RcClasses, UnitMap } from '../../../foundation';
import { RcDialogProps, RcDialogSize } from '../Dialog';

export const RcDialogClasses = RcClasses<RcDialogProps>(
  [
    'paper',
    'root',
    'paperFullScreen',
    'paperWidthXs',
    'paperScrollBody',
    'paperFullScreen',
  ],
  'RcDialog',
);

export const RcDialogMaxWidths: UnitMap<RcDialogSize> = {
  xsmall: '272px',
  small: null,
  medium: null,
  large: null,
  fullScreen: null,
};
