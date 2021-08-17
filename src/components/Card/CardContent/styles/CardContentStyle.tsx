import { css, RcThemedStyled, spacing } from '../../../../foundation';
import { RcCardContentProps } from '../CardContent';

export const CardContentStyle: RcThemedStyled<RcCardContentProps, any> = () => {
  return css`
    padding: ${spacing(4)};
  `;
};
