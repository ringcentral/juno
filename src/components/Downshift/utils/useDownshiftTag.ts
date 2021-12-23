import { ChangeEvent, HTMLAttributes, useMemo, useRef, useState } from 'react';

import isString from 'lodash/isString';
import uniqueId from 'lodash/uniqueId';

import { useControlled } from '@material-ui/core/utils';

import {
  combineProps,
  useEventCallback,
  useKeyboardMoveFocus,
  useRefState,
} from '../../../foundation';
import { RcDownshiftProps } from '../Downshift';
import {
  DEFAULT_GET_OPTION_LABEL,
  downshiftComponentName,
  stringArrToRegExp,
} from './DownshiftUtils';
import { RcDownshiftSelectedItem } from './SelectItem';
import { RcDownshiftGetSelectedItemProps } from './useDownshift.interface';

const DOWNSHIFT_ID_TOKEN = 'rc-chip-';

type UseDownshiftTagParams<
  T extends RcDownshiftSelectedItem = RcDownshiftSelectedItem,
> = {
  /** id for unique */
  id: string;
  /** that input ref you binding event */
  inputRef: React.RefObject<HTMLInputElement>;
  /** wrapper container ref, if you have `tag` or use in `popper`, that will be needed */
  wrapperRef?: React.RefObject<HTMLDivElement>;
  /** when that return `true` will ignore freeSolo create event */
  getStopCreateFreeSolo?: () => boolean;
  /** trigger when check free solo complete */
  onReset?: (e?: ChangeEvent<{}>) => void;
} & Pick<
  RcDownshiftProps<T>,
  | 'value'
  | 'onChange'
  | 'variant'
  | 'getOptionLabel'
  | 'onInputChange'
  | 'freeSolo'
  | 'maxFreeSolo'
  | 'keyToTags'
  | 'onMaxFreeSolo'
  | 'multiple'
  | 'label'
  | 'required'
  | 'disabled'
>;

/** @inner inner hook work with useDownshift */
export const useDownshiftTag = <
  T extends RcDownshiftSelectedItem = RcDownshiftSelectedItem,
>({
  id: downshiftId,
  value: selectedItemsProp = [],
  onChange: onSelectChange,
  variant,
  getOptionLabel = DEFAULT_GET_OPTION_LABEL,
  onInputChange: onInputChangeProp,
  wrapperRef,
  inputRef,
  freeSolo,
  maxFreeSolo,
  keyToTags,
  onMaxFreeSolo,
  multiple,
  label: labelProp,
  required,
  disabled,
  getStopCreateFreeSolo,
  onReset,
}: UseDownshiftTagParams<T>) => {
  const isAutocomplete = variant === 'autocomplete';
  const isSelectedFromAutocompleteRef = useRef(false);

  const [tags, _setTags] = useControlled({
    controlled: selectedItemsProp,
    default: [],
    name: downshiftComponentName,
  });

  const [focused, setFocused] = useState(false);

  const [focusedIndexRef, setFocusedIndex] = useRefState(0);

  const freeSoloCount = useMemo(
    () => tags.filter((x) => x.freeSolo).length,
    [tags],
  );

  const setTags = (_selectedItems: T[]) => {
    _setTags(_selectedItems);
    onSelectChange?.(_selectedItems);

    if (isAutocomplete && _selectedItems.length === 1) {
      const result = getOptionLabel(_selectedItems[0]);

      onInputChangeProp?.(result);
      isSelectedFromAutocompleteRef.current = true;
    }
  };

  const _focusTag = (tagToFocus: number) => {
    const textFieldElm = wrapperRef?.current;
    const inputElm = inputRef.current;

    if (tagToFocus === -1) {
      inputElm?.focus();
    } else {
      textFieldElm
        ?.querySelector<HTMLElement>(`[data-tag-index="${tagToFocus}"]`)
        ?.focus();
    }
  };

  const focusTag = useEventCallback((tagToFocus: number, focus = true) => {
    if (focusedIndexRef.current === tagToFocus) return;

    setFocusedIndex(tagToFocus);

    if (focus) _focusTag(tagToFocus);
  });

  /** when return `true` mean add item success */
  const checkAndAddFreeSolo = (
    {
      selectedItem,
      value,
    }: {
      selectedItem?: T | null;
      value?: string;
    } = {},
    e?: ChangeEvent<{}>,
  ) => {
    let isAddItem = false;

    const currentValue = value ?? inputRef.current?.value;

    if (
      !getStopCreateFreeSolo?.() &&
      !selectedItem &&
      freeSolo &&
      currentValue &&
      currentValue.length > 0
    ) {
      if (freeSoloCount < maxFreeSolo!) {
        const items = currentValue
          .trim()
          .split(stringArrToRegExp(keyToTags))
          .filter((x) => x.trim() !== '');

        const toLength = freeSoloCount + items.length;

        if (toLength > maxFreeSolo!) {
          items.splice(-(toLength - maxFreeSolo!));
          onMaxFreeSolo?.(maxFreeSolo);
        }

        if (items.length > 0) {
          setTags([
            ...tags,
            ...items.map(
              (label) =>
                ({
                  id: uniqueId(DOWNSHIFT_ID_TOKEN),
                  isSuggestion: false,
                  freeSolo: true,
                  label,
                } as T),
            ),
          ]);

          isAddItem = true;
        }
      } else {
        onMaxFreeSolo?.(maxFreeSolo);
      }

      onReset?.(e);
    }
    return isAddItem;
  };

  const removeTag = (selectedItem: T) => {
    const selectedItemIndex = tags.indexOf(selectedItem);

    if (selectedItemIndex > -1) {
      setTags([
        ...tags.slice(0, selectedItemIndex),
        ...tags.slice(selectedItemIndex + 1),
      ]);
    }
  };

  const addTag = (selectedItem: T) => {
    // * change to uniqueId
    if (selectedItem.freeSolo) {
      if (freeSoloCount < maxFreeSolo!) {
        selectedItem.id = uniqueId(DOWNSHIFT_ID_TOKEN);
      } else {
        onMaxFreeSolo?.(maxFreeSolo);
        return;
      }
    }

    if (multiple) {
      setTags([...tags, selectedItem]);
    } else {
      setTags([selectedItem]);
    }
  };

  const { onKeyFocusedIndexHandle: handleTagKey } = useKeyboardMoveFocus({
    options: tags,
    focusedIndexRef,
    infinite: 'order',
    onFocusedIndexChange: (event, toIndex) => {
      focusTag(toIndex);
      event?.preventDefault();
    },
  });

  /**
   * All Get props methods
   */

  const getTagListBoxProps = (
    props?: Omit<HTMLAttributes<HTMLElement>, 'color'>,
  ) => {
    return {
      'aria-label': isString(labelProp) ? labelProp : undefined,
      'aria-required': required || false,
      'aria-disabled': disabled || false,
      // TODO: wait for input can complete that.
      // 'aria-multiselectable': false,
      // role: selectedItems.length > 0 ? 'listbox' : undefined,
      // 'aria-orientation': 'horizontal',
      ...props,
    };
  };

  const getTagProps = ({
    index,
    selectedItem,
    ...restTagProps
  }: RcDownshiftGetSelectedItemProps<T>) => {
    const tabIndex =
      // * when tag is not focus
      !focused &&
      // * and is first item
      index === 0
        ? 0
        : -1;

    return combineProps(
      {
        tabIndex,
        // TODO: wait for input can complete that.
        // role: 'option',
        role: 'button',
        key: `${downshiftId}-selected-item-${index}`,
        'data-tag-index': index,
        'data-item-last': index === tags.length - 1,
        onClick: (e) => {
          e.stopPropagation();
        },
        onBlur: () => setFocused(false),
        onFocus: () => {
          focusTag(index);
          setFocused(true);
        },
        onKeyDown: (e) => {
          const focusedIndex = focusedIndexRef.current;
          switch (e.key) {
            case 'Backspace':
              {
                const lengthBeforeDelete = tags.length;

                focusTag(
                  // * when length is 1 mean that will be remove all
                  lengthBeforeDelete === 1
                    ? -1
                    : focusedIndex === 0
                    ? 0
                    : focusedIndex - 1,
                );
                removeTag(selectedItem);
              }
              break;
            case 'Delete':
              {
                const lengthBeforeDelete = tags.length;

                focusTag(
                  // * when length is 1 mean that will be remove all
                  lengthBeforeDelete === 1
                    ? -1
                    : focusedIndex === tags.length - 1
                    ? focusedIndex - 1
                    : focusedIndex,
                );
                removeTag(selectedItem);
              }
              break;
            default:
              handleTagKey(e);
              break;
          }
        },
        onDelete: (e: any) => {
          // * left button clicked
          if (e.button === 0) {
            removeTag(selectedItem);
            setFocused(false);
          }
        },
      },
      restTagProps,
    );
  };

  return {
    focused,
    setFocused,
    tags,
    isSelectedFromAutocompleteRef,
    focusedIndex: focusedIndexRef.current,
    checkAndAddFreeSolo,
    getTagListBoxProps,
    getTagProps,
    focusTag,
    addTag,
    clearTags: () => {
      setTags([]);
    },
    blur: () => {
      if (focusedIndexRef.current !== -1) {
        focusTag(-1, false);
      }
      setFocused(false);
    },
    // reset: () => {
    //   setActiveIndex(-1);
    // },
    focusLast: () => {
      const currTagsLength = tags.length;

      if (currTagsLength > 0) {
        focusTag(currTagsLength - 1);
      }
    },
  };
};
