import { addPropertyControls, ControlType } from 'framer';

import * as lib from '../src';

const RcCheckbox: React.ComponentType = ({ _children, ...rest }: any) => {
  return (
    <lib.RcThemeProvider>
      <lib.RcCheckbox {...rest}>{_children}</lib.RcCheckbox>
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcCheckbox as any, {
  color: {
    title: 'color',
    type: ControlType.Enum,
    /** description: "more palette color support", */
    defaultValue: 'interactive.f01',
    options: lib.colorOptions,
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
  defaultChecked: {
    title: 'defaultChecked',
    type: ControlType.Boolean,
    /** description: "", */
    defaultValue: false,
  },
  tabIndex: {
    title: 'tabIndex',
    type: ControlType.Number,
    /** description: "", */
    defaultValue: undefined,
  },
  disabled: {
    title: 'disabled',
    type: ControlType.Boolean,
    /** description: "If `true`, the checkbox will be disabled.", */
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
    defaultValue: undefined,
  },
  autoFocus: {
    title: 'autoFocus',
    type: ControlType.Boolean,
    /** description: "", */
    defaultValue: false,
  },
  name: {
    title: 'name',
    type: ControlType.String,
    /** description: "Name attribute of the `input` element.", */
    defaultValue: undefined,
  },
  indeterminate: {
    title: 'indeterminate',
    type: ControlType.Boolean,
    /** description: "If `true`, the component appears indeterminate.
This does not set the native input element to indeterminate due
to inconsistent behavior across browsers.
However, we set a `data-indeterminate` attribute on the input.", */
    defaultValue: false,
  },
  disableFocusRipple: {
    title: 'disableFocusRipple',
    type: ControlType.Boolean,
    /** description: "", */
    defaultValue: false,
  },
  error: {
    title: 'error',
    type: ControlType.Boolean,
    /** description: "is that error", */
    defaultValue: false,
  },
  useRcTooltip: {
    title: 'useRcTooltip',
    type: ControlType.Boolean,
    /** description: "html native title or not, default `false`", */
    defaultValue: false,
  },
  // checked: {
  //     title: "checked",
  //     type: ControlType.Boolean,
  //     /** description: "If `true`, the component is checked.", */
  //     defaultValue: undefined,
  // },
  // inputProps: {
  //   title: "inputProps",
  // type: ControlType.Object,
  ///  ** description: "[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/////Element/input#Attributes) applied to the `input` element.", */
  //       defaultValue: undefined,
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
  // checkedIcon: {
  //     title: "checkedIcon",
  //     type: ControlType.Object,
  //     /** description: "The icon to display when the component is checked.", */
  //     defaultValue: undefined,
  // },
  // indeterminateIcon: {
  //     title: "indeterminateIcon",
  //     type: ControlType.Object,
  //     /** description: "The icon to display when the component is indeterminate.", */
  //     defaultValue: undefined,
  // },
  followColorWhenUnChecked: {
    title: 'followColorWhenUnChecked',
    type: ControlType.Boolean,
    /** description: "show color when not checked", */
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
        defaultValue: 'end',
        options: ['start', 'end'],
      },
    },
    hidden(props) {
      return !props.label;
    },
  },
});

export default RcCheckbox;
