import { SliderProps } from '@material-ui/core/Slider';

import { RcClasses } from '../../../../foundation';

export const RcSliderClasses = RcClasses<SliderProps>(
  ['thumb', 'active', 'trackInverted', 'track', 'focusVisible', 'disabled'],
  'RcSlider',
);
