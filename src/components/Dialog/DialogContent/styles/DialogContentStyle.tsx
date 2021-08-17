import { css, palette2, RcThemedStyled, spacing } from '../../../../foundation';
import { RcDialogContentProps } from '../DialogContent';
import { RcDialogContentClasses, RcDialogContentSpacings } from '../utils';

export const DialogContentStyle: RcThemedStyled<RcDialogContentProps, any> = (
  props,
) => {
  const { size } = props;

  const args = RcDialogContentSpacings[size!];

  const paddingValue = args.length > 0 ? spacing(...args) : spacing(0, 6, 3);

  return css`
    padding: ${paddingValue};

    &.${RcDialogContentClasses.dividers} {
      border-color: ${palette2('neutral', 'l02')};
    }
  `;
};
