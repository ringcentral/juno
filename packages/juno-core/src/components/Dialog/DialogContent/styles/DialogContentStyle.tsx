import { css, palette2, RcThemedStyled, spacing } from '../../../../foundation';
import { RcDialogContentProps } from '../DialogContent';
import { getRcDialogContentSpacings, RcDialogContentClasses } from '../utils';

export const DialogContentStyle: RcThemedStyled<RcDialogContentProps, any> = (
  props,
) => {
  const { size, dividers } = props;

  return css`
    padding: ${spacing(...getRcDialogContentSpacings(dividers)[size!])};
    color: ${palette2('neutral', 'f04')};

    &.${RcDialogContentClasses.dividers} {
      border-color: ${palette2('neutral', 'l02')};
    }
  `;
};
