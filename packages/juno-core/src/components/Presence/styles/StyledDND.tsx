import { css, palette2, styled } from '../../../foundation';
import { RcPresenceProps } from '../Presence';
import { RcPresenceInnerIconSizes } from '../utils';

export const StyledDND = styled.div<RcPresenceProps>`
  ${({ size }) => {
    const value = RcPresenceInnerIconSizes[size!];
    return css`
      width: ${value[0]}px;
      height: ${value[1]}px;
    `;
  }};
  background: ${palette2('neutral', 'f01')};
`;
