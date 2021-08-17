import { css, palette2, RcThemedStyled, spacing } from '../../../../foundation';
import { RcDialogTitleProps } from '../DialogTitle';
import { RcDialogTitleSpacings } from '../utils';

export const DialogTitleStyle: RcThemedStyled<RcDialogTitleProps, any> = (
  props,
) => {
  const { size, space: spaceProp, display } = props;

  const sizeSpacing = RcDialogTitleSpacings[size!];

  const paddingValue =
    spaceProp !== undefined
      ? spaceProp instanceof Array
        ? spacing(...spaceProp)
        : spacing(spaceProp)
      : sizeSpacing.length > 0
      ? spacing(...sizeSpacing)
      : null;

  return css`
    color: ${palette2('neutral', 'f06')};

    padding: ${paddingValue};

    display: ${display};
  `;
};
