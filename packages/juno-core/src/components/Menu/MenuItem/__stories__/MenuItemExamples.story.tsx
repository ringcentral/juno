import React, { ComponentProps } from 'react';

import {
  RcAvatar,
  RcCheckbox,
  RcDivider,
  RcFormControlLabel,
  RcIcon,
  RcIconButton,
  RcListItemAvatar,
  RcListItemIcon,
  RcListItemSecondaryAction,
  RcListItemText,
  RcListSubheader,
  RcMenuItem,
  RcRadio,
  RcSwitch,
} from '@ringcentral/juno';
import { Info, Star } from '@ringcentral/juno-icon';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

import avatar from '../../../Avatar/__stories__/img/avatar.jpg';

export default {
  title: '🚀 Cleanup Components/Menu/MenuItem/MenuItem Examples',
  component: RcMenuItem,
  argTypes: {
    ...sortInDocTable<keyof MenuItemProps>([
      'component',
      'size',
      'disabled',
      'divider',
      'dense',
      'alignItems',
      'disableGutters',
      'tabIndex',
      'autoFocus',
    ]),
    ...notControlInDocTable<keyof MenuItemProps>([]),
    ...notShowInDocTable<keyof MenuItemProps>([
      'selected',
      'type',
      'checked',
      'icon',
      'symbol',
      'avatar',
      'secondaryAction',
      'isSubMenuItem',
    ]),
  },
} as Meta;

type MenuItemProps = ComponentProps<typeof RcMenuItem>;

export const MenuItemExamples: Story<MenuItemProps> = ({
  children,
  ...args
}) => {
  switchToControlKnobs();

  const CheckedTypeCase = (
    <>
      <RcListSubheader>Checked Type Case:</RcListSubheader>
      <RcMenuItem {...args} type="checked">
        <RcListItemText primary="Checked Type: UnCheck" />
      </RcMenuItem>
      <RcMenuItem {...args} type="checked" checked>
        <RcListItemText primary="Checked Type: Checked" />
      </RcMenuItem>
      <RcDivider component={'li'} />
    </>
  );

  const AvatarCase = (
    <>
      <RcListSubheader>Avatar Case:</RcListSubheader>
      <RcMenuItem {...args} avatar={<RcAvatar src={avatar} />}>
        <RcListItemText primary="use avatar prop" />
      </RcMenuItem>
      <RcMenuItem {...args}>
        <RcListItemAvatar>
          <RcAvatar src={avatar} />
        </RcListItemAvatar>
        <RcListItemText primary="use ListItemAvatar" />
      </RcMenuItem>
      <RcDivider component={'li'} />
    </>
  );

  const IconCase = (
    <>
      <RcListSubheader>Icon Case:</RcListSubheader>
      <RcMenuItem {...args} icon={<RcIcon symbol={Star} size="small" />}>
        <RcListItemText primary="use icon prop" />
      </RcMenuItem>
      <RcMenuItem {...args} symbol={Star}>
        <RcListItemText primary="use symbol prop" />
      </RcMenuItem>
      <RcMenuItem {...args}>
        <RcListItemIcon>
          <RcIcon symbol={Star} size="small" />
        </RcListItemIcon>
        <RcListItemText primary="use ListItemIcon" />
      </RcMenuItem>
      <RcDivider component={'li'} />
    </>
  );

  const IconControlCase = (
    <>
      <RcListSubheader>IconControl Case</RcListSubheader>
      <RcMenuItem {...args}>
        <RcListItemIcon>
          <RcCheckbox />
        </RcListItemIcon>
        <RcListItemText primary="Checkbox Case" />
      </RcMenuItem>
      <RcMenuItem {...args}>
        <RcListItemIcon>
          <RcRadio />
        </RcListItemIcon>
        <RcListItemText primary="Radio Case" />
      </RcMenuItem>
      <RcMenuItem {...args}>
        <RcListItemIcon>
          <RcSwitch />
        </RcListItemIcon>
        <RcListItemText primary="Switch Case" />
      </RcMenuItem>
      <RcDivider component={'li'} />
    </>
  );

  const SecondaryActionCase = (
    <>
      <RcListSubheader>SecondaryAction Case:</RcListSubheader>
      <RcMenuItem {...args} secondaryAction="secondaryAction string Action">
        <RcListItemText primary="use secondaryAction prop" />
      </RcMenuItem>
      <RcMenuItem
        {...args}
        secondaryAction={
          <>
            <span>meta</span>
            <RcIcon symbol={Info} size="small" />
          </>
        }
      >
        <RcListItemText primary="use secondaryAction prop" />
      </RcMenuItem>
      <RcMenuItem {...args}>
        <RcListItemText primary="use ListItemSecondaryAction" />
        <RcListItemSecondaryAction>
          <span>meta</span>
          <RcIconButton variant="plain" symbol={Info} size="small" />
        </RcListItemSecondaryAction>
      </RcMenuItem>

      <RcDivider component={'li'} />
    </>
  );

  const SecondaryActionControlCase = (
    <>
      <RcListSubheader>SecondaryActionControl Case:</RcListSubheader>
      <RcMenuItem {...args}>
        <RcListItemIcon>
          <RcFormControlLabel control={<RcCheckbox />} label="" />
        </RcListItemIcon>
        <RcListItemText primary="with FormControl Checkbox" />
        <RcListItemSecondaryAction>
          <RcFormControlLabel control={<RcCheckbox />} label="" />
        </RcListItemSecondaryAction>
      </RcMenuItem>
    </>
  );

  return (
    <>
      {CheckedTypeCase}
      {AvatarCase}
      {IconCase}
      {IconControlCase}
      {SecondaryActionCase}
      {SecondaryActionControlCase}
    </>
  );
};

MenuItemExamples.args = {};

MenuItemExamples.argTypes = {
  ...notControlInDocTable<keyof MenuItemProps>([]),
};

MenuItemExamples.storyName = 'Primary Line MenuItem';

export const MenuItemWithTwoLine: Story<MenuItemProps> = () => {
  return (
    <RcMenuItem onClick={() => console.log('onClick Profile')} avatar={avatar}>
      <RcListItemText primary="Primary Title" secondary="secondary text" />
    </RcMenuItem>
  );
};

MenuItemWithTwoLine.storyName = 'Secondary Lines MenuItem';
