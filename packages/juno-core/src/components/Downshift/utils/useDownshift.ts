import {
  ChangeEvent,
  HTMLAttributes,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react';

import {
  combineProps,
  getSelectionPosition,
  useChange,
  useControlled,
  useId,
  useSleep,
} from '../../../foundation';
import { RcIconButtonProps } from '../../Buttons/IconButton';
import { RcTextFieldProps } from '../../Forms';
import { RcDownshiftCloseReason, RcDownshiftProps } from '../Downshift';
import { useSuggestionList } from '../SuggestionList/utils/useSuggestionList';
import {
  DEFAULT_GET_OPTION_LABEL,
  DEFAULT_KEY_TO_CHIPS,
  downshiftComponentName,
  stringArrToRegExp,
} from './DownshiftUtils';
import { RcDownshiftSelectedItem } from './SelectItem';
import { RcDownshiftFilterOptions } from './useDownshift.interface';
import { useDownshiftTag } from './useDownshiftTag';

const DOWNSHIFT_ID_NO_RESULT_TOKEN = 'rc-chip-empty';
const DEFAULT_HIGHLIGHTED_INDEX = -1;

type UseDownshiftParams<
  T extends RcDownshiftSelectedItem = RcDownshiftSelectedItem,
> = {
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
  RcDownshiftProps<T>,
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

export const useDownshift = <
  T extends RcDownshiftSelectedItem = RcDownshiftSelectedItem,
>({
  multiple: multipleProp,
  variant,
  label: labelProp,
  inputValue: inputValueProp,
  getOptionLabel = DEFAULT_GET_OPTION_LABEL,
  keyToTags = DEFAULT_KEY_TO_CHIPS,
  filterOptions: filterOptionsProp,
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
  focused,
}: UseDownshiftParams<T>) => {
  const isAutocomplete = variant === 'autocomplete';
  const autoCompleteSelectedIndexRef = useRef(DEFAULT_HIGHLIGHTED_INDEX);

  const downshiftId = useId('downshift', true);

  const [inputFocused, setInputFocused] = useControlled({
    controlled: focused,
    default: false,
    name: downshiftComponentName,
  });

  const [isOpen, setIsOpen] = useControlled({
    controlled: openProp,
    default: initialIsOpen || false,
    name: downshiftComponentName,
  });

  const isInputValueChangedRef = useRef(false);
  const isCompositionRef = useRef(false);
  const noOptionItemRef = useRef<T | null>(null);
  const stopAutoSelectRef = useRef(false);
  const fromPasteString = useRef('');
  const keepHighlightedIndexRef = useRef(false);

  const { sleep, getSleeping } = useSleep();

  // * when that is autocomplete, that will never be multiple
  const multiple = isAutocomplete ? false : multipleProp;

  const {
    isSelectedFromAutocompleteRef,
    tags,
    focused: tagFocused,
    addTag,
    checkAndAddFreeSolo,
    focusedIndex: focusedTagIndex,
    focusTag,
    focusLast: focusLastTag,
    clearTags,
    blur: blurTags,
    getTagProps,
    getTagListBoxProps,
  } = useDownshiftTag({
    id: downshiftId,
    value: selectedItemsProp,
    onChange: onSelectChange,
    getOptionLabel,
    onInputChange: onInputChangeProp,
    variant,
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
    // * when is composition, stop freeSolo create new item
    getStopCreateFreeSolo: () => isCompositionRef.current,
    onReset: () => {
      resetState();
    },
  });

  const processFilteredResult = useCallback(
    (results: T[], inputValue = '') => {
      const getInputValueAsItem = () => {
        const label = inputValue.trim();

        if (label.length > 0) {
          const item = {
            id: DOWNSHIFT_ID_NO_RESULT_TOKEN,
            isSuggestion: false,
            freeSolo: true,
            label,
          } as T;

          return item;
        }
        return null;
      };

      // * only when isOpen calculate the filtered result
      noOptionItemRef.current = null;

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
    },
    [addNoOptionItem, freeSolo, renderNoOptions],
  );

  const filterOptions = useCallback<RcDownshiftFilterOptions<T>>(
    (items, state) => {
      if (filterOptionsProp) {
        return filterOptionsProp(items, {
          ...state,
          inputChanged: isInputValueChangedRef.current,
          selectedItems: tags,
        });
      }
      return items;
    },
    [filterOptionsProp, tags],
  );

  const {
    inputValue,
    optionItems,
    optionsGroupList,
    highlightedIndexRef,
    changeHighlightedIndexReasonRef,
    forceUpdate,
    selectItem,
    handleF10KeyDown,
    onKeyFocusedIndexHandle,
    setHighlightedIndex,
    updateInputValue,
    clearInput,
    getNextFocusableOption,
    getItemProps,
    focusInput,
    reset: resetSuggestionList,
    getInputProps: getSuggestionListInputProps,
    getInputAriaProps: getSuggestionListInputAriaProps,
    getClearButtonProps: getSuggestionListClearButtonProps,
    getLabelProps,
    getMenuProps,
  } = useSuggestionList({
    id: downshiftId,
    inputRef,
    inputValue: inputValueProp,
    options,
    disabledItemsHighlightable,
    groupVariant,
    groupExpanded,
    groupDefaultExpanded,
    getOptionLabel,
    filterOptions,
    processFilteredResult,
    onInputChange: onInputChangeProp,
    onKeyDown: onKeyDownProp,
    onClear,
    getOptionDisabled,
    groupBy,
    onGroupExpanded,
    getExpandIconProps,
    onSelect: (e, selectedItem) => {
      addTag(selectedItem);
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
    },
  });

  const readOnly =
    !isAutocomplete && !multiple && tags.length >= 1 ? true : undefined;

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

  const inputContainerScrollToBottom = () => {
    requestAnimationFrame(() => {
      const inputContainer = inputContainerRef?.current;
      if (inputContainer) {
        inputContainer.scrollTop = inputContainer.scrollHeight;
      }
    });
  };

  const resetState = (e?: ChangeEvent<{}>) => {
    // * when autocomplete select mode not reset input value
    if (!isSelectedFromAutocompleteRef.current) {
      clearInput();
    }

    blurTags();

    isSelectedFromAutocompleteRef.current = false;
    noOptionItemRef.current = null;
    isInputValueChangedRef.current = false;

    if (!disableCloseOnSelect) {
      closeMenu(e, 'select-option');
    }
  };

  const reset = (isFocus?: boolean) => {
    resetState();
    onSelectChange?.([]);
    resetSuggestionList(isFocus);
  };

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

      if (isAutocomplete && tags.length === 1) {
        const itemText = getOptionLabel(tags[0]);

        const fIndex = optionItems.findIndex(
          (x) => getOptionLabel(x) === itemText,
        );

        if (fIndex > -1) {
          toIndex = fIndex;
          autoCompleteSelectedIndexRef.current = fIndex;
        }
      }

      setHighlightedIndex(toIndex, { reason: 'auto' });
    } else {
      const currIndex = highlightedIndexRef.current;
      const availableIndex = getNextFocusableOption(currIndex);

      if (currIndex !== availableIndex) {
        requestAnimationFrame(() => {
          setHighlightedIndex(availableIndex, {
            reason: 'auto',
            reRender: true,
          });
        });
      }
    }
  }

  const handleAutocompleteText = () => {
    if (isAutocomplete && tags.length > 0) {
      const result = getOptionLabel(tags[0]);

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

  const getInputProps = (props?: RcTextFieldProps['InputProps']) => {
    const suggestionListItemProps = getSuggestionListInputProps(props);

    return combineProps(
      {
        ...suggestionListItemProps,
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
            clearTags();
          }

          fromPasteString.current = '';
          isInputValueChangedRef.current = true;
        },
        onFocus: (e) => {
          setInputFocused(true);

          if (openOnFocus) openMenu(e);

          // * when autocomplete mode, always select all text when focus
          if (isAutocomplete) {
            inputRef.current?.select();
          }

          // * reset stopAutoSelect in focus input
          stopAutoSelectRef.current = false;

          blurTags();
        },
        onBlur: (e) => {
          setInputFocused(false);

          if (autoSelect && !stopAutoSelectRef.current) {
            if (!freeSolo)
              selectItem(e, optionItems[highlightedIndexRef.current]);

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

          const currTagsLength = tags.length;

          if (
            !isSelectRange &&
            position.start === 0 &&
            currTagsLength > 0 &&
            e.key === 'Backspace'
          ) {
            stopAutoSelectRef.current = true;
            focusLastTag();
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
                    if (selectItem(e, currentHighlightItem)) {
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
                  selectItem(e, optionItems[highlightedIndex]);
                  e.stopPropagation();
                }
                // always preventDefault for not inset all enter into textarea
                e.preventDefault();
                break;
              case 'F10':
                handleF10KeyDown(e);
                break;
              case 'ArrowUp':
              case 'ArrowDown':
                if (readOnly) {
                  e.preventDefault();
                  return;
                }

                // * check state for is that should move key in option items
                if (isAutocomplete && tags.length > 0 && !isOpen) {
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
    const suggestionListInputAriaProps = getSuggestionListInputAriaProps(props);
    return combineProps(
      {
        ...suggestionListInputAriaProps,
        readOnly,
        unselectable: readOnly ? 'on' : undefined,
        'aria-owns': isOpen ? `${downshiftId}-menu` : undefined,
        'aria-expanded': !!isOpen,
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
    const suggestionListClearButtonProps =
      getSuggestionListClearButtonProps(props);
    return combineProps(
      {
        ...suggestionListClearButtonProps,
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

  return {
    focusInput,
    readOnly,
    getTagProps,
    getClearButtonProps,
    activeIndex: focusedTagIndex,
    setActiveIndex: focusTag,
    isOpen,
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
    tags,
    optionItems,
    inputValue,
    onInputChange: handleInputChange,
    keepHighlightedIndex,
    isKeepHighlightedIndex: keepHighlightedIndexRef.current,
    setHighlightedIndex,
    changeHighlightedIndexReason: changeHighlightedIndexReasonRef.current,
    closeMenu,
    openMenu,
    reset,
    forceUpdate,
    optionsGroupList,
    /** that state of current downshift focused, both tag or input focused */
    focused: focused ?? (tagFocused || inputFocused ? true : undefined),
    id: downshiftId,
    inputChanged: isInputValueChangedRef.current,
    autoCompleteSelectedIndex: autoCompleteSelectedIndexRef.current,
  };
};
