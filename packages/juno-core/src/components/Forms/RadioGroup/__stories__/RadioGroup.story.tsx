import React, { ComponentProps } from 'react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

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
      name: 'Spec',
      href: 'https://app.abstract.com/projects/d893ad32-0d8d-4e65-a37a-b4a5c881c51b/branches/master/commits/25371af1a86a4026e49d0d682816e4cc7ea6124b/files/8ffaf9bc-6939-4ef9-9bd1-6aa5b460e2ae/layers/84E0AC7F-7238-4629-B540-9719A8E10D97?mode=design&sha=a11e88130c79a89ea23900bab4855c3e872610fe',
    },
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
