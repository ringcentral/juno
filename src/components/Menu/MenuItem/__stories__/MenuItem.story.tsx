import React, { ComponentProps } from 'react';

import { Meta, Story } from '@storybook/react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../../storybook';
import { RcListItemText } from '../../../List';
import { RcMenuItem } from '../MenuItem';

export default {
  title: '🚀 Cleanup Components/Menu/MenuItem',
  component: RcMenuItem,
  argTypes: {
    ...sortInDocTable<keyof MenuItemProps>([
      'component',
      'size',
      'selected',
      'type',
      'checked',
      'disabled',
      'divider',
      'dense',
      'alignItems',
      'disableGutters',
      'tabIndex',
      'autoFocus',
      'icon',
      'symbol',
      'avatar',
      'secondaryAction',
    ]),
    ...notControlInDocTable<keyof MenuItemProps>([]),
    ...notShowInDocTable<keyof MenuItemProps>(['action', 'isSubMenuItem']),
  },
} as Meta;

type MenuItemProps = ComponentProps<typeof RcMenuItem>;

export const MenuItem: Story<MenuItemProps> = ({ children, ...args }) => {
  switchToControlKnobs();
  return (
    <>
      <RcMenuItem {...args}>
        <RcListItemText primary="MenuItem content" />
      </RcMenuItem>
      <br />
      <RcMenuItem {...args}>
        <RcListItemText
          primary="MenuItem content"
          secondary="Secondary content"
        />
      </RcMenuItem>
    </>
  );
};

MenuItem.args = {};

MenuItem.argTypes = {
  ...notControlInDocTable<keyof MenuItemProps>([]),
};

MenuItem.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/menus/',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

MenuItem.storyName = 'MenuItem';
