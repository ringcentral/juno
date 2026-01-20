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

type StyledPresenceProps = PresenceSizeProps & {
  children?: React.ReactNode;
};

export const _StyledPresence = forwardRef<any, StyledPresenceProps>(
  ({ color, type, iconSizeValue, borderSizeValue, children, ...rest }, ref) => (
    <div ref={ref} {...rest}>
      {children}
    </div>
  ),
);

export const StyledPresence = styled(_StyledPresence)<PresenceSizeProps>`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-sizing: content-box;

  ${({ iconSizeValue, borderSizeValue, color }: PresenceSizeProps) => {
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
  ${({ iconSizeValue, borderSizeValue }: PresenceSizeProps) => {
    return css`
      display: flex;
      justify-content: center;
      width: ${iconSizeValue}px;
      height: ${iconSizeValue}px;
      padding: ${borderSizeValue}px;
    `;
  }}
` as React.ComponentType<
  PresenceSizeProps & React.HTMLAttributes<HTMLDivElement>
>;
