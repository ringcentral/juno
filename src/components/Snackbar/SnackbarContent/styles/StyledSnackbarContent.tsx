import {
  css,
  getParsePaletteColor,
  palette2,
  radius,
  RcThemedStyled,
  shadows,
  spacing,
  typography,
} from '../../../../foundation';
import { RcSnackbarContentProps } from '../SnackbarContent';
import {
  RcSnackbarContentClasses,
  RcSnackbarContentColors,
  RcSnackbarContentLineHeight,
  RcSnackbarContentPaddings,
} from '../utils';

const contentBgColor: RcThemedStyled<RcSnackbarContentProps> = ({ type }) =>
  getParsePaletteColor(RcSnackbarContentColors[type!].bgColor);

const contentTextColor: RcThemedStyled<RcSnackbarContentProps> = ({ type }) =>
  getParsePaletteColor(RcSnackbarContentColors[type!].textColor);

export const snackbarContentStyle: RcThemedStyled<
  RcSnackbarContentProps,
  any
> = ({ fullWidth, square, messageAlign, size }) => {
  let radiusValue: any = radius('lg');
  if (square) {
    radiusValue = 0;
  }
  // when square use false, also can use radius
  else if (fullWidth && square !== false) {
    radiusValue = 0;
  }

  return css`
    ${typography('body1')};
    line-height: ${RcSnackbarContentLineHeight};
    overflow: hidden;
    background-color: ${contentBgColor};
    color: ${contentTextColor};
    box-shadow: ${shadows(4)};
    border-radius: ${radiusValue};
    min-width: 248px;
    max-width: ${fullWidth ? '100%' : '640px'};
    width: ${fullWidth && '100%'};
    box-sizing: border-box;
    margin: 0 auto;
    pointer-events: auto;
    align-items: baseline;
    padding: ${RcSnackbarContentPaddings[size!]};

    .${RcSnackbarContentClasses.message} {
      margin: auto;
      flex: 1;
      padding: ${spacing(0)};
      text-align: ${messageAlign};

      word-break: break-word;

      a {
        color: ${palette2('informative', 'f02')};
        font-style: italic;
      }
    }

    .${RcSnackbarContentClasses.action} {
      text-decoration: underline;
      margin-right: 0;
      height: ${RcSnackbarContentLineHeight};
    }
  `;
};
