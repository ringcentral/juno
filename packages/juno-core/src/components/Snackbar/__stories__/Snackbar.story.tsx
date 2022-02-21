import React, { ComponentProps, useState } from 'react';

import { RcButton, RcSnackbar, RcSnackbarAction } from '@ringcentral/juno';
import { Close } from '@ringcentral/juno-icon';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

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
      name: 'Spec',
      href: 'https://app.abstract.com/projects/d893ad32-0d8d-4e65-a37a-b4a5c881c51b/branches/master/commits/9e531c6b30974c6e11ee1ca2030d489988c01e23/files/8ffaf9bc-6939-4ef9-9bd1-6aa5b460e2ae/layers/1D6692A9-B526-428D-89C5-5DD8D537C603',
    },
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
