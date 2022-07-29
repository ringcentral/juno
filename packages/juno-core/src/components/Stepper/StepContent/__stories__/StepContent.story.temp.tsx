// import { Meta, Story } from '@storybook/react';
// import React, { ComponentProps } from 'react';

// import {
//   notControlInDocTable,
//   notShowInDocTable,
//   sortInDocTable,
// } from '@ringcentral/juno-storybook';
// import { RcStep } from '../../Step';
// import { RcStepLabel } from '../../StepLabel';
// import { RcStepper } from '../../Stepper';
// import { RcStepContent } from '../StepContent';

// export default {
//   title: '🚀 Cleanup Components/Stepper/StepContent',
//   component: RcStepContent,
//   argTypes: {
//     ...sortInDocTable<keyof StepContentProps>([]),
//     ...notControlInDocTable<keyof StepContentProps>([]),
//     ...notShowInDocTable<keyof StepContentProps>([]),
//   },
// } as Meta;

// type StepContentProps = ComponentProps<typeof RcStepContent>;

// export const StepContent: Story<StepContentProps> = ({ children, ...args }) => {
//   //   return (
//     <RcStepper activeStep={0}>
//       <RcStep>
//         <RcStepLabel>Select campaign settings</RcStepLabel>
//         <RcStepContent {...args}>{children}</RcStepContent>;
//       </RcStep>
//       <RcStep>
//         <RcStepLabel>Select campaign settings</RcStepLabel>
//         <RcStepContent {...args}>{children}</RcStepContent>;
//       </RcStep>
//       <RcStep>
//         <RcStepLabel>Select campaign settings</RcStepLabel>
//         <RcStepContent {...args}>{children}</RcStepContent>;
//       </RcStep>
//     </RcStepper>
//   );
// };

// StepContent.storyName = 'StepContent';

// StepContent.args = {
//   children: 'that is content',
// };

// StepContent.argTypes = {
//   ...notControlInDocTable<keyof StepContentProps>([]),
// };

// StepContent.parameters = {
//   tags: [
//     {
//       name: 'Mui',
//       href: 'https://material-ui.com/api/step-content/',
//     },
//     {
//       name: 'Accessibility',
//       value: '100%',
//     },
//   ],
// };
