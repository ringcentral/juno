import {
  css,
  palette2,
  RcThemedStyled,
  spacing,
  typography,
} from '../../../../foundation';
import { RcListSubheaderProps } from '../ListSubheader';
import { RcListSubheaderClasses } from '../utils';

export const ListSubheaderStyle: RcThemedStyled<RcListSubheaderProps, any> =
  () => {
    return css`
      height: 36px;
      padding-top: ${spacing(3)};
      padding-bottom: ${spacing(1)};
      display: flex;
      background: ${palette2('neutral', 'b01')};
      color: ${palette2('neutral', 'f04')};
      ${typography('body1')};

      &.${RcListSubheaderClasses.gutters} {
        padding-left: ${spacing(4)};
        padding-right: ${spacing(2)};
      }

      &.${RcListSubheaderClasses.inset} {
        padding-left: ${spacing(18)};
      }
    `;
  };
