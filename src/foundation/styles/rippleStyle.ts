import { css } from '../styled-components';
import { RcThemedStyled } from '../theme/theme.type';
import { palette2 } from './newPalette';

export const backgroundTransition: RcThemedStyled<{}, string> = ({ theme }) =>
  theme.transitions.create(['background'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shortest,
  });

export const rippleStyle = css`
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  transition: ${backgroundTransition};

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(
      circle,
      ${palette2('neutral', 'b06')} 10%,
      transparent 10.01%
    );
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.5s ease-out, opacity 0.6s ease-in;
  }

  &:active:after {
    transform: scale(0, 0);
    opacity: 0.1;
    transition: 0s;
  }
`;
