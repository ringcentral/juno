import {
  css,
  getParsePaletteColor,
  RcThemedStyled,
  typography,
} from '../../../foundation';
import { RcTypographyProps } from '../Typography';
import { MuiDefaultColor, RcCustomTypographyWeight } from '../utils';

export const TypographyStyle: RcThemedStyled<RcTypographyProps, any> = ({
  variant,
  color,
  weight,
}) => {
  const colorResult = !MuiDefaultColor.includes(color!)
    ? getParsePaletteColor(color, null, false)
    : '';

  return css`
    ${typography(variant!)};
    font-weight: ${weight && RcCustomTypographyWeight[weight]};
    color: ${colorResult};
  `;
};
