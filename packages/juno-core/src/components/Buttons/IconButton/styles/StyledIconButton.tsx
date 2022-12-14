import {
  backgroundTransition,
  css,
  focusVisible,
  focusVisibleColor,
  getParsePaletteColor,
  nonTouchHoverMedia,
  palette2,
  paletteContrastText,
  px,
  radius,
  RcTheme,
  RcThemedStyled,
  setOpacity,
  shadows,
  fakeBorder,
  opacity,
  focusRing,
} from '../../../../foundation';
import { RcIconButtonProps, RcIconButtonVariant } from '../IconButton';
import {
  RcIconButtonClasses,
  RcIconButtonFocusVisibleInsetSize,
  RcIconButtonSizes,
  RcIconButtonTouchRippleClasses,
} from '../utils';

export const getFocusVisibleInsetSize: RcThemedStyled<RcIconButtonProps, any> =
  ({ size }) => {
    const inset = RcIconButtonFocusVisibleInsetSize[size!];
    return css`
      top: -${inset}px;
      right: -${inset}px;
      bottom: -${inset}px;
      left: -${inset}px;
    `;
  };

const containedVariantTransitions: RcThemedStyled<RcIconButtonProps, string> =
  ({ theme }) =>
    theme.transitions.create(['background-color', 'box-shadow', 'border'], {
      duration: theme.transitions.duration.short,
    });

type PlainIconButtonFocusStyleOption = {
  radius?: keyof RcTheme['radius'];
};

export const plainIconButtonFocusStyle = ({
  radius: radiusProp = 'circle',
}: PlainIconButtonFocusStyleOption = {}) => css`
  &:after {
    content: '';
    position: absolute;
    ${getFocusVisibleInsetSize};
    box-shadow: 0 0 0 2px ${focusVisibleColor};
    border-radius: ${radius(radiusProp)};
    pointer-events: none;
    z-index: 1;
  }
`;

export const iconButtonStyle: RcThemedStyled<RcIconButtonProps, any> = ({
  variant,
  size,
  stretchIcon,
  color,
  disabled,
  useColorWhenDisabled,
  shouldPersistBg,
  radius: radiusProp,
  disableRipple,
  elevation,
  disabledFakeBorder,
  activeElevation,
  IconProps = {},
  focusVariant,
}) => {
  const { color: iconColor } = IconProps;

  const useFocusRing = focusVariant === 'focusRing';

  const iconSize = RcIconButtonSizes[size!];

  const isCircle = (
    ['plain', 'round', 'inverse', 'contained'] as RcIconButtonVariant[]
  ).includes(variant!);
  const isPlain = variant === 'plain';
  const isInverse = variant === 'inverse';
  const isOutline = variant === 'outline';
  const isContained = variant === 'contained';
  const isRound = variant === 'round';

  const containerSize = px(isPlain ? iconSize : iconSize * 2);

  const mainColor = getParsePaletteColor(color);
  const containedColor = iconColor
    ? getParsePaletteColor(iconColor)
    : paletteContrastText(mainColor);

  const currRadius =
    radiusProp || (isOutline ? 'lg' : isCircle ? 'circle' : 'zero');

  const persistBgColor = setOpacity(mainColor, isInverse ? '16' : '12');

  const defaultShadow = isContained ? shadows('1') : undefined;

  const nowShadow =
    elevation !== undefined ? shadows(elevation) : defaultShadow;

  const radiusValue = radius(currRadius);

  const contrastColorBorder =
    !disabledFakeBorder &&
    fakeBorder({
      color: palette2('highContrast'),
      radius: currRadius,
      pseudo: true,
    });

  return css`
    display: inline-flex;
    justify-content: center;
    align-items: center;

    width: ${containerSize};
    height: ${containerSize};
    color: ${mainColor};
    border-radius: ${radiusValue};
    transition: ${backgroundTransition};
    cursor: ${disabled ? 'default' : 'pointer'};
    background-color: ${(shouldPersistBg || isInverse) && persistBgColor};
    box-shadow: ${nowShadow};

    ${nowShadow &&
    css`
      transition: ${containedVariantTransitions};

      &:active {
        box-shadow: ${shadows(
          activeElevation ??
            (elevation ? Math.min(+(elevation as any) + 11, 24) : '12'),
        )};
      }
    `};

    font-size: ${stretchIcon
      ? containerSize
      : px(
          isOutline
            ? iconSize * 1.2 // keep size same as before
            : iconSize,
        )};

    ${nonTouchHoverMedia} {
      &:hover {
        background-color: ${isPlain
          ? 'transparent'
          : setOpacity(mainColor, isInverse ? '24' : '08')};

        color: ${setOpacity(mainColor, '88')};
      }
    }

    &:active {
      color: ${mainColor};
    }

    ${focusVisible} {
      background-color: ${() => {
        if (useFocusRing) {
          if (isRound) return 'transparent';
          if (isInverse) return;
        }
        if (isPlain) return 'transparent';
        if (isInverse) return setOpacity(mainColor, '32');
        return setOpacity(mainColor, '16');
      }};

      ${useFocusRing &&
      (isRound || isInverse) &&
      focusRing('inset', { borderRadius: currRadius })}

      &:active {
        color: ${setOpacity(mainColor, '88')};
      }

      ${isPlain && plainIconButtonFocusStyle({ radius: currRadius })};
    }

    &.${RcIconButtonClasses.persistBg} {
      background-color: ${persistBgColor};
    }

    &.${RcIconButtonClasses.disabled} {
      color: ${useColorWhenDisabled
        ? setOpacity(mainColor, '32')
        : palette2('disabled', 'f02')};

      background-color: ${isInverse && setOpacity(mainColor, '12')};
    }

    &.${RcIconButtonClasses.invisible} {
      opacity: 0;
      visibility: hidden;
      width: 0;
      height: 0;
    }

    &.${RcIconButtonClasses.outline} {
      border: 1px solid ${palette2('neutral', 'l03')};
    }

    &.${RcIconButtonClasses.contained} {
      color: ${containedColor};
      background-color: ${mainColor};

      &.${RcIconButtonClasses.disabled} {
        ${() => {
          if (useColorWhenDisabled)
            return css`
              color: ${containedColor};
              background-color: ${mainColor};
              opacity: ${opacity('32')};
            `;

          return css`
            background-color: ${palette2('disabled', 'b01')};
            color: ${palette2('disabled', 'f01')};
          `;
        }}
      }

      &:before {
        content: '';
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        border-radius: ${radiusValue};
        position: absolute;
      }

      ${contrastColorBorder};

      ${nonTouchHoverMedia} {
        &:hover {
          &:before {
            background-color: ${setOpacity(containedColor, '08')};
          }

          color: ${containedColor};
        }
      }

      ${focusVisible} {
        &:before {
          background-color: ${setOpacity(containedColor, '16')};
        }

        color: ${containedColor};
      }

      &:active {
        ${disableRipple &&
        css`
          &:before {
            background-color: ${setOpacity(containedColor, '24')};
          }
        `}

        color: ${containedColor};
      }
    }

    &.${RcIconButtonClasses.inverse} {
      ${contrastColorBorder};
    }

    .${RcIconButtonTouchRippleClasses.ripplePulsate} {
      border-radius: 0;
      animation-name: none;
      opacity: 0;
    }

    ${
      /**
       * that is equilateral triangle, the third Side length is
       * Math.sqrt(2) = 1.414213562373095, so we scale that
       * to make that full with this square
       */
      !isPlain &&
      !(['circle', 'round'] as RcIconButtonProps['radius'][]).includes(
        currRadius,
      ) &&
      css`
        .${RcIconButtonTouchRippleClasses.child} {
          transform: scale(1.41421357);
        }
      `
    }
  `;
};
