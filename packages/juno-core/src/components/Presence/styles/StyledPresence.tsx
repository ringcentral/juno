import React, { forwardRef } from 'react';

import {
  css,
  getParsePaletteColor,
  palette2,
  styled,
} from '../../../foundation';
import { RcIcon } from '../../Icon';
import { PresenceSizeProps } from '../Presence';
import { RcPresenceBackgroundColors } from '../utils';

export const PresenceContainer = styled.div<PresenceSizeProps>`
  ${({ iconSizeValue, borderSizeValue }) => {
    return css`
      display: flex;
      justify-content: center;
      background-color: ${palette2('neutral', 'l01')};
      border-radius: 50%;
      width: ${iconSizeValue}px;
      height: ${iconSizeValue}px;
      padding: ${borderSizeValue}px;
    `;
  }}
`;

export const _StyledPresence = forwardRef<any, PresenceSizeProps>(
  ({ color, type, ...rest }, ref) => <div ref={ref} {...rest} />,
);

export const StyledPresence = styled(_StyledPresence)<PresenceSizeProps>`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-sizing: content-box;

  ${({ type, iconSizeValue, color }) => {
    return css`
      width: ${iconSizeValue}px;
      height: ${iconSizeValue}px;
      background: ${color
        ? getParsePaletteColor(color)
        : RcPresenceBackgroundColors[type!] || palette2('neutral', 'l01')};

      ${RcIcon} {
        svg {
          width: ${iconSizeValue}px;
          height: ${iconSizeValue}px;
        }
      }
    `;
  }};
`;
