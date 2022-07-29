import React, { ComponentProps } from 'react';

import { RcListItemText, RcMenuItem, RcMenuList } from '@ringcentral/juno';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

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
      name: 'Spec',
      href: 'https://share.goabstract.com/22b47ad0-05ea-4bcc-8bf0-37aafc4b38ae?mode=design&sha=9e531c6b30974c6e11ee1ca2030d489988c01e23',
    },
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
