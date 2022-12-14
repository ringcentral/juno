import {
  css,
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
  focusRing,
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
  (typeof color === 'string' && RcButtonColors[color!]) ||
  getParsePaletteColor(color);

export const plainButtonTextColor: RcThemedStyled<RcButtonProps> = ({
  color,
}) =>
  (typeof color === 'string' && RcButtonTextColors[color!]) ||
  getParsePaletteColor(color);

export const buttonTextColor: RcThemedStyled<RcButtonProps> = (props) =>
  paletteContrastText(buttonColor(props));

export const buttonHoverColor: RcThemedStyled<RcButtonProps> = (props) =>
  setOpacity(buttonColor(props), '08');

const textButtonFocusVisibleColor: RcThemedStyled<RcButtonProps> = (props) =>
  setOpacity(buttonColor(props), '08');

const containedButtonHoverColor: RcThemedStyled<RcButtonProps> = (props) =>
  setOpacity(buttonColor(props), '08', true);

export const buttonStyle: RcThemedStyled<RcButtonProps, any> = (props) => {
  const {
    variant,
    size,
    radius: radiusProp = 'lg',
    keepElevation,
    loading,
    disabled,
    disabledVariant,
    focusVariant,
  } = props;
  const isMask = loading || (disabled && disabledVariant === 'mask');

  const textDisabledColor = !isMask ? palette2('disabled', 'f02') : undefined;

  const plainTextColor = plainButtonTextColor(props);

  const iconSpace = spacing(RcButtonIconSpace[size!]);

  const isPlain = variant === 'plain';

  return css`
    text-transform: none;
    ${typography(RcButtonTypographies[size!], true)};
    text-align: center;
    box-shadow: ${!keepElevation && 'unset'};
    border-radius: ${radius(radiusProp)};

    ${isMask &&
    css`
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        display: block;
        background: ${setOpacity(palette2('neutral', 'b01'), '32')};
        width: 100%;
        height: 100%;
        border-radius: ${radius(radiusProp ?? 'lg')};
      }
    `};

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
        color: ${textDisabledColor};
      }

      ${focusVariant === 'focusRing' &&
      css`
        ${focusVisible} {
          ${focusRing('normal', { borderRadius: radiusProp })}
          background-color: ${textButtonFocusVisibleColor};
        }
      `}

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
          ${focusRing('inset', { borderRadius: radiusProp })}
          background-color: transparent;
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

      ${focusVariant === 'focusRing' &&
      css`
        ${focusVisible} {
          ${focusRing('normal', {
            borderRadius: radiusProp,
          })}
          box-shadow: unset;
        }
      `}

      ${!isMask &&
      css`
        &.${RcButtonClasses.disabled} {
          background-color: ${palette2('disabled', 'b01')};
          color: ${palette2('disabled', 'f01')};
        }
      `}
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
        color: ${textDisabledColor};
        border-color: ${textDisabledColor};
      }

      ${focusVariant === 'focusRing' &&
      css`
        ${focusVisible} {
          ${focusRing('normal', {
            borderRadius: radiusProp,
            borderWidth: '1px',
          })}
        }
      `}
    }
  `;
};
