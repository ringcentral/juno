import { addPropertyControls, ControlType } from 'framer';

import * as lib from '../src';

const RcSwitch: React.ComponentType = ({ ...rest }: any) => {
  return (
    <lib.RcThemeProvider>
      <lib.RcSwitch {...rest} />
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcSwitch as any, {
  color: {
    title: 'color',
    type: ControlType.Enum,
    /** description: "more palette color support", */
    defaultValue: 'interactive.f01',
    options: lib.colorOptions,
  },
  trackColor: {
    title: 'trackColor',
    type: ControlType.Enum,
    /** description: "custom trackColor when unchecked status", */
    defaultValue: 'neutral.f02',
    options: lib.colorOptions,
  },
  label: {
    title: 'label',
    type: ControlType.String,
    /** description: "label for control", */
    defaultValue: undefined,
  },
  defaultChecked: {
    title: 'defaultChecked',
    type: ControlType.Boolean,
    /** description: "", */
    defaultValue: false,
  },
  // tabIndex: {
  //   title: "tabIndex",
  //   type: ControlType.Number,
  //   /** description: "", */
  //   defaultValue: undefined,
  // },
  disabled: {
    title: 'disabled',
    type: ControlType.Boolean,
    /** description: "If `true`, the switch will be disabled.", */
    defaultValue: false,
  },
  // type: {
  //   title: "type",
  //   type: ControlType.String,
  //   /** description: "", */
  //   defaultValue: undefined,
  // },
  autoFocus: {
    title: 'autoFocus',
    type: ControlType.Boolean,
    /** description: "", */
    defaultValue: false,
  },
  // name: {
  //   title: "name",
  //   type: ControlType.String,
  //   /** description: "Name attribute of the `input` element.", */
  //   defaultValue: undefined,
  // },
  //   value: {
  //     title: "value",
  //     type: ControlType.Object,
  //     /** description: "The value of the component. The DOM API casts this to a string.
  // The browser uses "on" as the default value.", */
  //     defaultValue: undefined,
  //   },
  // checked: {
  //   title: "checked",
  //   type: ControlType.Boolean,
  //   /** description: "If `true`, the component is checked.", */
  //   defaultValue: false,
  // },
  // inputProps: {
  //   title: "inputProps",
  //   type: ControlType.Object,
  //   /** description: "[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.", */
  //   defaultValue: undefined,
  // },
  readOnly: {
    title: 'readOnly',
    type: ControlType.Boolean,
    /** description: "", */
    defaultValue: false,
  },
  required: {
    title: 'required',
    type: ControlType.Boolean,
    /** description: "If `true`, the `input` element will be required.", */
    defaultValue: false,
  },
  formControlLabelProps: {
    title: 'formControlLabelProps',
    description: 'control label placement',
    type: ControlType.Object,
    controls: {
      labelPlacement: {
        title: 'labelPlacement',
        type: ControlType.Enum,
        defaultValue: 'start',
        options: ['start', 'end'],
      },
    },
    hidden(props) {
      return !props.label;
    },
  },
});

export default RcSwitch;
