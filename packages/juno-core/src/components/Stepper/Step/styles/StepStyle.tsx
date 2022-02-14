import { css, RcThemedStyled, spacing } from '../../../../foundation';
import { RcStepProps } from '../Step';
import { RcStepClasses } from '../utils';

const stepPadding = spacing(4);

export const StepStyle: RcThemedStyled<RcStepProps, any> = () => {
  return css`
    &.${RcStepClasses.horizontal} {
      padding-left: ${stepPadding};
      padding-right: ${stepPadding};
    }
  `;
};
