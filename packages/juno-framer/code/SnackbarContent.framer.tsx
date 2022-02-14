import { addPropertyControls, ControlType } from 'framer';

import * as lib from '../src';

const RcSnackbarContent: React.ComponentType = ({
  _children,
  action: actionProp = [],
  ...rest
}: any) => {
  // because framer will wrap component with a framer div, that will broken that layer
  // so we need use children's children directly
  const action = actionProp.map((a: any) => {
    return a.props.children;
  });

  return (
    <lib.RcThemeProvider>
      <lib.RcSnackbarContent {...rest} action={action}>
        {_children}
      </lib.RcSnackbarContent>
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcSnackbarContent, {
  type: {
    title: 'type',
    type: ControlType.Enum,
    /** description: "message type", */
    defaultValue: 'success',
    options: ['error', 'warn', 'success', 'info'],
  },
  message: {
    title: 'message',
    type: ControlType.String,
    /** description: "The message to display.", */
    defaultValue: 'message',
  },
  action: {
    type: ControlType.Array,
    control: {
      type: ControlType.ComponentInstance,
    },
  },
  messageAlign: {
    title: 'messageAlign',
    type: ControlType.Enum,
    /** description: "message align", */
    defaultValue: 'center',
    options: ['left', 'right', 'center'],
  },
  size: {
    title: 'size',
    type: ControlType.Enum,
    /** description: "message size, default is `medium`", */
    defaultValue: 'medium',
    options: ['small', 'medium'],
  },
  // role: {
  //   title: "role",
  //   type: ControlType.Object,
  //   /** description: "The ARIA role attribute of the element.", */
  //   defaultValue: undefined,
  // },
  square: {
    title: 'square',
    type: ControlType.Boolean,
    /** description: "If `true`, rounded corners are disabled.", */
    defaultValue: false,
  },
  //   component: {
  //     title: "component",
  //     type: ControlType.Object,
  //     /** description: "The component used for the root node.
  // Either a string to use a HTML element or a component.", */
  //     defaultValue: undefined,
  //   },
  loading: {
    title: 'loading',
    type: ControlType.Boolean,
    /** description: "is use loading in action", */
    defaultValue: false,
  },
  //     fullWidth: {
  //         title: "fullWidth",
  //         type: ControlType.Boolean,
  //         /** description: "If `true`, the input will take up the full width of its container
  // when fullWidth the square will be `true`, if you still want square
  // set square={false}", */
  //         defaultValue: false,
  //     },
});

export default RcSnackbarContent;
