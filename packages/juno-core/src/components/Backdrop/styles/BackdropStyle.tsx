import { css, RcThemedStyled } from '../../../foundation';
import { RcBackdropProps } from '../Backdrop';
import { RcBackdropClasses } from '../utils';

export const BackdropStyle: RcThemedStyled<RcBackdropProps, any> = () => {
  return css`
    &.${RcBackdropClasses.root} {
      background-color: rgba(0, 0, 0, 0.7);
    }
  `;
};
