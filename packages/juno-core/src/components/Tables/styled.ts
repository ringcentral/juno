import { KeyboardEventHandler } from 'react';

import {
  css,
  fakeBorder,
  focusVisibleShadowStyle,
  focusWithin,
  palette2,
  spacing,
  styled,
} from '../../foundation';
import {
  COLUMN_TEXT_ALIGN,
  ORDER_TABLE_BY,
  TABLE_BORDER_TYPE,
  TABLE_STICKY_TYPE,
  TABLE_TYPE,
} from './types';

interface StyledTableCellProps {
  readonly width?: number | string;
  readonly sortDirection: any;
  readonly hasSortKey?: boolean;
  readonly onClickCapture?: KeyboardEventHandler<HTMLTableHeaderCellElement>;
  readonly onKeyDown?: KeyboardEventHandler<HTMLTableHeaderCellElement>;
}

interface StyledTableHeadCellContentProps {
  readonly textAlign?: COLUMN_TEXT_ALIGN;
}

const TableWrapper = styled('div')`
  height: 100%;
  width: 100%;
  overflow: auto;

  background-color: ${palette2('neutral', 'b01')};
  &.${TABLE_BORDER_TYPE.BORDERED} {
    border-radius: 4px;
    border: 1px solid ${palette2('neutral', 'l02')};
  }
`;

interface StyledTableProps {
  readonly minWidth?: number | string;
}

const StyledTable = styled('table')<StyledTableProps>`
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
  display: table;
  /* scroll when viewport is less than 960px including the 332px from left navs */
  min-width: ${spacing(157)};

  @media only screen and (max-width: ${spacing(157)}) {
    table-layout: auto;
  }

  &.${TABLE_STICKY_TYPE.STICKY} th {
    position: sticky;
    top: 0;
  }

  thead {
    border-bottom: 1px solid ${palette2('neutral', 'l02')};
    width: 100%;
    position: sticky;
    top: 0;
    display: table-header-group;
    z-index: 5;
  }

  tbody {
    display: table-row-group;
  }

  tr {
    display: table-row;
    padding-left: ${spacing(4)};

    th,
    td {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      vertical-align: middle;
    }
    td:first-child {
      padding-left: ${spacing(4)};
      margin-left: -${spacing(4)};
    }
    td:not(:first-child) {
      padding-left: ${spacing(4)};
      padding-right: ${spacing(4)};
    }
  }

  &.${TABLE_TYPE.MODAL} tr td {
    overflow: hidden;
    height: 40px;
  }

  &.${TABLE_TYPE.CARD} tr td {
    overflow: hidden;
    height: 52px;
  }

  &.${TABLE_TYPE.FULL} tr td {
    overflow: hidden;
    height: 64px;
  }

  &.${TABLE_TYPE.AUTO} tr td {
    overflow: hidden;
    padding: ${spacing(3, 4)};
    height: auto;
  }
`;

const StyledTableRow = styled('tr')`
  height: 25px;
  display: table-row;
  font-size: 12px;
  text-align: left;
  vertical-align: middle;
`;

const StyledSortIconWrapper = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  vertical-align: middle;
  display: inline-flex;

  & path {
    fill: ${palette2('neutral', 'f04')};
  }
`;

const StyledTableHeadText = styled.div`
  text-overflow: ellipsis;
  overflow: auto;
`;

const StyledTableHeadCell = styled('th')<StyledTableCellProps>`
  color: ${(props) =>
    props.sortDirection === ORDER_TABLE_BY.NONE
      ? palette2('neutral', 'f06')
      : palette2('interactive', 'f01')};
  user-select: none;
  text-align: left;
  background-color: ${(props) =>
    props.sortDirection === ORDER_TABLE_BY.NONE
      ? palette2('neutral', 'b02')
      : palette2('neutral', 'b03')};
  z-index: 100;
  line-height: 32px;
  width: ${(props) => props.width};
  padding-top: 0;
  padding-bottom: 0;
  display: table-cell;
  white-space: nowrap;
  overflow: hidden;

  & > div {
    border: 1px solid inherit;
    padding-left: ${spacing(4)};
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  ${({ hasSortKey }) =>
    hasSortKey &&
    css`
      ${focusWithin} {
        background-color: ${palette2('neutral', 'b03')};
        ${fakeBorder()};
        cursor: pointer;
        outline: none;
      }
      position: relative;
      ${focusVisibleShadowStyle()};
    `}
`;

// for keep vscode styled-component color
type P = StyledTableHeadCellContentProps;

const StyledTableHeadCellContent = styled.div<P>`
  display: flex;
  align-items: center;

  flex-direction: ${({ textAlign }) =>
    textAlign === COLUMN_TEXT_ALIGN.RIGHT ? 'row-reverse' : 'row'};
  padding-left: ${({ textAlign }) =>
    textAlign === COLUMN_TEXT_ALIGN.RIGHT ? 0 : spacing(4)};
  padding-right: ${({ textAlign }) =>
    textAlign === COLUMN_TEXT_ALIGN.RIGHT ? spacing(4) : 0};
`;

export {
  TableWrapper,
  StyledTable,
  StyledTableRow,
  StyledSortIconWrapper,
  StyledTableHeadCell,
  StyledTableHeadText,
  StyledTableHeadCellContent,
};
