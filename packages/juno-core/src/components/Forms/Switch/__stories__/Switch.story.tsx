import React, { ComponentProps } from 'react';

import {
  RcFormControl,
  RcFormControlLabel,
  RcFormGroup,
  RcFormLabel,
  RcSwitch,
  RcTypography,
} from '@ringcentral/juno';
import {
  notControlInDocTable,
  notShowInDocTable,
  paletteChoice,
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🚀 Cleanup Components/Forms/Switch',
  component: RcSwitch,
  argTypes: {
    color: {
      options: paletteChoice,
      control: {
        type: 'select',
      },
    },
    ...sortInDocTable<keyof SwitchProps>([
      'checked',
      'disabled',
      'autoFocus',
      'readOnly',
      'required',
      'label',
      'formControlLabelProps',
    ]),
    trackColor: {
      options: paletteChoice,
      control: {
        type: 'select',
      },
    },
    ...notControlInDocTable<keyof SwitchProps>([]),
    ...notShowInDocTable<keyof SwitchProps>([]),
  },
} as Meta;

type SwitchProps = ComponentProps<typeof RcSwitch>;

export const Switch: Story<SwitchProps> = ({ ...args }) => {
  switchToControlKnobs();
  return <RcSwitch {...args} />;
};

Switch.args = {};

Switch.argTypes = {
  ...notControlInDocTable<keyof SwitchProps>([]),
};

Switch.parameters = {
  tags: [
    {
      name: 'Spec',
      href: 'https://share.goabstract.com/de8b75d5-8b52-4f2d-a5d5-67f4f9961d99?mode=design&sha=a6497a24bcae3cd22071b657cca0b73b11887d09',
    },
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/switches/',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

export const SwitchExamples: Story<SwitchProps> = () => {
  switchToControlKnobs();

  return (
    <div>
      <RcTypography
        color="neutral.f06"
        variant="headline1"
        paragraph
        display="block"
      >
        Label placement end
      </RcTypography>
      <RcSwitch
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
      <RcSwitch
        formControlLabelProps={{
          labelPlacement: 'start',
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
        With RcFormControl and RcFormControlLabel
      </RcTypography>
      <RcFormControl>
        <RcFormLabel>FormLabel</RcFormLabel>
        <RcFormGroup>
          <RcFormControlLabel
            control={<RcSwitch name="RcSwitch name prop" />}
            label="RcSwitch wrapped by RcFormControlLabel"
          />
          <RcSwitch label="RcSwitch use label prop" />
        </RcFormGroup>
      </RcFormControl>
    </div>
  );
};

SwitchExamples.storyName = 'Switch Examples';

export const SwitchWithCustomTrackColor: Story<SwitchProps> = () => {
  return (
    <>
      <RcSwitch label="Label" trackColor={['success', 'b03']} />
      <RcTypography color="neutral.f06" variant="body1" paragraph>
        prop "trackColor" is applied when switch is unchecked.
      </RcTypography>
    </>
  );
};

SwitchWithCustomTrackColor.storyName = 'Switch with custom trackColor';
