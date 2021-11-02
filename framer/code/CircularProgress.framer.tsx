import { addPropertyControls, ControlType } from 'framer';

import * as lib from '../src';

const RcCircularProgress: React.ComponentType = ({ ...rest }: any) => {
  return (
    <lib.RcThemeProvider>
      <lib.RcCircularProgress {...rest} />
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcCircularProgress, {
  color: {
    title: 'color',
    type: ControlType.Enum,
    /** description: "custom color", */
    defaultValue: 'interactive.f01',
    options: lib.colorOptions,
  },
  size: {
    title: 'size',
    type: ControlType.Number,
    /** description: "The size of the circle.
If using a number, the pixel unit is assumed.
If using a string, you need to provide the CSS unit, e.g '3rem'.", */
    defaultValue: 24,
  },
  thickness: {
    title: 'thickness',
    type: ControlType.Number,
    /** description: "The thickness of the circle.", */
    defaultValue: 4,
  },
  variant: {
    title: 'variant',
    type: ControlType.Enum,
    /** description: "The variant to use.
Use indeterminate when there is no progress value.", */
    defaultValue: 'indeterminate',
    options: ['static', 'determinate', 'indeterminate'],
  },
  value: {
    title: 'value',
    type: ControlType.Number,
    /** description: "The value of the progress indicator for the determinate variant.
Value between 0 and 100.", */
    defaultValue: undefined,
  },
  disableShrink: {
    title: 'disableShrink',
    type: ControlType.Boolean,
    /** description: "If `true`, the shrink animation is disabled.
This only works if variant is `indeterminate`.", */
    defaultValue: false,
  },
});

export default RcCircularProgress;
