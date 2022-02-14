import { addPropertyControls, ControlType } from 'framer';

import * as lib from '../src';

const RcTag: React.ComponentType = ({ _children, ...rest }: any) => {
  return (
    <lib.RcThemeProvider>
      <lib.RcTag {...rest}>{_children}</lib.RcTag>
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcTag, {
  radius: {
    title: 'radius',
    type: ControlType.Enum,
    /** description: "custom border radius for tag, default is `xl`", */
    defaultValue: 'xl',
    options: lib.radiusOptions,
  },
  color: {
    title: 'color',
    type: ControlType.Enum,
    /** description: "tag color, default is 'highlight.b03'", */
    defaultValue: 'highlight.b03',
    options: lib.colorOptions,
  },
  _children: {
    title: 'children',
    type: ControlType.String,
    /** description: "The content of the tag.", */
    defaultValue: 'tag',
  },
  borderColor: {
    title: 'borderColor',
    type: ControlType.Enum,
    /** description: "tag border color", */
    defaultValue: undefined,
    options: [undefined, ...lib.colorOptions],
  },
  textColor: {
    title: 'textColor',
    type: ControlType.Enum,
    /** description: "text color, default is 'neutral.f01'", */
    defaultValue: 'neutral.f01',
    options: lib.colorOptions,
  },
});

export default RcTag;
