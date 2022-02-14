import {
  css,
  fakeBorder,
  getParsePaletteColor,
  nonTouchHoverMedia,
  palette2,
  PaletteReturnType,
  radius,
  RcTheme,
  RcThemedStyled,
  setOpacity,
  spacing,
} from '../../../../foundation';
import { RcSwitchProps } from '../Switch';
import { RcSwitchClasses } from '../utils';

const thumbColor = palette2('neutral', 'f01');
const disabledColor = palette2('disabled', 'f02');
const defaultTrackColorArray = ['neutral', 'f02'];

const heightCss = css`
  height: 20px;
`;
const widthCss = css`
  width: 36px;
`;
const thumbSize = css`
  height: 12px;
  width: 12px;
`;

const notDisabledSwitchBase = (
  opacity: keyof RcTheme['opacity'],
  checkedColor: PaletteReturnType,
  trackedColor: PaletteReturnType,
) => css`
  .${RcSwitchClasses.switchBase} {
    &:not(.${RcSwitchClasses.disabled}) {
      & + .${RcSwitchClasses.track} {
        background-color: ${setOpacity(trackedColor, opacity, true)};
      }

      &.${RcSwitchClasses.checked} + .${RcSwitchClasses.track} {
        background-color: ${setOpacity(checkedColor, opacity, true)};
      }
    }
  }
`;

export const SwitchStyle: RcThemedStyled<RcSwitchProps, any> = ({
  color: colorProp,
  trackColor: trackColorProp,
}) => {
  const checkedColor = getParsePaletteColor(colorProp);
  const trackColor = getParsePaletteColor(
    trackColorProp,
    defaultTrackColorArray,
  );

  return css`
    &.${RcSwitchClasses.root} {
      padding: 0px;
      ${widthCss};
      ${heightCss};

      .${RcSwitchClasses.switchBase} {
        ${widthCss};
        ${heightCss};
        padding: 0;
        background-color: transparent;
        transform: translateX(${spacing(-2)});

        &.${RcSwitchClasses.checked} {
          transform: translateX(${spacing(2)});
        }
      }

      .${RcSwitchClasses.thumb} {
        ${thumbSize};
        background-color: ${thumbColor};
        box-shadow: none;
      }

      .${RcSwitchClasses.track} {
        ${heightCss};
        opacity: 1;
        margin: 0;
        border-radius: ${radius('round')};
        background-color: ${trackColor};
      }

      .${RcSwitchClasses.checked} + .${RcSwitchClasses.track} {
        background-color: ${checkedColor};
      }

      .${RcSwitchClasses.disabled} + .${RcSwitchClasses.track} {
        background-color: ${disabledColor};
      }

      .${RcSwitchClasses.focusVisible} + .${RcSwitchClasses.track} {
        &:after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          border-radius: ${radius('round')};
          border: 1px solid ${palette2('interactive', 'f01')};
          ${fakeBorder({ color: palette2('neutral', 'f11') })}
        }
      }

      ${nonTouchHoverMedia} {
        &:hover {
          ${notDisabledSwitchBase('08', checkedColor, trackColor)};
        }
      }

      &:active {
        ${notDisabledSwitchBase('24', checkedColor, trackColor)};
      }
    }
  `;
};
