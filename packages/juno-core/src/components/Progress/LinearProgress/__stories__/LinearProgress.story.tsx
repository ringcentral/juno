import React, { ComponentProps } from 'react';

import { RcLinearProgress } from '@ringcentral/juno';
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
  title: '🚀 Cleanup Components/Progress/LinearProgress',
  component: RcLinearProgress,
  argTypes: {
    color: {
      options: paletteChoice,
      control: {
        type: 'select',
      },
    },
    ...sortInDocTable<keyof LinearProgressProps>([
      'variant',
      'value',
      'valueBuffer',
    ]),
    ...notControlInDocTable<keyof LinearProgressProps>([]),
    ...notShowInDocTable<keyof LinearProgressProps>([]),
  },
} as Meta;

type LinearProgressProps = ComponentProps<typeof RcLinearProgress>;

export const LinearProgress: Story<LinearProgressProps> = ({ ...args }) => {
  switchToControlKnobs();
  return <RcLinearProgress {...args} />;
};

LinearProgress.storyName = 'LinearProgress';

LinearProgress.args = {};

LinearProgress.argTypes = {
  ...notControlInDocTable<keyof LinearProgressProps>([]),
};
LinearProgress.parameters = {
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

export const LinearProgressExample: Story<LinearProgressProps> = ({
  color,
}) => {
  switchToControlKnobs();
  return (
    <div>
      <Title>Default</Title>
      <RcLinearProgress color={color} />
      <br />
      <br />
      <Title>Determinate with value</Title>
      <RcLinearProgress color={color} variant="determinate" value={25} />
      <br />
      <br />
      <Title>Query progress</Title>
      <RcLinearProgress color={color} variant="query" value={25} />
      <br />
      <br />
      <Title>Buffer progress</Title>
      <RcLinearProgress
        color={color}
        variant="buffer"
        value={25}
        valueBuffer={50}
      />
    </div>
  );
};

LinearProgressExample.storyName = 'LinearProgress Examples';

LinearProgressExample.args = {
  color: 'danger.f02',
};
