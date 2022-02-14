import React, { ComponentProps, useState } from 'react';

import { Meta, Story } from '@storybook/react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { RcDialTextField } from '../DialTextField';

export default {
  title: '🚀 Cleanup Components/Dialer/DialTextField',
  component: RcDialTextField,
  argTypes: {
    ...sortInDocTable<keyof DialTextFieldProps>([]),
    ...notControlInDocTable<keyof DialTextFieldProps>([]),
    ...notShowInDocTable<keyof DialTextFieldProps>([]),
  },
} as Meta;

type DialTextFieldProps = ComponentProps<typeof RcDialTextField>;

export const DialTextField: Story<DialTextFieldProps> = ({
  children,
  ...args
}) => {
  switchToControlKnobs();

  const [value, setValue] = useState('');

  return (
    <RcDialTextField {...args} value={value} onChange={setValue}>
      {children}
    </RcDialTextField>
  );
};

DialTextField.storyName = 'DialTextField';

DialTextField.args = {
  placeholder: 'Enter a number',
};

DialTextField.argTypes = {
  ...notControlInDocTable<keyof DialTextFieldProps>([]),
};

DialTextField.parameters = {
  tags: [
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
