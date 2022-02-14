import { css } from '../styled-components';
import { palette2 } from './newPalette';
import { radius } from './radius';

export const focusVisible = '&.focus-visible, &[data-focus-visible-added]';

export const focusWithin = '&:hover, &:focus-within';

export const focusVisibleColor = palette2('interactive', 'f01');

export const shadowBorder = (
  r: Parameters<typeof radius>[0] = 'zero',
  color: any = focusVisibleColor,
  inset: boolean = true,
  size: number = 1,
) => css`
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    box-shadow: ${inset ? 'inset' : ''} 0 0 0 ${size}px ${color};
    border-radius: ${radius(r)};
    pointer-events: none;
  }
`;

export const focusVisibleShadowStyle = (
  r?: Parameters<typeof radius>[0],
  color?: any,
) => css`
  ${focusVisible} {
    ${shadowBorder(r, color)};
  }
`;
