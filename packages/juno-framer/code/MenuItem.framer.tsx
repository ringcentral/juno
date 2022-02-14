import { addPropertyControls, ControlType } from 'framer';

import * as lib from '../src';

const RcMenuItem: React.ComponentType = ({ _children, ...rest }: any) => {
  const children = _children.map((a: any) => {
    return a.props.children;
  });

  return (
    <lib.RcThemeProvider>
      <lib.RcMenuItem {...rest}>{children}</lib.RcMenuItem>
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcMenuItem, {
  button: {
    title: 'button',
    type: ControlType.Boolean,
    /** description: "", */
    defaultValue: true,
  },
  title: {
    title: 'title',
    type: ControlType.String,
    /** description: "title on list root", */
    defaultValue: undefined,
  },
  // tabIndex: {
  //   title: "tabIndex",
  //   type: ControlType.Object,
  //   /** description: "", */
  //   defaultValue: undefined,
  // },
  _children: {
    title: 'children',
    type: ControlType.Array,
    control: {
      type: ControlType.ComponentInstance,
    },
    /** description: "The content of the component.", */
  },
  alignItems: {
    title: 'alignItems',
    type: ControlType.Enum,
    /** description: "", */
    defaultValue: 'flex-start',
    options: ['center', 'flex-start'],
  },
  size: {
    title: 'size',
    type: ControlType.Enum,
    /** description: "MenuItem size", */
    defaultValue: 'medium',
    options: ['medium', 'large'],
  },
  dense: {
    title: 'dense',
    type: ControlType.Boolean,
    /** description: "", */
    defaultValue: false,
  },
  disabled: {
    title: 'disabled',
    type: ControlType.Boolean,
    /** description: "If `true`, the base button will be disabled.", */
    defaultValue: false,
  },
  // component: {
  //   title: "component",
  //   type: ControlType.Object,
  //   /** description: "The component used for the root node. Either a string to use a HTML element or a component.", */
  //   defaultValue: undefined,
  // },
  type: {
    title: 'type',
    type: ControlType.Enum,
    /** description: "checked for that should render checked icon", */
    defaultValue: 'selected',
    options: ['selected', 'checked'],
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
  //   TouchRippleProps: {
  //     title: "TouchRippleProps",
  //     type: ControlType.Object,
  //     /** description: "Props applied to the `TouchRipple` element.", */
  //     defaultValue: undefined,
  //   },
  autoFocus: {
    title: 'autoFocus',
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
  selected: {
    title: 'selected',
    type: ControlType.Boolean,
    /** description: "", */
    defaultValue: false,
  },
  checked: {
    title: 'checked',
    type: ControlType.Boolean,
    /** description: "if type to be `checked`, the checked prop for that should render checked icon", */
    defaultValue: false,
  },
  // ContainerComponent: {
  //   title: "ContainerComponent",
  //   type: ControlType.Object,
  //   /** description: "", */
  //   defaultValue: undefined,
  // },
  // ContainerProps: {
  //   title: "ContainerProps",
  //   type: ControlType.Object,
  //   /** description: "", */
  //   defaultValue: undefined,
  // },
  disableGutters: {
    title: 'disableGutters',
    type: ControlType.Boolean,
    /** description: "", */
    defaultValue: false,
  },
  divider: {
    title: 'divider',
    type: ControlType.Boolean,
    /** description: "", */
    defaultValue: false,
  },
  //   secondaryAction: {
  //     title: "secondaryAction",
  //     type: ControlType.Object,
  //     /** description: "MenuItem with subAction, can use ListItemSecondaryAction", */
  //     defaultValue: undefined,
  //   },
  // isSubMenuItem: {
  //   title: "isSubMenuItem",
  //   type: ControlType.Boolean,
  //   /** description: "for subMenu component, use prevent click", */
  //   defaultValue: false,
  // },
});

export default RcMenuItem;
