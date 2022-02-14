import { addPropertyControls, ControlType } from 'framer';

import * as lib from '../src';

/**
 * @framerIntrinsicWidth 200
 *
 * @framerSupportedLayoutWidth fixed
 */
const RcDivider: React.ComponentType = ({ _children, ...rest }: any) => {
  return (
    <lib.RcThemeProvider>
      <lib.RcDivider {...rest}>{_children}</lib.RcDivider>
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcDivider, {
  size: {
    title: 'size',
    type: ControlType.Enum,
    /** description: "size of divider", */
    defaultValue: 'default',
    options: ['default', 'bold'],
  },
  title: {
    title: 'title',
    type: ControlType.String,
    /** description: "title on divider center, only work on horizontal", */
    defaultValue: undefined,
  },
  color: {
    title: 'color',
    type: ControlType.Enum,
    /** description: "divider color", */
    defaultValue: 'neutral.l02',
    options: lib.colorOptions,
  },
  titleBgColor: {
    title: 'titleBgColor',
    type: ControlType.Enum,
    /** description: "title background color", */
    defaultValue: 'neutral.b01',
    options: lib.colorOptions,
  },
  vertical: {
    title: 'vertical',
    type: ControlType.Boolean,
    /** description: "is that vertical", */
    defaultValue: false,
  },
  // component: {
  //   title: "component",
  //   type: ControlType.Object,
  //   /** description: "component for render root", */
  //   defaultValue: undefined,
  // },
});

export default RcDivider;
