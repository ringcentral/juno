import React, { ComponentProps, forwardRef, useMemo } from 'react';

import MuiSlider from '@material-ui/core/Slider';

import {
  combineClasses,
  RcBaseProps,
  RcPaletteKeys,
  styled,
  useThemeProps,
} from '../../../foundation';
import { SliderStyle } from './styles';
import { RcSliderClasses } from './utils';

type RcSliderProps = {
  /** custom color for Slider */
  color?: RcPaletteKeys;
} & RcBaseProps<ComponentProps<typeof MuiSlider>, 'color'>;

const _RcSlider = forwardRef<any, RcSliderProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcSlider' });
  const { classes: classesProp, color, children, ...rest } = props;
  const classes = useMemo(
    () => combineClasses(RcSliderClasses, classesProp),
    [classesProp],
  );

  return (
    <MuiSlider {...rest} ref={ref} classes={classes}>
      {children}
    </MuiSlider>
  );
});

const RcSlider = styled(_RcSlider)`
  ${SliderStyle}
`;

RcSlider.defaultProps = {
  valueLabelDisplay: 'auto',
  color: 'interactive.f01',
};

RcSlider.displayName = 'RcSlider';

export { RcSlider };
export type { RcSliderProps };
