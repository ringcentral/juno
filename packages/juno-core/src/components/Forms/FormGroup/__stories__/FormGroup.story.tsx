import React, { ComponentProps } from 'react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

import { RcCheckbox } from '../../Checkbox';
import { RcSwitch } from '../../Switch';
import { RcFormGroup } from '../FormGroup';

export default {
  title: '🚀 Cleanup Components/Forms/FormGroup',
  component: RcFormGroup,
  argTypes: {
    ...sortInDocTable<keyof FormGroupProps>([]),
    ...notControlInDocTable<keyof FormGroupProps>([]),
    ...notShowInDocTable<keyof FormGroupProps>([]),
  },
} as Meta;

type FormGroupProps = ComponentProps<typeof RcFormGroup>;

export const FormGroup: Story<FormGroupProps> = ({ children, ...args }) => {
  switchToControlKnobs();
  const onChange = (checked: any) => console.log(checked);

  return (
    <RcFormGroup {...args}>
      <RcSwitch label="Toggle button 1" onChange={onChange} />
      <RcSwitch label="Toggle button 2" onChange={onChange} />
      <RcSwitch label="Toggle button 3" onChange={onChange} />
      <RcCheckbox label="Toggle button 3" onChange={onChange} />
      <RcCheckbox label="Toggle button 3" onChange={onChange} />
      <RcCheckbox label="Toggle button 3" onChange={onChange} />
    </RcFormGroup>
  );
};

FormGroup.args = {};

FormGroup.argTypes = {
  ...notControlInDocTable<keyof FormGroupProps>([]),
};

FormGroup.storyName = 'FormGroup';

FormGroup.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/api/form-group/#formgroup-api',
    },
  ],
};
