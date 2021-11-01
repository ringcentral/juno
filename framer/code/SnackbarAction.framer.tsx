import { addPropertyControls, ControlType } from 'framer';

import * as lib from '../src';

const RcSnackbarAction: React.ComponentType = ({ _children, ...rest }: any) => {
  return (
    <lib.RcThemeProvider>
      <lib.RcSnackbarAction {...rest}>{_children}</lib.RcSnackbarAction>
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcSnackbarAction, {
  _children: {
    title: 'children',
    type: ControlType.String,
    /** description: "The content of the component.", */
    defaultValue: 'click',
  },
  symbol: {
    type: ControlType.Enum,
    title: 'symbol',
    defaultValue: 'Help',
    options: lib.iconOptions,
  },
  // tabIndex: {
  //   title: "tabIndex",
  //   type: ControlType.Object,
  //   /** description: "", */
  //   defaultValue: undefined,
  // },
  color: {
    title: 'color',
    type: ControlType.Enum,
    /** description: "tag color, default is `highlight.b03`", */
    defaultValue: 'neutral.f01',
    options: [undefined, ...lib.colorOptions],
  },
  size: {
    title: 'size',
    type: ControlType.Enum,
    /** description: "size for action", */
    defaultValue: 'medium',
    options: ['small', 'medium'],
  },
  disabled: {
    title: 'disabled',
    type: ControlType.Boolean,
    /** description: "If `true`, the base button will be disabled.", */
    defaultValue: false,
  },
  variant: {
    title: 'variant',
    type: ControlType.Enum,
    /** description: "variant of action", */
    defaultValue: 'text',
    options: ['text', 'icon'],
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
    /** description: "If `true`, the ripple effect will be disabled.

⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
to highlight the element by applying separate styles with the `focusVisibleClassName`.", */
    defaultValue: true,
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
});

export default RcSnackbarAction;
