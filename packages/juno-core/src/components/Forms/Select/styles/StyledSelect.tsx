import {
  css,
  fakeBorder,
  getParsePaletteColor,
  palette2,
  px,
  radius,
  RcThemedStyled,
  setOpacity,
  spacing,
  typography,
} from '../../../../foundation';
import { disabledColor, placeholderColor } from '../../TextField/styles';
import { RcSelectProps } from '../Select';
import {
  RcBoxSelectInputClasses,
  RcBoxSelectInputHeights,
  RcLineSelectInputClasses,
  RcSelectClasses,
  RcSelectInputClasses,
  RcSelectInputWhenPlaceholderClasses,
} from '../utils';

const boxBackgroundColor = palette2('neutral', 'b03');
const boxActionBackgroundColor = palette2('action', 'grayDark');

const lineSelectStyle = css<RcSelectProps>`
  .${RcLineSelectInputClasses.input} {
    ${({ textVariant }) => typography(textVariant || 'subheading1')};
    line-height: unset;

    &:focus {
      background-color: ${setOpacity(palette2('action', 'grayDark'), '08')};
    }
  }
`;

const boxSelectStyle: RcThemedStyled<RcSelectProps, any> = ({
  color,
}) => css<RcSelectProps>`
  > .${RcBoxSelectInputClasses.root} {
    margin-top: ${({ label }: any) => label && spacing(5)};
    box-sizing: border-box;
    height: ${({ size }: any) => px(RcBoxSelectInputHeights[size!])};
    border-radius: ${radius('lg')};
    background-color: ${boxBackgroundColor};

    &:not(.${RcBoxSelectInputClasses.disabled}):hover {
      background-color: ${setOpacity(boxActionBackgroundColor, '12')};
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: ${radius('lg')};

      transition: none;
      border-bottom: none !important;
      pointer-events: none;
      ${fakeBorder({ color: palette2('highContrast') })};
    }

    &:after {
      display: none;
    }
  }

  > .${RcBoxSelectInputClasses.focused} {
    background-color: ${setOpacity(boxActionBackgroundColor, '16')};

    &:before {
      ${fakeBorder({ color })};
    }
  }

  > .${RcBoxSelectInputClasses.error} {
    &:before {
      ${fakeBorder({ color: palette2('danger', 'f02') })};
    }
  }

  > .${RcBoxSelectInputClasses.disabled} {
    background-color: ${setOpacity(palette2('action', 'grayLight'), '12')};
    &:before {
      ${fakeBorder({ color: 'transparent', allowTransparent: true })};
    }
  }

  .${RcBoxSelectInputClasses.input} {
    padding: ${spacing(1.5, 6, 1.5, 2)};
    ${({ textVariant }) => typography(textVariant || 'body1')};
    line-height: ${({ size }: any) =>
      // here -12 for make this input height same as container
      px(RcBoxSelectInputHeights[size!] - 12)};

    &:focus {
      background: transparent;
    }
  }
`;

export const selectStyle: RcThemedStyled<RcSelectProps, any> = (props) => {
  const { variant, placeholder, color: colorProp } = props;
  const color = getParsePaletteColor(colorProp, palette2('interactive', 'f01'));

  return css`
    .${RcSelectClasses.icon} {
      color: ${palette2('neutral', 'f04')};
    }

    .${RcSelectInputClasses.focused} {
      .${RcSelectClasses.icon} {
        color: ${color};
      }
    }

    .${RcSelectInputClasses.error} {
      .${RcSelectClasses.icon} {
        color: ${palette2('danger', 'f02')};
      }
    }

    .${RcSelectInputWhenPlaceholderClasses.input} {
      color: ${placeholderColor};
      &:before {
        content: ${`'${placeholder}'`};
        border: none;
      }
    }

    .${RcSelectInputClasses.disabled} {
      color: ${disabledColor};
      .${RcSelectClasses.icon} {
        color: ${disabledColor};
      }
    }

    ${variant === 'line' && lineSelectStyle};
    ${variant === 'box' && boxSelectStyle({ ...props, color })};
  `;
};
