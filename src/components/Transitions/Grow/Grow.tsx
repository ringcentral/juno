import MuiGrow, { GrowProps as MuiGrowProps } from '@material-ui/core/Grow';
import React, { forwardRef } from 'react';
import { useThemeProps } from '../../../foundation';

type RcGrowProps = MuiGrowProps;

const _RcGrow = forwardRef<any, RcGrowProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcGrow' });

  return <MuiGrow ref={ref} {...props} />;
});

const RcGrow = _RcGrow;

export { RcGrow, RcGrowProps };
