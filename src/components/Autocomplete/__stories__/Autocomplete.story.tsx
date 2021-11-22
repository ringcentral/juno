import React, { ComponentProps, useState } from 'react';

import { Meta, Story } from '@storybook/react';

import { Title } from '../../../storybook/components';
import { RcDownshift, RcDownshiftSelectedItem } from '../../Downshift';
import { RcTextField } from '../../Forms/TextField';
import { RcAutocomplete } from '../Autocomplete';
import { AutocompleteDoc } from './Autocomplete.doc';

export default {
  title: '🖤 deprecated Components/Autocomplete',
  component: AutocompleteDoc,
} as Meta;

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
];

type OptionType = {
  title: string;
  year: number;
} & RcDownshiftSelectedItem;

const options = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
] as OptionType[];

export const Autocomplete: Story<ComponentProps<typeof RcAutocomplete>> =
  () => {
    const [value, setValue] = useState<OptionType[]>();
    const [inputValue, setInputValue] = useState('');
    return (
      <>
        <Title>Should use RcDownshift to replace that</Title>
        <RcAutocomplete
          options={top100Films}
          getOptionLabel={(option) => option.title}
          style={{ width: 300 }}
          renderInput={(params) => (
            <RcTextField {...params} label="Combo box" gutterBottom />
          )}
        />
        <Title>Example for switch to RcDownshift</Title>
        <RcDownshift
          label="Combo box"
          options={options}
          value={value}
          openOnFocus
          disableCloseOnSelect={false}
          onChange={(selectedItems) => {
            setValue(selectedItems);
            console.log('onChange', selectedItems);
          }}
          inputValue={inputValue}
          onInputChange={(value) => {
            setInputValue(value || '');
          }}
          variant="autocomplete"
          getOptionLabel={(option) => option.title}
          style={{ width: 300 }}
          toggleButton
          clearBtn
          SuggestionListProps={{
            padding: true,
          }}
        />
      </>
    );
  };

Autocomplete.args = {};
Autocomplete.argTypes = {};
