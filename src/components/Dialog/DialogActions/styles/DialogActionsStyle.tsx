import { css, RcThemedStyled, spacing } from '../../../../foundation';
import { RcDialogContentClasses } from '../../DialogContent/utils';
import { RcDialogActionsProps } from '../DialogActions';
import { RcDialogActionsSizes } from '../utils';

export const DialogActionsStyle: RcThemedStyled<RcDialogActionsProps, any> = (
  props,
) => {
  const { size, reverse, direction, disableSpacing } = props;

  const isVertical = direction === 'vertical';

  const columnDirection = reverse ? 'column-reverse' : 'column';
  const rowDirection = reverse ? 'row-reverse' : 'row';

  return css`
    padding: ${spacing(...RcDialogActionsSizes[size!])};
    flex-direction: ${isVertical ? columnDirection : rowDirection};

    ${size === 'medium' &&
      /**
       * use && because first is component selector, second one is dynamic selector with different props
       * @see https://styled-components.com/docs/faqs#why-do-my-dom-nodes-have-two-classes
       */
      css`
        .${RcDialogContentClasses.dividers} + && {
          padding-top: ${spacing(5)};
        }
      `}

    ${!disableSpacing &&
      css`
        > * + * {
          ${isVertical
            ? css`
                ${reverse
                  ? css`
                      margin-bottom: ${spacing(4)};
                    `
                  : css`
                      margin-top: ${spacing(4)};
                    `}
              `
            : css`
                ${reverse
                  ? css`
                      margin-left: ${spacing(2)};
                    `
                  : css`
                      margin-right: ${spacing(2)};
                    `}
              `};
        }
      `};
  `;
};
