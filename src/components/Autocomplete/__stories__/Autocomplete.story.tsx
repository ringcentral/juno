import { Meta, Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';

import { Title } from '../../../storybook/components';
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

export const Autocomplete: Story<ComponentProps<
  typeof RcAutocomplete
>> = () => {
  return (
    <>
      <Title>Should use RcDownshift to replace that</Title>
      <RcAutocomplete
        options={top100Films}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        renderInput={(params) => <RcTextField {...params} label="Combo box" />}
        renderOption={(option) => <>{option.title}</>}
      />
    </>
  );
};

Autocomplete.args = {};
Autocomplete.argTypes = {};
