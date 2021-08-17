import { styled } from '../../../foundation';
import { PresenceOrigin } from '../Avatar';

export const StyledPresenceWrapper = styled.div<{
  horizontal: PresenceOrigin['horizontal'];
  vertical: PresenceOrigin['vertical'];
}>`
  position: absolute;
  ${({ horizontal }) => horizontal}: 14%;
  ${({ vertical }) => vertical}: 14%;
  transform: translate(
    ${({ horizontal }) => (horizontal === 'right' ? '' : '-')}50%,
    ${({ vertical }) => (vertical === 'bottom' ? '' : '-')}50%
  );
  transform-origin: 100% 100%;
`;
