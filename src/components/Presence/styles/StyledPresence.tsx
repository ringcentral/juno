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
  RcPresenceColors,
  RcPresenceAvailableIconSizes,
  RcPresenceSizes,
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

  ${({ size, borderSize, type, color }) => {
    const sizeValue = px(RcPresenceSizes[size!][0]);

    const availableSize = RcPresenceAvailableIconSizes[size!];

    const iconSizeValue = px(availableSize[0]);
    const scaleRate = availableSize[1];

    return css`
      width: ${sizeValue};
      height: ${sizeValue};
      border: ${RcPresenceSizes[borderSize || size!][1]}px solid
        ${palette2('neutral', 'l01')};
      background: ${color
        ? getParsePaletteColor(color)
        : RcPresenceColors[type!]};

      ${RcIcon} {
        transform: ${scaleRate && `scale(${scaleRate})`};

        svg {
          width: ${iconSizeValue};
          height: ${iconSizeValue};
        }
      }
    `;
  }};
`;
