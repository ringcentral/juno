import { RcTableCellProps } from './TableCell';

export type RcTableSize = 'xlarge' | 'large' | 'medium' | 'small' | 'auto';

export type RcTableSortDirection = Exclude<
  NonNullable<RcTableCellProps['sortDirection']>,
  false
>;
