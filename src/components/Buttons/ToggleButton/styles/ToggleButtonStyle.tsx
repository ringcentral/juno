import {
  css,
  focusVisible,
  focusVisibleColor,
  focusVisibleShadowStyle,
  nonTouchHoverMedia,
  palette2,
  px,
  RcThemedStyled,
  setOpacity,
  spacing,
} from '../../../../foundation';
import { RcIconSizes } from '../../../Icon/utils';
import { plainIconButtonFocusStyle } from '../../IconButton/styles';
import { RcToggleButtonProps } from '../ToggleButton';
import { RcToggleButtonClasses, RcToggleButtonSpace } from '../utils';

const actionColor = palette2('action', 'grayLight');
const selectedBgColor = setOpacity(focusVisibleColor, '12');

export const ToggleButtonStyle: RcThemedStyled<RcToggleButtonProps, any> = (
  props,
) => {
  const { size, variant, disabled } = props;

  const space = spacing(RcToggleButtonSpace[size!].area);

  return css`
    color: ${palette2('neutral', 'f04')};
    border: unset;

    ${nonTouchHoverMedia} {
      &:hover {
        color: ${palette2('neutral', 'f06')};
      }
    }

    &.${RcToggleButtonClasses.selected} {
      color: ${focusVisibleColor};
    }

    &.${RcToggleButtonClasses.disabled} {
      color: ${palette2('neutral', 'f02')};
    }

    .${RcToggleButtonClasses.label} {
      position: relative;
      font-size: ${px(RcIconSizes[size!] as number)};
    }

    ${variant === 'standard' &&
      css`
        padding: ${space};

        ${nonTouchHoverMedia} {
          &:hover {
            background-color: ${setOpacity(actionColor, '08')};
          }
        }

        ${focusVisibleShadowStyle('sm')};

        &:active {
          background-color: ${setOpacity(actionColor, '12')};
        }

        ${!disabled &&
          css`
            &.${RcToggleButtonClasses.selected},
              &.${RcToggleButtonClasses.selected}:hover {
              background-color: ${selectedBgColor};
            }
          `};
      `};

    ${variant === 'box' &&
      css`
        padding: ${space};

        &.${RcToggleButtonClasses.selected} {
          background-color: unset;
        }

        ${nonTouchHoverMedia} {
          &:hover,
          &.${RcToggleButtonClasses.selected}:hover {
            background-color: unset;
          }
        }

        ${focusVisible} {
          .${RcToggleButtonClasses.label} {
            ${plainIconButtonFocusStyle({ radius: 'sm' })}
          }
        }
      `};
  `;
};
