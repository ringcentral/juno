import { ComponentProps, FunctionComponent } from 'react';

import { StandardTextFieldProps as MuiStandardTextFieldProps } from '@material-ui/core/TextField';

import { RcClasses, UnitMap } from '../../../../foundation';
import { RcTextField } from '../../TextField';
import { RcSelectProps, RcSelectSize, RcSelectVariant } from '../Select';

export const RcSelectClasses = RcClasses<RcSelectProps>(['icon'], 'RcSelect');

export const RcSelectInputClasses = RcClasses<RcSelectProps['InputProps']>(
  ['root', 'focused', 'error', 'disabled'],
  'RcSelectInput',
);

export const RcSelectInputWhenPlaceholderClasses = RcClasses<
  RcSelectProps['InputProps']
>(['input'], 'RcSelectInputWhenPlaceholder');

export const RcLineSelectInputClasses = RcClasses<RcSelectProps['InputProps']>(
  ['input'],
  'RcLineSelectInput',
);

export const RcBoxSelectInputClasses = RcClasses<RcSelectProps['InputProps']>(
  ['root', 'focused', 'input', 'error', 'disabled'],
  'RcBoxSelectInput',
);

export const RcSelectInputClassesMap: UnitMap<RcSelectVariant> = {
  box: RcBoxSelectInputClasses,
  line: RcLineSelectInputClasses,
};

export const RcBoxSelectInputHeights: UnitMap<RcSelectSize> = {
  medium: 32,
  large: 40,
};

type RcSelectTextFieldProps = ComponentProps<typeof RcTextField> &
  Pick<MuiStandardTextFieldProps, 'select' | 'SelectProps'>;

/** inner type, just for type change with TextField */
export const RcSelectTextField: FunctionComponent<RcSelectTextFieldProps> =
  RcTextField as any;
