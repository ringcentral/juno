import { css, RcThemedStyled, spacing } from '../../../../foundation';
import { RcCardActionsProps } from '../CardActions';

export const CardActionsStyle: RcThemedStyled<RcCardActionsProps, any> = () => {
  return css`
    position: relative;
    padding: ${spacing(0, 4, 4, 4)};
    z-index: 2;
  `;
};
