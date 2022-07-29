import React, { ComponentProps, Fragment, FunctionComponent } from 'react';

import isString from 'lodash/isString';

import { RcAvatar, RcChip, RcGrid, RcText } from '@ringcentral/juno';
import {
  notControlInDocTable,
  notShowInDocTable,
  paletteChoice,
  sortInDocTable,
  Title,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

import avatar from '../../Avatar/__stories__/img/avatar.jpg';
import { RcTypography } from '../../Typography';

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

const handleDelete = (e: Event) => {
  e.stopPropagation();
  e.preventDefault();
};

export const Chip: Story<ChipProps> = ({ children, ...args }) => {
  return (
    <>
      <RcChip label="default Chip" onClick={() => {}} {...args} />
      <RcChip variant="outlined" label="outlined Chip" {...args} />
    </>
  );
};

Chip.args = {};

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

const ChipExampleComponent: FunctionComponent<ChipProps> = (args) => {
  const { variant } = args;
  return (
    <React.Fragment key={variant}>
      <Title variant="display1">{variant}</Title>
      <RcGrid container>
        <RcGrid item xs>
          <Title>Basic Chip</Title>
          <RcChip {...args} label="Basic Chip" />
          <br />
          <br />
          <Title>Delete Icon</Title>
          <RcChip
            {...args}
            onDelete={handleDelete}
            onClick={() => {
              console.log('delete');
            }}
            deleteTooltip="Remove"
          />
          <br />
          <br />
          <Title>Disabled</Title>
          <RcChip
            {...args}
            disabled
            onDelete={handleDelete}
            deleteTooltip="Remove"
            deleteIconProps={{
              TooltipProps: {
                tooltipForceHide: true,
              },
            }}
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
          <br />
          <br />
          <Title paragraph={false}>Custom color</Title>
          {variant === 'default' && (
            <RcTypography gutterBottom color="neutral.f04" variant="caption1">
              (default only show color when keyboard focus)
            </RcTypography>
          )}
          <RcChip {...args} label="Basic Chip" color="warning.f01" />
          <br />
          <br />
          {variant === 'outlined' && (
            <Fragment>
              <Title>Custom color</Title>
              <RcChip
                {...args}
                label="Custom background color"
                color="interactive.f01"
                backgroundColor="interactive.b01"
              />
              <br />
              <br />
              <Title variant="caption1" color="neutral.f04">
                when only set color, that will use color to calculate default
                background color
                <br />
                lighten: lighten 0.92 main color
                <br />
                darken: darken 0.72 main color
              </Title>
              <RcChip {...args} label="Only color" color="interactive.f01" />
            </Fragment>
          )}
        </RcGrid>
        <RcGrid item xs>
          <Title>Truncate Content</Title>
          <RcChip
            {...args}
            title={isString(args.label) ? args.label : undefined}
            style={{
              maxWidth: 120,
            }}
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
            style={{
              maxWidth: '30%',
            }}
            avatar={<RcAvatar src={avatar} />}
            onDelete={handleDelete}
            deleteTooltip="Remove"
          />
        </RcGrid>
      </RcGrid>
      <br />
      <br />
    </React.Fragment>
  );
};

export const ChipDefaultExamples: Story<ChipProps> = ({
  children,
  ...args
}) => {
  return <ChipExampleComponent {...args} variant="default" />;
};

ChipDefaultExamples.args = {
  label: 'Basic default Chip',
};

ChipDefaultExamples.argTypes = {
  ...notControlInDocTable<keyof ChipProps>([]),
};

ChipDefaultExamples.storyName = 'Chip Examples(Default)';

export const ChipOutlinedExamples: Story<ChipProps> = ({
  children,
  ...args
}) => {
  return <ChipExampleComponent {...args} variant="outlined" />;
};

ChipOutlinedExamples.args = {
  label: 'Basic outlined Chip',
};

ChipOutlinedExamples.argTypes = {
  ...notControlInDocTable<keyof ChipProps>([]),
};

ChipOutlinedExamples.storyName = 'Chip Examples(outlined)';
