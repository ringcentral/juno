import React, { FunctionComponent } from 'react';

import MuiPortal, { PortalProps } from '@material-ui/core/Portal';

import { useThemeProps } from '../../foundation';

type RcPortalProps = PortalProps;

const _RcPortal: FunctionComponent<RcPortalProps> = (inProps) => {
  const props = useThemeProps({ props: inProps, name: 'RcPortal' });

  return <MuiPortal {...props} />;
};

const RcPortal = _RcPortal;

export { RcPortal };
export type { RcPortalProps };
