import { useEffect, useState } from 'react';
import { useEventCallback } from '../../../foundation';
import { RcTableSortDirection } from '../types';

/**
 * invoke this handler after `sortDirection` or ` sortKey` changed
 *
 * Note: no need use `useCallback` to cache this, you can assign handler directly.
 */
export type UseSortTableSortHandler<K> = (
  sortDirection: RcTableSortDirection,
  sortKey: K | null,
) => void;

export type UseSortTableProps<K> = {
  /** set default sort key */
  defaultKey?: K;
  /**
   * set sort direction as defaultSortDirection when sort state change to `sorted` from 'unsorted`
   *
   * @default 'desc'
   */
  defaultDirection?: RcTableSortDirection;
};

/**
 * Provider table sort state helper
 */
export const useSortTable = <K = string>(
  sortHandler: UseSortTableSortHandler<K>,
  options: UseSortTableProps<K> = {},
) => {
  const { defaultKey = null, defaultDirection = 'desc' } = options;

  const [sortedKey, setSortedKey] = useState<K | null>(defaultKey);

  const [direction, setDirection] =
    useState<RcTableSortDirection>(defaultDirection);

  const multableSortHandler = useEventCallback(sortHandler);

  useEffect(() => {
    multableSortHandler(direction, sortedKey);
  }, [direction, sortedKey, multableSortHandler]);

  const switchDirection = (key: K) => {
    if (sortedKey !== key) {
      setSortedKey(key);
      setDirection(defaultDirection);
    } else {
      setDirection((pre) => {
        if (pre === 'asc') return 'desc';
        return 'asc';
      });
    }
  };

  return {
    /** set `sortedKey` and switch `direction` with previous state */
    switchDirection,
    /** current sorted key */
    sortedKey,
    /** current sorted direction */
    direction,
    /** Usually you don't need this, you can use `switchDirection` */
    setSortedKey,
    /** Usually you don't need this, you can use `switchDirection` */
    setDirection,
  };
};
