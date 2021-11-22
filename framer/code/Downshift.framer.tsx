import { useState } from 'react';

import { addPropertyControls, ControlType } from 'framer';

import * as lib from '../src';

const options = [
  { id: 'phone_1', label: 'Afghanistan' },
  { id: 'phone_2', label: 'Aland Islands' },
  { id: 'phone_3', label: 'Bahamas' },
  { id: 'phone_4', label: 'Bahrain' },
  { id: 'phone_5', label: 'China' },
  { id: 'phone_6', label: 'Algeria' },
  { id: 'phone_7', label: 'American Samoa' },
  { id: 'phone_8', label: 'Andorra' },
  { id: 'phone_9', label: 'Angola' },
  { id: 'phone_10', label: 'Anguilla' },
  { id: 'phone_11', label: 'Antarctica' },
  { id: 'phone_12', label: 'Antigua and Barbuda' },
  { id: 'phone_13', label: 'Argentina' },
  { id: 'phone_14', label: 'Armenia' },
];

const RcDownshift: React.ComponentType = ({ _children, ...rest }: any) => {
  const [value, setValue] = useState<lib.RcDownshiftSelectedItem[]>([]);

  return (
    <lib.RcThemeProvider>
      <lib.RcDownshift
        {...rest}
        options={options}
        value={value}
        onChange={(selectedItems) => {
          setValue(selectedItems);
        }}
        filterOptions={lib.RcDownshiftDefaultFilterOptions}
      />
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcDownshift, {
  //   keyToTags: {
  //     title: "keyToTags",
  //     type: ControlType.Object,
  //     /** description: "one of that character, also can be confirm a tag", */
  //     defaultValue: [",", ";", "↵"],
  //   },
  variant: {
    title: 'variant',
    type: ControlType.Enum,
    /** description: "display mode,
                                                                                                                                          when be `autocomplete`, that `multiple` will be `false`", */
    defaultValue: 'tags',
    options: ['tags', 'autocomplete'],
  },
  label: {
    title: 'label',
    type: ControlType.String,
    /** description: "The label content.", */
    defaultValue: 'Downshift',
  },
  placeholder: {
    title: 'placeholder',
    type: ControlType.String,
    /** description: "The short hint displayed in the input before the user enters a value.", */
    defaultValue: 'Enter a name',
  },
  helperText: {
    title: 'helperText',
    type: ControlType.String,
    /** description: "The helper text content.", */
    defaultValue: 'hint',
  },
  multiple: {
    title: 'multiple',
    type: ControlType.Boolean,
    /** description: "is that can select multiple, default is `false`", */
    defaultValue: false,
  },
  clearBtn: {
    title: 'clearBtn',
    type: ControlType.Boolean,
    /** description: "is should show clear button", */
    defaultValue: false,
  },
  toggleButton: {
    title: 'toggleButton',
    type: ControlType.Boolean,
    /** description: "is have ToggleButton", */
    defaultValue: false,
  },
  disableCloseOnSelect: {
    title: 'disableCloseOnSelect',
    type: ControlType.Boolean,
    /** description: "If `true`, the popup won't close when a value is selected.", */
    defaultValue: false,
  },
  openOnFocus: {
    title: 'openOnFocus',
    type: ControlType.Boolean,
    /** description: "If `true`, the popup will open on input focus.
                                                                                                                                                                                                                                                                                                              and that also set `disableCloseOnSelect` to `true`", */
    defaultValue: false,
  },
  //   options: {
  //     title: "options",
  //     type: ControlType.Object,
  //     /** description: "", */
  //     defaultValue: undefined,
  //   },
  //   value: {
  //     title: "value",
  //     type: ControlType.Object,
  //     /** description: "selectedItems array list", */
  //     defaultValue: undefined,
  //   },
  disabledItemsHighlightable: {
    title: 'disabledItemsHighlightable',
    type: ControlType.Boolean,
    /** description: "If `true`, will allow disabled items highlightable.", */
    defaultValue: false,
  },
  initialIsOpen: {
    title: 'initialIsOpen',
    type: ControlType.Boolean,
    /** description: "This is the initial isOpen value when downshift is initialized.", */
    defaultValue: false,
  },
  //   filterOptions: {
  //     title: "filterOptions",
  //     type: ControlType.Object,
  //     /** description: "A filter function that determines the options that are eligible.", */
  //     defaultValue: undefined,
  //   },
  groupVariant: {
    title: 'groupVariant',
    type: ControlType.Enum,
    /** description: "group layout mode

                                                                                                                                                                                                                                                                                                                                                                                                              - `normal`: use group name as group title
                                                                                                                                                                                                                                                                                                                                                                                                              - `expanded`: use first-item as group title, and that is `clickable`", */
    defaultValue: 'normal',
    options: ['normal', 'expanded'],
  },
  //   groupExpanded: {
  //     title: "groupExpanded",
  //     type: ControlType.Boolean,
  //     /** description: "group expanded state, you can control expanded state by that,
  // use when `groupVariant` is `expanded`

  // - `true`: expand all
  // - `false`: collapse all
  // - `{key: boolean}`: control group state", */
  //     defaultValue: undefined,
  //   },
  //   SuggestionListProps: {
  //     title: "SuggestionListProps",
  //     type: ControlType.Object,
  //     /** description: "SuggestionList VirtualizedList Props", */
  //     defaultValue: undefined,
  //   },
  freeSolo: {
    title: 'freeSolo',
    type: ControlType.Boolean,
    /** description: "If `true`, the RcDownshift is free solo, meaning that the user input is not bound to provided options.", */
    defaultValue: false,
  },
  maxFreeSolo: {
    title: 'maxFreeSolo',
    type: ControlType.Number,
    /** description: "max number of tags,", */
    defaultValue: 20,
  },
  autoSelect: {
    title: 'autoSelect',
    type: ControlType.Boolean,
    /** description: "If `true`, the selected option becomes the value of the input
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              when the input loses focus unless the user chooses
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              a different option or changes the character string in the input.", */
    defaultValue: false,
  },
  //   PopperProps: {
  //     title: "PopperProps",
  //     type: ControlType.Object,
  //     /** description: "props for apply on `RcPopper`", */
  //     defaultValue: undefined,
  //   },
  //   ToggleButtonProps: {
  //     title: "ToggleButtonProps",
  //     type: ControlType.Object,
  //     /** description: "Props for apply on ToggleButton", */
  //     defaultValue: undefined,
  //   },
  autoClose: {
    title: 'autoClose',
    type: ControlType.Boolean,
    /** description: "auto close menu when options filter result is zero", */
    defaultValue: false,
  },
  autoHighlight: {
    title: 'autoHighlight',
    type: ControlType.Boolean,
    /** description: "If `true`, the first option is automatically highlighted.", */
    defaultValue: true,
  },
  //   InputProps: {
  //     title: "InputProps",
  //     type: ControlType.Object,
  //     /** description: "Props applied to the Input element
  // Props applied to the Input element.
  // It will be a [`FilledInput`](/api/filled-input/),
  // [`OutlinedInput`](/api/outlined-input/) or [`Input`](/api/input/)
  // component depending on the `variant` prop value.", */
  //     defaultValue: undefined,
  //   },
  //   open: {
  //     title: "open",
  //     type: ControlType.Boolean,
  //     /** description: "Control the popup` open state.", */
  //     defaultValue: false,
  //   },
  disabled: {
    title: 'disabled',
    type: ControlType.Boolean,
    /** description: "If `true`, the `input` element will be disabled.", */
    defaultValue: false,
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
  //     /** description: "[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.", */
  //     defaultValue: undefined,
  //   },
  required: {
    title: 'required',
    type: ControlType.Boolean,
    /** description: "If `true`, the label is displayed as required and the `input` element` will be required.", */
    defaultValue: false,
  },
  autoComplete: {
    title: 'autoComplete',
    type: ControlType.String,
    /** description: "This prop helps users to fill forms faster, especially on mobile devices.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              The name can be confusing, as it's more like an autofill.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).", */
    defaultValue: undefined,
  },
  //   FormHelperTextProps: {
  //     title: "FormHelperTextProps",
  //     type: ControlType.Object,
  //     /** description: "Props applied to the [`FormHelperText`](/api/form-helper-text/) element.", */
  //     defaultValue: undefined,
  //   },
  //   InputLabelProps: {
  //     title: "InputLabelProps",
  //     type: ControlType.Object,
  //     /** description: "Props applied to the [`InputLabel`](/api/input-label/) element.", */
  //     defaultValue: undefined,
  //   },
  gutterBottom: {
    title: 'gutterBottom',
    type: ControlType.Boolean,
    /** description: "", */
    defaultValue: false,
  },
  //   clearButtonProps: {
  //     title: "clearButtonProps",
  //     type: ControlType.Object,
  //     /** description: "props apply on default clear button", */
  //     defaultValue: undefined,
  //   },
  //   inputValue: {
  //     title: "inputValue",
  //     type: ControlType.String,
  //     /** description: "current text field input value", */
  //     defaultValue: undefined,
  //   },
  debug: {
    title: 'debug',
    type: ControlType.Boolean,
    /** description: "If `true`, the popup will ignore the blur event. You can inspect the popup markup with your browser tools. Consider this option when you need to customize the component.", */
    defaultValue: false,
  },
});

export default RcDownshift;
