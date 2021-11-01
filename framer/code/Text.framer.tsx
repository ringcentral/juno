import { addPropertyControls, ControlType } from 'framer';

import * as lib from '../src';

const RcText: React.ComponentType = ({
  _children,
  titleWhenOverflow: titleWhenOverflowProp,
  ...rest
}: any) => {
  let titleWhenOverflow: any = +titleWhenOverflowProp;
  if (titleWhenOverflowProp === 'true') {
    titleWhenOverflow = true;
  } else if (titleWhenOverflowProp === 'false') {
    titleWhenOverflow = false;
  }

  return (
    <lib.RcThemeProvider>
      <lib.RcText {...rest} titleWhenOverflow={titleWhenOverflow}>
        {_children}
      </lib.RcText>
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcText, {
  _children: {
    title: 'children',
    type: ControlType.String,
    /** description: "The content of the component.", */
    defaultValue: 'Text',
  },
  color: {
    title: 'color',
    type: ControlType.Enum,
    /** description: "color for apply to text, support full palette", */
    defaultValue: undefined,
    options: [
      'initial',
      'inherit',
      'primary',
      'secondary',
      'textPrimary',
      'textSecondary',
      'error',
      'content.brand',
      'interactive.b01',
      'interactive.b02',
      'interactive.f01',
      'neutral.b01',
      'neutral.b02',
      'neutral.b03',
      'neutral.b04',
      'neutral.b05',
      'neutral.b06',
      'neutral.elevation',
      'neutral.f01',
      'neutral.f02',
      'neutral.f03',
      'neutral.f04',
      'neutral.f05',
      'neutral.f06',
      'neutral.f07',
      'neutral.f11',
      'neutral.l01',
      'neutral.l02',
      'neutral.l03',
      'neutral.l04',
      'neutral.transparent',
    ],
  },
  display: {
    title: 'display',
    type: ControlType.Enum,
    /** description: "", */
    defaultValue: 'block',
    options: ['inline', 'initial', 'block'],
  },
  // weight: {
  //   title: "weight",
  //   type: ControlType.Enum,
  //   /** description: "custom weight", */
  //   defaultValue: undefined,
  //   options: ["normal", "bold"],
  // },
  //   component: {
  //     title: "component",
  //     type: ControlType.Object,
  //     /** description: "component for root render, default value can view `RcCustomTypographyVariant`
  // default variant `body1` is `p` <br />", */
  //     defaultValue: undefined,
  //   },
  variant: {
    title: 'variant',
    type: ControlType.Enum,
    /** description: "variant of Typography, view `RcTypographyVariant`", */
    defaultValue: 'inherit',
    options: lib.typographyOptions,
  },
  align: {
    title: 'align',
    type: ControlType.Enum,
    /** description: "", */
    defaultValue: 'left',
    options: ['inherit', 'left', 'right', 'center', 'justify'],
  },
  title: {
    title: 'title',
    type: ControlType.String,
    /** description: "title on list root", */
    defaultValue: undefined,
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
  gutterBottom: {
    title: 'gutterBottom',
    type: ControlType.Boolean,
    /** description: "", */
    defaultValue: false,
  },
  noWrap: {
    title: 'noWrap',
    type: ControlType.Boolean,
    /** description: "", */
    defaultValue: true,
  },
  paragraph: {
    title: 'paragraph',
    type: ControlType.Boolean,
    /** description: "", */
    defaultValue: false,
  },
  highlight: {
    title: 'highlight',
    type: ControlType.Boolean,
    /** description: "highlight for text with color and background to be mentionMe", */
    defaultValue: false,
  },
  // flexFull: {
  //   title: "flexFull",
  //   type: ControlType.Boolean,
  //   /** description: "when set `true`, add style `flex: 1 1 auto`", */
  //   defaultValue: false,
  // },
  titleWhenOverflow: {
    title: 'titleWhenOverflow',
    type: ControlType.Enum,
    /** description: "is show title only when truncated, use `number` value to truncate text at a specific number of lines.
### should not change titleWhenOverflow dynamically, keep that be same value, that will cause hook issue", */
    defaultValue: false,
    options: [false, true, 1, 2, 3, 4, 5, 6, 7],
  },
});

export default RcText;
