import React, { forwardRef } from 'react';

import {
  css,
  getParsePaletteColor,
  palette2,
  radius,
  RcPaletteProp,
  RcTheme,
  styled,
  typography,
} from '../../../foundation';
import palette from '../../../foundation/theme/assets/palette.light.json';
import { RcAvatarProps } from '../Avatar';
import { RcAvatarFonts, RcAvatarSizes } from '../utils';

const avatarPaletteKeys = Object.keys(palette.avatar);

const getBackgroundColor = (color?: RcPaletteProp, iconSymbol?: any) => {
  if (
    color &&
    typeof color === 'string' &&
    avatarPaletteKeys.indexOf(color) > -1
  ) {
    return palette2('avatar', color as keyof RcTheme['palette']['avatar']);
  }

  return getParsePaletteColor(
    color,
    iconSymbol ? ['avatar', 'primary'] : ['neutral', 'b03'],
  );
};

export type StyledAvatarProps = Pick<
  RcAvatarProps<true>,
  'size' | 'color' | 'iconSymbol' | 'className'
>;

const _StyledAvatar = forwardRef<any, StyledAvatarProps>(
  ({ color, size, iconSymbol, ...rest }, ref) => {
    return <div ref={ref} {...rest} />;
  },
);

export const StyledAvatar = styled(_StyledAvatar)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  line-height: 1;
  border-radius: ${radius('circle')};
  overflow: hidden;
  user-select: none;
  outline: none;
  color: ${palette2('neutral', 'f01')};

  ${({ size, color, iconSymbol }) => {
    const value = RcAvatarSizes[size!];
    return css`
      ${typography(RcAvatarFonts[size!])};
      width: ${value}px;
      height: ${value}px;
      background-color: ${getBackgroundColor(color, iconSymbol)};
    `;
  }};

  > img,
  > canvas {
    width: 100%;
    height: 100%;
  }
`;
