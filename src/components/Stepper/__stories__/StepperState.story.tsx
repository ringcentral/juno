import { Meta } from '@storybook/react/types-6-0';
import React from 'react';

import { switchToControlKnobs } from '../../../storybook';
import { RcStep } from '../Step';
import { RcStepButton } from '../StepButton';
import { RcStepLabel } from '../StepLabel';
import { RcStepper } from '../Stepper';

export default {
  title: '🚀 Cleanup Components/Stepper/Stepper All State',
} as Meta;

export const StepperAllState = () => {
  switchToControlKnobs();

  return (
    <>
      <RcStepper activeStep={0}>
        <RcStep>
          <RcStepButton active>A</RcStepButton>
        </RcStep>
        <RcStep>
          <RcStepLabel error>B</RcStepLabel>
        </RcStep>
        <RcStep>
          <RcStepLabel disabled>C</RcStepLabel>
        </RcStep>
        <RcStep completed>
          <RcStepButton>D</RcStepButton>
        </RcStep>
        <RcStep>
          <RcStepButton
            StepLabelProps={{
              StepIconProps: { editable: true },
            }}
          >
            E
          </RcStepButton>
        </RcStep>
        <RcStep>
          <RcStepLabel StepIconProps={{ editable: false }}>F</RcStepLabel>
        </RcStep>
      </RcStepper>
    </>
  );
};
