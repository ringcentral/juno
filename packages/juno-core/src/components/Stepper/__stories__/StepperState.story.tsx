import React from 'react';

import {
  RcStep,
  RcStepButton,
  RcStepLabel,
  RcStepper,
} from '@ringcentral/juno';
import { switchToControlKnobs } from '@ringcentral/juno-storybook';
import { Meta } from '@storybook/react';

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
