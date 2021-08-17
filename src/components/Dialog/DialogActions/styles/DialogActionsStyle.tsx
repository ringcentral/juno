import { css, RcThemedStyled, spacing } from '../../../../foundation';
import { RcDialogActionsProps } from '../DialogActions';
import { RcDialogActionsSizes } from '../utils';

export const DialogActionsStyle: RcThemedStyled<RcDialogActionsProps, any> = (
  props,
) => {
  const { size, direction, disableSpacing } = props;
  const args = RcDialogActionsSizes[size!];

  const paddingValue = args.length > 0 ? spacing(...args) : spacing(2, 6, 6);

  const isVertical = direction === 'vertical';

  return css`
    padding: ${paddingValue};
    flex-direction: ${isVertical && 'column-reverse'};

    ${!disableSpacing &&
      css`
        > * + * {
          ${isVertical
            ? css`
                margin-bottom: ${spacing(4)};
              `
            : css`
                margin-left: ${spacing(2)};
              `};
        }
      `}
  `;
};
