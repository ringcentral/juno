import { addPropertyControls, ControlType } from 'framer';

import * as lib from '../src';

const RcList: React.ComponentType = ({ _children, ...rest }: any) => {
  const children = _children.map((a: any) => {
    return a.props.children;
  });
  return (
    <lib.RcThemeProvider>
      <lib.RcList {...rest}>{children}</lib.RcList>
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcList, {
  dense: {
    title: 'dense',
    type: ControlType.Boolean,
    /** description: "", */
    defaultValue: false,
  },
  // subheader: {
  //   title: "subheader",
  //   type: ControlType.ComponentInstance,
  //   /** description: "", */
  //   defaultValue: undefined,
  // },
  _children: {
    title: 'children',
    type: ControlType.Array,
    control: {
      type: ControlType.ComponentInstance,
    },
  },
  disablePadding: {
    title: 'disablePadding',
    type: ControlType.Boolean,
    /** description: "", */
    defaultValue: true,
  },
});

export default RcList;
