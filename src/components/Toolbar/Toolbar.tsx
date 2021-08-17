import MuiToolbar, {
  ToolbarProps as MuiToolbarProps,
} from '@material-ui/core/Toolbar';

import styled from '../../foundation/styled-components';
import React, { forwardRef } from 'react';
import { useThemeProps } from '../../foundation';

type RcToolbarProps = MuiToolbarProps;

const _RcToolbar = forwardRef<any, RcToolbarProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcToolbar' });

  return <MuiToolbar ref={ref} {...props} />;
});

/** @release */
const RcToolbar = styled(_RcToolbar)``;

RcToolbar.displayName = 'RcToolbar';

export { RcToolbar, RcToolbarProps };
