import React, { ComponentProps } from 'react';

import { RcListItemText, RcMenuItem } from '@ringcentral/juno';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🚀 Cleanup Components/Menu/MenuItem',
  component: RcMenuItem,
  argTypes: {
    ...sortInDocTable<keyof MenuItemProps>([
      'component',
      'focusVariant',
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
  return (
    <>
      <RcMenuItem {...args} tabIndex={0}>
        <RcListItemText primary="MenuItem content" />
      </RcMenuItem>
      <br />
      <RcMenuItem {...args} tabIndex={0}>
        <RcListItemText
          primary="MenuItem content"
          secondary="Secondary content"
        />
      </RcMenuItem>
      <br />
      <RcMenuItem {...args} tabIndex={0} selected>
        <RcListItemText
          primary="Selected Primary content"
          secondary="Secondary content"
        />
      </RcMenuItem>
      <br />
      <RcMenuItem {...args} tabIndex={0} highlighted>
        <RcListItemText
          primary="Highlighted Primary content"
          secondary="Secondary content"
        />
      </RcMenuItem>
      <br />
      <RcMenuItem {...args} tabIndex={0} focused>
        <RcListItemText
          primary="Focused Primary content"
          secondary="Secondary content"
        />
      </RcMenuItem>
      <br />
      <RcMenuItem {...args} tabIndex={0} highlighted color="success.b05">
        <RcListItemText
          primary="Primary content"
          secondary="Secondary content"
        />
      </RcMenuItem>
      <br />
      <RcMenuItem {...args} tabIndex={0} highlighted color="highlight.b01">
        <RcListItemText
          primary="Primary content"
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

MenuItem.storyName = 'MenuItem';
