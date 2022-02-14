import React, { ComponentProps } from 'react';

import isString from 'lodash/isString';

import { Meta, Story } from '@storybook/react';

import {
  notControlInDocTable,
  notShowInDocTable,
  paletteChoice,
  sortInDocTable,
  switchToControlKnobs,
  Title,
} from '@ringcentral/juno-storybook';

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
      options: paletteChoice,
      control: {
        type: 'select',
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
      name: 'Spec',
      href: 'https://app.abstract.com/projects/d893ad32-0d8d-4e65-a37a-b4a5c881c51b/branches/master/commits/9e531c6b30974c6e11ee1ca2030d489988c01e23/files/8ffaf9bc-6939-4ef9-9bd1-6aa5b460e2ae/layers/ACE7FA47-C251-4CED-803E-EEF8D56E3FF3',
    },
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
