import {
  css,
  fakeBorder,
  focusVisible,
  getParsePaletteColor,
  nonTouchHoverMedia,
  palette2,
  paletteContrastText,
  px,
  radius,
  RcThemedStyled,
  setOpacity,
  spacing,
  typography,
} from '../../../../foundation';
import { RcButtonProps } from '../Button';
import {
  RcButtonClasses,
  RcButtonColors,
  RcButtonHeights,
  RcButtonIconSpace,
  RcButtonMinWidths,
  RcButtonPadding,
  RcButtonTextColors,
  RcButtonTypographies,
} from '../utils';

export const buttonColor: RcThemedStyled<RcButtonProps> = ({ color }) =>
  RcButtonColors[color!] || getParsePaletteColor(color);

export const plainButtonTextColor: RcThemedStyled<RcButtonProps> = ({
  color,
}) => RcButtonTextColors[color!] || getParsePaletteColor(color);

export const buttonTextColor: RcThemedStyled<RcButtonProps> = (props) =>
  paletteContrastText(buttonColor(props));

export const buttonHoverColor: RcThemedStyled<RcButtonProps> = (props) =>
  setOpacity(buttonColor(props), '08');

const containedButtonHoverColor: RcThemedStyled<RcButtonProps> = (props) =>
  setOpacity(buttonColor(props), '08', true);

const disabledColor: RcThemedStyled<RcButtonProps, any> = ({ disabled }) =>
  disabled ? palette2('disabled', 'f02') : '';

export const buttonStyle: RcThemedStyled<RcButtonProps, any> = (props) => {
  const { variant, size, radius: radiusProp, keepElevation } = props;
  const plainTextColor = plainButtonTextColor(props);

  const iconSpace = spacing(RcButtonIconSpace[size!]);

  const isPlain = variant === 'plain';

  return css`
    text-transform: none;
    ${typography(RcButtonTypographies[size!], true)};
    text-align: center;
    box-shadow: ${!keepElevation && 'unset'};
    border-radius: ${radiusProp && radius(radiusProp)};

    ${!isPlain &&
      css`
        min-width: ${px(RcButtonMinWidths[size!])};
        min-height: ${px(RcButtonHeights[size!])};
        padding: ${spacing(0, RcButtonPadding[size!])};
      `};

    .${RcButtonClasses.startIcon} {
      margin-right: ${iconSpace};

      ${isPlain &&
        css`
          margin-left: 0;
        `};
    }

    .${RcButtonClasses.endIcon} {
      margin-left: ${iconSpace};

      ${isPlain &&
        css`
          margin-right: 0;
        `};
    }

    &.${RcButtonClasses.text} {
      color: ${plainButtonTextColor};

      &.${RcButtonClasses.disabled} {
        color: ${disabledColor};
      }

      ${nonTouchHoverMedia} {
        &:hover {
          background-color: ${buttonHoverColor};
        }
      }

      ${isPlain &&
        css`
          padding: ${spacing(1)};
          min-width: unset;
          line-height: 1;

          ${nonTouchHoverMedia} {
            &:hover {
              color: ${setOpacity(plainTextColor, '80')};
              background-color: transparent;
            }
          }

          ${focusVisible} {
            ${fakeBorder({ color: plainButtonTextColor(props) })}
          }

          &:active {
            &.${RcButtonClasses.text} {
              color: ${setOpacity(plainTextColor, '64')};
            }
          }
        `};
    }

    &.${RcButtonClasses.contained} {
      color: ${buttonTextColor};
      background-color: ${buttonColor};

      ${nonTouchHoverMedia} {
        &:hover {
          background-color: ${containedButtonHoverColor};
        }
      }

      &.${RcButtonClasses.disabled} {
        background-color: ${palette2('disabled', 'b01')};
        color: ${palette2('disabled', 'f01')};
      }
    }

    &.${RcButtonClasses.outlined} {
      color: ${plainButtonTextColor};
      border-color: ${plainButtonTextColor};
      padding: ${spacing(0, RcButtonPadding[size!] - 0.25)};

      ${nonTouchHoverMedia} {
        &:hover {
          background-color: ${buttonHoverColor};
        }
      }

      &.${RcButtonClasses.disabled} {
        color: ${disabledColor};
        border-color: ${disabledColor};
      }
    }
  `;
};
