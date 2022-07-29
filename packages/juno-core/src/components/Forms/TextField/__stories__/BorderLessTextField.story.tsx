import React, {
  ComponentProps,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { RcTextField } from '@ringcentral/juno';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

import TextFieldStory from './TextField.story';

export default {
  title: '🚀 Cleanup Components/Forms/BorderLessTextField',
  component: RcTextField,
  argTypes: {
    ...sortInDocTable<keyof BorderLessTextFieldProps>([
      'align',
      'multiline',
      'textVariant',
    ]),
    ...notControlInDocTable<keyof BorderLessTextFieldProps>([]),
    ...notShowInDocTable<keyof BorderLessTextFieldProps>([]),
    ...TextFieldStory.argTypes,
  },
} as Meta;

type BorderLessTextFieldProps = ComponentProps<typeof RcTextField>;

export const BorderLessTextField: Story<BorderLessTextFieldProps> = ({
  children,
  value: valueArg,
  ...args
}) => {
  const ref = useRef();
  const inputRef = useRef();

  const [value, setValue] = useState<string>(valueArg as any);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useLayoutEffect(() => {
    console.log(ref, inputRef);
  }, []);

  return (
    <RcTextField
      {...args}
      value={value}
      onChange={handleChange}
      ref={ref}
      inputRef={inputRef}
    />
  );
};

BorderLessTextField.storyName = 'BorderLessTextField';

BorderLessTextField.args = {
  variant: 'borderLess',
  placeholder: 'title',
  fullWidth: true,
  clearBtn: false,
  id: 'id-BorderLessTextField-1',
  textVariant: 'display1',
  align: 'center',
  multiline: true,
};

BorderLessTextField.argTypes = {
  ...notControlInDocTable<keyof BorderLessTextFieldProps>([]),
};

BorderLessTextField.parameters = {
  tags: [
    {
      name: 'Spec',
      href: 'https://app.abstract.com/projects/d893ad32-0d8d-4e65-a37a-b4a5c881c51b/branches/master/commits/5f4a29ef1221c8ef2a1e199b44a17b202b96e5df/files/8ffaf9bc-6939-4ef9-9bd1-6aa5b460e2ae/layers/8775122F-20F2-4591-B471-9F0A164963FE',
    },
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/text-fields',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
