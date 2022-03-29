import MuiTable from '@material-ui/core/Table';
import { RcBaseProps, styled, useThemeProps } from '../../foundation';
import React, { ComponentProps, forwardRef, useMemo } from 'react';
import { RcTableContext } from './context';
import { RcTableSize } from './types';

type RcTableProps = {
  /**
   * Allows TableCells to inherit size of the Table.
   */
  size?: RcTableSize;
} & RcBaseProps<ComponentProps<typeof MuiTable>, 'size'>;

const _RcTable = forwardRef<any, RcTableProps>((props, ref) => {
  const { children, size, ...rest } = useThemeProps({ props, name: 'RcTable' });

  const tableContextValue = useMemo(() => ({ size }), [size]);

  return (
    <MuiTable {...rest} ref={ref}>
      <RcTableContext.Provider value={tableContextValue}>
        {children}
      </RcTableContext.Provider>
    </MuiTable>
  );
});

const RcTable = styled(_RcTable)``;

RcTable.displayName = 'RcTable';

export { RcTable, RcTableProps };
