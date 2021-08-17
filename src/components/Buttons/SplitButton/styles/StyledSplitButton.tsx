import {
  css,
  focusVisible,
  nonTouchHoverMedia,
  palette2,
  px,
  radius,
  RcThemedStyled,
  setOpacity,
  spacing,
  toSpacing,
} from '../../../../foundation';
import { RcIcon } from '../../../Icon';
import { RcButton } from '../../Button';
import {
  buttonColor,
  buttonHoverColor,
  buttonTextColor,
  plainButtonTextColor,
} from '../../Button/styles';
import { plainIconButtonFocusStyle } from '../../IconButton/styles';
import { RcIconButtonSizes } from '../../IconButton/utils';
import { RcSplitButtonProps } from '../SplitButton';
import {
  RcSplitButtonClasses,
  RcSplitButtonTouchRippleClasses,
  variantIsHandler,
} from '../utils';

const transition: RcThemedStyled<RcSplitButtonProps, any> = ({ theme }) =>
  theme.transitions.create(
    ['background-color', 'box-shadow', 'border-color', 'color'],
    {
      duration: theme.transitions.duration.short,
    },
  );

const borderLeft: RcThemedStyled<RcSplitButtonProps, any> = ({
  variant,
  color,
  disabled,
  theme,
}) => {
  switch (variant) {
    case 'plain':
    case 'plainIcon':
      return css``;
    case 'outlined':
      return css`
        padding-right: 1px;
        border-left: 1px solid
          ${disabled ? palette2('neutral', 'f02') : plainButtonTextColor};
      `;
    case 'text':
    case 'round':
      return css`
        align-self: stretch;
        padding-right: 1px;
        border-left: 1px solid transparent;
      `;

    default:
      return css`
        padding-right: 1px;
        border-left: 1px solid
          ${setOpacity(buttonTextColor({ color, theme }), '24')};
      `;
  }
};

const iconButtonStyle: RcThemedStyled<RcSplitButtonProps, any> = ({
  size,
  variant,
}) => {
  // * divide two for margin top and bottom
  const currIconSize = RcIconButtonSizes[size!];
  const currSize = currIconSize / 2;
  const space = toSpacing(currSize);
  // * designer define right space little small with 4px
  const rightSpace = toSpacing(currSize - 4);

  const width = px(currIconSize);

  return css`
    .${RcSplitButtonClasses.groupedHorizontal} {
      &.${RcSplitButtonClasses.actionButton} {
        min-width: auto;
        ${variant === 'plainIcon'
          ? css`
              padding: 0;
              box-shadow: none;

              ${focusVisible} {
                ${plainIconButtonFocusStyle({ radius: 'circle' })}
              }
            `
          : css`
              padding: ${spacing(space, rightSpace, space, space)};
            `};

        ${RcIcon} {
          margin-right: 0;
        }
      }

      &.${RcSplitButtonClasses.controlButton} {
        min-width: ${width};
        width: ${width};
      }
    }
  `;
};

export const splitButtonStyle: RcThemedStyled<RcSplitButtonProps, any> = (
  props,
) => {
  const { variant, disabled } = props;
  const variantIs = variantIsHandler(variant);

  const currColor = buttonColor(props as any);

  const isContainer = variant === 'contained';
  const activeColor24 = setOpacity(currColor, '24');
  const containedActiveColor = setOpacity(currColor, '24', true);

  return css`
    .${RcSplitButtonClasses.actionButton} {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    .${RcSplitButtonClasses.controlButton} {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    &.${RcSplitButtonClasses.root} {
      ${!disabled &&
        variantIs(['outlined', 'text', 'round']) &&
        css<any>`
          transition: ${transition};

          ${nonTouchHoverMedia} {
            &:hover {
              background: ${buttonHoverColor};
            }
          }
        `};

      ${variantIs(['text', 'round', 'plainIcon']) &&
        css`
          align-items: center;

          ${!disabled &&
            css`
              ${nonTouchHoverMedia} {
                &:hover {
                  .${RcSplitButtonClasses.controlButton} {
                    border-left-color: ${activeColor24};
                  }
                }
              }
            `}
        `};
    }

    .${RcSplitButtonClasses.groupedHorizontal} {
      ${variantIs(['outlined', 'text', 'contained']) &&
        css`
          min-width: 72px;
        `};

      &.${RcSplitButtonClasses.controlButton} {
        padding: 0;
        min-width: 24px;
        ${borderLeft};
      }

      &.${RcSplitButtonClasses.actionButton} {
        border-right: ${variant === 'outlined' && 0};
      }

      &:not(.${RcSplitButtonClasses.actionButton}) {
        margin-left: 0;
      }

      ${variantIs(['plain', 'plainIcon']) &&
        css<any>`
          &.${RcSplitButtonClasses.controlButton} {
            border-top-left-radius: inherit;
            border-bottom-left-radius: inherit;
            box-shadow: none;

            transition: ${transition};

            ${nonTouchHoverMedia} {
              &:hover {
                background: ${buttonHoverColor};
              }
            }

            ${focusVisible} {
              background: ${buttonHoverColor};
            }
          }

          &.${RcSplitButtonClasses.actionButton} {
            border-top-right-radius: inherit;
            border-bottom-right-radius: inherit;
          }
        `};
    }

    ${variant === 'plainIcon' &&
      css`
        &.${RcSplitButtonClasses.root},
          .${RcSplitButtonClasses.groupedHorizontal} {
          border-radius: ${radius('circle')};

          ${RcButton} {
            min-height: auto;
          }
        }
      `};

    ${variant === 'round' &&
      css`
        &.${RcSplitButtonClasses.root} {
          border-radius: ${radius('round')};
          overflow: hidden;

          ${RcButton} {
            min-height: auto;
          }

          .${RcSplitButtonTouchRippleClasses.child},
            .${RcSplitButtonTouchRippleClasses.ripplePulsate} {
            transform: scale(2);
          }

          .${RcSplitButtonClasses.groupedHorizontal /** this safari issue, top level overflow is not work */} {
            &.${RcSplitButtonClasses.actionButton} {
              border-top-left-radius: ${radius('round')};
              border-bottom-left-radius: ${radius('round')};
            }

            &.${RcSplitButtonClasses.controlButton} {
              border-top-right-radius: ${radius('round')};
              border-bottom-right-radius: ${radius('round')};
            }
          }
        }
      `};

    ${variantIs(['round', 'plainIcon']) && iconButtonStyle};

    &.${RcSplitButtonClasses.menuOpen} {
      ${!variantIs(['plain', 'plainIcon']) &&
        css`
          .${RcSplitButtonClasses.actionButton} {
            background: ${!isContainer && (buttonHoverColor as any)};
          }
        `};

      .${RcSplitButtonClasses.controlButton} {
        background: ${isContainer ? containedActiveColor : activeColor24};
      }
    }
  `;
};
