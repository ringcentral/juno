import React, { useCallback, useRef, useState } from 'react';

import {
  RcBox,
  RcDownshiftInput,
  RcDownshiftSelectedItem,
  RcIconButton,
  RcListItemText,
  RcMenuItem,
  RcSuggestionList,
  RcTextField,
  useAnnouncer,
  useSuggestionList,
} from '@ringcentral/juno';
import { ArrowDown2 } from '@ringcentral/juno-icon';
import { Meta, Story } from '@storybook/react';

import { options } from './options';

export default {
  title: '🚀 Cleanup Components/Downshift/useSuggestionList',
} as Meta;

const containerHeight = 300;

export const useSuggestionListExample: Story<any> = () => {
  const groupBy = useCallback(
    (option: RcDownshiftSelectedItem) => option.label?.[0] || '',
    [],
  );

  const inputRef = useRef<HTMLInputElement>(null);

  const [groupExpanded, setGroupExpanded] = useState<
    Record<string, boolean> | undefined
  >(undefined);

  const [value, setValue] = useState('');

  const announce = useAnnouncer();

  const {
    optionItems,
    highlightedIndex,
    changeHighlightedIndexReason,
    getMenuProps,
    getInputProps,
    getInputAriaProps,
    getLabelProps,
    getItemProps,
    inputValue,
    optionsGroupList,
    setHighlightedIndex,
    // reset,
  } = useSuggestionList({
    inputRef,
    inputValue: value,
    options,
    groupVariant: 'normal',
    groupExpanded,
    groupDefaultExpanded: true,
    onSelect: (e, option) => {
      const { id } = getItemProps({ item: option, index: highlightedIndex });

      console.log(option, id, id && document.getElementById(id));
      // eslint-disable-next-line no-alert
      alert(option.label);
    },
    onInputChange: (e) => {
      console.log(e);
      setValue(e || '');
    },
    filterOptions: (options, { inputValue }) => {
      return options.filter((item) =>
        item.label?.toLocaleLowerCase().includes(inputValue || ''),
      );
    },
    onGroupExpanded: (group, groupStateMap) => {
      console.log(group, groupStateMap);

      announce(
        `${group.group} Group being ${
          group.expanded ? 'expanded' : 'collapsed'
        }`,
      );

      setGroupExpanded(groupStateMap);
    },
    groupBy,
    getOptionDisabled: (option) => {
      const currGroup = option.group;
      const isGroupTitle = option === currGroup?.options[0];

      return isGroupTitle && currGroup?.options.length === 2;
    },
  });

  const InputProps = getInputProps({
    onKeyDown: () => {
      // you can add some keydown logic here
    },
    onBlur: () => {
      // you can add some blur logic here
      // like reset index to top
      // setHighlightedIndex(-1, { reason: 'auto', reRender: true });
    },
  });

  return (
    <>
      <RcTextField
        label="search item belong to group"
        variant="outline"
        inputRef={inputRef}
        value={inputValue}
        InputLabelProps={getLabelProps()}
        InputProps={{
          inputComponent: RcDownshiftInput,
          ...InputProps,
        }}
        inputProps={{
          maxLength: 30,
          ...getInputAriaProps(),
        }}
      />
      <RcBox width={containerHeight} height={containerHeight}>
        <RcSuggestionList
          tabIndex={-1}
          highlightedIndex={highlightedIndex}
          options={optionItems}
          // * you can custom render with render Option
          inputValue={inputValue}
          getItemProps={getItemProps}
          getMenuProps={getMenuProps}
          changeHighlightedIndexReason={changeHighlightedIndexReason}
          maxContainerHeight={containerHeight}
          renderOption={(
            {
              label,
              freeSolo,
              id,
              error,
              unSelectable,
              isSuggestion,
              isError,
              group,
              ...restProps
            },
            state,
          ) => {
            const groupName = group!.group;
            const groupTotal = group!.options.length - 1 || 0;

            const currIndex = (state.indexInOwnGroup || 0) + 1;

            return (
              <RcMenuItem
                id={`${id}`}
                component="div"
                selected={state.selected}
                aria-label={`${label} at ${groupName} group, ${currIndex} of ${groupTotal}`}
                {...restProps}
              >
                <RcListItemText primary={label} secondary="ext. 000" />
              </RcMenuItem>
            );
          }}
          optionsGroupList={optionsGroupList}
          renderGroup={(
            {
              label,
              freeSolo,
              id,
              error,
              unSelectable,
              isSuggestion,
              isError,
              group,
              ...restProps
            },
            { selected, expanded, expandIconProps },
          ) => {
            const groupTotal = group!.options.length - 1 || 0;
            const groupName = group!.group;

            const { onClick } = expandIconProps || {};

            return (
              <RcMenuItem
                component="div"
                id={`${id}`}
                selected={selected}
                {...restProps}
                aria-label={`You are at ${groupName} group, total ${groupTotal} items`}
                onClick={onClick as any}
              >
                <RcListItemText
                  primary={label}
                  secondary={`(${expanded ? 'open' : 'close'})`}
                  aria-hidden="true"
                />

                <RcBox flex="1 1 auto" />
                {expandIconProps && (
                  <RcIconButton
                    color="content.brand"
                    {...(expandIconProps as any)}
                    symbol={ArrowDown2}
                  />
                )}
              </RcMenuItem>
            );
          }}
        />
      </RcBox>
    </>
  );
};

useSuggestionListExample.storyName = 'useSuggestionList';
