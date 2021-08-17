import { Meta, Story } from '@storybook/react/types-6-0';
import React, { ComponentProps, useState } from 'react';

import { palette2, shadows, styled } from '../../../foundation';
import {
  notControlInDocTable,
  notShowInDocTable,
  paletteChoice,
  sleep,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../storybook';
import { Title } from '../../../storybook/components';
import { RcButton } from '../../Buttons';
import { RcCircularProgress } from '../../Progress';
import { RcInlineEditable } from '../InlineEditable';

export default {
  title: '🚀 Cleanup Components/InlineEditable',
  component: RcInlineEditable,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: paletteChoice,
      },
    },
    ...sortInDocTable<keyof InlineEditableProps>([
      'value',
      'multiline',
      'variant',
      'disabled',
      'saving',
      'placeholder',
      'fullWidth',
      'onChange',
    ]),
    ...notControlInDocTable<keyof InlineEditableProps>([]),
    ...notShowInDocTable<keyof InlineEditableProps>([
      'shouldRemoveNode',
      'automationId',
      'onSave',
      'tooltipTitle',
    ]),
  },
} as Meta;

type InlineEditableProps = ComponentProps<typeof RcInlineEditable>;

export const InlineEditable: Story<InlineEditableProps> = ({
  value: valueProp,
  disabled: disabledProp,
  ...args
}) => {
  switchToControlKnobs();

  const [value, setValue] = useState(valueProp || '');

  const [disabled, setDisabled] = useState(disabledProp);

  return (
    <>
      <RcInlineEditable
        {...args}
        value={value}
        disabled={disabled}
        onChange={(newValue, reason) => {
          console.log(newValue, reason);
          setValue(newValue);
        }}
        TooltipProps={{ title: 'click to edit' }}
      />
      <br />
      <br />
      <RcButton onClick={() => setDisabled(!disabled)}>
        Switch to {disabled ? 'enabled' : 'disabled'}
      </RcButton>
    </>
  );
};

InlineEditable.storyName = 'InlineEditable';

InlineEditable.args = {
  placeholder: 'Enter value here',
};

InlineEditable.argTypes = {
  ...notControlInDocTable<keyof InlineEditableProps>([]),
};

InlineEditable.parameters = {
  tags: [
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

export const InlineEditableMultiline: Story<InlineEditableProps> = () => {
  switchToControlKnobs();

  const [value, setValue] = useState(`All-in-one business communications
Message,
video,
phone in one,
so your team can do their best work from anywhere.`);

  return (
    <RcInlineEditable
      value={value}
      onChange={(newValue, reason) => {
        console.log(newValue, reason);
        setValue(newValue);
      }}
      placeholder="Enter value here"
      multiline
    />
  );
};

InlineEditableMultiline.storyName = 'InlineEditable multiline';

export const InlineEditableCustomVariant: Story<InlineEditableProps> = () => {
  switchToControlKnobs();

  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');

  return (
    <>
      <Title>Single line</Title>
      <RcInlineEditable
        value={value}
        onChange={(newValue, reason) => {
          console.log(newValue, reason);
          setValue(newValue);
        }}
        placeholder="Enter value here"
        fullWidth
        variant="title1"
      />
      <br />
      <br />
      <br />
      <br />

      <Title>Multi line</Title>
      <RcInlineEditable
        value={value2}
        onChange={(newValue, reason) => {
          console.log(newValue, reason);
          setValue2(newValue);
        }}
        placeholder="Enter value here"
        multiline
        variant="title2"
        color="label.blue01"
      />
    </>
  );
};

InlineEditableCustomVariant.storyName = 'InlineEditable custom';

export const InlineEditableOnlyEnter: Story<InlineEditableProps> = () => {
  switchToControlKnobs();

  const [value, setValue] = useState('');

  return (
    <RcInlineEditable
      value={value}
      onChange={(newValue, reason) => {
        console.log(newValue, reason);
        if (reason === 'confirm') {
          setValue(newValue);
        }
      }}
      placeholder="Enter value here"
      multiline
    />
  );
};

InlineEditableOnlyEnter.storyName = 'InlineEditable only enter';

const savingClass = 'custom-saving';

const Wrapper = styled.div`
  .${savingClass} {
    box-shadow: ${shadows('16')};
    background-color: ${palette2('neutral', 'b03')};
  }
`;

export const InlineEditableLoading: Story<InlineEditableProps> = () => {
  switchToControlKnobs();

  const [value, setValue] = useState('show loading style when onChange');

  const [isSaving, setSaving] = useState(false);

  return (
    <Wrapper>
      <RcInlineEditable
        value={value}
        placeholder="Enter value here"
        TooltipProps={{ title: 'click to edit' }}
        saving={isSaving}
        classes={{ saving: savingClass }}
        onChange={async (newValue) => {
          setSaving(true);
          await sleep(2000);

          setValue(newValue);
          setSaving(false);
        }}
      />
      {isSaving && <RcCircularProgress style={{ marginLeft: '1em' }} />}
    </Wrapper>
  );
};

InlineEditableLoading.storyName = 'InlineEditable with loading';

export const InlineEditableWithTooltip: Story<InlineEditableProps> = () => {
  switchToControlKnobs();

  const [value, setValue] = useState('So value as tooltip when disabled');

  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <RcInlineEditable
        value={value}
        disabled={disabled}
        onChange={(newValue, reason) => {
          console.log(newValue, reason);
          setValue(newValue);
        }}
        placeholder="Enter value here"
        TooltipProps={{ title: 'click to edit' }}
      />
      <br />
      <br />
      <RcInlineEditable
        value={value}
        disabled={disabled}
        onChange={(newValue, reason) => {
          console.log(newValue, reason);
          setValue(newValue);
        }}
        title="custom title"
        placeholder="Enter value here"
        TooltipProps={{ title: 'click to edit' }}
      />
      <br />
      <br />
      <RcButton onClick={() => setDisabled(!disabled)}>
        Switch to {disabled ? 'enabled' : 'disabled'}
      </RcButton>
    </>
  );
};

InlineEditableWithTooltip.storyName = 'InlineEditable with tooltip';
