import { Meta, Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';

import { Add, AddBorder, MemberBorder, People } from '../../../../icon';
import {
  notControlInDocTable,
  notShowInDocTable,
  paletteChoice,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../../storybook';
import { RcIcon } from '../../../Icon';
import { RcTypography } from '../../../Typography';
import { RcFormControl } from '../../FormControl';
import { RcFormLabel } from '../../FormLabel';
import { RcRadioGroup } from '../../RadioGroup';
import { RcRadio } from '../Radio';

export default {
  title: '🚀 Cleanup Components/Forms/Radio',
  component: RcRadio,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: paletteChoice,
      },
    },
    ...sortInDocTable<keyof RadioProps>([
      'size',
      'checked',
      'disabled',
      'autoFocus',
      'readOnly',
      'required',
      'error',
      'followColorWhenUnChecked',
    ]),
    ...notControlInDocTable<keyof RadioProps>([]),
    ...notShowInDocTable<keyof RadioProps>([]),
  },
} as Meta;

type RadioProps = ComponentProps<typeof RcRadio>;

export const Radio: Story<RadioProps> = ({ ...args }) => {
  switchToControlKnobs();
  return <RcRadio {...args} />;
};

Radio.args = {
  color: 'interactive.f01',
  size: 'medium',
};

Radio.argTypes = {
  ...notControlInDocTable<keyof RadioProps>([]),
};

Radio.parameters = {
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

export const RadioExamples: Story<RadioProps> = () => {
  switchToControlKnobs();

  return (
    <>
      <RcTypography
        color="neutral.f06"
        variant="headline1"
        paragraph
        display="block"
      >
        Label placement end
      </RcTypography>
      <RcRadio
        formControlLabelProps={{
          labelPlacement: 'end',
        }}
        label="Label"
      />
      <br />
      <br />
      <br />
      <RcTypography
        color="neutral.f06"
        variant="headline1"
        paragraph
        display="block"
      >
        Label placement start
      </RcTypography>
      <RcRadio
        formControlLabelProps={{
          labelPlacement: 'start',
        }}
        label="Label"
      />
    </>
  );
};

RadioExamples.storyName = 'Radio Examples';

export const RadioWithCustomIcon: Story<RadioProps> = ({ size }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(+event.target.value);
  };

  return (
    <RcFormControl>
      <RcFormLabel>Gender</RcFormLabel>
      <RcRadioGroup row value={value} onChange={handleChange}>
        <RcRadio
          value={0}
          size={size}
          label="female"
          icon={<RcIcon symbol={MemberBorder} />}
          checkedIcon={<RcIcon symbol={People} />}
        />
        <RcRadio
          value={1}
          size={size}
          label="male"
          icon={<RcIcon symbol={AddBorder} />}
          checkedIcon={<RcIcon symbol={Add} />}
        />
      </RcRadioGroup>
    </RcFormControl>
  );
};

RadioWithCustomIcon.storyName = 'Radio with custom icon';
