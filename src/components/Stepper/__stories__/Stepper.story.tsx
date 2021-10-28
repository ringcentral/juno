import { boolean } from '@storybook/addon-knobs';
import { Meta, Story } from '@storybook/react/types-6-0';
import React, { ComponentProps, useState } from 'react';

import { styled } from '../../../foundation';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../storybook';
import { Title } from '../../../storybook/components';
import { RcButton } from '../../Buttons';
import { RcTypography } from '../../Typography';
import { RcStep } from '../Step';
import { RcStepButton } from '../StepButton';
import { RcStepLabel } from '../StepLabel';
import { RcStepper } from '../Stepper';

export default {
  title: '🚀 Cleanup Components/Stepper',
  component: RcStepper,
  argTypes: {
    ...sortInDocTable<keyof StepperProps>([
      'activeStep',
      'nonLinear',
      'variant',
      'elevation',
      'square',
      'alternativeLabel',
      // 'orientation',
    ]),
    ...notControlInDocTable<keyof StepperProps>(['connector']),
    ...notShowInDocTable<keyof StepperProps>([
      // 'orientation'
    ]),
  },
} as Meta;

type StepperProps = ComponentProps<typeof RcStepper>;

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}

const CustomButton = styled(RcButton)`
  & + & {
    margin-left: 1em;
  }
`;

export const Stepper: Story<StepperProps> = ({
  children,
  connector,
  activeStep: activeStepProp,
  ...args
}) => {
  switchToControlKnobs();
  const [activeStep, setActiveStep] = useState(activeStepProp || 0);
  const [completed, setCompleted] = useState(new Set<number>());
  const [skipped, setSkipped] = useState(new Set<number>());

  const clickable = boolean('clickable', true);

  const steps = [
    'Select campaign settings',
    'Create an ad group',
    'Create an ad',
  ];

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  function isStepComplete(step: number) {
    return completed.has(step);
  }

  const totalSteps = () => {
    return steps.length;
  };

  const skippedSteps = () => {
    return skipped.size;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps() - skippedSteps();
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const completedSteps = () => {
    return completed.size;
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted(new Set<number>());
    setSkipped(new Set<number>());
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed
          // find the first step that has been completed
          steps.findIndex((step, i) => !completed.has(i))
        : activeStep + 1;

    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleComplete = () => {
    const newCompleted = new Set(completed);
    newCompleted.add(activeStep);
    setCompleted(newCompleted);

    /**
     * Sigh... it would be much nicer to replace the following if conditional with
     * `if (!this.allStepsComplete())` however state is not set when we do this,
     * thus we have to resort to not being very DRY.
     */
    if (completed.size !== totalSteps() - skippedSteps()) {
      handleNext();
    }
  };

  const StepComponent = clickable ? RcStepButton : RcStepLabel;

  return (
    <>
      <Title variant="title1">Detail api could view each component doc</Title>
      <RcStepper activeStep={activeStep} {...args}>
        {steps.map((step, i) => {
          const stepProps: { completed?: boolean } = {};
          const buttonProps: { optional?: React.ReactNode } = {};
          if (isStepOptional(i)) {
            buttonProps.optional = (
              <RcTypography variant="subheading1" color="neutral.f03">
                Optional
              </RcTypography>
            );
          }
          if (isStepSkipped(i)) {
            stepProps.completed = false;
          }
          return (
            <RcStep key={step} {...stepProps} completed={isStepComplete(i)}>
              <StepComponent
                onClick={clickable ? handleStep(i) : undefined}
                {...buttonProps}
              >
                {step}
              </StepComponent>
            </RcStep>
          );
        })}
      </RcStepper>
      <div>
        <RcTypography color="neutral.f06">
          {getStepContent(activeStep)}
        </RcTypography>
      </div>
      <br />
      {allStepsCompleted() ? (
        <>
          <RcTypography>
            All steps completed - you&apos;re finished
          </RcTypography>
          <RcButton onClick={handleReset}>Reset</RcButton>
        </>
      ) : (
        <>
          <CustomButton disabled={activeStep === 0} onClick={handleBack}>
            Back
          </CustomButton>
          <CustomButton onClick={handleNext}>Next</CustomButton>
          {isStepOptional(activeStep) && !completed.has(activeStep) && (
            <CustomButton onClick={handleSkip}>Skip</CustomButton>
          )}
          {activeStep !== steps.length &&
            (completed.has(activeStep) ? (
              <RcTypography variant="body1">
                Step {activeStep + 1} already completed
              </RcTypography>
            ) : (
              <CustomButton onClick={handleComplete}>
                {completedSteps() === totalSteps() - 1
                  ? 'Finish'
                  : 'Complete Step'}
              </CustomButton>
            ))}
        </>
      )}
    </>
  );
};

Stepper.storyName = 'Stepper';

Stepper.args = {};

Stepper.argTypes = {
  ...notControlInDocTable<keyof StepperProps>([]),
};

Stepper.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/steppers/#stepper',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
