import React, { ComponentProps } from 'react';

import { RcButton, RcDialogActions } from '@ringcentral/juno';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🚀 Cleanup Components/Dialog/DialogActions',
  component: RcDialogActions,
  argTypes: {
    ...sortInDocTable<keyof DialogActionsProps>([]),
    ...notControlInDocTable<keyof DialogActionsProps>([]),
    ...notShowInDocTable<keyof DialogActionsProps>([]),
  },
} as Meta;

type DialogActionsProps = ComponentProps<typeof RcDialogActions>;

export const DialogActions: Story<DialogActionsProps> = ({
  children,
  ...args
}) => {
  switchToControlKnobs();
  return (
    <RcDialogActions {...args}>
      <RcButton variant="text">Cancel</RcButton>
      <RcButton>Ok</RcButton>
    </RcDialogActions>
  );
};

DialogActions.storyName = 'DialogActions';

DialogActions.args = {};

DialogActions.argTypes = {
  ...notControlInDocTable<keyof DialogActionsProps>([]),
};

DialogActions.parameters = {
  tags: [
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
