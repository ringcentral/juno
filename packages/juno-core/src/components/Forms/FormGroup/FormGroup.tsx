import React, { forwardRef } from 'react';

import MuiFormGroup, {
  FormGroupProps as MuiFormGroupProps,
} from '@material-ui/core/FormGroup';

import { useThemeProps } from '../../../foundation';
import styled from '../../../foundation/styled-components';

type RcFormGroupProps = MuiFormGroupProps;

const _RcFormGroup = forwardRef<any, RcFormGroupProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcFormGroup' });

  return <MuiFormGroup ref={ref} {...props} />;
});

/** @release */
const RcFormGroup = styled(_RcFormGroup)``;

RcFormGroup.displayName = 'RcFormGroup';

export { RcFormGroup };
export type { RcFormGroupProps };
