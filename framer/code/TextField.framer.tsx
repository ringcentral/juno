import { addPropertyControls, ControlType } from 'framer';
import { useState } from 'react';

import * as lib from '../src';

const RcTextField: React.ComponentType = ({
  value: valueProp,
  ...rest
}: any) => {
  const [value, setValue] = useState(valueProp);

  return (
    <lib.RcThemeProvider>
      <lib.RcTextField
        {...rest}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcTextField, {
  variant: {
    title: 'variant',
    type: ControlType.Enum,
    /** description: "variant type for different display TextField", */
    defaultValue: 'standard',
    options: ['outline', 'standard', 'borderLess'],
  },
  size: {
    title: 'size',
    type: ControlType.Enum,
    /** description: "size for TextField when `variant="outline"`", */
    defaultValue: 'medium',
    options: ['small', 'medium', 'large'],
  },
  textVariant: {
    title: 'textVariant',
    type: ControlType.Enum,
    /** description: "set input text size when `variant="borderLess"`", */
    defaultValue: 'subheading1',
    options: lib.typographyOptions,
  },
  label: {
    title: 'label',
    type: ControlType.String,
    /** description: "The label content.", */
    defaultValue: 'label',
  },
  placeholder: {
    title: 'placeholder',
    type: ControlType.String,
    /** description: "The short hint displayed in the input before the user enters a value.", */
    defaultValue: 'placeholder',
  },
  helperText: {
    title: 'helperText',
    type: ControlType.String,
    /** description: "The helper text content.", */
    defaultValue: 'helperText',
  },
  radius: {
    title: 'radius',
    type: ControlType.Enum,
    /** description: "border radius for outline text field", */
    defaultValue: 'lg',
    options: lib.radiusOptions,
  },
  defaultValue: {
    title: 'defaultValue',
    type: ControlType.String,
    /** description: "The default value of the `input` element.", */
    defaultValue: undefined,
  },
  disabled: {
    title: 'disabled',
    type: ControlType.Boolean,
    /** description: "If `true`, the `input` element will be disabled.", */
    defaultValue: false,
  },
  // type: {
  //   title: "type",
  //   type: ControlType.String,
  //   /** description: "Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).", */
  //   defaultValue: undefined,
  // },
  focused: {
    title: 'focused',
    type: ControlType.Boolean,
    /** description: "If `true`, the component will be displayed in focused state.", */
    defaultValue: false,
  },
  autoFocus: {
    title: 'autoFocus',
    type: ControlType.Boolean,
    /** description: "If `true`, the `input` element will be focused during the first mount.", */
    defaultValue: false,
  },
  // name: {
  //   title: "name",
  //   type: ControlType.String,
  //   /** description: "Name attribute of the `input` element.", */
  //   defaultValue: undefined,
  // },
  value: {
    title: 'value',
    type: ControlType.String,
    /** description: "The value of the `input` element, required for a controlled component.", */
    defaultValue: undefined,
  },
  fullWidth: {
    title: 'fullWidth',
    type: ControlType.Boolean,
    /** description: "If `true`, the input will take up the full width of its container.", */
    defaultValue: false,
  },
  error: {
    title: 'error',
    type: ControlType.Boolean,
    /** description: "If `true`, the label will be displayed in an error state.", */
    defaultValue: false,
  },
  // inputProps: {
  //   title: "inputProps",
  //   type: ControlType.Object,
  //   /** description: "[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.", */
  //   defaultValue: undefined,
  // },
  required: {
    title: 'required',
    type: ControlType.Boolean,
    /** description: "If `true`, the label is displayed as required and the `input` element` will be required.", */
    defaultValue: false,
  },
  //   InputProps: {
  //     title: "InputProps",
  //     type: ControlType.Object,
  //     /** description: "Props applied to the Input element.
  // It will be a [`FilledInput`](/api/filled-input/),
  // [`OutlinedInput`](/api/outlined-input/) or [`Input`](/api/input/)
  // component depending on the `variant` prop value.", */
  //     defaultValue: undefined,
  //   },
  autoComplete: {
    title: 'autoComplete',
    type: ControlType.String,
    /** description: "This prop helps users to fill forms faster, especially on mobile devices.
The name can be confusing, as it's more like an autofill.
You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).", */
    defaultValue: undefined,
  },
  // FormHelperTextProps: {
  //   title: "FormHelperTextProps",
  //   type: ControlType.Object,
  //   /** description: "Props applied to the [`FormHelperText`](/api/form-helper-text/) element.", */
  //   defaultValue: undefined,
  // },
  // InputLabelProps: {
  //   title: "InputLabelProps",
  //   type: ControlType.Object,
  //   /** description: "Props applied to the [`InputLabel`](/api/input-label/) element.", */
  //   defaultValue: undefined,
  // },
  multiline: {
    title: 'multiline',
    type: ControlType.Boolean,
    /** description: "If `true`, a textarea element will be rendered instead of an input.", */
    defaultValue: false,
  },
  rows: {
    title: 'rows',
    type: ControlType.Number,
    /** description: "Number of rows to display when multiline option is set to true.", */
    defaultValue: undefined,
  },
  rowsMax: {
    title: 'rowsMax',
    type: ControlType.Number,
    /** description: "Maximum number of rows to display when multiline option is set to true.", */
    defaultValue: undefined,
  },
  align: {
    title: 'align',
    type: ControlType.Enum,
    /** description: "align for text", */
    defaultValue: undefined,
    options: [undefined, 'left', 'right', 'center'],
  },
  gutterBottom: {
    title: 'gutterBottom',
    type: ControlType.Boolean,
    /** description: "", */
    defaultValue: false,
  },
  clearBtn: {
    title: 'clearBtn',
    type: ControlType.Boolean,
    /** description: "is should show clear button", */
    defaultValue: true,
  },
  // clearButtonProps: {
  //   title: "clearButtonProps",
  //   type: ControlType.Object,
  //   /** description: "props apply on default clear button", */
  //   defaultValue: undefined,
  // },
  autoSelect: {
    title: 'autoSelect',
    type: ControlType.Boolean,
    /** description: "If `true`, the input element will be `select` during the first mount.", */
    defaultValue: false,
  },
});

export default RcTextField;
