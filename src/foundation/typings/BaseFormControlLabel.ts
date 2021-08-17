import { FormControlLabelProps as MuiFormControlLabelProps } from '@material-ui/core/FormControlLabel';

import { RcBaseLabelPlacement } from './BaseLabelPlacement';
import { RcBaseProps } from './BaseProps';

export type RcBaseFormControlLabelProps<
  T extends RcBaseLabelPlacement = RcBaseLabelPlacement
> = {
  labelPlacement?: T;
} & RcBaseProps<
  MuiFormControlLabelProps,
  'label' | 'labelPlacement' | 'control'
>;
