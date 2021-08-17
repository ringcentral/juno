import {
  css,
  getContrastBgColor,
  RcThemedStyled,
} from '../../../../foundation';
import { RcLinearProgressProps } from '../LinearProgress';
import { RcLinearProgressClasses } from '../utils';

export const LinearProgressStyle: RcThemedStyled<RcLinearProgressProps, any> = (
  props,
) => {
  const [currColor, contrastBgColor] = getContrastBgColor(props);

  return css`
    &:not(.${RcLinearProgressClasses.buffer}),
    .${RcLinearProgressClasses.colorPrimary} {
      background-color: ${contrastBgColor};
    }

    .${RcLinearProgressClasses.barColorPrimary} {
      background-color: ${currColor};
    }

    .${RcLinearProgressClasses.dashedColorPrimary} {
      background-image: radial-gradient(
        ${contrastBgColor} 0%,
        ${contrastBgColor} 16%,
        transparent 42%
      );
    }
  `;
};
