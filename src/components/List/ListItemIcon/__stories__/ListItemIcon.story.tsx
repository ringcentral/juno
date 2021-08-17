import { Meta, Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';

import {
  notControlInDocTable,
  notShowInDocTable,
  paletteChoice,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../../storybook';
import { RcListItem } from '../../ListItem';
import { RcListItemIcon } from '../ListItemIcon';
import { RcListItemText } from '../../ListItemText';
import { RcIcon } from '../../../Icon';

import star from '../../../../icon/Star';

export default {
  title: '🚀 Cleanup Components/Lists/ListItemIcon',
  component: RcListItemIcon,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: paletteChoice,
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
        <RcIcon title="favorite" symbol={star} size="small" />
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
