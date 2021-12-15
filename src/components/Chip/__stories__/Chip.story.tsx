import React, { ComponentProps } from 'react';

import isString from 'lodash/isString';

import { Meta, Story } from '@storybook/react';

import {
  notControlInDocTable,
  notShowInDocTable,
  paletteChoice,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../storybook';
import { Title } from '../../../storybook/components/Title';
import { RcAvatar } from '../../Avatar';
import avatar from '../../Avatar/__stories__/img/avatar.jpg';
import { RcGrid } from '../../Grid';
import { RcText } from '../../Text';
import { RcChip } from '../Chip';

export default {
  title: '🚀 Cleanup Components/Chip',
  component: RcChip,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: paletteChoice,
      },
    },
    ...sortInDocTable<keyof ChipProps>([
      'label',
      'clickable',
      'disabled',
      'error',
      'avatar',
      'onDelete',
      'deleteIcon',
      'deleteIconProps',
    ]),
    ...notControlInDocTable<keyof ChipProps>([]),
    ...notShowInDocTable<keyof ChipProps>([
      'Avatar',
      'isError',
      'deleteTooltip',
      'deleteAutomationId',
    ]),
  },
} as Meta;

type ChipProps = ComponentProps<typeof RcChip>;

const handleDelete = () => {};

export const Chip: Story<ChipProps> = ({ children, ...args }) => {
  switchToControlKnobs();
  return <RcChip {...args} />;
};

Chip.args = {
  label: 'Basic Chip',
};

Chip.argTypes = {
  ...notControlInDocTable<keyof ChipProps>([]),
};

Chip.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/chips/#chip',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

export const ChipExamples: Story<ChipProps> = ({ children, ...args }) => {
  switchToControlKnobs();
  return (
    <RcGrid container>
      <RcGrid item xs>
        <Title>Basic Chip</Title>
        <RcChip {...args} label="Basic Chip" />
        <br />
        <br />
        <Title>Delete Icon</Title>
        <RcChip {...args} onDelete={handleDelete} deleteTooltip="Remove" />
        <br />
        <br />
        <Title>Disabled</Title>
        <RcChip
          {...args}
          disabled
          onDelete={handleDelete}
          deleteTooltip="Remove"
          deleteIconProps={{ TooltipProps: { tooltipForceHide: true } }}
        />
        <br />
        <br />
        <Title>Error</Title>
        <RcChip
          {...args}
          error
          onDelete={handleDelete}
          deleteTooltip="Remove"
        />
        <br />
        <br />
        <Title>Focused</Title>
        <RcChip {...args} focused />
        <RcChip {...args} focused color="success.f11" />
      </RcGrid>

      <RcGrid item xs>
        <Title>Avatar</Title>
        <RcChip {...args} avatar={<RcAvatar src={avatar} />} />
        <br />
        <br />
        <Title>Avatar & Delete Icon</Title>
        <RcChip
          {...args}
          avatar={<RcAvatar src={avatar} />}
          onDelete={handleDelete}
          deleteTooltip="Remove"
        />
      </RcGrid>
      <RcGrid item xs>
        <Title>Truncate Content</Title>
        <RcChip
          {...args}
          title={isString(args.label) ? args.label : undefined}
          style={{ maxWidth: 120 }}
          avatar={<RcAvatar src={avatar} />}
          onDelete={handleDelete}
          deleteTooltip="Remove"
        />
        <br />
        <br />
        <Title>
          Truncate Content when overflow, resize to view result(with RcText)
        </Title>
        <RcChip
          {...args}
          label={<RcText titleWhenOverflow>{args.label}</RcText>}
          style={{ maxWidth: '30%' }}
          avatar={<RcAvatar src={avatar} />}
          onDelete={handleDelete}
          deleteTooltip="Remove"
        />
      </RcGrid>
    </RcGrid>
  );
};

ChipExamples.args = {
  label: 'Basic Chip',
};

ChipExamples.argTypes = {
  ...notControlInDocTable<keyof ChipProps>([]),
};

ChipExamples.storyName = 'Chip Examples';
