import { css, RcThemedStyled, spacing, zIndex } from '../../../foundation';
import { RcToastProps } from '../Toast';
import { RC_TOAST_CONTAINER_ID } from '../utils';

export const ToastStyle: RcThemedStyled<RcToastProps, any> = () => {
  return css`
    &:last-of-type {
      margin-bottom: 0;
    }

    margin-bottom: ${spacing(3)};

    ${'' /** clean snackbar style about anchorOrigin */}
    position: static;
    transform: none;
  `;
};

export const ToastContainerStyle: RcThemedStyled<{}, any> = () => {
  return css`
    #${RC_TOAST_CONTAINER_ID} {
      padding-left: ${spacing(4)};
      padding-right: ${spacing(4)};

      position: fixed;
      top: ${spacing(22)};
      left: 0;
      right: 0;

      z-index: ${zIndex('toast')};
      box-sizing: border-box;
      pointer-events: none;
    }
  `;
};
