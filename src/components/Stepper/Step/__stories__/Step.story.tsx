import React, { ComponentProps } from 'react';

import { Meta, Story } from '@storybook/react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../../storybook';
import { RcStepButton } from '../../StepButton';
import { RcStepper } from '../../Stepper';
import { RcStep } from '../Step';

export default {
  title: '🚀 Cleanup Components/Stepper/Step',
  component: RcStep,
  argTypes: {
    ...sortInDocTable<keyof StepProps>([]),
    ...notControlInDocTable<keyof StepProps>([]),
    ...notShowInDocTable<keyof StepProps>([]),
  },
} as Meta;

type StepProps = ComponentProps<typeof RcStep>;

export const Step: Story<StepProps> = ({ children, ...args }) => {
  switchToControlKnobs();
  return (
    <RcStepper>
      <RcStep {...args}>
        <RcStepButton>Select campaign settings</RcStepButton>
      </RcStep>
    </RcStepper>
  );
};

Step.storyName = 'Step';

Step.args = {};

Step.argTypes = {
  ...notControlInDocTable<keyof StepProps>([]),
};

Step.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/api/step/',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
