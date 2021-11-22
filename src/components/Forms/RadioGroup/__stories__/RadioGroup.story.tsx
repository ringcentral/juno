import React, { ComponentProps } from 'react';

import { Meta, Story } from '@storybook/react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../../storybook';
import { RcTypography } from '../../../Typography';
import { RcFormControl } from '../../FormControl';
import { RcFormControlLabel } from '../../FormControlLabel';
import { RcFormLabel } from '../../FormLabel';
import { RcRadio } from '../../Radio';
import { RcRadioGroup } from '../RadioGroup';

export default {
  title: '🚀 Cleanup Components/Forms/RadioGroup',
  component: RcRadioGroup,
  argTypes: {
    ...sortInDocTable<keyof RadioGroupProps>(['row', 'value']),
    ...notControlInDocTable<keyof RadioGroupProps>([]),
    ...notShowInDocTable<keyof RadioGroupProps>([]),
  },
} as Meta;

type RadioGroupProps = ComponentProps<typeof RcRadioGroup>;

export const RadioGroup: Story<RadioGroupProps> = ({ children, ...args }) => {
  switchToControlKnobs();

  return (
    <RcRadioGroup {...args}>
      <RcFormControlLabel
        value="radio1"
        control={<RcRadio />}
        label="Radio 1"
      />
      <RcFormControlLabel
        value="radio2"
        control={<RcRadio />}
        label="Radio 2"
      />
    </RcRadioGroup>
  );
};

RadioGroup.args = {};

RadioGroup.argTypes = {
  ...notControlInDocTable<keyof RadioGroupProps>([]),
};

RadioGroup.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/radio-buttons/#radio',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

export const RadioGroupExamples: Story<RadioGroupProps> = () => {
  switchToControlKnobs();

  const [value, setValue] = React.useState('radio1');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <RcTypography
        color="neutral.f06"
        variant="headline1"
        paragraph
        display="block"
      >
        With RcFormControl and RcRadioGroup
      </RcTypography>
      <RcFormControl>
        <RcFormLabel>FormLabel</RcFormLabel>
        <RcRadioGroup value={value} onChange={handleChange}>
          <RcFormControlLabel
            value="radio1"
            control={<RcRadio />}
            label="RcRadio wrapped by RcFormControlLabel"
          />
          <RcRadio label="RcRadio use label prop" value="radio2" />
          <RcRadio label="RcRadio disabled" value="radio3" disabled />
        </RcRadioGroup>
      </RcFormControl>
    </div>
  );
};

RadioGroupExamples.storyName = 'RadioGroup Examples';
