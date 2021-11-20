import {
  css,
  ellipsis,
  getParsePaletteColor,
  radius,
  RcThemedStyled,
  spacing,
  typography,
} from '../../../foundation';
import { RcTagProps } from '../Tag';
import { colorMap } from '../utils';

export const TagStyle: RcThemedStyled<RcTagProps, any> = ({
  textColor,
  color,
  borderColor,
  radius: radiusProp,
}) => {
  const backgroundColor = getParsePaletteColor(
    (typeof color === 'string' && colorMap[color as string]) || color,
  );

  return css`
    display: inline-block;

    background-color: ${backgroundColor};
    color: ${getParsePaletteColor(textColor!)};
    ${borderColor &&
    css`
      border: 1px solid ${getParsePaletteColor(borderColor)};
    `};

    border-radius: ${radius(radiusProp!)};
    text-align: center;
    padding: ${spacing(0, 2)};
    ${typography('caption1')};
    min-width: ${spacing(9)};
    max-width: ${spacing(41)};
    ${ellipsis}
  `;
};
