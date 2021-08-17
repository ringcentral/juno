import { boolean } from '@storybook/addon-knobs';
import React, { useState } from 'react';

import { RcMenu, RcMenuItem, RcMenuList, RcSubMenu } from '..';
import { RcButton } from '../../../Buttons';

export default {
  title: '🖤 deprecated Components/Menus/SubMenu',
};

export const MenuItemControl = () => {
  const knobs = {
    autoClose: boolean('autoClose', true),
  };

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
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        autoClose={knobs.autoClose}
        onClose={handleClose}
      >
        <RcMenuItem>MenuItem Zero</RcMenuItem>
        <RcMenuItem>MenuItem One</RcMenuItem>
        <RcSubMenu title="MenuItem Two">
          <RcMenuItem>MenuItem One</RcMenuItem>
          <RcMenuItem disabled>MenuItem Two(disabled)</RcMenuItem>
          <RcMenuItem>MenuItem Three</RcMenuItem>
        </RcSubMenu>
        <RcMenuItem>MenuItem Three</RcMenuItem>
        <RcSubMenu title="MenuItem Four">
          <RcMenuItem>MenuItem One</RcMenuItem>
          <RcMenuItem disabled>MenuItem Two(disabled)</RcMenuItem>
          <RcSubMenu title="MenuItem Three">
            <RcMenuItem>MenuItem One</RcMenuItem>
            <RcMenuItem disabled>MenuItem Two(disabled)</RcMenuItem>
            <RcMenuItem>MenuItem Three</RcMenuItem>
            <RcMenuItem>MenuItem Four</RcMenuItem>
          </RcSubMenu>
          <RcMenuItem>MenuItem Four</RcMenuItem>
          <RcSubMenu title="MenuItem Five">
            <RcMenuItem>MenuItem One</RcMenuItem>
            <RcMenuItem disabled>MenuItem Two(disabled)</RcMenuItem>
            <RcMenuItem>MenuItem Three</RcMenuItem>
            <RcMenuItem>MenuItem Four</RcMenuItem>
          </RcSubMenu>
        </RcSubMenu>
      </RcMenu>
    </>
  );
};

export const MenuListControl = () => {
  const knobs = {
    subMenuDisabled: boolean('disable subMenu', false),
    autoClose: boolean('autoClose', false),
  };

  return (
    <RcMenuList style={{ width: '180px' }} autoClose={knobs.autoClose}>
      <RcMenuItem>MenuItem One</RcMenuItem>
      <RcSubMenu title="MenuItem Two" disabled={knobs.subMenuDisabled}>
        <RcMenuItem>MenuItem One</RcMenuItem>
        <RcMenuItem disabled>MenuItem Two(disabled)</RcMenuItem>
        <RcMenuItem>MenuItem Three</RcMenuItem>
        <RcMenuItem>MenuItem Four</RcMenuItem>
      </RcSubMenu>
      <RcMenuItem>MenuItem Three</RcMenuItem>
      <RcSubMenu title="MenuItem Four" disabled={knobs.subMenuDisabled}>
        <RcMenuItem>MenuItem One</RcMenuItem>
        <RcMenuItem disabled>MenuItem Two(disabled)</RcMenuItem>
        <RcSubMenu title="MenuItem Three">
          <RcMenuItem>MenuItem One</RcMenuItem>
          <RcMenuItem disabled>MenuItem Two(disabled)</RcMenuItem>
          <RcMenuItem>MenuItem Three</RcMenuItem>
          <RcMenuItem>MenuItem Four</RcMenuItem>
        </RcSubMenu>
        <RcMenuItem>MenuItem Four</RcMenuItem>
        <RcSubMenu title="MenuItem Five">
          <RcMenuItem>MenuItem One</RcMenuItem>
          <RcMenuItem disabled>MenuItem Two(disabled)</RcMenuItem>
          <RcMenuItem>MenuItem Three</RcMenuItem>
          <RcMenuItem>MenuItem Four</RcMenuItem>
        </RcSubMenu>
      </RcSubMenu>
      <RcMenuItem>MenuItem Five</RcMenuItem>
    </RcMenuList>
  );
};
