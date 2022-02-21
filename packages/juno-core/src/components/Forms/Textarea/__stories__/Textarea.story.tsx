import React, { ComponentProps, useState } from 'react';

import { RcTextarea } from '@ringcentral/juno';
import {
  sortInDocTable,
  switchToControlKnobs,
  Title,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

import TextFieldStory from '../../TextField/__stories__/TextField.story';

export default {
  title: '🚀 Cleanup Components/Forms/Textarea',
  component: RcTextarea,
  argTypes: {
    ...sortInDocTable<keyof TextareaProps>(['rows', 'minRows', 'maxRows']),
    ...TextFieldStory.argTypes,
  },
} as Meta;

type TextareaProps = ComponentProps<typeof RcTextarea>;

export const Textarea: Story<TextareaProps> = ({
  value: valueArg,
  ...args
}) => {
  switchToControlKnobs();

  const [value, setValue] = useState<string>(valueArg as any);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    setValue(event.target.value);
  };

  return (
    <>
      <Title>Control</Title>
      <RcTextarea {...args} value={value} onChange={handleChange} />
      <br />
      <br />
      <Title>UnControl</Title>
      <RcTextarea {...args} />
    </>
  );
};

Textarea.args = {
  id: 'Example id',
  label: 'New Message',
  placeholder: 'placeholder',
};

export const TextareaExamples: Story<TextareaProps> = () => {
  const [value, setValue] = useState<string>('Example');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <>
      <RcTextarea
        value={value}
        placeholder="what's your title?"
        onChange={handleChange}
        label="Title"
      />
      <br />
      <RcTextarea
        value={value}
        placeholder="what's your title?"
        onChange={handleChange}
        label="Title"
        fullWidth
      />
      <br />
      <RcTextarea
        value={value}
        placeholder="what's your title?"
        onChange={handleChange}
        label="Title"
        focused
      />
      <br />
      <RcTextarea
        value={value}
        placeholder="what's your title?"
        onChange={handleChange}
        label="Title"
        error
      />
      <br />
      <RcTextarea
        value={value}
        placeholder="what's your title?"
        onChange={handleChange}
        label="Title"
        disabled
      />
      <br />
      <RcTextarea
        value={value}
        placeholder="Auto size change?"
        onChange={handleChange}
        label="Auto size"
        minRows={3}
        maxRows={5}
      />
    </>
  );
};

TextareaExamples.storyName = 'Textarea Examples';
