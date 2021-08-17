import {
  css,
  getParsePaletteColor,
  px,
  RcThemedStyled,
} from '../../../foundation';
import { RcIconProps } from '../Icon';
import { RcIconSizes, switchSize } from '../utils';

export const IconStyle: RcThemedStyled<RcIconProps, any> = (props) => {
  const {
    onClick,
    size: sizeProp,
    color,
    iconColor: iconColorProp,
    iconSize,
  } = props;

  // TODO: should remove switchSize in release
  const size = switchSize(iconSize || sizeProp) as any;

  const currentSize = RcIconSizes[size!];

  const fontSize =
    typeof currentSize === 'number' ? px(currentSize) : currentSize;

  const iconColor = getParsePaletteColor(color || iconColorProp, null);

  return css`
    display: inline-flex;
    cursor: ${onClick && 'pointer'};
    font-size: ${fontSize};
    color: ${iconColor};
  `;
};
