import MuiFormHelperText from '@material-ui/core/FormHelperText';
import React, { forwardRef } from 'react';

import { styled } from '../../../../foundation';
import { RcFormHelperTextProps } from '../FormHelperText';

const _StyledFormHelperText = forwardRef<any, RcFormHelperTextProps>(
  ({ ...rest }, ref) => {
    return <MuiFormHelperText {...rest} ref={ref} />;
  },
);

export const StyledFormHelperText = styled(_StyledFormHelperText)``;
