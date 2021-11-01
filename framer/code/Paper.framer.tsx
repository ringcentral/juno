import { addPropertyControls, ControlType } from 'framer';

import * as lib from '../src';

/**
 * @framerIntrinsicWidth 200
 * @framerIntrinsicHeight 200
 *
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight fixed
 */
const RcPaper: React.ComponentType = ({ _children, ...rest }: any) => {
  const children = _children.map((a: any) => {
    return a.props.children || a;
  });
  return (
    <lib.RcThemeProvider>
      <lib.RcPaper {...rest}>{children}</lib.RcPaper>
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcPaper, {
  elevation: {
    title: 'elevation',
    type: ControlType.Enum,
    /** description: "`box-shadow` with token
            0 ~ 24 for different elevation shadow", */
    defaultValue: '1',
    options: lib.elevationOptions,
  },
  _children: {
    title: 'children',
    type: ControlType.Array,
    control: {
      type: ControlType.ComponentInstance,
    },
    /** description: "The content of the component.", */
  },
  variant: {
    title: 'variant',
    type: ControlType.Enum,
    /** description: "The variant to use.", */
    defaultValue: 'elevation',
    options: ['outlined', 'elevation'],
  },
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
});

export default RcPaper;
