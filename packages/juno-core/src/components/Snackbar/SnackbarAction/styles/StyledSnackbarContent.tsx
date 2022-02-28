import {
  css,
  fakeBorder,
  focusVisible,
  getParsePaletteColor,
  opacity,
  RcThemedStyled,
  spacing,
  typography,
} from '../../../../foundation';
import { RcSnackbarContentLineHeight } from '../../SnackbarContent/utils';
import { RcSnackbarActionProps } from '../SnackbarAction';
import { RcSnackbarActionClasses } from '../utils';

export const snackbarContentActionStyle: RcThemedStyled<
  RcSnackbarActionProps,
  any
> = ({ color }) => {
  return css`
    color: ${color && getParsePaletteColor(color)};

    &.${RcSnackbarActionClasses.text} {
      ${typography('body2')};
      line-height: ${RcSnackbarContentLineHeight};
      text-decoration: underline;
    }

    & + &.${RcSnackbarActionClasses.text} {
      margin-left: ${spacing(3)};
    }

    & + &.${RcSnackbarActionClasses.icon} {
      margin-left: ${spacing(4)};
    }

    &:active {
      opacity: ${opacity('24', true)};
    }

    &:disabled {
      opacity: ${opacity('24')};
    }

    ${focusVisible} {
      ${fakeBorder({
        pseudo: true,
        color: 'currentColor',
        inset: false,
        radius: 'sm',
      })}
    }
  `;
};
