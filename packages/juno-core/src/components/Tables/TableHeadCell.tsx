import React, { useMemo } from 'react';

import isFunction from 'lodash/isFunction';
import isNumber from 'lodash/isNumber';

import {
  JumpToLatest as arrowDown,
  JumpToUnread as arrowUp,
} from '@ringcentral/juno-icon';

import { useA11yKeyEvent } from '../../foundation';
import { RcIcon } from '../Icon';
import {
  StyledSortIconWrapper,
  StyledTableHeadCell,
  StyledTableHeadCellContent,
  StyledTableHeadText,
} from './styled';
import {
  ARIA_SORT_VALUES,
  ORDER_TABLE_BY,
  SORT_ICON_CLASS,
  TableHeadCellProps,
} from './types';

const RcTableHeadCell = (props: TableHeadCellProps) => {
  const { automationID, title, width, sortDirection, sortKey, textAlign } =
    props;

  const onClick = () => {
    const { sortHandler, sortKey, sortDirection } = props;
    if (sortKey === undefined || !sortHandler) {
      return;
    }
    if (sortDirection === ORDER_TABLE_BY.ASC) {
      sortHandler(ORDER_TABLE_BY.DESC, sortKey);
    } else {
      sortHandler(ORDER_TABLE_BY.ASC, sortKey);
    }
  };

  const onKeyDown = useA11yKeyEvent(onClick);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const shouldSort = (): boolean => {
    const { sortHandler, sortKey } = props;
    return isFunction(sortHandler) && isNumber(sortKey);
  };

  const sortDirectionArrow = useMemo(() => {
    let sortClass = '';
    switch (sortDirection) {
      case ORDER_TABLE_BY.ASC:
        sortClass = SORT_ICON_CLASS.SORT_UP;
        break;
      case ORDER_TABLE_BY.DESC:
        sortClass = SORT_ICON_CLASS.SORT_DOWN;
        break;
      default:
    }
    if (shouldSort()) {
      return (
        <StyledSortIconWrapper className={sortClass}>
          <RcIcon
            symbol={sortDirection === ORDER_TABLE_BY.ASC ? arrowUp : arrowDown}
            size="small"
          />
        </StyledSortIconWrapper>
      );
    }
    return <></>;
  }, [shouldSort, sortDirection]);
  const ariaSort = {
    // aria-sort should only be applied to one table header at a time https://www.w3.org/TR/2017/REC-wai-aria-1.1-20171214/#aria-sort
    ...(sortDirection !== undefined &&
      [ORDER_TABLE_BY.ASC, ORDER_TABLE_BY.DESC].includes(sortDirection) && {
        'aria-sort': ARIA_SORT_VALUES[ORDER_TABLE_BY[sortDirection]],
      }),
  };

  const headCellSortProps = {
    ...(shouldSort() && {
      onKeyDown,
      ...ariaSort,
    }),
  };
  const cellContentSortProps = {
    ...(shouldSort() && {
      role: 'button',
      onClickCapture: onClick,
    }),
  };
  const hasSortKey = sortKey !== undefined;

  return (
    <StyledTableHeadCell
      scope="col"
      tabIndex={hasSortKey ? 0 : undefined}
      width={width}
      hasSortKey={hasSortKey}
      sortDirection={sortDirection}
      data-test-automation-value={automationID}
      data-test-automation-class="table-header-cell"
      {...headCellSortProps}
    >
      <StyledTableHeadCellContent
        textAlign={textAlign}
        {...cellContentSortProps}
      >
        <StyledTableHeadText>{title}</StyledTableHeadText>
        {sortDirectionArrow}
      </StyledTableHeadCellContent>
    </StyledTableHeadCell>
  );
};

export { RcTableHeadCell };
