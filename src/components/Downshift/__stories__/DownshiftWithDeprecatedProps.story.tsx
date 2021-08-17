import { boolean, text } from '@storybook/addon-knobs';
import { Story } from '@storybook/react/types-6-0';
import differenceBy from 'lodash/differenceBy';
import React, { ComponentProps, forwardRef, useState } from 'react';

import { RcChip } from '../../Chip';
import { RcMenuItem } from '../../Menu';
import { RcTypography } from '../../Typography';
import { RcDownshift } from '../Downshift';
import { RcDownshiftSelectedItem } from '../utils';
import { options } from './options';

export default {
  title: '🖤 Deprecated Components/Downshift (New with deprecated props)',
  component: RcDownshift,
};

const getKnobs = () => {
  const multiple = boolean('multiple', true);
  const autoSwitchEmail = boolean('autoSwitchEmail', false);
  const enableFreeChips = boolean('enableFreeChips', true);
  const allowPlainHelperText = boolean('allowPlainHelperText', false);
  const enableAutoTransform = boolean('enableAutoTransform', false);
  const initialIsOpen = boolean('initialIsOpen', false);
  const defaultIsOpen = boolean('defaultIsOpen', false);

  const disabled = boolean('disabled', false);

  return {
    multiple,
    disabled,
    autoSwitchEmail,
    enableFreeChips,
    allowPlainHelperText,
    enableAutoTransform,
    initialIsOpen,
    defaultIsOpen,
  };
};

const suggestions = options;

const getTextFieldKnobs = () => {
  const required = boolean('required', false);
  const placeholder = text('placeholder', 'Placeholder');
  const helperText = text('helperText', 'helperText');
  const autoFocus = boolean('autoFocus', false);
  const inputAriaLabel = text('input aria-label', 'input aria label content');
  const label = text('label', 'Downshift');

  return {
    label,
    placeholder,
    helperText,
    autoFocus,
    required,
    inputAriaLabel,
  };
};

const getItemById = (suggestions: RcDownshiftSelectedItem[], id: number) =>
  suggestions.find(
    (suggestion: RcDownshiftSelectedItem) => suggestion.id === id,
  );

const SearchItem = forwardRef((props: any, ref) => {
  const { itemId, isHighlighted, label, ...rest } = props;
  const item = getItemById(suggestions, itemId);

  return item ? (
    <RcMenuItem ref={ref} selected={isHighlighted} {...rest} component="div">
      {label}
    </RcMenuItem>
  ) : null;
});

const Chip = forwardRef((props: any, ref) => {
  const item = getItemById(suggestions, props.id);

  return item ? (
    <RcChip
      ref={ref}
      {...props}
      deleteTooltip="Delete"
      data-is-suggestion={item.isSuggestion}
    />
  ) : (
    <RcChip
      {...props}
      ref={ref}
      deleteTooltip="Delete"
      data-is-suggestion={props.isSuggestion}
    />
  );
});

export const Downshift: Story<ComponentProps<typeof RcDownshift>> = () => {
  const knobsProps = getKnobs();
  const { inputAriaLabel, label, ...textFieldRest } = getTextFieldKnobs();

  const [inputValue, setInputValue] = useState('');

  const [suggestionItems, setSuggestionItems] = useState<
    RcDownshiftSelectedItem[]
  >(
    // Provides initial data when `initialIsOpen` is `true`,
    // otherwise we can not see the effect of `initialIsOpen`
    knobsProps.initialIsOpen ? suggestions : [],
  );
  const [selectedItems, setSelectedItems] = useState<RcDownshiftSelectedItem[]>(
    [
      { id: 'phone_1', label: 'Afghanistan' },
      { id: 'phone_2', label: 'Aland Islands' },
    ],
  );

  const handleInputChange = (value: string) => {
    console.log('InputChange', value);
    const inputValue = value;
    setInputValue(inputValue);

    const inputLength = inputValue.length;
    let filterSuggestions: any = [];

    if (inputLength === 0) {
      return setSuggestionItems([]);
    }
    filterSuggestions = differenceBy(suggestions, selectedItems, 'id');
    filterSuggestions = filterSuggestions.filter((suggestion: any) => {
      const keep =
        suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

      return keep;
    });
    console.log(filterSuggestions);
    setSuggestionItems(filterSuggestions);
  };
  const handleSelectChange = (selectedItems: RcDownshiftSelectedItem[]) => {
    console.log(selectedItems);
    setSelectedItems(selectedItems);
    setInputValue('');
  };

  return (
    <div>
      <RcTypography color="highlight.f02">
        Type 'a' in the text field, that will be dropdown menu show to select
      </RcTypography>
      <RcTypography color="danger.f02">
        Don't click suggestion items before composition end if you use microsoft
        pinyin
      </RcTypography>
      <br />
      <RcDownshift
        {...knobsProps}
        suggestionItems={suggestionItems}
        MenuItem={SearchItem}
        label={label}
        gutterBottom
        InputItem={Chip}
        onInputChange={handleInputChange}
        onSelectChange={handleSelectChange}
        minRowHeight={50}
        inputValue={inputValue}
        screenReader={{
          entry: '1 entry',
          entries: `${selectedItems.length} entries`,
        }}
        selectedItems={selectedItems}
        TextFieldProps={{
          inputProps: {
            'aria-label': inputAriaLabel,
          },
          ...textFieldRest,
        }}
      />
    </div>
  );
};

Downshift.args = {};

Downshift.storyName = 'Downshift (New with deprecated props)';
