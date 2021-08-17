import { Meta, Story } from '@storybook/react/types-6-0';
import React, {
  ComponentProps,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import AddSvg from '../../../../icon/Add';
import BoxSvg from '../../../../icon/Box';
import Close from '../../../../icon/Close';
import Lock from '../../../../icon/Lock';
import LockBorder from '../../../../icon/LockBorder';
import SearchNav from '../../../../icon/SearchNav';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../../storybook';
import { RcIconButton } from '../../../Buttons/IconButton';
import { RcIcon } from '../../../Icon';
import { RcTextField } from '../TextField';
import TextFieldStory from './TextField.story';

export default {
  title: '🚀 Cleanup Components/Forms/OutlineTextField',
  component: RcTextField,
  argTypes: {
    ...sortInDocTable<keyof OutlineTextFieldProps>(['size', 'radius']),
    ...notControlInDocTable<keyof OutlineTextFieldProps>([]),
    ...notShowInDocTable<keyof OutlineTextFieldProps>([]),
    ...TextFieldStory.argTypes,
  },
} as Meta;

type OutlineTextFieldProps = ComponentProps<typeof RcTextField>;

export const OutlineTextField: Story<OutlineTextFieldProps> = ({
  children,
  value: valueArg,
  size,
  ...args
}) => {
  switchToControlKnobs();

  const ref = useRef();
  const inputRef = useRef();

  const [value, setValue] = useState<string>(valueArg as any);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useLayoutEffect(() => {
    console.log(ref, inputRef);
  }, []);

  return (
    <>
      <RcTextField
        {...args}
        variant="outline"
        value={value}
        size={size}
        onChange={handleChange}
        ref={ref}
        inputRef={inputRef}
        fullWidth
      />
      <br />
      <RcTextField
        {...args}
        variant="outline"
        value={value}
        size={size}
        InputProps={{
          startAdornment: (
            <RcIcon color="neutral.f04" size={size} symbol={BoxSvg} />
          ),
          endAdornment: (
            <RcIconButton
              color="neutral.f04"
              variant="plain"
              size={size}
              symbol={AddSvg}
            />
          ),
        }}
        clearButtonProps={{ size }}
        onChange={handleChange}
        label="Number"
        fullWidth
      />
    </>
  );
};

OutlineTextField.storyName = 'OutlineTextField';

OutlineTextField.args = {
  helperText: 'some helper text',
  label: 'Topic',
  placeholder: 'Placeholder',
  id: 'id-OutlineTextField-1',
};

OutlineTextField.argTypes = {
  ...notControlInDocTable<keyof OutlineTextFieldProps>([]),
};

OutlineTextField.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/text-fields',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

export const OutlineTextFieldExamples: Story<OutlineTextFieldProps> = ({
  size,
  radius,
}) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <>
      <RcTextField
        variant="outline"
        value={value}
        size={size}
        radius={radius}
        placeholder="what's your age?"
        onChange={handleChange}
        fullWidth
      />
      <br />
      <RcTextField
        variant="outline"
        value={value}
        size={size}
        radius="round"
        InputProps={{
          startAdornment: <RcIcon symbol={AddSvg} size={size} />,
          endAdornment: (
            <RcIconButton variant="plain" size={size} symbol={BoxSvg} />
          ),
        }}
        placeholder="what's your title?"
        onChange={handleChange}
        label="Title"
        fullWidth
      />
      <br />
      <RcTextField
        variant="outline"
        value={value}
        type="password"
        size={size}
        radius="zero"
        InputProps={{
          endAdornment: (
            <RcIconButton size={size} variant="plain" symbol={Lock} />
          ),
        }}
        placeholder="what's your password?"
        onChange={handleChange}
        label="Password"
        fullWidth
      />
      <br />
      <RcTextField
        variant="outline"
        value={value}
        size={size}
        radius={radius}
        InputProps={{
          endAdornment: (
            <RcIconButton size={size} variant="plain" symbol={LockBorder} />
          ),
        }}
        placeholder="what's your title?"
        onChange={handleChange}
        label="Title"
        fullWidth
        focused
      />
      <br />
      <RcTextField
        variant="outline"
        value={value}
        size={size}
        radius={radius}
        placeholder="what's your title?"
        onChange={handleChange}
        label="Title"
        error
      />
      <br />
      <RcTextField
        variant="outline"
        value={value}
        placeholder="what's your title?"
        size={size}
        radius={radius}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <RcIcon size={size} color="disabled.f02" symbol={SearchNav} />
          ),
          endAdornment: (
            <>
              <span>clear</span>
              <RcIconButton
                disabled
                size={size}
                variant="plain"
                symbol={Close}
              />
            </>
          ),
        }}
        label="Title"
        fullWidth
        disabled
      />
    </>
  );
};

OutlineTextFieldExamples.storyName = 'OutlineTextField Examples';
