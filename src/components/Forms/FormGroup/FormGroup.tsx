import MuiFormGroup, {
  FormGroupProps as MuiFormGroupProps,
} from '@material-ui/core/FormGroup';

import styled from '../../../foundation/styled-components';
import React, { forwardRef } from 'react';
import { useThemeProps } from '../../../foundation';

type RcFormGroupProps = MuiFormGroupProps;

const _RcFormGroup = forwardRef<any, RcFormGroupProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcFormGroup' });

  return <MuiFormGroup ref={ref} {...props} />;
});

/** @release */
const RcFormGroup = styled(_RcFormGroup)``;

RcFormGroup.displayName = 'RcFormGroup';

export { RcFormGroup, RcFormGroupProps };
