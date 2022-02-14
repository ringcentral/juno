import { addPropertyControls, ControlType } from 'framer';

import * as lib from '../src';

/**
 * @framerIntrinsicWidth 200
 *
 * @framerSupportedLayoutWidth fixed
 */
const RcSlider: React.ComponentType = ({ ...rest }: any) => {
  return (
    <lib.RcThemeProvider>
      <lib.RcSlider {...rest} />
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcSlider, {
  track: {
    title: 'track',
    type: ControlType.Enum,
    /** description: "", */
    defaultValue: 'normal',
    options: [false, 'normal', 'inverted'],
  },
  //   defaultValue: {
  //     title: "defaultValue",
  //     type: ControlType.Object,
  //     /** description: "", */
  //     defaultValue: undefined,
  //   },
  color: {
    title: 'color',
    type: ControlType.Enum,
    /** description: "custom color for Slider", */
    defaultValue: 'interactive.f01',
    options: lib.colorOptions,
  },
  step: {
    title: 'step',
    type: ControlType.Number,
    /** description: "", */
    defaultValue: 1,
  },
  defaultValue: {
    title: 'defaultValue',
    type: ControlType.Number,
    /** description: "", */
    defaultValue: 0,
  },
  disabled: {
    title: 'disabled',
    type: ControlType.Boolean,
    /** description: "", */
    defaultValue: false,
  },
  valueLabelDisplay: {
    title: 'valueLabelDisplay',
    type: ControlType.Enum,
    /** description: "", */
    defaultValue: 'auto',
    options: ['on', 'off', 'auto'],
  },
  min: {
    title: 'min',
    type: ControlType.Number,
    /** description: "", */
    defaultValue: 0,
  },
  max: {
    title: 'max',
    type: ControlType.Number,
    /** description: "", */
    defaultValue: 100,
  },
  orientation: {
    title: 'orientation',
    type: ControlType.Enum,
    /** description: "", */
    defaultValue: undefined,
    options: ['horizontal', 'vertical'],
  },
  //   marks: {
  //     title: "marks",
  //     type: ControlType.Object,
  //     /** description: "", */
  //     defaultValue: undefined,
  //   },
  //   ThumbComponent: {
  //     title: "ThumbComponent",
  //     type: ControlType.Object,
  //     /** description: "", */
  //     defaultValue: undefined,
  //   },
  //   ValueLabelComponent: {
  //     title: "ValueLabelComponent",
  //     type: ControlType.Object,
  //     /** description: "", */
  //     defaultValue: undefined,
  //   },

  //   valueLabelFormat: {
  //     title: "valueLabelFormat",
  //     type: ControlType.Object,
  //     /** description: "", */
  //     defaultValue: undefined,
  //   },
});

export default RcSlider;
