import React, { forwardRef } from 'react';

import {
  css,
  getParsePaletteColor,
  palette2,
  styled,
  fakeBorder,
} from '../../../foundation';
import { RcIcon } from '../../Icon';
import { PresenceSizeProps } from '../Presence';

export const _StyledPresence = forwardRef<any, PresenceSizeProps>(
  ({ color, type, iconSizeValue, borderSizeValue, ...rest }, ref) => (
    <div ref={ref} {...rest} />
  ),
);

export const StyledPresence = styled(_StyledPresence)<PresenceSizeProps>`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-sizing: content-box;

  ${({ iconSizeValue, borderSizeValue, color }) => {
    return css`
      width: ${iconSizeValue}px;
      height: ${iconSizeValue}px;
      background: ${color
        ? getParsePaletteColor(color)
        : palette2('neutral', 'l01')};
      ${fakeBorder({
        inset: false,
        color: palette2('neutral', 'l01'),
        size: borderSizeValue,
      })};
      ${RcIcon} {
        svg {
          width: ${iconSizeValue}px;
          height: ${iconSizeValue}px;
        }
      }
    `;
  }};
`;

export const PresenceContainer = styled.div<PresenceSizeProps>`
  ${({ iconSizeValue, borderSizeValue }) => {
    return css`
      display: flex;
      justify-content: center;
      width: ${iconSizeValue}px;
      height: ${iconSizeValue}px;
      padding: ${borderSizeValue}px;
    `;
  }}
`;
