import { css, palette2, RcThemedStyled, spacing } from '../../../../foundation';
import { RcAccordionDetailsProps } from '../AccordionDetails';

export const AccordionDetailsStyle: RcThemedStyled<
  RcAccordionDetailsProps,
  any
> = () => {
  return css`
    border-top: 1px solid ${palette2('neutral', 'l02')};
    padding: ${spacing(4)};
  `;
};
