import React, { ComponentProps, FunctionComponent, useState } from 'react';

import range from 'lodash/range';

import { Meta, Story } from '@storybook/react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { RcButton } from '../../Buttons/Button';
import { RcListItemText } from '../../List/ListItemText';
import { RcMenuItem } from '../../Menu/MenuItem';
import { RcVirtualizedMenu } from '../VirtualizedMenu';

export default {
  title: '🚀 Cleanup Components/VirtualizedMenu',
  component: RcVirtualizedMenu,
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

type MenuProps = ComponentProps<typeof RcVirtualizedMenu>;

const menus = range(0, 1000);

export const VirtualizedMenu: Story<Partial<MenuProps>> = ({
  children,
  ...args
}) => {
  switchToControlKnobs();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [count, setCount] = useState(0);
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <RcButton onClick={handleClick}>Open Menu</RcButton>
      <RcVirtualizedMenu
        {...args}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        // MenuListProps={{ disabledItemsFocusable: true }}
        onClose={handleClose}
      >
        {menus.map((x) => {
          const label = `${x}-MenuItem${count}`;
          return (
            <RcMenuItem
              key={x}
              // disabled={x < 10}
              onClick={handleClose}
              onContextMenu={() => {
                setCount(count + 1);
              }}
              data-search-text={label}
            >
              <RcListItemText primary={label} />
            </RcMenuItem>
          );
        })}
      </RcVirtualizedMenu>
    </>
  );
};

VirtualizedMenu.args = {};

VirtualizedMenu.argTypes = {
  ...notControlInDocTable<keyof MenuProps>([]),
};

VirtualizedMenu.parameters = {
  tags: [
    {
      name: 'Spec',
      href: 'https://share.goabstract.com/22b47ad0-05ea-4bcc-8bf0-37aafc4b38ae?mode=design&sha=9e531c6b30974c6e11ee1ca2030d489988c01e23',
    },
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/menus/',
      value: 'Menu',
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

type MenuExampleComponentProps = {} & Partial<
  ComponentProps<typeof RcVirtualizedMenu>
>;

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
        <RcVirtualizedMenu
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
          <RcMenuItem key="cool">MenuItem Five</RcMenuItem>
        </RcVirtualizedMenu>
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
