import { Meta, Story } from '@storybook/react';
import range from 'lodash/range';
import React, { ComponentProps } from 'react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../storybook';
import { RcListItemText } from '../../List/ListItemText';
import { RcMenuItem } from '../../Menu/MenuItem';
import { RcVirtualizedMenuList } from '../VirtualizedMenuList';

export default {
  title: '🚀 Cleanup Components/VirtualizedMenu/VirtualizedMenuList',
  component: RcVirtualizedMenuList,
  argTypes: {
    ...sortInDocTable<keyof MenuProps>([]),
    ...notControlInDocTable<keyof MenuProps>([]),
    ...notShowInDocTable<keyof MenuProps>([]),
  },
} as Meta;

type MenuProps = ComponentProps<typeof RcVirtualizedMenuList>;

const menus = range(0, 1000);

export const VirtualizedMenuList: Story<Partial<MenuProps>> = ({
  children,
  ...args
}) => {
  switchToControlKnobs();

  return (
    <RcVirtualizedMenuList {...args}>
      {menus.map((x) => (
        <RcMenuItem key={x}>
          <RcListItemText primary={`MenuItem ${x}`} />
        </RcMenuItem>
      ))}
    </RcVirtualizedMenuList>
  );
};

VirtualizedMenuList.args = {
  maxHeight: 180,
  VirtuosoProps: {
    // view more in https://virtuoso.dev/virtuoso-api-reference/
    overscan: 200,
  },
};

VirtualizedMenuList.argTypes = {
  ...notControlInDocTable<keyof MenuProps>([]),
};

VirtualizedMenuList.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/api/menu-list/',
      value: 'MenuList',
    },
    {
      name: 'Source',
      value: 'virtuoso',
      href: 'https://virtuoso.dev/',
      color: 'avatar.lake',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

VirtualizedMenuList.storyName = 'VirtualizedMenuList';
