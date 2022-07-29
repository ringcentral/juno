import React, { ComponentProps, useState } from 'react';

import {
  RcButton,
  RcStep,
  RcStepButton,
  RcStepLabel,
  RcStepper,
  RcTypography,
  styled,
} from '@ringcentral/juno';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  Title,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🚀 Cleanup Components/Stepper',
  component: RcStepper,
  argTypes: {
    clickable: {
      control: {
        type: 'boolean',
      },
    },
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

type StepperProps = ComponentProps<typeof RcStepper> & { clickable: boolean };

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
  clickable,
  ...args
}) => {
  const [activeStep, setActiveStep] = useState(activeStepProp || 0);
  const [completed, setCompleted] = useState(new Set<number>());
  const [skipped, setSkipped] = useState(new Set<number>());

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

Stepper.args = {
  clickable: true,
};

Stepper.argTypes = {
  ...notControlInDocTable<keyof StepperProps>([]),
};

Stepper.parameters = {
  tags: [
    {
      name: 'Spec',
      href: 'https://app.abstract.com/projects/d893ad32-0d8d-4e65-a37a-b4a5c881c51b/branches/master/commits/9e531c6b30974c6e11ee1ca2030d489988c01e23/files/8ffaf9bc-6939-4ef9-9bd1-6aa5b460e2ae/layers/0EAFB2A6-4ADA-47A8-9FD1-5884BB65D7C1',
    },
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
