import {
  css,
  darken,
  ellipsis,
  fakeBorder,
  FakeBorderOption,
  focusVisible,
  focusVisibleColor,
  getParsePaletteColor,
  lighten,
  nonTouchHoverMedia,
  palette2,
  PaletteReturnType,
  radius,
  RcThemedStyled,
  setOpacity,
  spacing,
  typography,
} from '../../../foundation';
import { disabledColor } from '../../Forms/TextField/styles';
import { RcChipProps } from '../Chip';
import { RcChipClasses } from '../utils';

const defaultBgColor = palette2('action', 'grayDark');
const defaultTextColor = palette2('neutral', 'f06');
const errorBgColor = palette2('danger', 'f02');
const defaultOutlineBgColor = palette2('neutral', 'b01');

function fakePseudoRoundBorder(addOptions?: FakeBorderOption) {
  return fakeBorder({ pseudo: true, radius: 'round', ...addOptions });
}

export const chipColor: RcThemedStyled<
  RcChipProps & {
    focusedBorderColor: PaletteReturnType;
    normalBorderColor?: PaletteReturnType;
    interactiveBackgroundColor: PaletteReturnType;
    normalColor: PaletteReturnType;
    normalBackgroundColor: PaletteReturnType;
  },
  any
> = ({
  focusedBorderColor,
  variant,
  error,
  normalBorderColor,
  interactiveBackgroundColor,
  normalColor,
  normalBackgroundColor,
  color,
  backgroundColor,
  theme,
}) => {
  const outlined = variant === 'outlined';

  const hoverColorLighten = error || outlined;

  if (
    outlined &&
    !error &&
    // mean have set custom background color
    (color || backgroundColor)
  ) {
    normalColor = focusedBorderColor;
    normalBorderColor = focusedBorderColor;
    interactiveBackgroundColor = focusedBorderColor;

    const notCustomBackground = !backgroundColor || backgroundColor === color;
    // when color be same make that color have lighten
    if (notCustomBackground) {
      normalBackgroundColor =
        theme.palette.type === 'light'
          ? lighten(normalBackgroundColor, 0.92)
          : darken(normalBackgroundColor, 0.72);
    }
  }

  return css`
    color: ${normalColor};
    background-color: ${normalBackgroundColor};

    ${fakePseudoRoundBorder({ color: normalBorderColor })};

    ${nonTouchHoverMedia} {
      &:hover {
        background-color: ${setOpacity(
          interactiveBackgroundColor,
          hoverColorLighten ? '08' : '12',
        )};
      }
    }

    &.${RcChipClasses.focused}, ${focusVisible} {
      ${fakePseudoRoundBorder({ color: focusedBorderColor })};

      background-color: ${setOpacity(interactiveBackgroundColor, '16')};
    }

    &:active {
      background-color: ${setOpacity(interactiveBackgroundColor, '24')};
    }
  `;
};

export const ChipStyle: RcThemedStyled<RcChipProps, any> = (props) => {
  const {
    isError,
    error = isError,
    color: colorProp,
    variant,
    backgroundColor: backgroundColorProp = colorProp,
  } = props;

  const parsedBackgroundColor = getParsePaletteColor(
    backgroundColorProp,
    defaultOutlineBgColor,
  );

  const color = getParsePaletteColor(colorProp, focusVisibleColor);

  const outlined = variant === 'outlined';

  const normalBackgroundColor = outlined
    ? parsedBackgroundColor
    : palette2('neutral', 'b03');

  return css`
    height: 28px;
    box-sizing: border-box;
    padding: ${spacing(0.5)};

    position: relative;
    border-radius: ${radius('round')};
    border: ${outlined && 'none'};

    ${ellipsis};
    ${typography('body1')};

    ${chipColor({
      ...props,
      error,
      normalColor: defaultTextColor,
      normalBackgroundColor,
      focusedBorderColor: color,
      normalBorderColor: outlined ? palette2('neutral', 'l02') : undefined,
      interactiveBackgroundColor: defaultBgColor,
    })};

    &.${RcChipClasses.disabled} {
      color: ${disabledColor};
      opacity: 1;
    }

    ${error &&
    css`
      &:not(.${RcChipClasses.disabled}) {
        ${chipColor({
          ...props,
          error,
          normalColor: errorBgColor,
          normalBackgroundColor: palette2('danger', 'b01'),
          focusedBorderColor: errorBgColor,
          normalBorderColor: errorBgColor,
          interactiveBackgroundColor: errorBgColor,
        })};
      }
    `};

    .${RcChipClasses.avatar} {
      color: ${palette2('neutral', 'b01')};
      margin-left: 0px;
      margin-right: -4px;

      span {
        width: auto;
        height: auto;
      }
    }
  `;
};
