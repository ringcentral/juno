import { css, RcThemedStyled, spacing } from '../../../../foundation';
import { RcCardHoverActionsProps } from '../CardHoverActions';

// TODO: use token in theme.transitions.easing
const hoverTransitionEasing = `cubic-bezier(0.25, 0.8, 0.25, 1)`;

export const hoverTransition: RcThemedStyled<any, string> = ({ theme }) =>
  theme.transitions.create(['opacity'], {
    easing: hoverTransitionEasing,
    duration: theme.transitions.duration.standard,
  });

export const CardHoverActionsStyle: RcThemedStyled<
  RcCardHoverActionsProps,
  any
> = () => {
  return css`
    position: absolute;
    right: 0;
    top: 0;
    padding: ${spacing(4)};
    transition: ${hoverTransition};
    ${
      '' /* make sure `CardHoverActions` would not be covered by `CardActionArea`  */
    }
    z-index: 1;
  `;
};
