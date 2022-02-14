import { css, RcThemedStyled } from '../../../../foundation';
import { RcStepButtonProps } from '../StepButton';
import { RcStepButtonClasses } from '../utils';

export const StepButtonStyle: RcThemedStyled<RcStepButtonProps, any> = () => {
  return css`
    .${RcStepButtonClasses.touchRipple} {
      z-index: 1;
    }
  `;
};
