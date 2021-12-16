import {
  ChangeEvent,
  HTMLAttributes,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import isString from 'lodash/isString';
import uniqueId from 'lodash/uniqueId';

import { useControlled } from '@material-ui/core/utils';

import {
  combineProps,
  getSelectionPosition,
  useChange,
  useEventCallback,
  useForceUpdate,
  useKeyboardMoveFocus,
  useResultRef,
  useSleep,
} from '../../../foundation';
import { RcIconButtonProps } from '../../Buttons/IconButton';
import { RcTextFieldProps } from '../../Forms';
import { RcDownshiftCloseReason, RcDownshiftProps } from '../Downshift';
import {
  DEFAULT_GET_OPTION_LABEL,
  DEFAULT_KEY_TO_CHIPS,
  isItemCanSelected,
} from './DownshiftUtils';
import { RcDownshiftSelectedItem } from './SelectItem';
import {
  RcDownshiftGetItemPropsOptions,
  RcDownshiftGetSelectedItemProps,
  RcDownshiftHighlightChangeReason,
} from './useDownshift.interface';
import { useDownshiftGroup } from './useDownshiftGroup';

const DOWNSHIFT_ID_TOKEN = 'rc-chip-';
const DOWNSHIFT_ID_NO_RESULT_TOKEN = 'rc-chip-empty';
const DEFAULT_HIGHLIGHTED_INDEX = -1;

type UseDownshiftParams = {
  /** that input ref you binding event */
  inputRef: React.RefObject<HTMLInputElement>;
  /** wrapper container ref, if you have `tag` or use in `popper`, that will be needed */
  wrapperRef?: React.RefObject<HTMLDivElement>;
  /** input container ref, if you have a scrollable input, that will be needed */
  inputContainerRef?: React.RefObject<HTMLDivElement>;
  /**
   * if you want add `freeSolo` item at `first` or `last` of options array,
   * set that will auto add item into options
   */
  addNoOptionItem?: 'first' | 'last';
} & Pick<
  RcDownshiftProps<RcDownshiftSelectedItem>,
  | 'open'
  | 'onOpen'
  | 'onClose'
  | 'multiple'
  | 'onChange'
  | 'value'
  | 'getOptionLabel'
  | 'filterOptions'
  | 'options'
  | 'freeSolo'
  | 'maxFreeSolo'
  | 'onMaxFreeSolo'
  | 'disableCloseOnSelect'
  | 'initialIsOpen'
  | 'keyToTags'
  | 'inputValue'
  | 'autoSelect'
  | 'onInputChange'
  | 'onKeyDown'
  | 'disabled'
  | 'openOnFocus'
  | 'onClear'
  | 'renderNoOptions'
  | 'autoHighlight'
  | 'getOptionDisabled'
  | 'required'
  | 'label'
  | 'disabledItemsHighlightable'
  | 'variant'
  | 'groupBy'
  | 'getExpandIconProps'
  | 'groupExpanded'
  | 'groupDefaultExpanded'
  | 'onGroupExpanded'
  | 'groupVariant'
  | 'focused'
>;

function stringArrToRegExp(keyToTags?: string[]): RegExp {
  // eslint-disable-next-line security/detect-non-literal-regexp
  return new RegExp(keyToTags?.join('|') || '', 'g');
}

const componentName = 'RcDownshift';

export const useDownshift = ({
  multiple: multipleProp,
  variant,
  label: labelProp,
  inputValue: inputValueProp,
  getOptionLabel = DEFAULT_GET_OPTION_LABEL,
  keyToTags = DEFAULT_KEY_TO_CHIPS,
  filterOptions,
  disabledItemsHighlightable,
  options,
  freeSolo,
  onInputChange: onInputChangeProp,
  maxFreeSolo,
  onMaxFreeSolo,
  openOnFocus,
  disableCloseOnSelect,
  initialIsOpen,
  autoSelect,
  inputContainerRef,
  inputRef,
  wrapperRef,
  onKeyDown: onKeyDownProp,
  onChange: onSelectChange,
  value: selectedItemsProp = [],
  disabled,
  renderNoOptions,
  onClear,
  autoHighlight,
  getOptionDisabled,
  addNoOptionItem,
  groupBy,
  onGroupExpanded,
  groupVariant,
  groupExpanded,
  groupDefaultExpanded,
  getExpandIconProps,
  required,
  open: openProp,
  onOpen,
  onClose,
  focused: focusedProp,
}: UseDownshiftParams) => {
  const isAutocomplete = variant === 'autocomplete';
  // * when that is autocomplete, that will never be multiple
  const multiple = isAutocomplete ? false : multipleProp;

  const isSelectedFromAutocompleteRef = useRef(false);
  const isInputValueChangedRef = useRef(false);
  const [isFocused, setIsFocused] = useControlled({
    controlled: focusedProp,
    default: false,
    name: componentName,
  });

  const [isOpen, setIsOpen] = useControlled({
    controlled: openProp,
    default: initialIsOpen || false,
    name: componentName,
  });

  const [isTagsFocus, setIsTagsFocus] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [inputValue, setInputValue] = useControlled({
    controlled: inputValueProp,
    default: '',
    name: componentName,
  });

  const updateInputValue = (newValue: string) => {
    onInputChangeProp?.(newValue);
    setInputValue(newValue);
  };

  const [selectedItems, setSelectedItems] = useControlled({
    controlled: selectedItemsProp,
    default: [],
    name: componentName,
  });

  const focusInput = () => inputRef.current?.focus();

  const { current: downshiftId } = useResultRef(() => uniqueId(`downshift-`));
  // * use -2 for us know that is init state, for recalculate defaultHighlightedIndex
  const highlightedIndexRef = useRef(DEFAULT_HIGHLIGHTED_INDEX);
  const isCompositionRef = useRef(false);
  const noOptionItemRef = useRef<RcDownshiftSelectedItem>();
  const stopAutoSelectRef = useRef(false);
  const fromPasteString = useRef('');
  const keepHighlightedIndexRef = useRef(false);
  const changeHighlightedIndexReason =
    useRef<RcDownshiftHighlightChangeReason>();

  const readOnly =
    !isAutocomplete && !multiple && selectedItems.length >= 1
      ? true
      : undefined;

  const forceUpdate = useForceUpdate();

  const { sleep, getSleeping } = useSleep();

  const filteredResult = useMemo(() => {
    const getInputValueAsItem = () => {
      const label = inputValue.trim() || '';

      if (label.length > 0) {
        const item: RcDownshiftSelectedItem = {
          id: DOWNSHIFT_ID_NO_RESULT_TOKEN,
          isSuggestion: false,
          freeSolo: true,
          label,
        };

        return item;
      }
      return undefined;
    };

    const getFilteredItems = (items: RcDownshiftSelectedItem[]) => {
      if (filterOptions) {
        return filterOptions(items, {
          inputValue,
          inputChanged: isInputValueChangedRef.current,
          getOptionLabel,
          selectedItems,
        });
      }

      return items;
    };

    // * only when isOpen calculate the filtered result
    const results = getFilteredItems(options!);

    noOptionItemRef.current = undefined;

    if (addNoOptionItem) {
      const item = getInputValueAsItem();
      noOptionItemRef.current = item;

      if (item && freeSolo) {
        switch (addNoOptionItem) {
          case 'first':
            return [item, ...results];
          case 'last':
            return [...results, item];
          default:
            break;
        }
      }
    } else if (results.length === 0) {
      const item = getInputValueAsItem();
      noOptionItemRef.current = item;

      // * only when not set render no options will auto add item
      if (item && freeSolo && !renderNoOptions) {
        // * when outside not use filter, that will be original array, must use spread
        return [...results, item];
      }
    }

    return results;
  }, [
    addNoOptionItem,
    filterOptions,
    freeSolo,
    getOptionLabel,
    inputValue,
    options,
    renderNoOptions,
    selectedItems,
  ]);

  const { groupedResult, handleGroupExpandedChange, optionsGroupList } =
    useDownshiftGroup({
      groupBy,
      options,
      filteredResult,
      getExpandIconProps,
      groupExpanded,
      groupDefaultExpanded,
      onGroupExpanded,
      // TODO: single release for that breaking change
      // getOptionDisabled,
      groupVariant,
      id: downshiftId,
    });

  const optionItems = groupBy ? groupedResult : filteredResult;

  const freeSoloCount = useMemo(
    () => selectedItems.filter((x) => x.freeSolo).length,
    [selectedItems],
  );

  const handleSelectedItems = (_selectedItems: RcDownshiftSelectedItem[]) => {
    setSelectedItems(_selectedItems);
    onSelectChange?.(_selectedItems);

    if (isAutocomplete && _selectedItems.length === 1) {
      const result = getOptionLabel(_selectedItems[0]);

      onInputChangeProp?.(result);
      isSelectedFromAutocompleteRef.current = true;
    }
  };

  const setHighlightedIndex = (
    index: number,
    {
      reRender = false,
      reason,
    }: {
      reRender?: boolean;
      reason?: RcDownshiftHighlightChangeReason;
    },
  ) => {
    changeHighlightedIndexReason.current = reason;

    if (highlightedIndexRef.current !== index) {
      highlightedIndexRef.current = index;

      if (reRender) forceUpdate();
    }
  };

  const focusTag = (tagToFocus: number) => {
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

  const handleFocusTag = useEventCallback(
    (tagToFocus: number, focus = true) => {
      if (activeIndex === tagToFocus) return;

      setActiveIndex(tagToFocus);

      if (focus) focusTag(tagToFocus);
    },
  );

  const closeMenu = (e?: ChangeEvent<{}>, reason?: RcDownshiftCloseReason) => {
    keepHighlightedIndexRef.current = false;
    isInputValueChangedRef.current = false;
    // * set to default highlighted
    setHighlightedIndex(DEFAULT_HIGHLIGHTED_INDEX, { reason: 'auto' });

    if (isOpen) {
      if (e && reason) {
        onClose?.(e, reason);
      }
      setIsOpen(false);
    }
  };

  const openMenu = (e?: ChangeEvent<{}>) => {
    if (!isOpen) {
      if (e) onOpen?.(e);

      setIsOpen(true);
    }
  };

  const handleInputChange = (
    newValue: string,
    open = true,
    e?: ChangeEvent<{}>,
  ) => {
    if (inputValue !== newValue) {
      setHighlightedIndex(DEFAULT_HIGHLIGHTED_INDEX, { reason: 'auto' });

      // !!! Get regexp every time for prevent bug with browser
      // https://stackoverflow.com/questions/3827456/what-is-wrong-with-my-date-regex/3827500#3827500
      if (stringArrToRegExp(keyToTags).test((newValue || '').trim())) {
        const resultHaveAdd = checkAndAddFreeSolo({ value: newValue }, e);

        if (!disableCloseOnSelect) {
          closeMenu(e, 'toggleInput');
        } else if (open) {
          openMenu(e);
        }

        return resultHaveAdd;
      }

      updateInputValue(newValue);
    }

    if (open) openMenu(e);
    return false;
  };

  const getIsItemCanSelected = (
    item?: RcDownshiftSelectedItem | null,
  ): item is RcDownshiftSelectedItem => {
    return (
      (!!item && item.freeSolo) ||
      (isItemCanSelected(item) && !getOptionDisabled?.(item))
    );
  };

  /** when return `true` mean add item success */
  const checkAndAddFreeSolo = (
    {
      selectedItem,
      value,
    }: {
      selectedItem?: RcDownshiftSelectedItem | null;
      value?: string;
    } = {},
    e?: ChangeEvent<{}>,
  ) => {
    let isAddItem = false;

    const currentValue = value ?? inputRef.current?.value;

    if (
      !selectedItem &&
      freeSolo &&
      !isCompositionRef.current &&
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
          handleSelectedItems([
            ...selectedItems,
            ...items.map((label) => ({
              id: uniqueId(DOWNSHIFT_ID_TOKEN),
              isSuggestion: false,
              freeSolo: true,
              label,
            })),
          ]);

          isAddItem = true;
        }
      } else {
        onMaxFreeSolo?.(maxFreeSolo);
      }
      resetState(e);
    }
    return isAddItem;
  };

  const inputContainerScrollToBottom = () => {
    requestAnimationFrame(() => {
      const inputContainer = inputContainerRef?.current;
      if (inputContainer) {
        inputContainer.scrollTop = inputContainer.scrollHeight;
      }
    });
  };

  const selectItemFn = (
    selectedItem: RcDownshiftSelectedItem | null,
    e: ChangeEvent<{}>,
  ) => {
    if (getIsItemCanSelected(selectedItem)) {
      addSelectedItem(selectedItem);
      resetState(e);

      inputContainerScrollToBottom();

      if (disableCloseOnSelect) {
        if (autoHighlight) {
          const currIndex = highlightedIndexRef.current;

          const nextValidIndex = getNextFocusableOption();

          const toIndex =
            // * if that index is bigger than current index or nextValidIndex is last index,
            // * cut 1 (because current item will be remove)
            nextValidIndex > currIndex ||
            nextValidIndex === optionItems.length - 1
              ? nextValidIndex - 1
              : nextValidIndex;

          setHighlightedIndex(toIndex, {
            reRender: true,
          });
        } else {
          highlightedIndexRef.current = DEFAULT_HIGHLIGHTED_INDEX;
        }
      }

      return true;
    }
    return false;
  };

  const removeSelectedItem = (selectedItem: RcDownshiftSelectedItem) => {
    const selectedItemIndex = selectedItems.indexOf(selectedItem);

    if (selectedItemIndex > -1) {
      handleSelectedItems([
        ...selectedItems.slice(0, selectedItemIndex),
        ...selectedItems.slice(selectedItemIndex + 1),
      ]);
    }
  };

  const addSelectedItem = (selectedItem: RcDownshiftSelectedItem) => {
    // * change to uniqueId
    if (selectedItem.freeSolo) {
      noOptionItemRef.current = undefined;
      if (freeSoloCount < maxFreeSolo!) {
        selectedItem.id = uniqueId(DOWNSHIFT_ID_TOKEN);
      } else {
        onMaxFreeSolo?.(maxFreeSolo);
        return;
      }
    }

    if (multiple) {
      handleSelectedItems([...selectedItems, selectedItem]);
    } else {
      handleSelectedItems([selectedItem]);
    }
  };

  const resetState = (e?: ChangeEvent<{}>) => {
    if (
      // * when autocomplete select mode not reset input value
      !isSelectedFromAutocompleteRef.current &&
      inputRef.current &&
      inputRef.current.value.length > 0
    ) {
      updateInputValue('');
    }
    isSelectedFromAutocompleteRef.current = false;
    isInputValueChangedRef.current = false;

    setActiveIndex(-1);

    if (!disableCloseOnSelect) {
      closeMenu(e, 'select-option');
    }
  };

  const reset = (isFocus?: boolean) => {
    resetState();
    setIsTagsFocus(false);

    onInputChangeProp?.('');
    onSelectChange?.([]);
    if (isFocus) focusInput();
  };

  const activeIndexRef = useRef(activeIndex);
  activeIndexRef.current = activeIndex;

  const { onKeyFocusedIndexHandle: handleTagKey } = useKeyboardMoveFocus({
    options: selectedItems,
    focusedIndexRef: activeIndexRef,
    infinite: 'order',
    onFocusedIndexChange: (event, toIndex) => {
      handleFocusTag(toIndex);
      event?.preventDefault();
    },
  });

  const { onKeyFocusedIndexHandle, getNextFocusableOption } =
    useKeyboardMoveFocus({
      options: optionItems,
      focusedIndexRef: highlightedIndexRef,
      infinite: true,
      onFocusedIndexChange: (event, toIndex) => {
        setHighlightedIndex(toIndex, { reason: 'keyboard', reRender: true });

        event?.preventDefault();
      },
      getOptionDisabled: disabledItemsHighlightable
        ? undefined
        : (child) => {
            return !getIsItemCanSelected(child);
          },
    });

  const keepHighlightedIndex = () => {
    keepHighlightedIndexRef.current = true;
  };

  // * when outside options props props change also need set highlightedIndex to default
  useChange(
    () => {
      const shouldResetHighlightedIndex = !keepHighlightedIndexRef.current;

      if (options !== undefined && shouldResetHighlightedIndex) {
        setHighlightedIndex(DEFAULT_HIGHLIGHTED_INDEX, { reason: 'auto' });
      }
    },
    () => options,
  );

  // * check that defaultHighlightedIndex
  const defaultHighlightedIndex = useMemo(() => {
    return autoHighlight ? getNextFocusableOption(0) : -1;
  }, [autoHighlight, getNextFocusableOption]);

  // * only when menu is open set to defaultHighlightedIndex
  if (isOpen) {
    if (highlightedIndexRef.current === DEFAULT_HIGHLIGHTED_INDEX) {
      let toIndex = defaultHighlightedIndex;

      if (isAutocomplete && selectedItems.length === 1) {
        const itemText = getOptionLabel(selectedItems[0]);

        const fIndex = optionItems.findIndex(
          (x) => getOptionLabel(x) === itemText,
        );

        if (fIndex > -1) {
          toIndex = fIndex;
        }
      }

      setHighlightedIndex(toIndex, { reason: 'auto' });
    } else {
      const currIndex = highlightedIndexRef.current;
      const availableIndex = getNextFocusableOption(currIndex);

      if (currIndex !== availableIndex) {
        setTimeout(() => {
          setHighlightedIndex(availableIndex, {
            reason: 'auto',
            reRender: true,
          });
        }, 0);
      }
    }
  }

  const handleAutocompleteText = () => {
    if (isAutocomplete && selectedItems.length > 0) {
      const result = getOptionLabel(selectedItems[0]);

      onInputChangeProp?.(result);
    }
  };

  // * use force update to sync open state when init is open
  useLayoutEffect(() => {
    if (isOpen) {
      forceUpdate();
    }

    handleAutocompleteText();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const getItemProps = ({
    item,
    index,
    ...itemRest
  }: RcDownshiftGetItemPropsOptions<RcDownshiftSelectedItem>) => {
    return combineProps(
      {
        id: `${downshiftId}-option-${index}`,
        role: 'option',
        onClick: (e) => {
          selectItemFn(item, e);
        },
        onMouseDown: (e) => {
          e.preventDefault();
          e.stopPropagation();
        },
        onMouseOver: () => {
          if (highlightedIndexRef.current !== index) {
            setHighlightedIndex(index!, { reason: 'mouse', reRender: true });
          }
        },
      },
      itemRest,
    );
  };

  const getTagProps = ({
    index,
    selectedItem,
    ...restTagProps
  }: RcDownshiftGetSelectedItemProps<RcDownshiftSelectedItem>) => {
    const tabIndex =
      // * when tag is not focus
      !isTagsFocus &&
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
        'data-item-last': index === selectedItems.length - 1,
        onClick: (e) => {
          e.stopPropagation();
        },
        onBlur: () => setIsTagsFocus(false),
        onFocus: () => {
          handleFocusTag(index);
          setIsTagsFocus(true);
        },
        onKeyDown: (e) => {
          switch (e.key) {
            case 'Backspace':
              {
                const lengthBeforeDelete = selectedItems.length;

                handleFocusTag(
                  // * when length is 1 mean that will be remove all
                  lengthBeforeDelete === 1
                    ? -1
                    : activeIndex === 0
                    ? 0
                    : activeIndex - 1,
                );
                removeSelectedItem(selectedItem);
              }
              break;
            case 'Delete':
              {
                const lengthBeforeDelete = selectedItems.length;

                handleFocusTag(
                  // * when length is 1 mean that will be remove all
                  lengthBeforeDelete === 1
                    ? -1
                    : activeIndex === selectedItems.length - 1
                    ? activeIndex - 1
                    : activeIndex,
                );
                removeSelectedItem(selectedItem);
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
            removeSelectedItem(selectedItem);
            setIsTagsFocus(false);
          }
        },
      },
      restTagProps,
    );
  };

  const getInputProps = (props?: RcTextFieldProps['InputProps']) => {
    return combineProps(
      {
        id: `${downshiftId}-input`,
        autoComplete: 'off',
        onPaste: (e) => {
          if (freeSolo) {
            const clipboardData = e.clipboardData;

            const { position } = getSelectionPosition(inputRef);

            const currText = inputValue ?? '';
            const pasteText = clipboardData.getData('Text') ?? '';

            // * because input can't get next line char(\n), we need get that value in onPaste
            // * get current input result use paste
            // * remember combine current input value, that will be use in onChange
            fromPasteString.current =
              currText.slice(0, position.start) +
              pasteText +
              currText.slice(position.end);
          }
        },
        onChange: (e) => {
          const changeValue = fromPasteString.current || e.target.value;

          handleInputChange(changeValue, undefined, e);

          // * when input value clear all, clear selected item
          if (isAutocomplete && changeValue.length === 0) {
            handleSelectedItems([]);
          }

          fromPasteString.current = '';
          isInputValueChangedRef.current = true;
        },
        onFocus: (e) => {
          setIsFocused(true);

          if (openOnFocus) openMenu(e);

          // * when autocomplete mode, always select all text when focus
          if (isAutocomplete) {
            inputRef.current?.select();
          }

          // * reset stopAutoSelect in focus input
          stopAutoSelectRef.current = false;
          if (activeIndex !== -1) {
            handleFocusTag(-1, false);
          }
        },
        onBlur: (e) => {
          setIsFocused(false);

          if (autoSelect && !stopAutoSelectRef.current) {
            if (!freeSolo)
              selectItemFn(optionItems[highlightedIndexRef.current], e);

            checkAndAddFreeSolo({}, e);
          }

          // * when blur should restore text when have selected item
          handleAutocompleteText();

          closeMenu(e, 'blur');
        },
        onCompositionStart: () => {
          isCompositionRef.current = true;
        },
        onCompositionEnd: async () => {
          // sleep for prevent tab in composition
          await sleep(20);
          isCompositionRef.current = false;
        },
        onKeyDown: (e) => {
          keepHighlightedIndexRef.current = false;

          onKeyDownProp?.(e, highlightedIndexRef.current);

          const { isSelectRange, position } = getSelectionPosition(inputRef);

          const currTagsLength = selectedItems.length;

          if (
            !isSelectRange &&
            position.start === 0 &&
            currTagsLength > 0 &&
            e.key === 'Backspace'
          ) {
            if (currTagsLength > 0) {
              stopAutoSelectRef.current = true;
              handleFocusTag(currTagsLength - 1);
            }
          } else {
            const highlightedIndex = highlightedIndexRef.current;
            switch (e.key) {
              case 'Escape':
                if (isOpen) {
                  // Avoid Opera to exit fullscreen mode.
                  e.preventDefault();
                  // Avoid the Modal to handle the event.
                  e.stopPropagation();
                  closeMenu(e, 'escape');
                }
                break;
              case 'Tab':
                if (e.which === 229) return;

                if (getSleeping()) {
                  e.preventDefault();
                  e.stopPropagation();
                  return;
                }

                // * when shift+ tab also not need autoSelect
                if (e.shiftKey && currTagsLength > 0) {
                  stopAutoSelectRef.current = true;
                }

                // ! [Browser] when in composition,
                // ! and keydown 'Tab' that will trigger twice keydown,
                // ! must check is that is not in composition mode
                if (!e.shiftKey && !isCompositionRef.current) {
                  const currentHighlightItem = optionItems[highlightedIndex];
                  if (isOpen && currentHighlightItem) {
                    if (selectItemFn(currentHighlightItem, e)) {
                      e.preventDefault();
                      e.stopPropagation();
                    }
                  } else if (checkAndAddFreeSolo({}, e)) {
                    e.preventDefault();
                    e.stopPropagation();
                  }
                }
                break;
              case 'Enter':
                if (e.which === 229) return;
                if (
                  freeSolo &&
                  highlightedIndex === DEFAULT_HIGHLIGHTED_INDEX &&
                  checkAndAddFreeSolo(
                    {
                      selectedItem: isOpen
                        ? optionItems[highlightedIndex]
                        : undefined,
                    },
                    e,
                  )
                ) {
                  e.stopPropagation();
                  closeMenu(e, 'select-option');
                } else if (
                  highlightedIndex !== DEFAULT_HIGHLIGHTED_INDEX &&
                  isOpen &&
                  !isCompositionRef.current
                ) {
                  selectItemFn(optionItems[highlightedIndex], e);
                  e.stopPropagation();
                }
                // always preventDefault for not inset all enter into textarea
                e.preventDefault();
                break;
              case 'F10':
                if (e.shiftKey) {
                  const currOption = optionItems[highlightedIndex];
                  const currentGroup = currOption.group;

                  if (currentGroup && currentGroup.options.length > 1) {
                    handleGroupExpandedChange(currentGroup.group);
                  }
                }
                break;
              case 'ArrowUp':
              case 'ArrowDown':
                if (readOnly) {
                  e.preventDefault();
                  return;
                }

                // * check state for is that should move key in option items
                if (isAutocomplete && selectedItems.length > 0 && !isOpen) {
                  openMenu(e);
                  e.preventDefault();
                  break;
                }

                onKeyFocusedIndexHandle(e);
                openMenu(e);
                break;
              default:
                if (isOpen) {
                  onKeyFocusedIndexHandle(e);
                }
                break;
            }
          }
        },
      },
      props,
    );
  };

  const getInputAriaProps = (props?: RcTextFieldProps['inputProps']) => {
    return combineProps(
      {
        readOnly,
        // * provide for when container click focus on input
        onContainerClick: focusInput,
        unselectable: readOnly ? 'on' : undefined,
        role: 'combobox',
        'aria-autocomplete': 'list',
        'aria-expanded': !!isOpen,
        'aria-haspopup': true,
        'aria-owns': isOpen ? `${downshiftId}-menu` : undefined,
        'aria-activedescendant':
          isOpen && highlightedIndexRef.current > -1
            ? `${downshiftId}-option-${highlightedIndexRef.current}`
            : undefined,
      },
      props,
    );
  };

  const getLabelProps = (props?: RcTextFieldProps['InputLabelProps']) => {
    return combineProps(
      {
        htmlFor: `${downshiftId}-input`,
        id: `${downshiftId}-label`,
      },
      props,
    );
  };

  const getPopperProps = (restPopperProps?: HTMLAttributes<HTMLElement>) => {
    return combineProps(
      {
        id: `${downshiftId}-popper`,
        style: { width: wrapperRef?.current?.clientWidth },
        role: 'presentation',
        onMouseDown: (e) => {
          e.preventDefault();
          e.stopPropagation();
        },
      },
      restPopperProps,
    );
  };

  const getMenuProps = (restMenuProps?: HTMLAttributes<HTMLElement>) => {
    return combineProps(
      {
        'aria-labelledby': `${downshiftId}-label`,
        id: `${downshiftId}-menu`,
        role: 'listbox',
      },
      restMenuProps,
    );
  };

  const getToggleButtonProps = (props?: RcIconButtonProps) => {
    return combineProps(
      {
        disabled: (!isOpen && optionItems.length === 0) || disabled || readOnly,
        id: `${downshiftId}-toggle-button`,
        onMouseDown: (e) => {
          e.preventDefault();
          e.stopPropagation();
        },
        onClick: (e) => {
          if (isOpen) {
            closeMenu(e, 'toggleInput');
          } else {
            openMenu(e);
            focusInput();
          }
        },
        tabIndex: -1,
      },
      props,
    );
  };

  const getClearButtonProps = (props?: RcIconButtonProps) => {
    return combineProps(
      {
        id: `${downshiftId}-clear-button`,
        onClick: (e) => {
          onClear?.(e);
          reset(true);
        },
      },
      props,
    );
  };

  const getNoOptionsProps = (additionProps: HTMLAttributes<HTMLElement>) => {
    return combineProps(
      {
        onClick: (e) => {
          closeMenu(e, 'blur');
        },
        role: 'presentation',
      },
      additionProps,
    );
  };

  const resultObj = {
    focusInput,
    setIsTagsFocus,
    readOnly,
    getTagProps,
    getClearButtonProps,
    removeSelectedItem,
    activeIndex,
    setActiveIndex: handleFocusTag,
    isOpen,
    isTagsFocus,
    getToggleButtonProps,
    getPopperProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getInputAriaProps,
    getTagListBoxProps,
    getItemProps,
    getNoOptionsProps,
    noOptionItem: noOptionItemRef.current,
    highlightedIndex: highlightedIndexRef.current,
    selectedItems,
    optionItems,
    inputValue,
    onInputChange: handleInputChange,
    keepHighlightedIndex,
    isKeepHighlightedIndex: keepHighlightedIndexRef.current,
    setHighlightedIndex,
    changeHighlightedIndexReason: changeHighlightedIndexReason.current,
    closeMenu,
    openMenu,
    reset,
    forceUpdate,
    optionsGroupList,
    isFocused,
    id: downshiftId,
    inputChanged: isInputValueChangedRef.current,
  };

  changeHighlightedIndexReason.current = undefined;
  return resultObj;
};
