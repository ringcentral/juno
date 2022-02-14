import {
  css,
  palette2,
  RcThemedStyled,
  spacing,
  typography,
} from '../../../../foundation';
import { StepIconStyle } from '../../StepIcon/styles';
import { RcStepIconClasses } from '../../StepIcon/utils';
import { RcStepLabelProps } from '../StepLabel';
import { RcStepLabelClasses } from '../utils';

// * follow mr and release: https://github.com/mui-org/material-ui/pull/22559
/* TODO: this will be move into RcStepIcon, that need mui fix */
export const StepLabelStyle: RcThemedStyled<RcStepLabelProps, any> = () => {
  return css`
    ${StepIconStyle};

    .${RcStepLabelClasses.labelContainer} {
      .${RcStepLabelClasses.alternativeLabel} {
        margin-top: ${spacing(3)};
      }
    }

    .${RcStepLabelClasses.label} {
      ${typography('body1')};

      color: ${palette2('neutral', 'f04')};
    }

    .${RcStepLabelClasses.active} {
      ${typography('body2')};

      color: ${palette2('neutral', 'f06')};
    }

    &.${RcStepLabelClasses.error} {
      .${RcStepIconClasses.root} {
        color: ${palette2('danger', 'f02')};
      }

      .${RcStepLabelClasses.label} {
        color: ${palette2('danger', 'f02')};
      }
    }

    &.${RcStepLabelClasses.disabled} {
      .${RcStepIconClasses.root} {
        color: ${palette2('disabled', 'f02')};
      }

      .${RcStepLabelClasses.label} {
        color: ${palette2('disabled', 'f02')};
      }
    }
  `;
};
