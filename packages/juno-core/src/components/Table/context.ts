import { createContext } from 'react';
import { RcTableSize } from './types';

export type TableContextProps = {
  /**
   * Allows TableCells to inherit size of the Table.
   */
  size?: RcTableSize;
};

export const RcTableContext = createContext<TableContextProps>({});
