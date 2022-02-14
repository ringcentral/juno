import React, { useRef, useState, useCallback } from 'react';
import { Meta, Story } from '@storybook/react';
import { RcMenu } from '../../../../components';
import { RcButton } from '../../../../components/Buttons';
import { Title } from '@ringcentral/juno-storybook';
import { useEver } from '../useEver';
import { MenuItem } from '@material-ui/core';

export default {
  title: '🔧 Foundation/Hooks/useEver',
  argTypes: {},
} as Meta;

export const useOnReRenderExample: Story<{}> = () => {
  const buttonRef = useRef(null);
  const [open, setOpen] = useState(false);
  const isEverOpen = useEver(open);

  const handleToggleButtonClick = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleMenuClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <Title>
        Return true when the value ever to be `you want value` once. Useful for
        optimizing the first screen rendering.
      </Title>
      <Title>open: {open ? 'true' : 'false'}</Title>
      <Title>isEverOpen: {isEverOpen ? 'true' : 'false'}</Title>
      <RcButton ref={buttonRef} onClick={handleToggleButtonClick}>
        Toggle
      </RcButton>
      {isEverOpen && (
        <RcMenu
          open={open}
          anchorEl={buttonRef.current}
          onClose={handleMenuClose}
        >
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
          <MenuItem>Item 3</MenuItem>
        </RcMenu>
      )}
    </>
  );
};

useOnReRenderExample.args = {};
useOnReRenderExample.storyName = 'useEver';
