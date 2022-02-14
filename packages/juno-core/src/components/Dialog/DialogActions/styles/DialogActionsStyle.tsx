import { css, RcThemedStyled, spacing } from '../../../../foundation';
import { RcDialogContentClasses } from '../../DialogContent/utils';
import { RcDialogActionsProps } from '../DialogActions';
import { RcDialogActionsSizes } from '../utils';

const itemSpace = spacing(2);

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
                    margin-bottom: ${itemSpace};
                  `
                : css`
                    margin-top: ${itemSpace};
                  `}
            `
          : css`
              ${reverse
                ? css`
                    margin-right: ${itemSpace};
                  `
                : css`
                    margin-left: ${itemSpace};
                  `}
            `};
      }
    `};
  `;
};
