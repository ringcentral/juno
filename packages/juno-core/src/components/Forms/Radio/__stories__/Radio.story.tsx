import React, { ComponentProps } from 'react';

import {
  RcFormControl,
  RcFormLabel,
  RcIcon,
  RcRadio,
  RcRadioGroup,
  RcTypography,
} from '@ringcentral/juno';
import { Add, AddBorder, MemberBorder, People } from '@ringcentral/juno-icon';
import {
  notControlInDocTable,
  notShowInDocTable,
  paletteChoice,
  sortInDocTable,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🚀 Cleanup Components/Forms/Radio',
  component: RcRadio,
  argTypes: {
    color: {
      options: paletteChoice,
      control: {
        type: 'select',
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

export const RadioExamples: Story<RadioProps> = () => {
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
