import React, { ComponentProps } from 'react';

import { Phone } from '@ringcentral/juno-icon';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

import { RcAvatar } from '../../../Avatar';
import { RcIconButton } from '../../../Buttons';
import { RcCard } from '../../Card';
import { RcCardHeader } from '../CardHeader';

export default {
  title: '🚀 Cleanup Components/Cards/CardHeader',
  component: RcCardHeader,
  argTypes: {
    ...sortInDocTable<keyof CardHeaderProps>([
      'action',
      'avatar',
      'component',
      'disableTypography',
      'subheader',
      'subheaderTypographyProps',
      'title',
      'titleTypographyProps',
    ]),
    ...notControlInDocTable<keyof CardHeaderProps>(['action', 'avatar']),
    ...notShowInDocTable<keyof CardHeaderProps>([]),
  },
} as Meta;

type CardHeaderProps = ComponentProps<typeof RcCardHeader>;

export const CardHeader: Story<CardHeaderProps> = ({ children, ...args }) => {
  switchToControlKnobs();
  return (
    <RcCard>
      <RcCardHeader
        {...args}
        avatar={
          <RcAvatar aria-label="recipe" size="small" color="interactive.b02">
            CK
          </RcAvatar>
        }
        action={
          <RcIconButton
            aria-label="settings"
            symbol={Phone}
            size="large"
            style={{ margin: '8px' }}
          />
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
    </RcCard>
  );
};

CardHeader.storyName = 'CardHeader';

CardHeader.args = {};

CardHeader.argTypes = {
  ...notControlInDocTable<keyof CardHeaderProps>([]),
};

CardHeader.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/api/card-header/',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
