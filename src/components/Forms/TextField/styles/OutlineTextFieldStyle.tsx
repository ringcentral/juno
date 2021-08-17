import {
  css,
  fakeBorder,
  palette2,
  px,
  radius as radiusFn,
  RcThemedStyled,
  spacing,
} from '../../../../foundation';
import { RcTextFieldProps } from '../TextField';
import {
  belowIconButtonSpacing,
  RcOutlineTextFieldHeights,
  RcOutlineTextFieldInputClasses,
  RcOutlineTextFieldLabelMargins,
  RcOutlineTextFieldSpaces,
  RcTextFieldClasses,
} from '../utils';

export const OutlineTextFieldStyle: RcThemedStyled<RcTextFieldProps, any> = ({
  radius,
  size,
}) => {
  const height = px(RcOutlineTextFieldHeights[size!]);
  const { inside, outside, insideLeft } = RcOutlineTextFieldSpaces[size!];
  const labelMargin = RcOutlineTextFieldLabelMargins[size!];

  const currRadius = radiusFn(radius!);

  // `-webkit-tap-highlight-color` for cover background color, prevent color be cover by browser
  return css`
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
      height: ${height};
      min-height: ${height};
      background: ${palette2('neutral', 'b01')};
      padding: ${spacing(outside)};
      border-radius: ${currRadius};

      &:before {
        content: ' ';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: ${currRadius};
        transition: none;
        border-bottom: none !important;
        pointer-events: none;
        ${fakeBorder({ color: palette2('neutral', 'l03') })};
      }

      &:not(.${RcOutlineTextFieldInputClasses.focused}):not(.${RcOutlineTextFieldInputClasses.disabled}):hover {
        background: ${palette2('neutral', 'b02')};
      }
    }

    .${RcOutlineTextFieldInputClasses.focused} {
      &:before {
        ${fakeBorder({ color: palette2('interactive', 'f01') })};
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
