import React, { ComponentProps, FunctionComponent, useState } from 'react';

import range from 'lodash/range';

import { Meta, Story } from '@storybook/react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../../storybook';
import { RcButton } from '../../../Buttons/Button';
import { RcDivider } from '../../../Divider';
import { RcListItemText } from '../../../List/ListItemText';
import { RcMenuItem } from '../../MenuItem';
import { RcMenu } from '../Menu';

export default {
  title: '🚀 Cleanup Components/Menu/Menu',
  component: RcMenu,
  excludeStories: /MenuExampleComponent/,
  argTypes: {
    ...sortInDocTable<keyof MenuProps>([
      // Menu
      'open',
      'anchorEl',
      'autoFocus',
      'autoClose',
      'variant',
      'onClose',
      'classes',
      'keepMounted', // Modal

      // MenuList
      'MenuListProps',
      'disableAutoFocusItem',
      'disableAutoFocus', // Modal

      // Popover
      'action',
      'anchorOrigin',
      'anchorPosition',
      'anchorReference',
      'elevation',
      'getContentAnchorEl',
      'marginThreshold',
      'PaperProps',
      'PopoverClasses',
      'TransitionProps',
      'TransitionComponent',
      'transformOrigin',
      'transitionDuration',

      // Modal
      'BackdropComponent',
      'BackdropProps',
      'closeAfterTransition',
      'container',
      'disableBackdropClick',
      // 'disableEnforceFocus',
      'disableEscapeKeyDown',
      'disablePortal',
      'disableRestoreFocus',
      'disableScrollLock',
      'hideBackdrop',
      'onBackdropClick',
      'onEscapeKeyDown',
      'onRendered',
    ]),
    ...notControlInDocTable<keyof MenuProps>(['open', 'anchorEl']),
    ...notShowInDocTable<keyof MenuProps>([]),
  },
} as Meta;

type MenuProps = ComponentProps<typeof RcMenu>;

export const Menu: Story<MenuProps> = ({ children, ...args }) => {
  switchToControlKnobs();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <RcButton onClick={handleClick}>Open Menu</RcButton>
      <RcMenu
        {...args}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
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
      </RcMenu>
    </>
  );
};

Menu.args = {
  variant: 'selectedMenu',
  getContentAnchorEl: null,
  anchorReference: 'anchorEl',
  anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
};

Menu.argTypes = {
  ...notControlInDocTable<keyof MenuProps>([]),
};

Menu.parameters = {
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

type MenuExampleComponentProps = {} & Partial<ComponentProps<typeof RcMenu>>;

const menus = range(0, 20);

export const MenuExampleComponent: FunctionComponent<MenuExampleComponentProps> =
  (props) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event: any) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <>
        <RcButton onClick={handleClick}>Open Menu</RcButton>
        <RcMenu
          {...props}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          keepMounted
          onClose={handleClose}
        >
          {menus.map((x) => (
            <RcMenuItem key={x} onClick={handleClose}>
              <RcListItemText primary={`MenuItem ${x}`} />
            </RcMenuItem>
          ))}
          <RcMenuItem>MenuItem One</RcMenuItem>
          <RcMenuItem disabled>MenuItem Two(disabled)</RcMenuItem>
          <RcMenuItem title="native tooltip">MenuItem Three</RcMenuItem>
          <RcDivider component="li" />
          <RcMenuItem>MenuItem Five</RcMenuItem>
        </RcMenu>
      </>
    );
  };

export const MenuExamples: Story<MenuProps> = ({ anchorOrigin, ...args }) => {
  switchToControlKnobs();

  return <MenuExampleComponent {...args} />;
};

MenuExamples.argTypes = {
  ...notControlInDocTable<keyof MenuProps>(['anchorOrigin']),
};
