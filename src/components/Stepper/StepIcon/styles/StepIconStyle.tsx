import {
  css,
  palette2,
  RcThemedStyled,
  typography,
} from '../../../../foundation';
import { RcStepIconProps } from '../StepIcon';
import { iconColor, iconTextColor, RcStepIconClasses } from '../utils';

export const StepIconStyle: RcThemedStyled<RcStepIconProps, any> = () => {
  return css`
    .${RcStepIconClasses.root} {
      color: ${palette2('neutral', 'b04')};
    }

    .${RcStepIconClasses.active} {
      color: ${iconColor};
    }

    .${RcStepIconClasses.text} {
      fill: ${iconTextColor};
      ${typography('body1', true)};
      /* for font size change with font */
      transform: translateY(1px);
    }
  `;
};
