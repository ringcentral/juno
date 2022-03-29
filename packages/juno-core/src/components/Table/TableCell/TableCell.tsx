import React, { ComponentProps, forwardRef, useMemo, useContext } from 'react';

import MuiTableCell, { TableCellClassKey } from '@material-ui/core/TableCell';

import {
  combineClasses,
  RcBaseProps,
  styled,
  useThemeProps,
} from '../../../foundation';
import { TableCellStyle } from './styles';
import { RcTableCellClasses } from './utils';
import { RcButtonBase } from '../../Buttons';
import { RcIcon } from '../../Icon';
import {
  JumpToLatest as AscSortIcon,
  JumpToUnread as DescSortIcon,
} from '@ringcentral/juno-icon';
import clsx from 'clsx';
import { RcTableSize } from '../types';
import { RcTableContext } from '../context';

type RcTableCellProps = {
  /**
   * Specify the size of the cell.
   * @default medium.
   */
  size?: RcTableSize;
  /**
   * The current sort direction.
   */
  sortDirection?: 'asc' | 'desc' | false;
  /**
   * If `true`, the sort icon will alway show.
   */
  activeSort?: boolean;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<
    Record<
      | Exclude<TableCellClassKey, 'sizeSmall'>
      | 'activeSort'
      | 'sortIcon'
      | 'sortButton',
      string
    >
  >;
} & RcBaseProps<
  ComponentProps<typeof MuiTableCell>,
  'size' | 'sortDirection' | 'classes'
>;

const _RcTableCell = forwardRef<any, RcTableCellProps>((props, ref) => {
  const {
    classes: classesProp,
    children: childrenProp,
    size,
    sortDirection,
    activeSort = false,
    ...rest
  } = useThemeProps({ props, name: 'RcTableCell' });

  const classes = combineClasses(RcTableCellClasses, classesProp);

  const children = useMemo(() => {
    if (sortDirection) {
      return (
        <RcButtonBase
          disableRipple
          className={clsx(classes.sortButton, {
            [classes.activeSort]: activeSort,
          })}
        >
          {childrenProp}
          <RcIcon
            size="small"
            className={classes.sortIcon}
            symbol={sortDirection === 'asc' ? DescSortIcon : AscSortIcon}
          />
        </RcButtonBase>
      );
    }
    return childrenProp;
  }, [activeSort, childrenProp, classes, sortDirection]);

  return (
    <MuiTableCell
      {...rest}
      {...(sortDirection ? { sortDirection } : {})}
      ref={ref}
      classes={classes}
    >
      {children}
    </MuiTableCell>
  );
});

const RcTableCell = styled(_RcTableCell).attrs(
  ({ size: sizeProp, sortDirection = false, ...rest }: RcTableCellProps) => {
    const { size: contextSize } = useContext(RcTableContext);
    const size = sizeProp ?? contextSize ?? 'medium';

    return { ...rest, size, sortDirection };
  },
)`
  ${TableCellStyle}
`;

RcTableCell.displayName = 'RcTableCell';

export { RcTableCell, RcTableCellProps };
