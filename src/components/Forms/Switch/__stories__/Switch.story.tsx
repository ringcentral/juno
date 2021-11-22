import React, { ComponentProps } from 'react';

import { Meta, Story } from '@storybook/react';

import {
  notControlInDocTable,
  notShowInDocTable,
  paletteChoice,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../../storybook';
import { RcTypography } from '../../../Typography';
import { RcFormControl } from '../../FormControl';
import { RcFormControlLabel } from '../../FormControlLabel';
import { RcFormGroup } from '../../FormGroup';
import { RcFormLabel } from '../../FormLabel';
import { RcSwitch } from '../Switch';

export default {
  title: '🚀 Cleanup Components/Forms/Switch',
  component: RcSwitch,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: paletteChoice,
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
      control: {
        type: 'select',
        options: paletteChoice,
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
