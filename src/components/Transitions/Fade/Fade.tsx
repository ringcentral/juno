import MuiFade, { FadeProps as MuiFadeProps } from '@material-ui/core/Fade';
import React, { forwardRef } from 'react';
import { useThemeProps } from '../../../foundation';

type RcFadeProps = MuiFadeProps;

const _RcFade = forwardRef<any, RcFadeProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcFade' });

  return <MuiFade ref={ref} {...props} />;
});

const RcFade = _RcFade;

export { RcFade, RcFadeProps };
