import { addPropertyControls, ControlType } from 'framer';

import * as lib from '../src';

const RcRadio: React.ComponentType = ({ _children, ...rest }: any) => {
  return (
    <lib.RcThemeProvider>
      <lib.RcRadio {...rest}>{_children}</lib.RcRadio>
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcRadio, {
  value: {
    title: 'value',
    type: ControlType.String,
    /** description: "The value of the component. The DOM API casts this to a string.", */
    defaultValue: (Math.random() + 1).toString(36).substring(7),
  },
  defaultChecked: {
    title: 'defaultChecked',
    type: ControlType.Boolean,
    /** description: "", */
    defaultValue: false,
  },
  size: {
    title: 'size',
    type: ControlType.Enum,
    /** description: "that below icon size", */
    defaultValue: 'medium',
    options: [
      'small',
      'medium',
      'large',
      'xsmall',
      'xlarge',
      'xxlarge',
      'xxxlarge',
    ],
  },
  color: {
    title: 'color',
    type: ControlType.Enum,
    /** description: "more palette color support", */
    defaultValue: 'interactive.f01',
    options: lib.colorOptions,
  },
  label: {
    title: 'label',
    type: ControlType.String,
    /** description: "label for control", */
    defaultValue: undefined,
  },
  title: {
    title: 'title',
    type: ControlType.String,
    /** description: "title on list root", */
    defaultValue: undefined,
  },
  // tabIndex: {
  //   title: "tabIndex",
  //   type: ControlType.Number,
  //   /** description: "", */
  //   defaultValue: undefined,
  // },
  // icon: {
  //   title: "icon",
  //   type: ControlType.Object,
  //   /** description: "The icon to display when the component is unchecked.", */
  //   defaultValue: undefined,
  // },
  disabled: {
    title: 'disabled',
    type: ControlType.Boolean,
    /** description: "If `true`, the radio will be disabled.", */
    defaultValue: false,
  },
  error: {
    title: 'error',
    type: ControlType.Boolean,
    /** description: "is that error", */
    defaultValue: false,
  },
  centerRipple: {
    title: 'centerRipple',
    type: ControlType.Boolean,
    /** description: "If `true`, the ripples will be centered.
They won't start at the cursor interaction position.", */
    defaultValue: false,
  },
  disableRipple: {
    title: 'disableRipple',
    type: ControlType.Boolean,
    /** description: "If `true`, the ripple effect will be disabled.", */
    defaultValue: false,
  },
  disableTouchRipple: {
    title: 'disableTouchRipple',
    type: ControlType.Boolean,
    /** description: "If `true`, the touch ripple effect will be disabled.", */
    defaultValue: false,
  },
  focusRipple: {
    title: 'focusRipple',
    type: ControlType.Boolean,
    /** description: "If `true`, the base button will have a keyboard focus ripple.", */
    defaultValue: false,
  },
  // TouchRippleProps: {
  //   title: "TouchRippleProps",
  //   type: ControlType.Object,
  //   /** description: "Props applied to the `TouchRipple` element.", */
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
  disableFocusRipple: {
    title: 'disableFocusRipple',
    type: ControlType.Boolean,
    /** description: "", */
    defaultValue: false,
  },
  useRcTooltip: {
    title: 'useRcTooltip',
    type: ControlType.Boolean,
    /** description: "html native title or not, default `false`", */
    defaultValue: false,
  },
  // TooltipProps: {
  //   title: "TooltipProps",
  //   type: ControlType.Object,
  //   /** description: "props for pass into `RcTooltip` when useRcTooltip is `true`", */
  //   defaultValue: undefined,
  // },
  // checkedIcon: {
  //   title: "checkedIcon",
  //   type: ControlType.Object,
  //   /** description: "The icon to display when the component is checked.", */
  //   defaultValue: undefined,
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
  // formControlLabelProps: {
  //   title: "formControlLabelProps",
  //   type: ControlType.Object,
  //   /** description: "formControlLabelProps when have label", */
  //   defaultValue: undefined,
  // },
});

export default RcRadio;
