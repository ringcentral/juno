import { css, palette2, RcThemedStyled, spacing } from '../../../../foundation';
import { RcDialogTitleProps } from '../DialogTitle';
import { RcDialogTitleSpacings } from '../utils';

export const DialogTitleStyle: RcThemedStyled<RcDialogTitleProps, any> = (
  props,
) => {
  const { size, space: spaceProp, display } = props;

  const paddingValue =
    spaceProp !== undefined
      ? spaceProp instanceof Array
        ? spaceProp
        : [spaceProp]
      : RcDialogTitleSpacings[size!];

  return css`
    color: ${palette2('neutral', 'f06')};

    padding: ${spacing(...paddingValue)};

    display: ${display};
  `;
};
