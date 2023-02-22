import { palette2, styled, UnitMap } from '../../../foundation';
import { RcPresenceSize } from '../Presence';

const InnerSizes: UnitMap<RcPresenceSize, number> = {
  xxsmall: 6,
  xsmall: 6,
  small: 8,
  medium: 8,
  large: 12,
  xlarge: 16,
};

type StyledCircleParams = { size: RcPresenceSize };

export const CircleDiv = styled.div<StyledCircleParams>`
  height: ${({ size }) => InnerSizes[size]}px;
  width: ${({ size }) => InnerSizes[size]}px;
  background: ${palette2('neutral', 'f01')};
  border-radius: 50%;
  justify-content: center;
`;
