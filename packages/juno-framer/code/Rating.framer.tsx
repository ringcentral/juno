import { addPropertyControls, ControlType } from 'framer';

import * as lib from '../src';

// TODO: multiple rating will populate each other
const RcRating: React.ComponentType = ({
  size = 'xlarge',
  icon,
  emptyIcon,
  ...rest
}: any) => {
  return (
    <lib.RcThemeProvider>
      <lib.RcRating
        icon={<lib.RcIcon size={size} symbol={lib.iconList[icon]} />}
        emptyIcon={<lib.RcIcon size={size} symbol={lib.iconList[emptyIcon]} />}
        {...rest}
      />
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcRating as any, {
  defaultValue: {
    title: 'defaultValue',
    type: ControlType.Number,
    /** description: "The default value. Use when the component is not controlled.", */
    defaultValue: undefined,
  },
  emphasized: {
    title: 'emphasized',
    type: ControlType.Boolean,
    /** description: "whether use emphasized style, emphasized means will use palette color `warning.f02`", */
    defaultValue: true,
  },
  color: {
    title: 'color',
    type: ControlType.Enum,
    /** description: "color for rating icon, when is not emphasized", */
    defaultValue: 'neutral.f06',
    options: lib.colorOptions,
    hidden(props) {
      return !!props.emphasized;
    },
  },
  disableTooltip: {
    title: 'disableTooltip',
    type: ControlType.Boolean,
    /** description: "disable tooltip", */
    defaultValue: false,
  },
  tooltips: {
    title: 'tooltips',
    type: ControlType.Array,
    /** description: "content of tooltip, array for each icon, `['first icon', 'second icon', ...]`", */
    control: {
      type: ControlType.String,
    },
    defaultValue: ['1', '2', '3', '4', '5'],
  },
  size: {
    title: 'size',
    type: ControlType.Enum,
    description:
      'that is not exist in code, should use jsx in your <RcIcon size={size} />',
    defaultValue: 'xlarge',
    options: [
      'xsmall',
      'small',
      'medium',
      'large',
      'xlarge',
      'xxlarge',
      'xxxlarge',
    ],
  },
  emptyIcon: {
    title: 'emptyIcon',
    type: ControlType.Enum,
    /** description: "The icon to display when empty.", */
    defaultValue: 'StarBorder',
    options: lib.iconOptions,
  },
  icon: {
    title: 'icon',
    type: ControlType.Enum,
    /** description: "The icon to display.", */
    defaultValue: 'Star',
    options: lib.iconOptions,
  },
  disabled: {
    title: 'disabled',
    type: ControlType.Boolean,
    /** description: "If `true`, the rating will be disabled.", */
    defaultValue: false,
  },
  name: {
    title: 'name',
    type: ControlType.String,
    /** description: "The name attribute of the radio `input` elements.
If `readOnly` is false, the prop is required,
this input name`should be unique within the parent form.", */
    defaultValue: 'rating',
  },
  // value: {
  //   title: "value",
  //   type: ControlType.Enum,
  //   /** description: "The rating value.", */
  //   defaultValue: undefined,
  // },
  max: {
    title: 'max',
    type: ControlType.Number,
    /** description: "Maximum rating.", */
    defaultValue: 5,
  },
  // TooltipProps: {
  //   title: "TooltipProps",
  //   type: ControlType.Object,
  //   /** description: "props for pass into `RcTooltip`", */
  //   defaultValue: undefined,
  // },
  readOnly: {
    title: 'readOnly',
    type: ControlType.Boolean,
    /** description: "Removes all hover effects and pointer events.", */
    defaultValue: false,
  },
  emptyLabelText: {
    title: 'emptyLabelText',
    type: ControlType.String,
    /** description: "The label read when the rating input is empty.", */
    defaultValue: undefined,
  },
});

export default RcRating;
