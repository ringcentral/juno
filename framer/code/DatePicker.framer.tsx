import { useRef, useState } from 'react';

import { addPropertyControls, ControlType } from 'framer';

import * as lib from '../src';

const RcDatePicker: React.ComponentType = ({
  _children,
  max: maxProp,
  min: minProp,
  value: valueProp,
  ...rest
}: any) => {
  const min = useRef(minProp ? new Date(minProp) : undefined);
  const max = useRef(maxProp ? new Date(maxProp) : undefined);
  const [value, setValue] = useState<number | Date | undefined>(valueProp);

  lib.useChange(
    () => {
      min.current = minProp ? new Date(minProp) : undefined;
      max.current = maxProp ? new Date(maxProp) : undefined;
    },
    () => minProp,
  );

  const handleChange = (time: number) => {
    setValue(time);
  };

  return (
    <lib.RcThemeProvider>
      <lib.RcDatePicker
        value={value}
        onChange={handleChange}
        min={min.current}
        max={max.current}
        {...rest}
      />
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcDatePicker, {
  label: {
    title: 'label',
    type: ControlType.String,
    /** description: "The label content.", */
    defaultValue: 'Date',
  },
  placeholder: {
    title: 'placeholder',
    type: ControlType.String,
    /** description: "The short hint displayed in the input before the user enters a value.", */
    defaultValue: 'Enter Date',
  },
  size: {
    title: 'size',
    type: ControlType.Enum,
    /** description: "size for date picker, default with medium
with prop medium and small, default with medium
size for TextField when `variant="outline"`", */
    defaultValue: 'medium',
    options: ['small', 'medium'],
  },
  disabled: {
    title: 'disabled',
    type: ControlType.Boolean,
    /** description: "If `true`, the `input` element will be disabled.", */
    defaultValue: false,
  },
  autoFocus: {
    title: 'autoFocus',
    type: ControlType.Boolean,
    /** description: "If `true`, the `input` element will be focused during the first mount.", */
    defaultValue: false,
  },
  //   value: {
  //     title: "value",
  //     type: ControlType.Object,
  //     /** description: "value for picker", */
  //     defaultValue: undefined,
  //   },
  max: {
    title: 'max',
    type: ControlType.String,
    /** description: "Max date", */
    defaultValue: '2100/12/31',
  },
  min: {
    title: 'min',
    type: ControlType.String,
    /** description: "Min date", */
    defaultValue: '1900/1/1',
  },
  disablePast: {
    title: 'disablePast',
    type: ControlType.Boolean,
    /** description: "Disable past dates", */
    defaultValue: false,
  },
  disableFuture: {
    title: 'disableFuture',
    type: ControlType.Boolean,
    /** description: "Disable future dates", */
    defaultValue: false,
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
  //   inputProps: {
  //     title: "inputProps",
  //     type: ControlType.Object,
  //     /** description: "[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
  // announcementText for screen reader read", */
  //     defaultValue: undefined,
  //   },
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
  helperText: {
    title: 'helperText',
    type: ControlType.String,
    /** description: "The helper text content.", */
    defaultValue: undefined,
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
    /** description: "when hover on the textField, if show the clearBtn. With default is true.
is should show clear button", */
    defaultValue: true,
  },
  //   clearButtonProps: {
  //     title: "clearButtonProps",
  //     type: ControlType.Object,
  //     /** description: "props apply on default clear button", */
  //     defaultValue: undefined,
  //   },
  todayButtonText: {
    title: 'todayButtonText',
    type: ControlType.String,
    /** description: "Text label for Today button
Text label for Today button", */
    defaultValue: 'Today',
  },
  formatString: {
    title: 'formatString',
    type: ControlType.String,
    /** description: "Date format string, default with 'MM/DD/YYYY'
Date format string, default with 'MM/DD/YYYY'", */
    defaultValue: 'MM/DD/YYYY',
  },
  //   loadingIndicator: {
  //     title: "loadingIndicator",
  //     type: ControlType.Object,
  //     /** description: "Custom loading indicator", */
  //     defaultValue: undefined,
  //   },
  //   PopoverProps: {
  //     title: "PopoverProps",
  //     type: ControlType.Object,
  //     /** description: "props for hourPicker component", */
  //     defaultValue: undefined,
  //   },
  //   ActionSymbol: {
  //     title: "ActionSymbol",
  //     type: ControlType.Object,
  //     /** description: "action icon", */
  //     defaultValue: undefined,
  //   },
  locale: {
    title: 'locale',
    type: ControlType.String,
    /** description: "i18n locale country", */
    defaultValue: 'en',
  },
  variant: {
    title: 'variant',
    type: ControlType.Enum,
    /** description: "variant type for different display TextField", */
    defaultValue: 'standard',
    options: ['outline', 'standard', 'borderLess'],
  },
  radius: {
    title: 'radius',
    type: ControlType.Enum,
    /** description: "border radius for outline text field", */
    defaultValue: 'lg',
    options: lib.radiusOptions,
  },
  //   screenReaderProps: {
  //     title: "screenReaderProps",
  //     type: ControlType.Object,
  //     /** description: "Props containing functions for getting attribute for target element", */
  //     defaultValue: undefined,
  //   },
});

export default RcDatePicker;
