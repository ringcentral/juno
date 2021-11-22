import { cloneElement, useState } from 'react';

import { addPropertyControls, ControlType } from 'framer';

import * as lib from '../src';

const RcSelect: React.ComponentType = ({ _children, ...rest }: any) => {
  const [value, setValue] = useState<any>(undefined);

  const children =
    _children?.map((a: any, i: number) => {
      const item = a.props.children;
      return cloneElement(item, { key: i, value: item.props.value });
    }) || [];

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value } = event.target;
    setValue(value);
  };

  return (
    <lib.RcThemeProvider>
      <lib.RcSelect {...rest} onChange={handleChange} value={value}>
        {children.length > 0 ? (
          children
        ) : (
          <lib.RcMenuItem value="0">
            <lib.RcListItemText primary="add children" />
          </lib.RcMenuItem>
        )}
      </lib.RcSelect>
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcSelect, {
  label: {
    title: 'label',
    type: ControlType.String,
    /** description: "See [OutlinedInput#label](/api/outlined-input/#props)
The label content.", */
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
  //   input: {
  //     title: "input",
  //     type: ControlType.Object,
  //     /** description: "An `Input` element; does not have to be a material-ui specific `Input`.", */
  //     defaultValue: undefined,
  //   },
  //   defaultValue: {
  //     title: "defaultValue",
  //     type: ControlType.Enum,
  //     /** description: "The default element value. Use when the component is not controlled.", */
  //     defaultValue: undefined,
  //   },
  _children: {
    title: 'children',
    type: ControlType.Array,
    control: {
      type: ControlType.ComponentInstance,
    },
    /** description: "The option elements to populate the select with.
  Can be some `MenuItem` when `native` is false and `option` when `native` is true.

  ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.", */
  },
  size: {
    title: 'size',
    type: ControlType.Enum,
    /** description: "size with type 'medium' , 'large' , default with medium", */
    defaultValue: 'medium',
    options: ['medium', 'large'],
  },
  //   open: {
  //     title: "open",
  //     type: ControlType.Boolean,
  //     /** description: "Control `select` open state.
  // You can only use it when the `native` prop is `false` (default).", */
  //     defaultValue: false,
  //   },
  // multiple: {
  //   title: "multiple",
  //   type: ControlType.Boolean,
  //   /** description: "If `true`, `value` must be an array and the menu will support multiple selections.", */
  //   defaultValue: false,
  // },
  disabled: {
    title: 'disabled',
    type: ControlType.Boolean,
    /** description: "If `true`, the `input` element will be disabled.", */
    defaultValue: false,
  },
  variant: {
    title: 'variant',
    type: ControlType.Enum,
    /** description: "variant for select component", */
    defaultValue: 'line',
    options: ['line', 'box'],
  },
  //   type: {
  //     title: "type",
  //     type: ControlType.String,
  //     /** description: "Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).", */
  //     defaultValue: undefined,
  //   },
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
  //   name: {
  //     title: "name",
  //     type: ControlType.String,
  //     /** description: "Name attribute of the `input` element.", */
  //     defaultValue: undefined,
  //   },
  //   value: {
  //     title: "value",
  //     type: ControlType.Enum,
  //     /** description: "The input value. Providing an empty string will select no options.
  // This prop is required when the `native` prop is `false` (default).
  // Set to an empty string `''` if you don't want any of the available options to be selected.

  // If the value is an object it must have reference equality with the option in order to be selected.
  // If the value is not an object, the string representation must match with the string representation of the option in order to be selected.", */
  //     defaultValue: undefined,
  //   },
  fullWidth: {
    title: 'fullWidth',
    type: ControlType.Boolean,
    /** description: "If `true`, the input will take up the full width of its container.", */
    defaultValue: false,
  },
  error: {
    title: 'error',
    type: ControlType.Boolean,
    /** description: "If `true`, the input will indicate an error. This is normally obtained via context from
FormControl.", */
    defaultValue: false,
  },
  //   inputProps: {
  //     title: "inputProps",
  //     type: ControlType.Object,
  //     /** description: "[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
  // When `native` is `true`, the attributes are applied on the `select` element.", */
  //     defaultValue: undefined,
  //   },
  readOnly: {
    title: 'readOnly',
    type: ControlType.Boolean,
    /** description: "It prevents the user from changing the value of the field
(not from interacting with the field).", */
    defaultValue: false,
  },
  required: {
    title: 'required',
    type: ControlType.Boolean,
    /** description: "If `true`, the `input` element will be required.", */
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
  //   autoComplete: {
  //     title: "autoComplete",
  //     type: ControlType.String,
  //     /** description: "This prop helps users to fill forms faster, especially on mobile devices.
  // The name can be confusing, as it's more like an autofill.
  // You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).", */
  //     defaultValue: undefined,
  //   },
  gutterBottom: {
    title: 'gutterBottom',
    type: ControlType.Boolean,
    /** description: "", */
    defaultValue: false,
  },
  textVariant: {
    title: 'textVariant',
    type: ControlType.Enum,
    /** description: "set input text size when `variant="borderLess"`", */
    defaultValue: 'inherit',
    options: lib.typographyOptions,
  },
  //   endAdornment: {
  //     title: "endAdornment",
  //     type: ControlType.Object,
  //     /** description: "End `InputAdornment` for this component.", */
  //     defaultValue: undefined,
  //   },
  //   inputComponent: {
  //     title: "inputComponent",
  //     type: ControlType.Object,
  //     /** description: "The component used for the `input` element.
  // Either a string to use a HTML element or a component.", */
  //     defaultValue: undefined,
  //   },
  displayEmpty: {
    title: 'displayEmpty',
    type: ControlType.Boolean,
    /** description: "If `true`, a value is displayed even if no items are selected.

In order to display a meaningful value, a function should be passed to the `renderValue` prop which returns the value to be displayed when no items are selected.
You can only use it when the `native` prop is `false` (default).", */
    defaultValue: false,
  },
  //   IconComponent: {
  //     title: "IconComponent",
  //     type: ControlType.Object,
  //     /** description: "The icon that displays the arrow.", */
  //     defaultValue: undefined,
  //   },
  id: {
    title: 'id',
    type: ControlType.String,
    /** description: "The ID of an element that acts as an additional label. The Select will
    be labelled by the additional label and the selected value.", */
    defaultValue: (Math.random() + 1).toString(36).substring(7),
  },
  labelId: {
    title: 'labelId',
    type: ControlType.String,
    /** description: "The ID of an element that acts as an additional label. The Select will
    be labelled by the additional label and the selected value.", */
    defaultValue: undefined,
  },
  //   labelWidth: {
  //     title: "labelWidth",
  //     type: ControlType.Number,
  //     /** description: "See [OutlinedInput#label](/api/outlined-input/#props)", */
  //     defaultValue: undefined,
  //   },
  //   MenuProps: {
  //     title: "MenuProps",
  //     type: ControlType.Object,
  //     /** description: "Props applied to the [`Menu`](/api/menu/) element.", */
  //     defaultValue: undefined,
  //   },
  native: {
    title: 'native',
    type: ControlType.Boolean,
    /** description: "If `true`, the component will be using a native `select` element.", */
    defaultValue: false,
  },
  //   SelectDisplayProps: {
  //     title: "SelectDisplayProps",
  //     type: ControlType.Object,
  //     /** description: "Props applied to the clickable div element.", */
  //     defaultValue: undefined,
  //   },
  //   SelectInputProps: {
  //     title: "SelectInputProps",
  //     type: ControlType.Object,
  //     /** description: "apply for inputComponent component, you can custom `MenuComponent`, `MenuProps` here", */
  //     defaultValue: undefined,
  //   },
  virtualize: {
    title: 'virtualize',
    type: ControlType.Boolean,
    /** description: "is that menu virtualize", */
    defaultValue: false,
  },
});

export default RcSelect;
