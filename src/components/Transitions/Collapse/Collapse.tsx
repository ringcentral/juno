import React, { forwardRef } from 'react';

import MuiCollapse, {
  CollapseProps as MuiCollapseProps,
} from '@material-ui/core/Collapse';

import { useThemeProps } from '../../../foundation';

type RcCollapseProps = MuiCollapseProps;

const _RcCollapse = forwardRef<any, RcCollapseProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcCollapse' });

  return <MuiCollapse ref={ref} {...props} />;
});

const RcCollapse = _RcCollapse;

export { RcCollapse };
export type { RcCollapseProps };
