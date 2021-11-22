import React, { ComponentProps } from 'react';

import { Meta, Story } from '@storybook/react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../../storybook';
import { RcListItemText } from '../../../List/ListItemText';
import { RcMenuItem } from '../../MenuItem';
import { RcMenuList } from '../MenuList';

export default {
  title: '🚀 Cleanup Components/Menu/MenuList',
  component: RcMenuList,
  argTypes: {
    ...sortInDocTable<keyof MenuListProps>([
      'variant',
      'autoFocus',
      'autoFocusItem',
      'disabledItemsFocusable',
      'disableListWrap',
      'disablePadding',
      'maxHeight',
      'dense',
    ]),
    ...notControlInDocTable<keyof MenuListProps>(['autoClose']),
    ...notShowInDocTable<keyof MenuListProps>([]),
  },
} as Meta;

type MenuListProps = ComponentProps<typeof RcMenuList>;

export const MenuList: Story<MenuListProps> = ({ children, ...args }) => {
  switchToControlKnobs();
  return (
    <RcMenuList {...args}>
      <RcMenuItem>
        <RcListItemText primary="MenuItem 1" />
      </RcMenuItem>
      <RcMenuItem>
        <RcListItemText primary="MenuItem 2" />
      </RcMenuItem>
      <RcMenuItem disabled>
        <RcListItemText primary="MenuItem 3" />
      </RcMenuItem>
      <RcMenuItem>
        <RcListItemText primary="MenuItem 4" />
      </RcMenuItem>
    </RcMenuList>
  );
};

MenuList.args = {
  variant: 'selectedMenu',
};

MenuList.argTypes = {
  ...notControlInDocTable<keyof MenuListProps>([]),
};

MenuList.parameters = {
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

MenuList.storyName = 'MenuList';
