import { LabelDisplayedRowsArgs } from '@material-ui/core/TablePagination';

import { RcClasses } from '../../../foundation';
import { RcTablePaginationProps } from '../TablePagination';

export const RcTablePaginationClasses = RcClasses<RcTablePaginationProps>(
  [
    'root',
    'toolbar',
    'spacer',
    'menuItem',
    'caption',
    'input',
    'selectRoot',
    'select',
    'selectIcon',
    'actions',
  ],
  'RcTablePagination',
);

export function defaultGetAriaLabel(value: number) {
  return `Go to ${value} page`;
}

export function defaultLabelDisplayedRows({
  from,
  to,
  count,
}: LabelDisplayedRowsArgs) {
  return `${from}-${to} of ${count !== -1 ? count : `more than ${to}`}`;
}

export type OfPageInfo = {
  totalPage: number;
};

export const defaultLabelOfPage = ({ totalPage }: OfPageInfo) =>
  `of ${totalPage} pages`;
