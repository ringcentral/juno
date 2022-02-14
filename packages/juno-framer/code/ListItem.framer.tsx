import { addPropertyControls, ControlType } from 'framer';

import * as lib from '../src';

const RcListItem: React.ComponentType = ({ _children, ...rest }: any) => {
  const children = _children.map((a: any) => {
    return a.props.children;
  });
  return (
    <lib.RcThemeProvider>
      <lib.RcListItem {...rest}>{children}</lib.RcListItem>
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcListItem, {
  color: {
    title: 'color',
    type: ControlType.Enum,
    /** description: "listItem use this color to calc hover, pressed, selected, disabled background color", */
    defaultValue: 'action.grayLight',
    options: lib.colorOptions,
  },
  button: {
    title: 'button',
    type: ControlType.Boolean,
    /** description: "If true, the list item will be a button (using ButtonBase).
Props intended for ButtonBase can then be applied to ListItem.", */
    defaultValue: true,
  },
  title: {
    title: 'title',
    type: ControlType.String,
    /** description: "title on list root", */
    defaultValue: undefined,
  },
  //   tabIndex: {
  //     title: "tabIndex",
  //     type: ControlType.Object,
  //     /** description: "", */
  //     defaultValue: undefined,
  //   },
  _children: {
    title: 'children',
    type: ControlType.Array,
    control: {
      type: ControlType.ComponentInstance,
    },
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
    /** description: "ListItem size, default is 'medium'", */
    defaultValue: 'medium',
    options: ['small', 'medium'],
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
  //   component: {
  //     title: "component",
  //     type: ControlType.Object,
  //     /** description: "The component used for the root node. Either a string to use a HTML element or a component.
  // By default, it's a li when button is false and a div when button is true.", */
  //     defaultValue: undefined,
  //   },
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
  //   value: {
  //     title: "value",
  //     type: ControlType.Object,
  //     /** description: "native value attribute", */
  //     defaultValue: undefined,
  //   },
  useRcTooltip: {
    title: 'useRcTooltip',
    type: ControlType.Boolean,
    /** description: "html native title or not, default `false`", */
    defaultValue: false,
  },
  //   TooltipProps: {
  //     title: "TooltipProps",
  //     type: ControlType.Object,
  //     /** description: "props for pass into `RcTooltip` when useRcTooltip is `true`", */
  //     defaultValue: undefined,
  //   },
  selected: {
    title: 'selected',
    type: ControlType.Boolean,
    /** description: "", */
    defaultValue: false,
  },
  //   ContainerComponent: {
  //     title: "ContainerComponent",
  //     type: ControlType.Object,
  //     /** description: "", */
  //     defaultValue: undefined,
  //   },
  //   ContainerProps: {
  //     title: "ContainerProps",
  //     type: ControlType.Object,
  //     /** description: "", */
  //     defaultValue: undefined,
  //   },
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
  canHover: {
    title: 'canHover',
    type: ControlType.Boolean,
    /** description: "? when hover on item, display different background, default is true", */
    defaultValue: true,
  },
  isInline: {
    title: 'isInline',
    type: ControlType.Boolean,
    /** description: "? display of ListItem", */
    defaultValue: false,
  },
  singleLine: {
    title: 'singleLine',
    type: ControlType.Boolean,
    /** description: "is single line, default is false", */
    defaultValue: false,
  },
  highlighted: {
    title: 'highlighted',
    type: ControlType.Boolean,
    /** description: "Is this listItem highlighted", */
    defaultValue: false,
  },
});

export default RcListItem;
