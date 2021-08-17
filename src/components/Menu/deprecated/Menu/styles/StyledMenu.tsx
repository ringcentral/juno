import MuiMenu from '@material-ui/core/Menu';
import React, { forwardRef } from 'react';

import { spacing, styled } from '../../../../../foundation';
import { RcDivider } from '../../../../Divider';
import { RcMenuProps } from '../Menu';

const _StyledMenu = forwardRef<any, RcMenuProps>(({ ...rest }, ref) => {
  return <MuiMenu {...rest} ref={ref} />;
});

const StyledMenu = styled(_StyledMenu)`
  ${RcDivider} {
    margin: ${spacing(2, 0)};
  }
`;

export { StyledMenu };
