import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../../storybook';

import { RcTypography } from '../../../Typography';

import { RcCard } from '../../Card/Card';
import { RcCardContent } from '../../CardContent';
import { RcCardActionArea } from '../CardActionArea';

export default {
  title: '🚀 Cleanup Components/Cards/CardActionArea',
  component: RcCardActionArea,
  argTypes: {
    ...sortInDocTable<keyof CardActionAreaProps>([]),
    ...notControlInDocTable<keyof CardActionAreaProps>([]),
    ...notShowInDocTable<keyof CardActionAreaProps>([]),
  },
} as Meta;

type CardActionAreaProps = ComponentProps<typeof RcCardActionArea>;

export const CardActionArea: Story<CardActionAreaProps> = ({
  children,
  ...args
}) => {
  switchToControlKnobs();

  const handleCardActionAreaClick = (e: React.MouseEvent<HTMLButtonElement>) =>
    console.log('RcCardActionArea onClick', e);

  return (
    <RcCard style={{ width: 300 }} variant="outlined">
      <RcCardActionArea {...args} onClick={handleCardActionAreaClick}>
        <RcCardContent>
          <RcTypography gutterBottom variant="display1">
            Lizard
          </RcTypography>
          <RcTypography gutterBottom variant="body1">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </RcTypography>
        </RcCardContent>
      </RcCardActionArea>
    </RcCard>
  );
};

CardActionArea.storyName = 'CardActionArea';

CardActionArea.args = {};

CardActionArea.argTypes = {
  ...notControlInDocTable<keyof CardActionAreaProps>([]),
};

CardActionArea.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/api/card-action-area/',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
