import {
  css,
  nonTouchHoverMedia,
  palette2,
  RcThemedStyled,
  setOpacity,
} from '../../../../foundation';
import { RcTableRowProps } from '../TableRow';
import { RcTableRowClasses } from '../utils';

export const TableRowStyle: RcThemedStyled<RcTableRowProps, any> = () => {
  return css`
    ${nonTouchHoverMedia} {
      &.${RcTableRowClasses.hover}, &:hover {
        background-color: ${setOpacity(palette2('action', 'grayLight'), '08')};
      }
    }

    &.${RcTableRowClasses.selected} {
      &,
      &:hover {
        background-color: ${setOpacity(palette2('interactive', 'f01'), '08')};
      }
    }

    &.${RcTableRowClasses.disabled} {
      &.${RcTableRowClasses.selected}, &.${RcTableRowClasses.hover}, &:hover {
        background-color: unset;
      }
    }
  `;
};
