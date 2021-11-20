import { css, palette2, RcThemedStyled } from '../../../../foundation';
import { RcStepConnectorProps } from '../StepConnector';
import { RcStepConnectorClasses } from '../utils';

export const StepConnectorStyle: RcThemedStyled<RcStepConnectorProps, any> =
  () => {
    return css`
      .${RcStepConnectorClasses.line} {
        border-color: ${palette2('neutral', 'l02')};
      }
    `;
  };
