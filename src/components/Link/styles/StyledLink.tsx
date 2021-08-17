import {
  css,
  focusVisible,
  getParsePaletteColor,
  nonTouchHoverMedia,
  palette2,
  RcThemedStyled,
  setOpacity,
  typography,
} from '../../../foundation';
import { RcLinkProps } from '../Link';
import { RcLinkTypographies } from '../utils';

export const LinkStyle: RcThemedStyled<RcLinkProps, any> = ({
  disabled,
  color: colorProp,
  size,
  variant,
}) => {
  const color = disabled
    ? palette2('disabled', 'f02')
    : colorProp === 'primary'
    ? palette2('informative', 'f02')
    : getParsePaletteColor(colorProp);

  return css`
    text-decoration: none;
    ${typography(RcLinkTypographies[size!] || variant)};
    color: ${color};

    &:focus {
      outline: none;
    }

    ${focusVisible} {
      text-decoration: underline;
    }

    ${!disabled
      ? css`
          cursor: pointer;

          ${nonTouchHoverMedia} {
            &:hover {
              text-decoration: underline;
            }
          }

          &:active {
            color: ${setOpacity(color, '24', true)};
          }
        `
      : css`
          pointer-events: none;
        `};
  `;
};
