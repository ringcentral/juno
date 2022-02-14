import React, { ComponentProps } from 'react';

import { Meta, Story } from '@storybook/react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
  Title,
} from '@ringcentral/juno-storybook';

import { RcStep } from '../../Step';
import { RcStepper } from '../../Stepper';
import { RcStepLabel } from '../StepLabel';

export default {
  title: '🚀 Cleanup Components/Stepper/StepLabel',
  component: RcStepLabel,
  argTypes: {
    ...sortInDocTable<keyof StepLabelProps>([
      'disabled',
      'error',
      'editable',
      'icon',
      'active',
      'completed',
    ]),
    ...notControlInDocTable<keyof StepLabelProps>([]),
    ...notShowInDocTable<keyof StepLabelProps>([]),
  },
} as Meta;

type StepLabelProps = ComponentProps<typeof RcStepLabel>;

export const StepLabel: Story<StepLabelProps> = ({ children, ...args }) => {
  switchToControlKnobs();
  return (
    <>
      <Title variant="title1">
        When you only need label step, not need click event, you can use label
        directly
      </Title>
      <RcStepper>
        <RcStep>
          <RcStepLabel
            onClick={() => {
              console.log('click');
            }}
            {...args}
          >
            Select campaign settings
          </RcStepLabel>
        </RcStep>
        <RcStep>
          <RcStepLabel {...args}>Select campaign settings</RcStepLabel>
        </RcStep>
        <RcStep>
          <RcStepLabel {...args}>Select campaign settings</RcStepLabel>
        </RcStep>
      </RcStepper>
    </>
  );
};

StepLabel.storyName = 'StepLabel';

StepLabel.args = {};

StepLabel.argTypes = {
  ...notControlInDocTable<keyof StepLabelProps>([]),
};

StepLabel.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/api/step-label/',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
