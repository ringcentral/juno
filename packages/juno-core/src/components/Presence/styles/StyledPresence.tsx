import React, { forwardRef } from 'react';

import {
  css,
  getParsePaletteColor,
  palette2,
  px,
  styled,
} from '../../../foundation';
import { RcIcon } from '../../Icon';
import { RcPresenceProps } from '../Presence';
import {
  RcPresenceSizes,
  RcPresenceInnerIconSizes,
  RcPresenceBackgroundColors,
} from '../utils';

export const _StyledPresence = forwardRef<any, RcPresenceProps>(
  ({ color, borderSize, type, size, ...rest }, ref) => (
    <div ref={ref} {...rest} />
  ),
);

export const StyledPresence = styled(_StyledPresence)`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-sizing: content-box;

  ${({ size, type, borderSize, color }) => {
    const sizeValue = px(RcPresenceSizes[size!][0]);

    const innerIconSize = RcPresenceInnerIconSizes[size!];

    const iconSizeValue = px(innerIconSize);

    return css`
      width: ${sizeValue};
      height: ${sizeValue};
      border: ${RcPresenceSizes[borderSize || size!][1]}px solid
        ${palette2('neutral', 'l01')};
      background: ${color
        ? getParsePaletteColor(color)
        : RcPresenceBackgroundColors[type!] || palette2('neutral', 'l01')};

      ${RcIcon} {
        svg {
          width: ${iconSizeValue};
          height: ${iconSizeValue};
        }
      }
    `;
  }};
`;
