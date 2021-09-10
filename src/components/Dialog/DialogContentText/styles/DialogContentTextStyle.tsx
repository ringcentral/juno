import { css, RcThemedStyled } from '../../../../foundation';
import { RcDialogContentTextProps } from '../DialogContentText';

export const DialogContentTextStyle: RcThemedStyled<
  RcDialogContentTextProps,
  any
> = ({ gutterBottom }) => {
  // that is mui but, that not work with gutterBottom set
  return css`
    margin-bottom: ${gutterBottom === false && 0};
  `;
};
