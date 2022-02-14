import {
  css,
  palette2,
  RcThemedStyled,
  shadows,
  spacing,
} from '../../../foundation';
import { RcAccordionProps } from '../Accordion';
import { RcAccordionClasses } from '../utils';

export const AccordionStyleBetweenClassName = [
  `&.${RcAccordionClasses.root} + &.${RcAccordionClasses.expanded}`,
  `&.${RcAccordionClasses.expanded} + &.${RcAccordionClasses.root}`,
].join(',');

export const AccordionStyle: RcThemedStyled<RcAccordionProps, any> = () => {
  return css`
    box-shadow: none;

    &:before {
      display: none;
    }

    &.${RcAccordionClasses.root} + &.${RcAccordionClasses.root} {
      border-top: 1px solid ${palette2('neutral', 'l02')};
    }

    ${AccordionStyleBetweenClassName} {
      margin-top: ${spacing(4)};
      border-top: 0;
    }

    &.${RcAccordionClasses.expanded} {
      box-shadow: ${shadows(2)};
      margin: 0;
    }
  `;
};
