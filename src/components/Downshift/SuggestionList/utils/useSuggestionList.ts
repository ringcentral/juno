import { ChangeEvent, HTMLAttributes, useMemo, useRef } from 'react';

import uniqueId from 'lodash/uniqueId';

import { useControlled } from '@material-ui/core/utils';

import {
  combineProps,
  useForceUpdate,
  useKeyboardMoveFocus,
  useResultRef,
} from '../../../../foundation';
import { RcIconButtonProps } from '../../../Buttons/IconButton';
import { RcTextFieldProps } from '../../../Forms';
import { RcDownshiftProps } from '../../Downshift';
import {
  DEFAULT_GET_OPTION_LABEL,
  isItemCanSelected,
  RcDownshiftGetItemPropsOptions,
  RcDownshiftHighlightChangeReason,
  RcDownshiftSelectedItem,
} from '../../utils';
import { useDownshiftGroup } from '../../utils/useDownshiftGroup';

const DEFAULT_HIGHLIGHTED_INDEX = -1;

type UseDownshiftParams<T = RcDownshiftSelectedItem> = {
  /** that input ref you binding event */
  inputRef: React.RefObject<HTMLInputElement>;
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
}: UseDownshiftParams<T>) => {
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

  const { current: suggestionListId } = useResultRef(() =>
    uniqueId(`suggestion-list-`),
  );
  // * use -2 for us know that is init state, for recalculate defaultHighlightedIndex
  const highlightedIndexRef = useRef(DEFAULT_HIGHLIGHTED_INDEX);
  const changeHighlightedIndexReason =
    useRef<RcDownshiftHighlightChangeReason>();

  const forceUpdate = useForceUpdate();

  const filteredResult = useMemo(() => {
    const getFilteredItems = (items: T[]) => {
      if (filterOptions) {
        return filterOptions(items, {
          inputValue,
          getOptionLabel,
          selectedItems: [],
        });
      }

      return items;
    };

    // * only when isOpen calculate the filtered result
    const results = getFilteredItems(options!);

    return results;
  }, [filterOptions, getOptionLabel, inputValue, options]);

  const { groupedResult, handleGroupExpandedChange, optionsGroupList } =
    useDownshiftGroup<T>({
      groupBy,
      options,
      filteredResult,
      getExpandIconProps,
      groupExpanded,
      groupDefaultExpanded,
      onGroupExpanded,
      groupVariant,
      getOptionDisabled,
      id: suggestionListId,
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
    changeHighlightedIndexReason.current = reason;

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

  const selectItemFn = (e: ChangeEvent<{}>, selectedItem: T | null) => {
    if (getIsItemCanSelected(selectedItem)) {
      onSelect?.(e, selectedItem);

      return true;
    }
    return false;
  };

  const resetState = () => {
    if (inputRef.current && inputRef.current.value.length > 0) {
      updateInputValue('');
    }
  };

  const reset = (isFocus?: boolean) => {
    resetState();

    onInputChangeProp?.('');
    if (isFocus) focusInput();
  };

  const { onKeyFocusedIndexHandle } = useKeyboardMoveFocus<T>({
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
    index,
    ...itemRest
  }: RcDownshiftGetItemPropsOptions<T>) => {
    return combineProps(
      {
        id: `${suggestionListId}-option-${index}`,
        role: 'option',
        onClick: (e) => {
          selectItemFn(e, item);
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

  const getInputProps = (props?: RcTextFieldProps['InputProps']) => {
    return combineProps(
      {
        id: `${suggestionListId}-input`,
        autoComplete: 'off',
        onChange: (e) => {
          const changeValue = e.target.value;
          handleInputChange(changeValue);
        },
        onKeyDown: (e) => {
          onKeyDownProp?.(e, highlightedIndexRef.current);

          const highlightedIndex = highlightedIndexRef.current;
          switch (e.key) {
            case 'F10':
              if (e.shiftKey) {
                const currOption = optionItems[highlightedIndex];
                const currentGroup = currOption.group;

                if (currentGroup && currentGroup.options.length > 1) {
                  handleGroupExpandedChange(currentGroup.group);
                }
              }
              break;
            case 'Enter':
              if (e.which === 229) return;
              if (highlightedIndex !== DEFAULT_HIGHLIGHTED_INDEX) {
                const currOption = optionItems[highlightedIndex];
                const isGroupTitle =
                  currOption === currOption.group?.options[0];

                if (isGroupTitle) {
                  const { onClick } = currOption.group!.getExpandIconProps!()!;

                  onClick?.(e as any);
                } else {
                  selectItemFn(e, currOption);
                }

                e.stopPropagation();
              }
              // always preventDefault for not inset all enter into textarea
              e.preventDefault();
              break;
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
        // TODO
        'aria-expanded': true,
        'aria-haspopup': true,
        'aria-owns': `${suggestionListId}-menu`,
        'aria-activedescendant':
          highlightedIndexRef.current > -1
            ? `${suggestionListId}-option-${highlightedIndexRef.current}`
            : undefined,
      },
      props,
    );
  };

  const getLabelProps = (props?: RcTextFieldProps['InputLabelProps']) => {
    return combineProps(
      {
        htmlFor: `${suggestionListId}-input`,
        id: `${suggestionListId}-label`,
      },
      props,
    );
  };

  const getMenuProps = (restMenuProps?: HTMLAttributes<HTMLElement>) => {
    return combineProps(
      {
        'aria-labelledby': `${suggestionListId}-label`,
        id: `${suggestionListId}-menu`,
        role: 'listbox',
      },
      restMenuProps,
    );
  };

  const getClearButtonProps = (props?: RcIconButtonProps) => {
    return combineProps(
      {
        id: `${suggestionListId}-clear-button`,
        onClick: (e) => {
          onClear?.(e);
          reset(true);
        },
      },
      props,
    );
  };

  const resultObj = {
    focusInput,
    getClearButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getInputAriaProps,
    getItemProps,
    highlightedIndex: highlightedIndexRef.current,
    optionItems,
    inputValue,
    onInputChange: handleInputChange,
    setHighlightedIndex,
    changeHighlightedIndexReason: changeHighlightedIndexReason.current,
    reset,
    forceUpdate,
    optionsGroupList,
  };

  changeHighlightedIndexReason.current = undefined;
  return resultObj;
};
