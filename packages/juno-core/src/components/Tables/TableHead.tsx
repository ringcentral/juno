import React from 'react';

import { StyledTableRow } from './styled';
import { RcTableHeadCell } from './TableHeadCell';
import { ORDER_TABLE_BY, TableHeadProps } from './types';

const RcTableHeadView = (props: TableHeadProps) => {
  const { columnData, sortMap, sortHandler } = props;

  return (
    <thead>
      <StyledTableRow>
        {columnData.map((column) => {
          const sortDirection =
            sortMap && sortMap.sortKey === column.sortKey
              ? sortMap.sortDirection
              : ORDER_TABLE_BY.NONE;
          return (
            <RcTableHeadCell
              key={`${column.sortKey}-${column.title}`}
              width={column.width}
              title={column.title}
              sortDirection={sortDirection}
              sortKey={column.sortKey}
              sortHandler={sortHandler}
              textAlign={column.textAlign}
              automationID={column.automationID}
            />
          );
        })}
      </StyledTableRow>
    </thead>
  );
};

export { RcTableHeadView };
