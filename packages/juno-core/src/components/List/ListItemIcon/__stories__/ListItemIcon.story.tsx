import React, { ComponentProps } from 'react';

import { Meta, Story } from '@storybook/react';

import { Star } from '@ringcentral/juno-icon';
import {
  notControlInDocTable,
  notShowInDocTable,
  paletteChoice,
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { RcIcon } from '../../../Icon';
import { RcListItem } from '../../ListItem';
import { RcListItemText } from '../../ListItemText';
import { RcListItemIcon } from '../ListItemIcon';

export default {
  title: '🚀 Cleanup Components/Lists/ListItemIcon',
  component: RcListItemIcon,
  argTypes: {
    color: {
      options: paletteChoice,
      control: {
        type: 'select',
      },
    },
    ...sortInDocTable<keyof ListItemIconProps>([]),
    ...notControlInDocTable<keyof ListItemIconProps>([]),
    ...notShowInDocTable<keyof ListItemIconProps>([]),
  },
} as Meta;

type ListItemIconProps = ComponentProps<typeof RcListItemIcon>;

export const ListItemIcon: Story<ListItemIconProps> = ({
  children,
  ...args
}) => {
  switchToControlKnobs();
  return (
    <RcListItem singleLine>
      <RcListItemIcon {...args}>
        <RcIcon title="favorite" symbol={Star} size="small" />
      </RcListItemIcon>
      <RcListItemText primary="Favorite Item" />
    </RcListItem>
  );
};

ListItemIcon.args = {};

ListItemIcon.argTypes = {
  ...notControlInDocTable<keyof ListItemIconProps>([]),
};

ListItemIcon.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/demos/lists/#nested-list',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

ListItemIcon.storyName = 'ListItemIcon';
