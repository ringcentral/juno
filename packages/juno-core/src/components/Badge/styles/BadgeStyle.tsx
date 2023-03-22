import {
  css,
  fakeBorder,
  getParsePaletteColor,
  palette2,
  RcThemedStyled,
  styled,
} from '../../../foundation';
import { RcBadgeProps } from '../Badge';
import { RcBadgeClasses, roundBadgeMarginKey } from '../utils';

export const BadgeStyle: RcThemedStyled<RcBadgeProps, any> = ({
  badgeContent,
  overlap,
  variant,
  textColor,
  borderColor,
  max,
  color,
}) => {
  const overlapRound = overlap === 'round';
  const overlapNone = overlap === 'none';
  const isStandard = variant !== 'dot';

  const borderCurrColor = getParsePaletteColor(borderColor, null, false);

  // * only when value is string or number need check that length
  const manyChar =
    (['number', 'string'].includes(typeof badgeContent) &&
      `${badgeContent}`.length !== 1) ||
    (max && max > 0 && +badgeContent! > max);

  return css`
    .${RcBadgeClasses.badge} {
      margin: ${overlapRound && `var(${roundBadgeMarginKey})`};
      color: ${getParsePaletteColor(textColor!, null, false)};
      background-color: ${getParsePaletteColor(color, null, false)};

      ${borderColor &&
      css`
        ${isStandard
          ? fakeBorder({ color: borderCurrColor, radius: 'round' })
          : css`
              border-color: ${borderCurrColor};
            `}
      `};

      ${isStandard &&
      css`
        height: 18px;
        min-width: 18px;
        padding: ${!manyChar && 0};
      `}

      ${overlapNone &&
      css`
        position: unset;
        transform: unset;

        &.${RcBadgeClasses.invisible} {
          transform: scale(0);
        }
      `}
    }
  `;
};

export const DefaultDotComponent = styled.div`
  border-radius: 50%;
  width: 8px;
  height: 8px;
  border: 2px solid ${palette2('neutral', 'l01')};
`;
