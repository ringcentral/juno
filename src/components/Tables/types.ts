import { ComponentType } from 'react';

enum TABLE_BORDER_TYPE {
  BORDERED = 'table-bordered',
  NONE = '',
}

enum TABLE_STICKY_TYPE {
  STICKY = 'table-sticky',
  NONE = '',
}
enum TABLE_TYPE {
  AUTO = 'table-auto',
  MODAL = 'table-modal',
  CARD = 'table-card',
  FULL = 'table-full',
}

enum COLUMN_TEXT_ALIGN {
  LEFT = 'left',
  RIGHT = 'right',
}

type ColumnProps = {
  automationID?: string;
  width?: number | string;
  title: string;
  sortKey?: any;
  textAlign?: COLUMN_TEXT_ALIGN;
};

type TableHeadCellProps = {
  sortHandler?: (sortDirection: ORDER_TABLE_BY, sortKey: any) => void;
  sortDirection?: ORDER_TABLE_BY;
} & ColumnProps;

type TableHeadProps = {
  loading?: boolean;
  width?: number;
  columnData: ColumnProps[];
  sortMap?: SortMap;
  titleCells?: ComponentType<ColumnProps>[];
  textAlign?: COLUMN_TEXT_ALIGN;
  sortHandler?: (sortDirection: ORDER_TABLE_BY, sortKey: any) => void;
};

type SortMap = {
  sortKey: any;
  sortDirection: ORDER_TABLE_BY;
};

enum ORDER_TABLE_BY {
  ASC,
  DESC,
  NONE,
}

enum ARIA_SORT_VALUES {
  ASC = 'ascending',
  DESC = 'descending',
  NONE = 'none',
  OTHER = 'other',
}

enum SORT_ICON_CLASS {
  SORT_UP = 'icon-sort-up',
  SORT_DOWN = 'icon-sort-down',
}

export {
  TABLE_BORDER_TYPE,
  TABLE_STICKY_TYPE,
  TABLE_TYPE,
  COLUMN_TEXT_ALIGN,
  ORDER_TABLE_BY,
  ARIA_SORT_VALUES,
  SORT_ICON_CLASS,
  SortMap,
  TableHeadProps,
  TableHeadCellProps,
  ColumnProps,
};
