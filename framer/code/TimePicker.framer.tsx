import { useRef, useState } from 'react';

import { addPropertyControls, ControlType } from 'framer';

import * as lib from '../src';

const RcTimePicker: React.ComponentType = ({
  _children,
  max: maxProp,
  min: minProp,
  value: valueProp,
  ...rest
}: any) => {
  const min = useRef(minProp ? new Date(`2020/1/1 ${minProp}`) : undefined);
  const max = useRef(maxProp ? new Date(`2020/1/1 ${maxProp}`) : undefined);
  const [value, setValue] = useState<number | Date | undefined>(valueProp);

  lib.useChange(
    () => {
      min.current = minProp ? new Date(`2020/1/1 ${minProp}`) : undefined;
      max.current = maxProp ? new Date(`2020/1/1 ${maxProp}`) : undefined;
    },
    () => minProp,
  );

  const handleChange = (time: number) => {
    setValue(time);
  };

  return (
    <lib.RcThemeProvider>
      <lib.RcTimePicker
        value={value}
        onChange={handleChange}
        min={min.current}
        max={max.current}
        {...rest}
      />
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcTimePicker, {
  isTwelveHourSystem: {
    title: 'isTwelveHourSystem',
    type: ControlType.Boolean,
    /** description: "Is 12 hours system", */
    defaultValue: false,
  },
  label: {
    title: 'label',
    type: ControlType.String,
    /** description: "The label content.", */
    defaultValue: 'Time',
  },
  placeholder: {
    title: 'placeholder',
    type: ControlType.String,
    /** description: "The short hint displayed in the input before the user enters a value.", */
    defaultValue: 'Enter Time',
  },
  helperText: {
    title: 'helperText',
    type: ControlType.String,
    /** description: "The helper text content.", */
    defaultValue: undefined,
  },
  size: {
    title: 'size',
    type: ControlType.Enum,
    /** description: "with two size: 'small' | 'medium', default with medium.
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
  //     /** description: "Date or timestamp", */
  //     defaultValue: undefined,
  //   },
  max: {
    title: 'max',
    type: ControlType.String,
    /** description: "max time", */
    defaultValue: undefined,
  },
  min: {
    title: 'min',
    type: ControlType.String,
    /** description: "min time", */
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
  //   clearButtonProps: {
  //     title: "clearButtonProps",
  //     type: ControlType.Object,
  //     /** description: "props apply on default clear button", */
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
  //   dateMode: {
  //     title: "dateMode",
  //     type: ControlType.Boolean,
  //     /** description: "When all using date, this props will be remove,", */
  //     defaultValue: false,
  //   },
  // ,HourPickerProps: {
  //         title: "HourPickerProps",
  //         type: ControlType.Object,
  //         /** description: "props for hourPicker component", */
  //         defaultValue: "{
  //     getScreenReaderLabel: (hour: string) =>
  //       `Hour: ${hour}, use up and down arrow keys to change hour time by 1`,
  //   }",

  //       }
  // ,MinutePickerProps: {
  //         title: "MinutePickerProps",
  //         type: ControlType.Object,
  //         /** description: "props for minutePicker component", */
  //         defaultValue: "{
  //     getScreenReaderLabel: (minute: string) =>
  //       `Minute: ${minute}, use up and down arrow keys to change minutes time by 15 minutes`,
  //   }",

  //       }
  // ,PeriodToggleProps: {
  //         title: "PeriodToggleProps",
  //         type: ControlType.Object,
  //         /** description: "props for periodToggle component", */
  //         defaultValue: "{
  //     getScreenReaderLabel: (period: string) =>
  //       `${period}, use up or down arrow keys to switch between AM or PM`,
  //   }",

  //       }
});

export default RcTimePicker;
