import { css, palette2, radius, RcThemedStyled } from '../../../../foundation';
import { RcCardHoverActionsClasses } from '../../CardHoverActions/utils';
import { RcCardProps } from '../Card';
import { RcCardClasses } from '../utils';

export const CardStyle: RcThemedStyled<RcCardProps, any> = (props) => {
  const { variant, square } = props;

  const isOutline = variant === 'outlined';

  return css`
    position: relative;
    background-color: ${palette2('neutral', 'elevation')};

    ${isOutline &&
    css`
      border: 1px solid ${palette2('neutral', 'l02')};
      border-radius: ${!square && radius('xl')};

      &.${RcCardClasses.focusVisible}, &.${RcCardClasses.selected} {
        border-color: ${isOutline && palette2('interactive', 'f01')};
      }

      &:not(:hover):not(:focus-within) .${RcCardHoverActionsClasses.root} {
        &:not(.${RcCardHoverActionsClasses.visible}) {
          opacity: ${isOutline && 0};
        }
      }
    `}
  `;
};
