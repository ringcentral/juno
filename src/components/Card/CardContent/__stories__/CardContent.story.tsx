import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../../storybook';
import { RcTypography } from '../../../Typography';

import { RcCardContent } from '../CardContent';
import { RcCard } from '../../Card';

export default {
  title: '🚀 Cleanup Components/Cards/CardContent',
  component: RcCardContent,
  argTypes: {
    ...sortInDocTable<keyof RcCardContentProps>([]),
    ...notControlInDocTable<keyof RcCardContentProps>([]),
    ...notShowInDocTable<keyof RcCardContentProps>([]),
  },
} as Meta;

type RcCardContentProps = ComponentProps<typeof RcCardContent>;

export const CardContent: Story<RcCardContentProps> = ({
  children,
  ...args
}) => {
  switchToControlKnobs();

  return (
    <RcCard style={{ width: 300 }}>
      <RcCardContent {...args}>
        <RcTypography gutterBottom variant="display1">
          Lizard
        </RcTypography>
        <RcTypography gutterBottom variant="body1">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </RcTypography>
      </RcCardContent>
    </RcCard>
  );
};

CardContent.storyName = 'CardContent';

CardContent.args = {};

CardContent.argTypes = {
  ...notControlInDocTable<keyof RcCardContentProps>([]),
};

CardContent.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/api/card-content/',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
