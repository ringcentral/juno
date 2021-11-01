import { addPropertyControls, ControlType } from 'framer';

import * as lib from '../src';

type RcAlertProps = {
  defaultIcon: boolean;
} & lib.RcAlertProps;

/**
 * @framerIntrinsicWidth 200
 *
 * @framerSupportedLayoutWidth fixed
 */
const RcAlert: React.ComponentType<RcAlertProps> = ({
  _children,
  icon: iconProp,
  defaultIcon,
  ...rest
}) => {
  const icon = iconProp?.[0]?.props?.children;

  return (
    <lib.RcThemeProvider>
      <lib.RcAlert {...rest} icon={defaultIcon ? true : icon}>
        {_children}
      </lib.RcAlert>
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcAlert as any, {
  severity: {
    title: 'severity',
    type: ControlType.Enum,
    /** description: "The severity of the alert. This defines the color and icon used.", */
    defaultValue: 'info',
    options: ['error', 'success', 'info', 'warning'],
  },
  size: {
    title: 'size',
    type: ControlType.Enum,
    /** description: "size with spacing between message and root", */
    defaultValue: 'medium',
    options: ['small', 'medium'],
  },
  align: {
    title: 'align',
    type: ControlType.Enum,
    /** description: "that text align of message", */
    defaultValue: 'left',
    options: ['left', 'right', 'center'],
  },
  _children: {
    title: 'children',
    type: ControlType.String,
    /** description: "The content of the component.", */
    defaultValue: 'Alert Example',
  },
  defaultIcon: {
    title: 'defaultIcon',
    type: ControlType.Boolean,
    description: 'use alert default icon',
    defaultValue: false,
  },
  icon: {
    title: 'icon',
    type: ControlType.ComponentInstance,
    /** description: "Override the icon displayed before the children.
Unless provided, the icon is mapped to the value of the `severity` prop.", */
    hidden(props) {
      return !!props.defaultIcon;
    },
  },
  square: {
    title: 'square',
    type: ControlType.Boolean,
    /** description: "If `true`, rounded corners are disabled.", */
    defaultValue: true,
  },
  elevation: {
    title: 'elevation',
    type: ControlType.Enum,
    description:
      'Shadow depth, corresponds to `dp` in the spec. It accepts values between 0 and 24 inclusive.',
    defaultValue: 'undefined',
    options: lib.elevationOptions,
  },
  //   role: {
  //     title: "role",
  //     type: ControlType.String,
  //     /** description: "The ARIA role attribute of the element.", */
  //     defaultValue: undefined,
  //   },
  //   component: {
  //     title: "component",
  //     type: ControlType.Object,
  //     /** description: "The component used for the root node.
  // Either a string to use a HTML element or a component.", */
  //     defaultValue: undefined,
  //   },
  //   closeText: {
  //     title: "closeText",
  //     type: ControlType.String,
  //     /** description: "Override the default label for the *close popup* icon button.

  // For localization purposes, you can use the provided [translations](/guides/localization/).", */
  //     defaultValue: undefined,
  //   },
});

export default RcAlert;
