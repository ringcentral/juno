import { MenuItem } from '@material-ui/core';
import { select } from '@storybook/addon-knobs';
import React, { ComponentProps, FunctionComponent, useState } from 'react';

import { RcMenu, RcMenuItem, RcMenuList } from '..';
import { RcButton } from '../../../Buttons';
import { RcDivider } from '../../../Divider';
import { RcListItemText } from '../../../List';

export default {
  title: '🖤 deprecated Components/Menus/Menu',
  component: RcMenu,
  excludeStories: /MenuExampleComponent/,
};

type MenuExampleComponentProps = {} & Partial<ComponentProps<typeof RcMenu>>;

export const MenuExampleComponent: FunctionComponent<MenuExampleComponentProps> = (
  props,
) => {
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
        <MenuItem onClick={handleClose}>MenuItem One</MenuItem>
        <RcMenuItem disabled onClick={handleClose}>
          MenuItem Two(disabled)
        </RcMenuItem>
        <RcMenuItem onClick={handleClose} title="native tooltip">
          MenuItem Three
        </RcMenuItem>
        <RcMenuItem onClick={handleClose} title="RcTooltip" useRcTooltip>
          MenuItem Four with Tooltip
        </RcMenuItem>
        <RcDivider component="li" />
        <RcMenuItem onClick={handleClose}>MenuItem Five</RcMenuItem>
      </RcMenu>
    </>
  );
};

export const Menu = () => {
  const knobs = {
    anchorOriginHorizontal: select(
      'anchorOrigin Horizontal',
      {
        left: 'left',
        center: 'center',
        right: 'right',
      },
      'left',
    ),
    anchorOriginVertical: select(
      'anchorOrigin Vertical',
      {
        top: 'top',
        center: 'center',
        bottom: 'bottom',
      },
      'bottom',
    ),
  };

  return (
    <MenuExampleComponent
      anchorOrigin={{
        vertical: knobs.anchorOriginVertical,
        horizontal: knobs.anchorOriginHorizontal,
      }}
    />
  );
};

export const MenuList = () => {
  return (
    <RcMenuList>
      <RcMenuItem>MenuItem One</RcMenuItem>
      <RcMenuItem disabled>MenuItem Two(disabled)</RcMenuItem>
      <RcMenuItem>MenuItem Three</RcMenuItem>
      <RcMenuItem>MenuItem Four</RcMenuItem>
      <RcDivider component="li" />
      <RcMenuItem>MenuItem Five</RcMenuItem>
    </RcMenuList>
  );
};

export const MenuWithGroup = () => {
  const knobs = {
    anchorOriginHorizontal: select(
      'anchorOrigin Horizontal',
      {
        left: 'left',
        center: 'center',
        right: 'right',
      },
      'left',
    ),
    anchorOriginVertical: select(
      'anchorOrigin Vertical',
      {
        top: 'top',
        center: 'center',
        bottom: 'bottom',
      },
      'bottom',
    ),
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

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
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: knobs.anchorOriginVertical,
          horizontal: knobs.anchorOriginHorizontal,
        }}
      >
        <RcMenuItem onClick={handleClose}>MenuItem One</RcMenuItem>
        <RcMenuItem disabled onClick={handleClose}>
          MenuItem Two(disabled)
        </RcMenuItem>
        <RcDivider component="li" />
        <RcMenuItem onClick={handleClose}>MenuItem Three</RcMenuItem>
        <RcMenuItem onClick={handleClose}>MenuItem Four</RcMenuItem>
      </RcMenu>
    </>
  );
};

export const CheckedMenu = () => {
  const knobs = {
    anchorOriginHorizontal: select(
      'anchorOrigin Horizontal',
      {
        left: 'left',
        center: 'center',
        right: 'right',
      },
      'left',
    ),
    anchorOriginVertical: select(
      'anchorOrigin Vertical',
      {
        top: 'top',
        center: 'center',
        bottom: 'bottom',
      },
      'bottom',
    ),
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [state, setState] = useState('test2');
  const [secondState, setSecondState] = useState('test3');
  const onSelectMenuOption = (event: any) => {
    setState(event.currentTarget.getAttribute('value'));
    setAnchorEl(null);
  };
  const onSelectMenuOption2 = (event: any) => {
    setSecondState(event.currentTarget.getAttribute('value'));
    setAnchorEl(null);
  };

  return (
    <>
      <RcButton onClick={handleClick}>Open Menu</RcButton>
      <RcMenu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: knobs.anchorOriginVertical,
          horizontal: knobs.anchorOriginHorizontal,
        }}
      >
        <RcMenuItem
          value={'test'}
          onClick={onSelectMenuOption}
          type="checked"
          checked={state === 'test'}
        >
          <RcListItemText primary="MenuItem One" />
        </RcMenuItem>
        <RcMenuItem
          disabled
          value={'test2'}
          onClick={onSelectMenuOption}
          type="checked"
          checked={state === 'test2'}
        >
          <RcListItemText primary="MenuItem Two(disabled)" />
        </RcMenuItem>
        <RcDivider component="li" />
        <RcMenuItem
          value={'test3'}
          onClick={onSelectMenuOption2}
          type="checked"
          checked={secondState === 'test3'}
        >
          <RcListItemText primary="MenuItem Three" />
        </RcMenuItem>
        <RcMenuItem
          value={'test4'}
          onClick={onSelectMenuOption2}
          type="checked"
          classes={{
            checked: 'custom-checked',
            unchecked: 'custom-unchecked',
          }}
          checked={secondState === 'test4'}
        >
          <RcListItemText primary="MenuItem Four" />
        </RcMenuItem>
      </RcMenu>
    </>
  );
};
