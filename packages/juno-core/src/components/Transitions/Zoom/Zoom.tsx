import React, { forwardRef } from 'react';

import MuiZoom, { ZoomProps as MuiZoomProps } from '@material-ui/core/Zoom';

import { useThemeProps } from '../../../foundation';

type RcZoomProps = MuiZoomProps;

const _RcZoom = forwardRef<any, RcZoomProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcZoom' });

  return <MuiZoom ref={ref} {...props} />;
});

const RcZoom = _RcZoom;

export { RcZoom };
export type { RcZoomProps };
