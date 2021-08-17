import { Meta, Story } from '@storybook/react/types-6-0';
import React, {
  ComponentProps,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../../storybook';
import { RcTextField } from '../TextField';
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
  switchToControlKnobs();

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
      name: 'Mui',
      href: 'https://material-ui.com/components/text-fields',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
