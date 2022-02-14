import { keyframes } from '../styled-components';
import { RcTheme } from '../theme/theme.type';

export const rippleEnter = (theme: RcTheme) => keyframes`
  from {
    transform: scale(0);
    opacity: 0.1;
  }
  to {
    transform: scale(1);
    opacity: ${theme.palette.action.hoverOpacity * 2};
  }
`;
