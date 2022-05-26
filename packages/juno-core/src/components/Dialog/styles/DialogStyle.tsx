import { css, px, RcThemedStyled } from '../../../foundation';
import { RcDialogProps } from '../Dialog';
import { RcDialogClasses, RcDialogMaxWidths } from '../utils';

export const DialogStyle: RcThemedStyled<RcDialogProps, any> = (props) => {
  const { size, theme, fullScreen } = props;
  return css`
    .${RcDialogClasses.paper} {
      max-width: ${RcDialogMaxWidths[size!]};
    }

    ${
      // make sure `fullScreen` can work correctly when `maxWidth` is `xs`
      !fullScreen &&
      css`
        .${RcDialogClasses.paperWidthXs} {
          max-width: ${px(Math.max(theme.breakpoints.values.xs, 400))};

          &.${RcDialogClasses.paperScrollBody} {
            ${theme.breakpoints.down(
              Math.max(theme.breakpoints.values.xs, 400) + 32 * 2,
            )} {
              max-width: calc(100% - 64px);
            }
          }
        }
      `
    }
  `;
};
