import MuiTableBody from '@material-ui/core/TableBody';
import React, { ComponentProps, forwardRef } from 'react';
import { RcTableHeadProps } from '..';
import { RcBaseProps, styled, useThemeProps } from '../../../foundation';

type RcTableBodyProps = {} & RcBaseProps<ComponentProps<typeof MuiTableBody>>;

const _RcTableBody = forwardRef<any, RcTableHeadProps>((props, ref) => {
  const { children, ...rest } = useThemeProps({ props, name: 'RcTableHead' });

  return (
    <MuiTableBody {...rest} ref={ref}>
      {children}
    </MuiTableBody>
  );
});

const RcTableBody = styled(_RcTableBody)``;

RcTableBody.displayName = 'RcTableBody';

export { RcTableBody, RcTableBodyProps };
