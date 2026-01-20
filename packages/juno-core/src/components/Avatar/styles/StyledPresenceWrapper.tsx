import { styled } from '../../../foundation';
import { PresenceOrigin } from '../Avatar';

type StyledPresenceWrapperProps = {
  horizontal: PresenceOrigin['horizontal'];
  vertical: PresenceOrigin['vertical'];
};

export const StyledPresenceWrapper = styled.div<StyledPresenceWrapperProps>`
  position: absolute;
  ${({ horizontal }: StyledPresenceWrapperProps) => horizontal}: 14%;
  ${({ vertical }: StyledPresenceWrapperProps) => vertical}: 14%;
  transform: translate(
    ${({ horizontal }: StyledPresenceWrapperProps) =>
      horizontal === 'right' ? '' : '-'}50%,
    ${({ vertical }: StyledPresenceWrapperProps) =>
      vertical === 'bottom' ? '' : '-'}50%
  );
  transform-origin: 100% 100%;
`;
