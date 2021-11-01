import { addPropertyControls, ControlType } from 'framer';

import * as lib from '../src';

/**
 * @framerIntrinsicWidth 200
 * @framerIntrinsicHeight 200
 *
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight fixed
 */
const RcBox: React.ComponentType = ({ _children, ...rest }: any) => {
  const children = _children.map((a: any) => {
    return a.props.children || a;
  });
  return (
    <lib.RcThemeProvider>
      <lib.RcBox {...rest}>{children}</lib.RcBox>
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcBox, {
  color: {
    title: 'color',
    type: ControlType.Enum,
    /** description: "all palette color support", */
    defaultValue: 'neutral.f06',
    options: lib.colorOptions,
  },
  bgcolor: {
    title: 'bgcolor',
    type: ControlType.Enum,
    /** description: "all palette color support", */
    defaultValue: 'neutral.b01',
    options: ['transparent', ...lib.colorOptions],
  },
  borderColor: {
    title: 'borderColor',
    type: ControlType.Enum,
    /** description: "all palette color support", */
    defaultValue: 'transparent',
    options: ['transparent', ...lib.colorOptions],
  },
  clone: {
    title: 'clone',
    type: ControlType.Boolean,
    description:
      "If `true`, the box will recycle its children DOM element. It's using `React.cloneElement` internally.",
    defaultValue: false,
  },
  _children: {
    title: 'children',
    type: ControlType.Array,
    control: {
      type: ControlType.ComponentInstance,
    },
    /** description: "The content of the accordion.", */
  },
  zIndex: {
    title: 'zIndex',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  p: {
    title: 'p',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  alignContent: {
    title: 'alignContent',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  alignItems: {
    title: 'alignItems',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  alignSelf: {
    title: 'alignSelf',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  bottom: {
    title: 'bottom',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  boxShadow: {
    title: 'boxShadow',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  boxSizing: {
    title: 'boxSizing',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  display: {
    title: 'display',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  flexBasis: {
    title: 'flexBasis',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  flexDirection: {
    title: 'flexDirection',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  flexGrow: {
    title: 'flexGrow',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  flexShrink: {
    title: 'flexShrink',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  flexWrap: {
    title: 'flexWrap',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  fontFamily: {
    title: 'fontFamily',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  fontSize: {
    title: 'fontSize',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  fontStyle: {
    title: 'fontStyle',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  fontWeight: {
    title: 'fontWeight',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  gridAutoColumns: {
    title: 'gridAutoColumns',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  gridAutoFlow: {
    title: 'gridAutoFlow',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  gridAutoRows: {
    title: 'gridAutoRows',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  gridTemplateAreas: {
    title: 'gridTemplateAreas',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  gridTemplateColumns: {
    title: 'gridTemplateColumns',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  gridTemplateRows: {
    title: 'gridTemplateRows',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  height: {
    title: 'height',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  justifyContent: {
    title: 'justifyContent',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  justifyItems: {
    title: 'justifyItems',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  justifySelf: {
    title: 'justifySelf',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  left: {
    title: 'left',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  letterSpacing: {
    title: 'letterSpacing',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  lineHeight: {
    title: 'lineHeight',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  marginBottom: {
    title: 'marginBottom',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  marginLeft: {
    title: 'marginLeft',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  marginRight: {
    title: 'marginRight',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  marginTop: {
    title: 'marginTop',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  maxHeight: {
    title: 'maxHeight',
    type: ControlType.String,
    /** description: "", */
    defaultValue: '100%',
  },
  maxWidth: {
    title: 'maxWidth',
    type: ControlType.String,
    /** description: "", */
    defaultValue: '100%',
  },
  minHeight: {
    title: 'minHeight',
    type: ControlType.String,
    /** description: "", */
    defaultValue: '100%',
  },
  minWidth: {
    title: 'minWidth',
    type: ControlType.String,
    /** description: "", */
    defaultValue: '100%',
  },
  order: {
    title: 'order',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  paddingBottom: {
    title: 'paddingBottom',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  paddingLeft: {
    title: 'paddingLeft',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  paddingRight: {
    title: 'paddingRight',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  paddingTop: {
    title: 'paddingTop',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  position: {
    title: 'position',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  right: {
    title: 'right',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  textAlign: {
    title: 'textAlign',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  textOverflow: {
    title: 'textOverflow',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  top: {
    title: 'top',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  visibility: {
    title: 'visibility',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  whiteSpace: {
    title: 'whiteSpace',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  width: {
    title: 'width',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  border: {
    title: 'border',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  borderBottom: {
    title: 'borderBottom',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  borderLeft: {
    title: 'borderLeft',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  borderRadius: {
    title: 'borderRadius',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  borderRight: {
    title: 'borderRight',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  borderTop: {
    title: 'borderTop',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  flex: {
    title: 'flex',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  gridArea: {
    title: 'gridArea',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  gridColumn: {
    title: 'gridColumn',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  gridRow: {
    title: 'gridRow',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  margin: {
    title: 'margin',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  overflow: {
    title: 'overflow',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  padding: {
    title: 'padding',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  gridColumnGap: {
    title: 'gridColumnGap',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  gridGap: {
    title: 'gridGap',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  gridRowGap: {
    title: 'gridRowGap',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  component: {
    title: 'component',
    type: ControlType.String,
    /** description: "The component used for the root node. Either a string to use a DOM element or a component.", */
    defaultValue: undefined,
  },
  displayPrint: {
    title: 'displayPrint',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  sizeWidth: {
    title: 'sizeWidth',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  sizeHeight: {
    title: 'sizeHeight',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  //   m: {
  //     title: "m",
  //     type: ControlType.String,
  //     /** description: "", */
  //     defaultValue: undefined,
  //   },
  //   mt: {
  //     title: "mt",
  //     type: ControlType.String,
  //     /** description: "", */
  //     defaultValue: undefined,
  //   },
  //   mr: {
  //     title: "mr",
  //     type: ControlType.String,
  //     /** description: "", */
  //     defaultValue: undefined,
  //   },
  //   mb: {
  //     title: "mb",
  //     type: ControlType.String,
  //     /** description: "", */
  //     defaultValue: undefined,
  //   },
  //   ml: {
  //     title: "ml",
  //     type: ControlType.String,
  //     /** description: "", */
  //     defaultValue: undefined,
  //   },
  //   mx: {
  //     title: "mx",
  //     type: ControlType.String,
  //     /** description: "", */
  //     defaultValue: undefined,
  //   },
  //   my: {
  //     title: "my",
  //     type: ControlType.String,
  //     /** description: "", */
  //     defaultValue: undefined,
  //   },
  //   pt: {
  //     title: "pt",
  //     type: ControlType.String,
  //     /** description: "", */
  //     defaultValue: undefined,
  //   },
  //   pr: {
  //     title: "pr",
  //     type: ControlType.String,
  //     /** description: "", */
  //     defaultValue: undefined,
  //   },
  //   pb: {
  //     title: "pb",
  //     type: ControlType.String,
  //     /** description: "", */
  //     defaultValue: undefined,
  //   },
  //   pl: {
  //     title: "pl",
  //     type: ControlType.String,
  //     /** description: "", */
  //     defaultValue: undefined,
  //   },
  //   px: {
  //     title: "px",
  //     type: ControlType.String,
  //     /** description: "", */
  //     defaultValue: undefined,
  //   },
  //   py: {
  //     title: "py",
  //     type: ControlType.String,
  //     /** description: "", */
  //     defaultValue: undefined,
  //   },
  marginX: {
    title: 'marginX',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  marginY: {
    title: 'marginY',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  paddingX: {
    title: 'paddingX',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
  paddingY: {
    title: 'paddingY',
    type: ControlType.String,
    /** description: "", */
    defaultValue: undefined,
  },
});

export default RcBox;
