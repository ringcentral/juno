import React, { ComponentProps } from 'react';

import { RcCard, RcCardContent, RcTypography } from '@ringcentral/juno';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

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
      name: 'Spec',
      href: 'https://share.goabstract.com/eac80403-273a-4188-a1df-c3bd3c2ac042?mode=build&selected=2394831046-6A21724C-30D9-4CF1-9088-4C5B0044326D',
    },
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
