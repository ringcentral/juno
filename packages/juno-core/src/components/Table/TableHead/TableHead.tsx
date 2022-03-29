import MuiTableHead from '@material-ui/core/TableHead';
import React, { ComponentProps, forwardRef } from 'react';
import { RcBaseProps, styled, useThemeProps } from '../../../foundation';

type RcTableHeadProps = {} & RcBaseProps<ComponentProps<typeof MuiTableHead>>;

const _RcTableHead = forwardRef<any, RcTableHeadProps>((props, ref) => {
  const { children, ...rest } = useThemeProps({ props, name: 'RcTableHead' });

  return (
    <MuiTableHead {...rest} ref={ref}>
      {children}
    </MuiTableHead>
  );
});

const RcTableHead = styled(_RcTableHead)``;

RcTableHead.displayName = 'RcTableHead';

export { RcTableHead, RcTableHeadProps };
