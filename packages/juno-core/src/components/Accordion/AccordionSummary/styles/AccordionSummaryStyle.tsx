import { css, RcThemedStyled, spacing } from '../../../../foundation';
import { RcIconButton } from '../../../Buttons/IconButton';
import { RcAccordionSummaryProps } from '../AccordionSummary';
import { RcAccordionSummaryClasses } from '../utils';

export const AccordionSummaryStyle: RcThemedStyled<
  RcAccordionSummaryProps,
  any
> = () => {
  // TODO: 48px to keep min-height as same as not expend, check that when designer cleanup
  return css`
    box-sizing: border-box;
    padding: ${spacing(0, 4)};

    &.${RcAccordionSummaryClasses.expanded} {
      margin: 0;
      min-height: 48px;
    }

    .${RcAccordionSummaryClasses.content} {
      margin: 0;
      align-items: center;
    }

    ${RcIconButton} {
      position: relative;
      overflow: hidden;
    }

    .${RcAccordionSummaryClasses.expandIcon} {
      margin-right: 0;
      padding: 0;
    }
  `;
};
