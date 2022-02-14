import React, { ComponentProps } from 'react';

import {
  notControlInDocTable,
  notShowInDocTable,
  paletteChoice,
  sortInDocTable,
  switchToControlKnobs,
  Title,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

import { RcCircularProgress } from '../CircularProgress';

export default {
  title: '🚀 Cleanup Components/Progress/CircularProgress',
  component: RcCircularProgress,
  argTypes: {
    color: {
      options: paletteChoice,
      control: {
        type: 'select',
      },
    },
    ...sortInDocTable<keyof CircularProgressProps>([
      'size',
      'variant',
      'value',
      'thickness',
    ]),
    ...notControlInDocTable<keyof CircularProgressProps>([]),
    ...notShowInDocTable<keyof CircularProgressProps>([]),
  },
} as Meta;

type CircularProgressProps = ComponentProps<typeof RcCircularProgress>;

export const CircularProgress: Story<CircularProgressProps> = ({ ...args }) => {
  switchToControlKnobs();
  return <RcCircularProgress {...args} />;
};

CircularProgress.storyName = 'CircularProgress';
CircularProgress.args = {};
CircularProgress.argTypes = {
  ...notControlInDocTable<keyof CircularProgressProps>([]),
};
CircularProgress.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/progress/',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

export const CircularProgressExample: Story<CircularProgressProps> = ({
  color,
  thickness,
}) => {
  switchToControlKnobs();
  return (
    <div>
      <Title>Default</Title>
      <RcCircularProgress color={color} thickness={thickness} />
      <br />
      <br />
      <Title>Determinate with value</Title>
      <RcCircularProgress
        color={color}
        thickness={thickness}
        variant="determinate"
        value={25}
      />
      <br />
      <br />
      <RcCircularProgress
        color={color}
        thickness={thickness}
        variant="determinate"
        value={50}
      />
      <br />
      <br />
      <Title>Size</Title>
      <RcCircularProgress color={color} thickness={thickness} size={36} />
      <br />
      <br />
      <Title>Thickness</Title>
      <RcCircularProgress color={color} thickness={10} size={50} />
    </div>
  );
};

CircularProgressExample.storyName = 'CircularProgress Examples';

CircularProgressExample.args = {
  color: 'danger.f02',
};

CircularProgressExample.argTypes = {
  ...notShowInDocTable<keyof CircularProgressProps>([
    'variant',
    'value',
    'size',
    'disableShrink',
    'classes',
    'innerRef',
  ]),
};
