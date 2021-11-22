import React, { ComponentProps, useState } from 'react';

import { Meta, Story } from '@storybook/react';

import { Close } from '../../../icon';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../storybook';
import { RcButton } from '../../Buttons/Button';
import { RcSnackbar } from '../Snackbar';
import { RcSnackbarAction } from '../SnackbarAction';

export default {
  title: '🚀 Cleanup Components/Snackbar',
  component: RcSnackbar,
  argTypes: {
    ...sortInDocTable<keyof SnackbarProps>([
      'size',
      'type',
      'open',
      'action',
      'message',
      'autoHideDuration',
      'transitionDuration',
      'resumeHideDuration',
      'ClickAwayListenerProps',
    ]),
    ...notControlInDocTable<keyof SnackbarProps>([
      'anchorOrigin',
      'TransitionComponent',
    ]),
    ...notShowInDocTable<keyof SnackbarProps>(['key']),
  },
} as Meta;

type SnackbarProps = ComponentProps<typeof RcSnackbar>;

export const Snackbar: Story<SnackbarProps> = ({
  children,
  TransitionComponent,
  anchorOrigin,
  open: openProp,
  ...args
}) => {
  switchToControlKnobs();
  const [open, setOpen] = useState(openProp);

  const toggleShow = () => {
    setOpen(!open);
  };

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <RcButton onClick={toggleShow}>
        {open ? 'Close' : 'Open'} simple snackbar
      </RcButton>
      <RcSnackbar
        {...args}
        open={open}
        onClose={handleClose}
        action={
          <RcSnackbarAction
            variant="icon"
            aria-label="close"
            onClick={handleClose}
            symbol={Close}
          />
        }
      />
    </>
  );
};

Snackbar.storyName = 'Snackbar';

Snackbar.args = {
  message: 'Note archived',
  autoHideDuration: 6000,
};

Snackbar.argTypes = {
  ...notControlInDocTable<keyof SnackbarProps>([]),
};

Snackbar.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/snackbars/#snackbar',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
