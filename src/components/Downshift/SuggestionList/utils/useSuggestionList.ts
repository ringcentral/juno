import {
  ChangeEvent,
  HTMLAttributes,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';

import { useControlled } from '@material-ui/core/utils';

import {
  combineProps,
  useForceUpdate,
  useId,
  useKeyboardMoveFocus,
} from '../../../../foundation';
import { RcIconButtonProps } from '../../../Buttons/IconButton';
import { RcTextFieldProps } from '../../../Forms';
import { RcDownshiftProps } from '../../Downshift';
import {
  DEFAULT_GET_OPTION_LABEL,
  isItemCanSelected,
} from '../../utils/DownshiftUtils';
import { RcDownshiftSelectedItem } from '../../utils/SelectItem';
import {
  RcDownshiftGetItemPropsOptions,
  RcDownshiftHighlightChangeReason,
} from '../../utils/useDownshift.interface';
import { useDownshiftGroup } from '../../utils/useDownshiftGroup';

const DEFAULT_HIGHLIGHTED_INDEX = -1;

type UseDownshiftParams<T = RcDownshiftSelectedItem> = {
  /** current suggestion list unique id */
  id?: string;
  /** that input ref you binding event */
  inputRef: React.RefObject<HTMLInputElement>;
  /** process filtered options result, let you can handle result after filter */
  processFilteredResult?: (options: T[], inputValue: string) => T[];
  /** emit when item be select */
  onSelect?: (event: React.ChangeEvent<{}>, selectedItems: T) => void;
} & Pick<
  RcDownshiftProps<T>,
  | 'options'
  | 'value'
  | 'getOptionLabel'
  | 'filterOptions'
  | 'inputValue'
  | 'onInputChange'
  | 'onKeyDown'
  | 'onClear'
  | 'getOptionDisabled'
  | 'disabledItemsHighlightable'
  | 'variant'
  | 'groupBy'
  | 'getExpandIconProps'
  | 'groupExpanded'
  | 'groupDefaultExpanded'
  | 'onGroupExpanded'
  | 'groupVariant'
>;

const componentName = 'useSuggestionList';

/**
 * provide suggestion list with search function and expandable group with virtualized list
 */
export const useSuggestionList = <
  T extends RcDownshiftSelectedItem = RcDownshiftSelectedItem,
>({
  id,
  inputValue: inputValueProp,
  getOptionLabel = DEFAULT_GET_OPTION_LABEL,
  filterOptions,
  disabledItemsHighlightable,
  options,
  onInputChange: onInputChangeProp,
  inputRef,
  onKeyDown: onKeyDownProp,
  onSelect,
  onClear,
  getOptionDisabled,
  groupBy,
  onGroupExpanded,
  groupVariant,
  groupExpanded,
  groupDefaultExpanded,
  getExpandIconProps,
  processFilteredResult,
}: UseDownshiftParams<T>) => {
  const isTitleMode = groupVariant === 'normal';
  const [inputValue, setInputValue] = useControlled({
    controlled: inputValueProp,
    default: '',
    name: componentName,
  });

  const updateInputValue = (newValue: string) => {
    onInputChangeProp?.(newValue);
    setInputValue(newValue);
  };

  const focusInput = () => inputRef.current?.focus();

  const currUniqueId = useId(id || 'suggestion-list', !id);

  const highlightedIndexRef = useRef(DEFAULT_HIGHLIGHTED_INDEX);
  const changeHighlightedIndexReasonRef =
    useRef<RcDownshiftHighlightChangeReason>();

  const forceUpdate = useForceUpdate();

  const getFilteredItems = useCallback(
    (items: T[]) => {
      if (filterOptions) {
        return filterOptions(items, {
          inputValue,
          getOptionLabel,
          selectedItems: [],
        });
      }

      return items;
    },
    [filterOptions, getOptionLabel, inputValue],
  );

  const filteredResult = useMemo(() => {
    // * only when isOpen calculate the filtered result
    let results = getFilteredItems(options!);

    results = processFilteredResult
      ? processFilteredResult(results, inputValue)
      : results;

    return results;
  }, [getFilteredItems, inputValue, options, processFilteredResult]);

  const { groupedResult, handleGroupExpandedChange, optionsGroupList } =
    useDownshiftGroup<T>({
      id: currUniqueId,
      options,
      filteredResult,
      groupExpanded,
      groupDefaultExpanded,
      groupVariant,
      groupBy,
      getExpandIconProps,
      onGroupExpanded,
      getOptionDisabled,
    });

  const optionItems = groupBy ? groupedResult : filteredResult;

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
    changeHighlightedIndexReasonRef.current = reason;

    if (highlightedIndexRef.current !== index) {
      highlightedIndexRef.current = index;

      if (reRender) forceUpdate();
    }
  };

  const handleInputChange = (newValue: string) => {
    if (inputValue !== newValue) {
      setHighlightedIndex(DEFAULT_HIGHLIGHTED_INDEX, { reason: 'auto' });

      updateInputValue(newValue);
    }

    return false;
  };

  const getIsItemCanSelected = (item?: T | null): item is T => {
    return (
      (!!item && item.freeSolo) ||
      (isItemCanSelected(item) && !getOptionDisabled?.(item))
    );
  };

  const selectItem = (e: ChangeEvent<{}>, selectedItem: T | null) => {
    if (getIsItemCanSelected(selectedItem)) {
      onSelect?.(e, selectedItem);

      return true;
    }
    return false;
  };

  const clearInput = () => {
    if (inputRef.current && inputRef.current.value.length > 0) {
      updateInputValue('');
    }
  };

  const reset = (isFocus?: boolean) => {
    clearInput();

    onInputChangeProp?.('');
    if (isFocus) focusInput();
  };

  const { onKeyFocusedIndexHandle, getNextFocusableOption } =
    useKeyboardMoveFocus<T>({
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

  const getItemProps = ({
    item,
    index = 0,
    ...itemRest
  }: RcDownshiftGetItemPropsOptions<T>) => {
    const currGroup = item.group;
    const isGroupTitle = item === currGroup?.options[0];
    const itemCount = optionItems.length;
    const groupOrder = currGroup?.order || 0;

    return combineProps(
      {
        id: `${currUniqueId}-option-${index}`,
        onClick: (e) => {
          selectItem(e, item);
        },
        onMouseDown: (e) => {
          e.preventDefault();
          e.stopPropagation();
        },
        onMouseOver: () => {
          if (
            highlightedIndexRef.current !== index &&
            getIsItemCanSelected(item)
          ) {
            setHighlightedIndex(index!, { reason: 'mouse', reRender: true });
          }
        },
        // When title mode and is title, skip that posinset
        ...(isTitleMode && isGroupTitle
          ? {}
          : {
              role: 'option',
              'aria-setsize':
                itemCount - (isTitleMode ? optionsGroupList?.length || 0 : 0),
              'aria-posinset': index - (isTitleMode ? groupOrder + 1 : 0),
            }),
      },
      itemRest,
    );
  };

  const handleF10KeyDown = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const highlightedIndex = highlightedIndexRef.current;

    if (e.shiftKey) {
      const currOption = optionItems[highlightedIndex];
      const currentGroup = currOption.group;

      if (currentGroup && currentGroup.options.length > 1) {
        handleGroupExpandedChange(currentGroup.group);
      }
    }
  };

  const getInputProps = (props?: RcTextFieldProps['InputProps']) => {
    return combineProps(
      {
        id: `${currUniqueId}-input`,
        autoComplete: 'off',
        onChange: (e) => {
          const changeValue = e.target.value;
          handleInputChange(changeValue);
        },
        onKeyDown: (e) => {
          onKeyDownProp?.(e, highlightedIndexRef.current);

          switch (e.key) {
            case 'F10':
              handleF10KeyDown(e);
              break;
            case 'Enter': {
              const highlightedIndex = highlightedIndexRef.current;

              if (e.which === 229) return;
              if (highlightedIndex !== DEFAULT_HIGHLIGHTED_INDEX) {
                const currOption = optionItems[highlightedIndex];
                const isGroupTitle =
                  currOption === currOption.group?.options[0];

                if (isGroupTitle) {
                  const { onClick } = currOption.group!.getExpandIconProps!()!;

                  onClick?.(e as any);
                } else {
                  selectItem(e, currOption);
                }

                e.stopPropagation();
              }
              // always preventDefault for not inset all enter into textarea
              e.preventDefault();
              break;
            }
            default:
              onKeyFocusedIndexHandle(e);
              break;
          }
        },
      },
      props,
    );
  };

  const getInputAriaProps = (props?: RcTextFieldProps['inputProps']) => {
    return combineProps(
      {
        // * provide for when container click focus on input
        onContainerClick: focusInput,
        role: 'combobox',
        'aria-autocomplete': 'list',
        'aria-expanded': true,
        'aria-haspopup': true,
        'aria-owns': `${currUniqueId}-menu`,
        'aria-activedescendant':
          highlightedIndexRef.current > -1
            ? `${currUniqueId}-option-${highlightedIndexRef.current}`
            : undefined,
      },
      props,
    );
  };

  const getLabelProps = (props?: RcTextFieldProps['InputLabelProps']) => {
    return combineProps(
      {
        htmlFor: `${currUniqueId}-input`,
        id: `${currUniqueId}-label`,
      },
      props,
    );
  };

  const getMenuProps = (restMenuProps?: HTMLAttributes<HTMLElement>) => {
    return combineProps(
      {
        'aria-labelledby': `${currUniqueId}-label`,
        id: `${currUniqueId}-menu`,
        role: 'listbox',
      },
      restMenuProps,
    );
  };

  const getClearButtonProps = (props?: RcIconButtonProps) => {
    return combineProps(
      {
        id: `${currUniqueId}-clear-button`,
        onClick: (e) => {
          onClear?.(e);
          reset(true);
        },
      },
      props,
    );
  };

  useEffect(() => {
    changeHighlightedIndexReasonRef.current = undefined;
  });

  return {
    reset,
    clearInput,
    forceUpdate,
    focusInput,
    updateInputValue,
    selectItem,
    onKeyFocusedIndexHandle,
    getClearButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getInputAriaProps,
    getItemProps,
    highlightedIndexRef,
    highlightedIndex: highlightedIndexRef.current,
    optionItems,
    inputValue,
    onInputChange: handleInputChange,
    setHighlightedIndex,
    changeHighlightedIndexReasonRef,
    changeHighlightedIndexReason: changeHighlightedIndexReasonRef.current,
    optionsGroupList,
    /** current unique id */
    id: currUniqueId,
    getNextFocusableOption,
    handleF10KeyDown,
  };
};
