import { css, RcThemedStyled } from '../../../foundation';
import { RcDialogProps } from '../Dialog';
import { RcDialogClasses, RcDialogMaxWidths } from '../utils';

export const DialogStyle: RcThemedStyled<RcDialogProps, any> = (props) => {
  const { size } = props;
  return css`
    .${RcDialogClasses.paper} {
      max-width: ${RcDialogMaxWidths[size!]};
    }
  `;
};
