import {
  css,
  fakeBorder,
  getParsePaletteColor,
  palette2,
  px,
  radius as radiusFn,
  RcThemedStyled,
  spacing,
  typography,
} from '../../../../foundation';
import { RcTextFieldProps } from '../TextField';
import {
  belowIconButtonSpacing,
  RcOutlineTextFieldFontStyles,
  RcOutlineTextFieldHeights,
  RcOutlineTextFieldInputClasses,
  RcOutlineTextFieldLabelMargins,
  RcOutlineTextFieldSpaces,
  RcTextFieldClasses,
} from '../utils';

export const OutlineTextFieldStyle: RcThemedStyled<RcTextFieldProps, any> = ({
  radius,
  size,
  color: colorProp,
}) => {
  const height = px(RcOutlineTextFieldHeights[size!]);
  const { inside, outside, insideLeft, y } = RcOutlineTextFieldSpaces[size!];
  const labelMargin = RcOutlineTextFieldLabelMargins[size!];
  const typographyToken = RcOutlineTextFieldFontStyles[size!];

  const currRadius = radiusFn(radius!);

  const borderColor = getParsePaletteColor(
    colorProp,
    palette2('neutral', 'l03'),
  );

  const focusBorderColor = getParsePaletteColor(
    colorProp,
    palette2('interactive', 'f01'),
  );

  // `-webkit-tap-highlight-color` for cover background color, prevent color be cover by browser
  return css`
    .${RcOutlineTextFieldInputClasses.input} {
      ${typography(typographyToken)};
    }

    ${belowIconButtonSpacing(spacing(inside))};

    * + .${RcOutlineTextFieldInputClasses.input} {
      margin-left: ${spacing(insideLeft || inside)};
    }

    &.${RcTextFieldClasses.root} {
      label + .${RcOutlineTextFieldInputClasses.root} {
        margin-top: ${spacing(labelMargin)};
      }
    }

    .${RcOutlineTextFieldInputClasses.root} {
      -webkit-tap-highlight-color: transparent;
      min-height: ${height};
      background: ${palette2('neutral', 'b01')};
      padding: ${spacing(y, outside)};
      border-radius: ${currRadius};

      &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: ${currRadius};
        transition: none;
        border-bottom: none !important;
        pointer-events: none;
        ${fakeBorder({ color: borderColor })};
      }

      &:not(.${RcOutlineTextFieldInputClasses.focused}):not(.${RcOutlineTextFieldInputClasses.disabled}):hover {
        background: ${palette2('neutral', 'b02')};
      }
    }

    .${RcOutlineTextFieldInputClasses.focused} {
      &:before {
        ${fakeBorder({ color: focusBorderColor })};
      }
    }

    .${RcOutlineTextFieldInputClasses.error} {
      &:before {
        ${fakeBorder({ color: palette2('danger', 'f02') })};
      }
    }

    .${RcOutlineTextFieldInputClasses.disabled} {
      background: ${palette2('neutral', 'b03')};
      &:before {
        ${fakeBorder({ color: palette2('disabled', 'f02') })};
      }
    }
  `;
};
