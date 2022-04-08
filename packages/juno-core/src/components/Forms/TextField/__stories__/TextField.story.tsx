import React, {
  ComponentProps,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import {
  RcGrid,
  RcIconButton,
  RcText,
  RcTextField,
  RcTypography,
} from '@ringcentral/juno';
import { HideBorder } from '@ringcentral/juno-icon';
import {
  notControlInDocTable,
  notShowInDocTable,
  paletteChoice,
  sortInDocTable,
  switchToControlKnobs,
  Title,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🚀 Cleanup Components/Forms/TextField',
  component: RcTextField,
  argTypes: {
    color: {
      options: paletteChoice,
      control: {
        type: 'select',
      },
    },
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
        clearButtonProps={{
          title: 'clear',
        }}
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
      name: 'Spec',
      href: 'https://app.abstract.com/projects/d893ad32-0d8d-4e65-a37a-b4a5c881c51b/branches/master/commits/5f4a29ef1221c8ef2a1e199b44a17b202b96e5df/files/8ffaf9bc-6939-4ef9-9bd1-6aa5b460e2ae/layers/8775122F-20F2-4591-B471-9F0A164963FE',
    },
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
        helperText="some helper text"
      />
      <br />
      <RcTextField
        value={value}
        gutterBottom
        placeholder="what's your title?"
        onChange={handleChange}
        label="Title"
        helperText="some helper text"
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
        helperText="some helper text"
      />
      <br />
      <RcTextField
        value={value}
        gutterBottom
        placeholder="what's your title?"
        onChange={handleChange}
        label="Title"
        focused
        helperText="some helper text"
      />
      <br />
      <RcTextField
        value={value}
        gutterBottom
        placeholder="what's your title?"
        onChange={handleChange}
        label="Title"
        error
        helperText="some helper text"
      />
      <br />
      <RcTextField
        value={value}
        placeholder="what's your title?"
        onChange={handleChange}
        label="Title"
        disabled
        gutterBottom
        fullWidth
        helperText="some helper text"
      />
      <br />
      <RcTextField
        value={value}
        placeholder="what's your title?"
        onChange={handleChange}
        label="Title"
        gutterBottom
        color="warning.f11"
        helperText="some helper text"
      />
      <br />
      <RcTextField
        value={value}
        placeholder="what's your title?"
        onChange={handleChange}
        label="Title"
        color="success.f11"
        focused
        helperText="some helper text"
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
