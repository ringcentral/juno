import MuiTableCell from '@material-ui/core/TableCell';

import {
  css,
  palette2,
  RcThemedStyled,
  spacing,
  styled,
  typography,
} from '../../../foundation';
import { RcSelect } from '../../Forms/Select';
import {
  RcLineSelectInputClasses,
  RcSelectClasses,
} from '../../Forms/Select/utils';
import { RcMenuItem } from '../../Menu/MenuItem';
import { RcTablePaginationProps } from '../TablePagination';
import { RcTablePaginationClasses } from '../utils';

export const TablePaginationMenuItem = styled(RcMenuItem)`
  min-width: unset;
`;

export const TablePaginationStyle: RcThemedStyled<RcTablePaginationProps, any> =
  () => {
    return css`
      display: flex;
      align-items: center;
      justify-content: flex-end;
      color: ${palette2('neutral', 'f06')};
      ${typography('body1')};

      &:last-child {
        padding: 0;
      }

      .${RcTablePaginationClasses.toolbar} {
        min-height: 52px;
        padding-right: 2px;
      }

      .${RcTablePaginationClasses.selectRoot} {
        margin-right: ${spacing(7)};
        max-width: none;
      }

      .${RcLineSelectInputClasses.input} {
        font-size: inherit;
        padding: ${spacing(1.5, 6, 1.5, 2)};
      }

      .${RcTablePaginationClasses.toolbar} {
        min-height: 52px;
        padding-right: 2px;
      }

      .${RcTablePaginationClasses.caption} {
        flex-shrink: 0;
        margin: 0px;
      }

      ${RcSelect} {
        width: auto;
      }

      .${RcSelectClasses.icon} {
        transform: scale(0.75);
      }
    `;
  };

export const TablePaginationRoot = styled(MuiTableCell)``;
