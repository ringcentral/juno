import React, {
  ComponentProps,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { Meta, Story } from '@storybook/react';

import HideBorder from '../../../../icon/HideBorder';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../../storybook';
import { Title } from '../../../../storybook/components';
import { RcIconButton } from '../../../Buttons';
import { RcGrid } from '../../../Grid';
import { RcText } from '../../../Text';
import { RcTypography } from '../../../Typography';
import { RcTextField } from '../TextField';

export default {
  title: '🚀 Cleanup Components/Forms/TextField',
  component: RcTextField,
  argTypes: {
    ...sortInDocTable<keyof TextFieldProps>([
      'variant',
      'align',
      'gutterBottom',
      'disabled',
      'error',
      'fullWidth',
      'defaultValue',
      'value',
      'helperText',
      'label',
      'placeholder',
      'id',
      'focused',
      'clearBtn',
      'required',
      'autoFocus',
      'autoSelect',
    ]),
    ...notControlInDocTable<keyof TextFieldProps>([]),
    ...notShowInDocTable<keyof TextFieldProps>([
      'focusOnMount',
      'selectOnMount',
      'autoFocusDelay',
    ]),
  },
} as Meta;

type TextFieldProps = ComponentProps<typeof RcTextField>;

export const TextField: Story<TextFieldProps> = ({
  children,
  value: valueArg,
  ...args
}) => {
  switchToControlKnobs();

  const ref = useRef();
  const inputRef = useRef();

  const [value, setValue] = useState<string>((valueArg as any) || '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useLayoutEffect(() => {
    console.log(ref, inputRef);
  }, []);

  return (
    <>
      <RcTypography color="neutral.f06">
        If you want TextField with margin at bottom, set{' '}
        <RcText highlight>gutterBottom</RcText> to be{' '}
        <RcText highlight>true</RcText>
      </RcTypography>
      <Title>Control</Title>
      <RcTextField
        {...args}
        id="control"
        ref={ref}
        inputRef={inputRef}
        value={value}
        onChange={handleChange}
      />
      <br />
      <br />
      <Title>
        UnControl
        <RcText highlight variant="subheading1">
          (if you want cleanBtn, make component to be controlled)
        </RcText>
      </Title>

      <RcTextField id="search" type="search" {...args} />
    </>
  );
};

TextField.storyName = 'TextField';

TextField.args = {
  helperText: 'some helper text',
  label: 'Topic',
  placeholder: 'Placeholder',
  id: 'id-textField-1',
};

TextField.argTypes = {
  ...notControlInDocTable<keyof TextFieldProps>([]),
};

TextField.parameters = {
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

export const TextFieldExamples: Story<TextFieldProps> = () => {
  const [value, setValue] = useState<string>('Example');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const [value2, setValue2] = useState<number>();

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue2(+event.target.value);
  };

  return (
    <>
      <RcTextField
        value={value2}
        type="number"
        clearButtonProps={{ title: 'clear' }}
        gutterBottom
        placeholder="what's your age?"
        onChange={handleChange2}
        label="Number"
      />
      <br />
      <RcTextField
        value={value}
        gutterBottom
        placeholder="what's your title?"
        onChange={handleChange}
        label="Title"
      />
      <br />
      <RcTextField
        value={value}
        gutterBottom
        type="password"
        placeholder="what's your password?"
        onChange={handleChange}
        label="Password"
        InputProps={{
          endAdornment: <RcIconButton variant="plain" symbol={HideBorder} />,
        }}
      />
      <br />
      <RcTextField
        value={value}
        gutterBottom
        placeholder="what's your title?"
        onChange={handleChange}
        label="Title"
        focused
      />
      <br />
      <RcTextField
        value={value}
        gutterBottom
        placeholder="what's your title?"
        onChange={handleChange}
        label="Title"
        error
      />
      <br />
      <RcTextField
        value={value}
        placeholder="what's your title?"
        onChange={handleChange}
        label="Title"
        disabled
        fullWidth
      />
    </>
  );
};

TextFieldExamples.storyName = 'TextField Examples';

export const TextFieldWithAlign: Story<TextFieldProps> = ({
  children,
  value: valueArg,
  ...args
}) => {
  switchToControlKnobs();

  const [value, setValue] = useState<string>(valueArg as any);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <RcGrid container>
      <RcGrid item xs={6}>
        <RcTextField
          {...args}
          value={value}
          type="search"
          gutterBottom
          onChange={handleChange}
        />
        <br />
        <RcTextField
          {...args}
          value={value}
          align="center"
          type="search"
          gutterBottom
          onChange={handleChange}
        />
        <br />
        <RcTextField
          {...args}
          value={value}
          align="right"
          type="search"
          gutterBottom
          onChange={handleChange}
        />
      </RcGrid>
      <RcGrid item xs={6}>
        <RcTypography color="neutral.f06" paragraph>
          Compare with native input
        </RcTypography>
        <input type="search" value={value} onChange={handleChange} />
        <br />
        <br />
        <br />
        <br />
        <input
          type="search"
          style={{ textAlign: 'center' }}
          value={value}
          onChange={handleChange}
        />
        <br />
        <br />
        <br />
        <br />
        <input
          type="search"
          style={{ textAlign: 'right' }}
          value={value}
          onChange={handleChange}
        />
      </RcGrid>
    </RcGrid>
  );
};

TextFieldWithAlign.storyName = 'TextField with align';

TextFieldWithAlign.args = {
  helperText: 'some helper text',
  label: 'Topic',
  placeholder: 'Placeholder',
  id: 'id-TextFieldWithAlign-1',
  value: 'text align',
};
