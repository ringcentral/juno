import { useCallback, useRef } from 'react';

import { useDebounce } from '../useDebounce';
import {
  moveIndexInTwoDimension,
  MoveIndexInTwoDimensionalOptions,
} from './moveIndexInTwoDimension';

export type UseKeyboardMoveFocusParams<T> = {
  /** current focused index `ref` */
  focusedIndexRef: React.MutableRefObject<number>;
  /** action when index change */
  onFocusedIndexChange: (
    event: React.KeyboardEvent<HTMLElement>,
    index: number,
  ) => void;
  /** children items */
  options: T[];
  /** column number with that move block, default is `1` */
  columns?: number;
  /**
   * Used to determine the disabled state for a given option.
   *
   * @param {T} option The option to test.
   * @returns {boolean}
   */
  getOptionDisabled?: (option: T) => boolean;
  /**
   * Used to get option text for search focus by other text.
   *
   * @param {T} option
   * @returns {string} that string for search
   */
  getOptionSearchText?: (option: T) => string;
  /**
   * when typing search text, end this search debounce time
   *
   * @default 500
   */
  endSearchDebounceTime?: number;
} & Pick<MoveIndexInTwoDimensionalOptions, 'infinite'>;

/**
 * use keyboard move index in two dimensional
 */
export const useKeyboardMoveFocus = <T>({
  infinite,
  options = [],
  focusedIndexRef,
  onFocusedIndexChange,
  getOptionDisabled,
  getOptionSearchText,
  columns = 1,
  endSearchDebounceTime = 500,
}: UseKeyboardMoveFocusParams<T>) => {
  const total = options.length;

  const searchText = useRef('');

  const debounceEndSearch = useDebounce(
    () => (searchText.current = ''),
    endSearchDebounceTime,
  );

  const searchTextAndFocus = (event: React.KeyboardEvent<any>) => {
    const key = event.key;

    if (!getOptionSearchText || key.length !== 1) return;

    debounceEndSearch();

    searchText.current += key.toLowerCase();

    const matchedIndex = options.findIndex((option) => {
      const text = getOptionSearchText(option);

      return Boolean(
        !getOptionDisabled?.(option) &&
          text &&
          text.toLowerCase().startsWith(searchText.current),
      );
    });

    if (matchedIndex > -1) {
      onFocusedIndexChange(event, matchedIndex);
    }
  };

  const onKeyFocusedIndexHandle = (event: React.KeyboardEvent<any>) => {
    let currIndex = focusedIndexRef.current;
    const key = event.key;
    let findDirection: 'prev' | 'next' | undefined;

    if (total === 0) return;

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const toIndex = findDirection
        ? findDirection === 'next'
          ? currIndex + 1
          : currIndex - 1
        : moveIndexInTwoDimension(key, {
            currIndex,
            columns,
            total,
            infinite,
          });

      if (toIndex === currIndex) {
        searchTextAndFocus(event);
        break;
      }

      if (!getOptionDisabled?.(options[toIndex])) {
        if (toIndex !== focusedIndexRef.current) {
          onFocusedIndexChange(event, toIndex);
        }
        break;
      }
      // * mean that item is disabled, use same direction find next
      else {
        // * find toIndex is same as current, mean that already find all
        if (toIndex === Math.max(focusedIndexRef.current, 0)) {
          break;
        }

        currIndex = toIndex;

        // * if that is Hom or End, find use increase or decrease
        if (key === 'Home') {
          findDirection = 'next';
        } else if (key === 'End') {
          findDirection = 'prev';
        }
      }
    }
  };

  const getPrevFocusableOption = useCallback(
    (
      index: number = focusedIndexRef.current,
      /** is that infinite search */
      isInfinite = true,
    ) => {
      for (let i = index; i >= 0; i--) {
        if (!getOptionDisabled?.(options[i])) {
          return i;
        }
      }

      if (isInfinite) {
        // loop find
        for (let i = total - 1; i > index; i--) {
          if (!getOptionDisabled?.(options[i])) {
            return i;
          }
        }
      }

      return -1;
    },
    [focusedIndexRef, getOptionDisabled, options, total],
  );

  const getNextFocusableOption = useCallback(
    (
      index: number = focusedIndexRef.current,
      /** is that infinite search */
      isInfinite = true,
    ) => {
      for (let i = index; i < total; i++) {
        if (!getOptionDisabled?.(options[i])) {
          return i;
        }
      }

      if (isInfinite) {
        // loop find
        for (let i = 0; i < index; i++) {
          if (!getOptionDisabled?.(options[i])) {
            return i;
          }
        }
      }

      return -1;
    },
    [focusedIndexRef, getOptionDisabled, options, total],
  );

  return {
    /**
     * Get previous focusable option(include current index).
     */
    getPrevFocusableOption,
    /**
     * Get next focusable option(include current index).
     */
    getNextFocusableOption,
    /**
     * Use to handle keyboard event.
     */
    onKeyFocusedIndexHandle,
  };
};
