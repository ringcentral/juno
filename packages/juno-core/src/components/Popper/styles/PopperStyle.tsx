import { css, RcThemedStyled, zIndex } from '../../../foundation';
import { RcPopperProps } from '../Popper';

export const PopperStyle: RcThemedStyled<RcPopperProps, any> = () => {
  return css`
    z-index: ${zIndex('modal')};
  `;
};
