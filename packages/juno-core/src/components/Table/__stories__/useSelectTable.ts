import { useForceUpdate, useRefState, useResultRef } from '../../../foundation';
import { isIterable } from './iterable';

export type UseSelectTableProps<K> = {
  /** initial selected keys */
  initialSelected?: Iterable<K> | (() => Iterable<K>);
  /** initial if selected all keys */
  initialSelectedAll?: boolean;
  /**
   * get all item keys. It will be invoked when you call `selectAll()`
   *
   * Note: cache this to make sure `selectAll` is stable
   */
  getAll?: () => Iterable<K>;
};

/**
 * Provider select item helper for table
 *
 * for select one item, you can use `isSelected` and `switchSelectState` to control state
 *
 * for select all item, you can use `isSelectedAll` and `selectAll` to control state
 */
export const useSelectTable = <K = string>(
  options: UseSelectTableProps<K> = {},
) => {
  const { initialSelected, initialSelectedAll = false, getAll } = options;

  const [isSelectedAllRef, updateIsSelectedAll] =
    useRefState(initialSelectedAll);

  const forceUpdate = useForceUpdate();

  const selectedSetRef = useResultRef<Set<K>>(() => {
    if (!initialSelected) return new Set<K>();

    if (typeof initialSelected === 'function')
      return new Set(initialSelected());

    return new Set(initialSelected);
  });

  const isSelected = (key: K) => {
    return selectedSetRef.current.has(key);
  };

  const switchSelectState = (key: K) => {
    const selected = isSelected(key);

    if (selected) selectedSetRef.current.delete(key);
    else selectedSetRef.current.add(key);

    // set `isSelectedAll` to false if entries of `selectedRef.current` have any change
    updateIsSelectedAll(false);

    forceUpdate();
  };

  const setSelectedState = (keys: K | Iterable<K>, select: boolean = true) => {
    const action = select ? 'add' : 'delete';

    if (isIterable(keys)) {
      for (const key of keys) selectedSetRef.current[action](key);
    } else {
      selectedSetRef.current[action](keys);
    }

    // set `isSelectedAll` to false if entries of `selectedRef.current` have any change
    updateIsSelectedAll(false);

    forceUpdate();
  };

  const getAllSelected = () => {
    return selectedSetRef.current.values();
  };

  const selectAll = (selected?: boolean) => {
    const _selected = (() => {
      if (typeof selected !== 'boolean') return !isSelectedAllRef.current;
      return selected;
    })();

    const all = getAll?.();
    if (all) setSelectedState(all, _selected);

    updateIsSelectedAll(_selected);
  };

  const isSelectedAll = () => isSelectedAllRef.current;

  return {
    /** check if selected */
    isSelected,
    /** swith the selected state of one key, true -> false or false -> true */
    switchSelectState,
    /** get selected all */
    getAllSelected,
    /** set one or multiple keys selected state */
    setSelectedState,
    /** invoke this to select all */
    selectAll,
    /** check if selected all */
    isSelectedAll,
  };
};
