import {
  css,
  isFilled,
  nonTouchHoverMedia,
  palette2,
  px,
  RcThemedStyled,
  spacing,
  typography,
} from '../../../../foundation';
import { RcIconButtonSizes } from '../../../Buttons/IconButton/utils';
import { RcTextFieldProps } from '../TextField';
import {
  belowIconButtonSpacing,
  RcTextFieldClasses,
  RcTextFieldFormHelperTextClasses,
  RcTextFieldInputClasses,
  RcTextFieldInputLabelClasses,
} from '../utils';
import { ClearIconButton } from './ClearIconButton';
import { OutlineTextFieldStyle } from './OutlineTextFieldStyle';

const idleColor = palette2('neutral', 'f04');

const errorTextColor = palette2('danger', 'f02');
const errorColor = palette2('danger', 'f02');

export const textColor = palette2('neutral', 'f06');

export const disabledColor = palette2('disabled', 'f02');
export const placeholderColor = palette2('neutral', 'f03');

export const RcDefaultTextFieldWidth = '168px';

const focusWithNotDisabled = `.${RcTextFieldInputClasses.root}:hover:not(.${RcTextFieldInputClasses.disabled})`;

const TextFieldInputHoverFocusStyle = css`
  ${ClearIconButton} {
    display: inline-flex;
  }
`;

export const clearBtnInactiveStyle = css`
  ${nonTouchHoverMedia} {
    ${focusWithNotDisabled} {
      ${TextFieldInputHoverFocusStyle}
    }
  }

  .${RcTextFieldInputClasses.focused} {
    ${TextFieldInputHoverFocusStyle}
  }
`;

export const TextFieldStyle: RcThemedStyled<RcTextFieldProps, any> = ({
  value,
  variant,
  fullWidth,
  clearBtn,
  size,
  textVariant,
  gutterBottom,
  align,
}) => {
  const showClean = isFilled({ value });

  return css`
    ${belowIconButtonSpacing(spacing(3))};

    width: ${!fullWidth && RcDefaultTextFieldWidth};

    ${gutterBottom &&
    css`
      &.${RcTextFieldClasses.root} {
        margin: 0 0 ${spacing(4)} 0;
      }
    `};

    .${RcTextFieldInputLabelClasses.root} {
      ${typography('caption2')};
      color: ${idleColor};
      transform: scale(1);
    }

    .${RcTextFieldInputLabelClasses.focused} {
      color: ${palette2('interactive', 'f01')};
    }

    .${RcTextFieldInputClasses.root} {
      color: ${textColor};

      ${ClearIconButton} {
        display: none;
      }
    }

    ${showClean && clearBtnInactiveStyle};

    .${RcTextFieldInputClasses.input} {
      ${typography(variant === 'borderLess' ? textVariant! : 'subheading1')};
      text-align: ${align};

      ::placeholder {
        color: ${placeholderColor};
        opacity: 1;
      }

      ${clearBtn &&
      align &&
      align !== 'left' &&
      css`
        width: calc(100% - ${px(RcIconButtonSizes[size!])});
      `};
    }

    .${RcTextFieldInputClasses.underline} {
      &:before {
        border-bottom-color: ${palette2('neutral', 'f02')};
      }

      ${nonTouchHoverMedia} {
        &:hover:not(.${RcTextFieldInputClasses.disabled}) {
          &:before {
            border-bottom-color: ${palette2('neutral', 'f06')};
          }
        }
      }

      &:after {
        border-bottom-color: ${palette2('interactive', 'f01')};
      }
    }

    .${RcTextFieldInputClasses.error} {
      &:after {
        border-bottom-color: ${errorColor};
      }
    }

    .${RcTextFieldInputClasses.disabled} {
      color: ${disabledColor};
      // * safari need that in disabled input
      -webkit-text-fill-color: ${disabledColor};
      ::placeholder {
        color: ${disabledColor};
      }
      &:before {
        border-bottom-style: solid;
        border-bottom-color: ${disabledColor};
      }
      &:after {
        border-bottom-style: none;
      }
    }

    .${RcTextFieldFormHelperTextClasses.root} {
      ${typography('caption1')};
      color: ${idleColor};
    }

    .${RcTextFieldFormHelperTextClasses.error},
      .${RcTextFieldInputLabelClasses.error} {
      color: ${errorTextColor};
    }

    .${RcTextFieldFormHelperTextClasses.disabled},
      .${RcTextFieldInputLabelClasses.disabled} {
      color: ${disabledColor};
    }

    /* clears the 'X' from Internet Explorer */
    input[type='search']::-ms-clear,
    input[type='search']::-ms-reveal {
      display: none;
      width: 0;
      height: 0;
    }

    /* clears the 'X' from Chrome */
    input[type='search']::-webkit-search-decoration,
    input[type='search']::-webkit-search-cancel-button,
    input[type='search']::-webkit-search-results-button,
    input[type='search']::-webkit-search-results-decoration {
      display: none;
    }

    ${variant === 'outline' && OutlineTextFieldStyle}
  `;
};