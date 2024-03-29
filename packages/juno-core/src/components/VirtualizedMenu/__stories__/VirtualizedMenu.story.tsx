import React, { ComponentProps, FunctionComponent, useState } from 'react';

import range from 'lodash/range';

import {
  RcButton,
  RcListItemText,
  RcMenuItem,
  RcVirtualizedMenu,
} from '@ringcentral/juno';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

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
const threeItems = range(0, 3);

export const VirtualizedMenu: Story<Partial<MenuProps>> = ({
  children,
  ...args
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [anchorEl2, setAnchorEl2] = useState<HTMLButtonElement | null>(null);
  const [anchorEl3, setAnchorEl3] = useState<HTMLButtonElement | null>(null);
  const [count, setCount] = useState(0);
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => setAnchorEl(event.currentTarget);

  const handleClick2 = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => setAnchorEl2(event.currentTarget);

  const handleClick3 = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => setAnchorEl3(event.currentTarget);

  const handleClose = () => setAnchorEl(null);
  const handleClose2 = () => setAnchorEl2(null);
  const handleClose3 = () => setAnchorEl3(null);

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

      <br />
      <br />

      <RcButton onClick={handleClick2}>Open Menu(less items)</RcButton>
      <RcVirtualizedMenu
        {...args}
        open={Boolean(anchorEl2)}
        anchorEl={anchorEl2}
        // MenuListProps={{ disabledItemsFocusable: true }}
        onClose={handleClose2}
      >
        {threeItems.map((x) => {
          const label = `${x}-MenuItem${count}`;
          return (
            <RcMenuItem
              key={x}
              // disabled={x < 10}
              onClick={handleClose2}
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

      <br />
      <br />

      <RcButton onClick={handleClick3}>
        Open Menu(less items, above button)
      </RcButton>
      <RcVirtualizedMenu
        {...args}
        open={Boolean(anchorEl3)}
        anchorEl={anchorEl3}
        onClose={handleClose3}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        {threeItems.map((x) => {
          const label = `${x}-MenuItem${count}`;
          return (
            <RcMenuItem
              key={x}
              onClick={handleClose3}
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
  return <MenuExampleComponent {...args} />;
};

MenuExamples.argTypes = {
  ...notControlInDocTable<keyof MenuProps>(['anchorOrigin']),
};
