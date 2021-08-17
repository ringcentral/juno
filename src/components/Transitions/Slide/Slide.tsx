import MuiSlide, { SlideProps as MuiSlideProps } from '@material-ui/core/Slide';
import React, { forwardRef } from 'react';
import { useThemeProps } from '../../../foundation';

type RcSlideProps = MuiSlideProps;

const _RcSlide = forwardRef<any, RcSlideProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcSlide' });

  return <MuiSlide ref={ref} {...props} />;
});

const RcSlide = _RcSlide;

export { RcSlide, RcSlideProps };
