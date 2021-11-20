import React, { forwardRef, useMemo } from 'react';

import clsx from 'clsx';

import { RcClassesProps, styled, useThemeProps } from '../../foundation';
import { StyledTable, TableWrapper } from './styled';
import { TABLE_BORDER_TYPE, TABLE_STICKY_TYPE, TABLE_TYPE } from './types';

type RcTableClasses = RcClassesProps<'root' | 'table'>;

type RcTableProps = {
  desc?: string;
  header?: JSX.Element;
  tableSticky?: TABLE_STICKY_TYPE;
  tableBorder?: TABLE_BORDER_TYPE;
  tableType?: TABLE_TYPE;
  /** className for that table root */
  className?: string;
} & RcTableClasses;

const _RcTable = forwardRef<any, RcTableProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcTable' });
  const {
    header,
    children,
    desc,
    tableSticky,
    tableType,
    tableBorder,
    classes,
    className,
  } = props;

  const containerClass = useMemo(() => {
    return clsx(className, classes?.root, {
      [TABLE_BORDER_TYPE.BORDERED]: tableBorder === TABLE_BORDER_TYPE.BORDERED,
    });
  }, [className, classes, tableBorder]);

  const tableClass = useMemo(() => {
    return clsx(classes?.table, tableType || TABLE_TYPE.CARD, {
      [TABLE_STICKY_TYPE.STICKY]: tableSticky === TABLE_STICKY_TYPE.STICKY,
    });
  }, [classes, tableSticky, tableType]);

  return (
    <TableWrapper className={containerClass}>
      <StyledTable className={tableClass} aria-label={desc} ref={ref}>
        {header ? header : null}
        <tbody>{children}</tbody>
      </StyledTable>
    </TableWrapper>
  );
});

const RcTable = styled(_RcTable)``;

export { RcTable };
export type { RcTableProps };
