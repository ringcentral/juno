import { Meta, Story } from '@storybook/react/types-6-0';
import React, { ComponentProps, useState, FunctionComponent } from 'react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../../storybook';
import { RcButton } from '../../../Buttons/Button';
import { RcListItemText } from '../../../List/ListItemText';
import { RcMenu } from '../../Menu';
import { RcMenuOnCloseReasonsType } from '../../Menu/MenuContext';
import { RcMenuItem } from '../../MenuItem';
import { RcMenuList } from '../../MenuList';
import { RcSubMenu } from '../SubMenu';

export default {
  title: '🚀 Cleanup Components/Menu/SubMenu',
  component: RcSubMenu,
  excludeStories: /SubMenuExampleComponent/,
  argTypes: {
    ...sortInDocTable<keyof SubMenuProps>([]),
    ...notControlInDocTable<keyof SubMenuProps>([]),
    ...notShowInDocTable<keyof SubMenuProps>([]),
  },
} as Meta;

type SubMenuProps = ComponentProps<typeof RcSubMenu>;

export const SubMenuWithMenuList: Story<SubMenuProps> = ({ ...args }) => {
  switchToControlKnobs();
  return (
    <RcMenuList
      style={{ width: '180px' }}
      autoClose
      onClose={(e, r) => console.log('RcMenuList onClose', e, r)}
    >
      <RcSubMenu
        {...args}
        onClose={(e, r) => console.log('RcSubMenu onClose', e, r)}
      >
        <RcSubMenu {...args}>
          <RcSubMenu {...args}>
            <RcMenuItem>
              <RcListItemText primary="SubMenuItem 1" />
            </RcMenuItem>
            <RcMenuItem>
              <RcListItemText primary="SubMenuItem 2" />
            </RcMenuItem>
          </RcSubMenu>
          <RcMenuItem>
            <RcListItemText primary="SubMenuItem 1" />
          </RcMenuItem>
          <RcMenuItem>
            <RcListItemText primary="SubMenuItem 2" />
          </RcMenuItem>
        </RcSubMenu>
        <RcMenuItem>
          <RcListItemText primary="SubMenuItem 1" />
        </RcMenuItem>
        <RcMenuItem>
          <RcListItemText primary="SubMenuItem 2" />
        </RcMenuItem>
      </RcSubMenu>
      <RcMenuItem>
        <RcListItemText primary="MenuItem 1" />
      </RcMenuItem>
      <RcMenuItem>
        <RcListItemText primary="MenuItem 2" />
      </RcMenuItem>
      <RcSubMenu {...args}>
        <RcMenuItem>
          <RcListItemText primary="SubMenuItem 1" />
        </RcMenuItem>
        <RcMenuItem>
          <RcListItemText primary="SubMenuItem 2" />
        </RcMenuItem>
      </RcSubMenu>
    </RcMenuList>
  );
};

SubMenuWithMenuList.storyName = 'SubMenu With MenuList';

SubMenuWithMenuList.args = {
  title: 'SubMenu Item',
};

SubMenuWithMenuList.argTypes = {
  ...notControlInDocTable<keyof SubMenuProps>([]),
};

SubMenuWithMenuList.parameters = {
  tags: [
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

type SubMenuExampleComponentProps = {} & Partial<
  ComponentProps<typeof RcSubMenu>
>;

export const SubMenuExampleComponent: FunctionComponent<SubMenuExampleComponentProps> = ({
  children,
  ...args
}) => {
  return <SubMenuWithMenu title="SubMenuItem">{children}</SubMenuWithMenu>;
};

export const SubMenuWithMenu: Story<SubMenuProps> = ({ ...args }) => {
  switchToControlKnobs();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e: any, reason: RcMenuOnCloseReasonsType) => {
    setAnchorEl(null);
    console.log('RcMenu onClose', e, reason);
  };

  return (
    <>
      <RcButton onClick={handleClick}>Open Menu</RcButton>
      <RcMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        autoClose
      >
        <RcSubMenu {...args}>
          <RcSubMenu {...args}>
            <RcSubMenu {...args}>
              <RcMenuItem>
                <RcListItemText primary="SubMenuItem 1" />
              </RcMenuItem>
              <RcMenuItem>
                <RcListItemText primary="SubMenuItem 2" />
              </RcMenuItem>
            </RcSubMenu>
            <RcMenuItem>
              <RcListItemText primary="SubMenuItem 1" />
            </RcMenuItem>
            <RcMenuItem>
              <RcListItemText primary="SubMenuItem 2" />
            </RcMenuItem>
          </RcSubMenu>
          <RcMenuItem>
            <RcListItemText primary="SubMenuItem 1" />
          </RcMenuItem>
          <RcMenuItem>
            <RcListItemText primary="SubMenuItem 2" />
          </RcMenuItem>
        </RcSubMenu>
        <RcMenuItem>
          <RcListItemText primary="MenuItem 1" />
        </RcMenuItem>
        <RcMenuItem>
          <RcListItemText primary="MenuItem 2" />
        </RcMenuItem>
        <RcSubMenu {...args}>
          <RcMenuItem>
            <RcListItemText primary="SubMenuItem 1" />
          </RcMenuItem>
          <RcMenuItem>
            <RcListItemText primary="SubMenuItem 2" />
          </RcMenuItem>
          <RcSubMenu {...args}>
            <RcMenuItem>
              <RcListItemText primary="SubMenuItem 1" />
            </RcMenuItem>
            <RcMenuItem>
              <RcListItemText primary="SubMenuItem 2" />
            </RcMenuItem>
          </RcSubMenu>
        </RcSubMenu>
      </RcMenu>
    </>
  );
};

SubMenuWithMenu.args = {
  title: 'SubMenu Item',
};

SubMenuWithMenu.argTypes = {
  ...notControlInDocTable<keyof SubMenuProps>([]),
};

SubMenuWithMenu.parameters = {
  tags: [
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

SubMenuWithMenu.storyName = 'SubMenu With Menu';
