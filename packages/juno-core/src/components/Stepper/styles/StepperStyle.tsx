import { css, RcThemedStyled, spacing } from '../../../foundation';
import { RcStepperProps } from '../Stepper';

export const StepperStyle: RcThemedStyled<RcStepperProps, any> = () => {
  return css`
    padding: ${spacing(6, 0, 6, 0)};
  `;
};
