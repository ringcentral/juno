import React, { ComponentProps } from 'react';

import { RcStep, RcStepButton, RcStepper } from '@ringcentral/juno';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

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
