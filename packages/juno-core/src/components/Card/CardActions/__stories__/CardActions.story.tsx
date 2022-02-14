import React, { ComponentProps } from 'react';

import { Meta, Story } from '@storybook/react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { RcButton } from '../../../Buttons';
import { RcTypography } from '../../../Typography';
import { RcCard } from '../../Card';
import { RcCardContent } from '../../CardContent';
import { RcCardActions } from '../CardActions';

export default {
  title: '🚀 Cleanup Components/Cards/CardActions',
  component: RcCardActions,
  argTypes: {
    ...sortInDocTable<keyof RcCardActionsProps>([]),
    ...notControlInDocTable<keyof RcCardActionsProps>([]),
    ...notShowInDocTable<keyof RcCardActionsProps>([]),
  },
} as Meta;

type RcCardActionsProps = ComponentProps<typeof RcCardActions>;

export const CardActions: Story<RcCardActionsProps> = ({
  children,
  ...args
}) => {
  switchToControlKnobs();

  return (
    <RcCard style={{ width: 300 }}>
      <RcCardContent>
        <RcTypography gutterBottom variant="display1">
          Lizard
        </RcTypography>
        <RcTypography gutterBottom variant="body1">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </RcTypography>
      </RcCardContent>
      <RcCardActions {...args}>
        <RcButton>Watch Lizards</RcButton>
        <RcButton>Watch Lizards</RcButton>
      </RcCardActions>
    </RcCard>
  );
};

CardActions.storyName = 'CardActions';

CardActions.args = {
  disableSpacing: false,
};

CardActions.argTypes = {
  ...notControlInDocTable<keyof RcCardActionsProps>([]),
};

CardActions.parameters = {
  tags: [
    {
      name: 'Spec',
      href: 'https://share.goabstract.com/eac80403-273a-4188-a1df-c3bd3c2ac042?mode=build&selected=2394831046-6A21724C-30D9-4CF1-9088-4C5B0044326D',
    },
    {
      name: 'Mui',
      href: 'https://material-ui.com/api/card-actions/',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
