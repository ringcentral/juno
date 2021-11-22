import { useState } from 'react';

import { addPropertyControls, ControlType } from 'framer';

import * as lib from '../src';

const RcInlineEditable: React.ComponentType = ({
  value: valueProp,
  ...rest
}: any) => {
  const [value, setValue] = useState(valueProp || '');
  return (
    <lib.RcThemeProvider>
      <lib.RcInlineEditable
        {...rest}
        value={value}
        onChange={(newValue, reason) => {
          setValue(newValue);
        }}
      />
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcInlineEditable, {
  color: {
    title: 'color',
    type: ControlType.Enum,
    /** description: "color for apply to text, support full palette, default is `neutral.f06`", */
    defaultValue: 'neutral.f06',
    options: lib.colorOptions,
  },
  variant: {
    title: 'variant',
    type: ControlType.Enum,
    /** description: "text variant, default is `body1`", */
    defaultValue: 'body1',
    options: [
      'inherit',
      'display4',
      'display3',
      'display2',
      'display1',
      'headline2',
      'headline1',
      'title2',
      'title1',
      'subheading2',
      'subheading1',
      'body2',
      'body1',
      'caption2',
      'caption1',
    ],
  },
  multiline: {
    title: 'multiline',
    type: ControlType.Boolean,
    /** description: "If `true`, a textarea element will be rendered instead of an input.", */
    defaultValue: false,
  },
  // saving: {
  //   title: "saving",
  //   type: ControlType.Boolean,
  //   /** description: "If `true`, the editable state will be saving mode", */
  //   defaultValue: false,
  // },
  // title: {
  //   title: "title",
  //   type: ControlType.String,
  //   /** description: "apply title on label", */
  //   defaultValue: undefined,
  // },
  placeholder: {
    title: 'placeholder',
    type: ControlType.String,
    /** description: "The short hint displayed in the input before the user enters a value.", */
    defaultValue: 'Enter value here',
  },
  disabled: {
    title: 'disabled',
    type: ControlType.Boolean,
    /** description: "If `true`, the editable state will be disable, just plain string render.", */
    defaultValue: false,
  },
  value: {
    title: 'value',
    type: ControlType.String,
    /** description: "inline value", */
    defaultValue: undefined,
  },
  fullWidth: {
    title: 'fullWidth',
    type: ControlType.Boolean,
    /** description: "If `true`, the input will take up the full width of its container.", */
    defaultValue: false,
  },
  TooltipProps: {
    title: 'TooltipProps',
    type: ControlType.Object,
    /** description: "props for pass into `RcTooltip` when is not editing", */
    controls: {
      title: {
        title: 'title',
        type: ControlType.String,
        defaultValue: 'click to edit',
      },
    },
  },
  // inputProps: {
  //   title: "inputProps",
  //   type: ControlType.Object,
  //   /** description: "[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.", */
  //   defaultValue: undefined,
  // },
  // maxLength: {
  //   title: "maxLength",
  //   type: ControlType.Number,
  //   /** description: "maxLength of that value", */
  //   defaultValue: undefined,
  // },
});

export default RcInlineEditable;
