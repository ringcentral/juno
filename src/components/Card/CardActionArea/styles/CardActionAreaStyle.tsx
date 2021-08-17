import {
  css,
  Keyframes,
  keyframes,
  opacity,
  palette2,
  RcThemedStyled,
} from '../../../../foundation';
import { RcCardActionAreaProps } from '../CardActionArea';
import {
  RcCardActionAreaClasses,
  RcCardActionAreaRippleClasses,
} from '../utils';

const rippleAnimation: RcThemedStyled<RcCardActionAreaProps, Keyframes> = ({
  theme,
}) =>
  keyframes`
  0% {
    transform: scale(0);
    opacity: ${theme.opacity['08']};
  }
  100% {
    transform: scale(1);
    opacity: ${theme.opacity['24']};
  }
`;

export const CardActionAreaStyle: RcThemedStyled<
  RcCardActionAreaProps,
  any
> = () => {
  return css`
    &.${RcCardActionAreaClasses.focusVisible}
      .${RcCardActionAreaClasses.focusHighlight} {
      opacity: 0;
    }

    .${RcCardActionAreaRippleClasses.root} {
      color: ${palette2('action', 'grayLight')};
    }

    .${RcCardActionAreaRippleClasses.rippleVisible} {
      opacity: ${opacity('24')};
      animation-name: ${rippleAnimation};
    }

    &.${RcCardActionAreaClasses.disableRipple}:active {
      background-color: ${palette2('action', 'grayLight', 0.24)};
    }
  `;
};
