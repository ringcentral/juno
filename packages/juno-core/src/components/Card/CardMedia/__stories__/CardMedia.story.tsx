import React, { ComponentProps } from 'react';

import { Meta, Story } from '@storybook/react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { RcTypography } from '../../../Typography';
import { RcCard } from '../../Card';
import { RcCardContent } from '../../CardContent';
import { RcCardMedia } from '../CardMedia';

export default {
  title: '🚀 Cleanup Components/Cards/CardMedia',
  component: RcCardMedia,
  argTypes: {
    src: {
      control: 'text',
    },
    ...sortInDocTable<keyof RcCardMediaProps>(['image']),
    ...notControlInDocTable<keyof RcCardMediaProps>([]),
    ...notShowInDocTable<keyof RcCardMediaProps>([]),
  },
} as Meta;

type RcCardMediaProps = ComponentProps<typeof RcCardMedia>;

export const CardMediaProps: Story<RcCardMediaProps> = ({
  children,
  ...args
}) => {
  switchToControlKnobs();
  return (
    <RcCard style={{ width: 300 }}>
      <RcCardMedia {...args} />
      <RcCardContent>
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

CardMediaProps.storyName = 'CardMedia';

CardMediaProps.args = {
  image:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Lizard_namely_Oriental_Garden_Lizard.jpg/1200px-Lizard_namely_Oriental_Garden_Lizard.jpg',
  component: 'div',
  style: {
    height: 140,
  },
};

CardMediaProps.argTypes = {
  ...notControlInDocTable<keyof RcCardMediaProps>([]),
};

CardMediaProps.parameters = {
  tags: [
    {
      name: 'Spec',
      href: 'https://share.goabstract.com/eac80403-273a-4188-a1df-c3bd3c2ac042?mode=build&selected=2394831046-6A21724C-30D9-4CF1-9088-4C5B0044326D',
    },
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/cards/',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
