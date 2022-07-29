import React, { ComponentProps } from 'react';

import { RcStep, RcStepLabel, RcStepper } from '@ringcentral/juno';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  Title,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

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
