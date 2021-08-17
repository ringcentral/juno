import {
  css,
  getContrastBgColor,
  nonTouchHoverMedia,
  palette2,
  RcThemedStyled,
  setOpacity,
} from '../../../../foundation';
import { RcSliderProps } from '../Slider';
import { RcSliderClasses } from '../utils';

export const SliderStyle: RcThemedStyled<RcSliderProps, any> = (props) => {
  const [currColor, contrastBgColor] = getContrastBgColor(props);

  const actionThumbColor = setOpacity(currColor, '16');

  return css`
    color: ${currColor};

    &.${RcSliderClasses.trackInverted} {
      .${RcSliderClasses.track} {
        background-color: ${contrastBgColor};
      }
    }

    .${RcSliderClasses.thumb} {
      &.${RcSliderClasses.focusVisible} {
        box-shadow: 0 0 0 8px ${actionThumbColor};
      }

      ${nonTouchHoverMedia} {
        &:hover {
          box-shadow: 0 0 0 8px ${actionThumbColor};
        }
      }

      &.${RcSliderClasses.active} {
        box-shadow: 0 0 0 14px ${actionThumbColor};
      }
    }

    &.${RcSliderClasses.disabled} {
      color: ${palette2('disabled', 'f02')};
    }
  `;
};
