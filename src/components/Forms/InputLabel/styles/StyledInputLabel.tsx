import React, { forwardRef } from 'react';

import MuiInputLabel from '@material-ui/core/InputLabel';

import { styled } from '../../../../foundation';
import { RcInputLabelProps } from '../InputLabel';

const _StyledInputLabel = forwardRef<any, RcInputLabelProps>(
  ({ ...rest }, ref) => {
    return <MuiInputLabel {...rest} ref={ref} />;
  },
);

export const StyledInputLabel = styled(_StyledInputLabel)``;
