import { boolean, text } from '@storybook/addon-knobs';
import { Meta, Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';

import { RcMenuItem } from '../MenuItem';
import Star from '../../../../icon/Star';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
} from '../../../../storybook';
import { RcAvatar } from '../../../Avatar';
import avatar from '../../../Avatar/__stories__/img/avatar.jpg';
import { RcListItemText } from '../../../List';

export default {
  title: '🖤 deprecated Components/Menus/MenuItem',
  component: RcMenuItem,
  argTypes: {
    ...sortInDocTable<keyof MenuItemProps>([
      'size',
      'type',
      'disabled',
      'selected',
      'checked',
      'autoFocus',
      'useRcTooltip',
      'title',
      'alignItems',
    ]),
    ...notShowInDocTable<keyof MenuItemProps>([
      'style',
      'innerRef',
      'automationId',
      'maxWidth',
      'isMember',
      'label',
    ]),
    ...notControlInDocTable<keyof MenuItemProps>([
      'icon',
      'avatar',
      'symbol',
      'subtext',
    ]),
  },
} as Meta;

const Avatar = <RcAvatar src={avatar} />;

type MenuItemProps = ComponentProps<typeof RcMenuItem>;

export const MenuItem: Story<MenuItemProps> = ({ ...args }) => {
  return (
    <>
      <RcMenuItem onClick={() => console.log('onClick Profile')} {...args}>
        Profile
      </RcMenuItem>
      <RcMenuItem onClick={() => console.log('onClick Profile')} {...args}>
        Profile
      </RcMenuItem>
    </>
  );
};

MenuItem.storyName = 'MenuItem';

export const TextMenuItemWithIcon = () => {
  return (
    <RcMenuItem onClick={() => console.log('onClick Profile')} symbol={Star}>
      Profile
    </RcMenuItem>
  );
};

TextMenuItemWithIcon.story = {
  name: 'Text MenuItem With Icon',
};

export const TextMenuItemWithLabel = () => {
  return <RcMenuItem label={'label1:'}>test@ringcentral.com</RcMenuItem>;
};

TextMenuItemWithLabel.story = {
  name: 'Text MenuItem With Label',
};

export const _2LinesMenuItemWithAvatar = () => {
  const primary = text('primary', 'Two-line item name');
  const secondaryText = text('secondaryText', 'Secondary text');
  return (
    <RcMenuItem onClick={() => console.log('onClick Profile')} avatar={Avatar}>
      <RcListItemText primary={primary} secondary={secondaryText} />
    </RcMenuItem>
  );
};

_2LinesMenuItemWithAvatar.story = {
  name: '2 Lines MenuItem With Avatar',
};

export const MenuItemWithSubtext = () => {
  const primary = text('primary', 'Profile');
  const subtext = text('subtext', 'Subtext');

  return (
    <RcMenuItem
      onClick={() => console.log('onClick Profile')}
      subtext={subtext}
    >
      <RcListItemText primary={primary} />
    </RcMenuItem>
  );
};

MenuItemWithSubtext.story = {
  name: 'MenuItem with subtext',
};

export const CheckedMenuItem = () => {
  const checked = boolean('checked', false);
  const primary = text('primary', 'Profile');

  return (
    <>
      <br />
      <br />
      <RcMenuItem
        onClick={() => console.log('onClick Profile')}
        value={'test'}
        type="checked"
        checked={checked}
        TooltipProps={{}}
      >
        <RcListItemText primary={primary} />
      </RcMenuItem>
    </>
  );
};

CheckedMenuItem.story = {
  name: 'Checked MenuItem',
};
