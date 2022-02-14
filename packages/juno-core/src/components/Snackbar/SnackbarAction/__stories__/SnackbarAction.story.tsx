import React, { ComponentProps } from 'react';

import { Meta, Story } from '@storybook/react';

import { Add, Close } from '@ringcentral/juno-icon';

import {
  notControlInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { RcSnackbarContent } from '../../SnackbarContent';
import { RcSnackbarAction } from '../SnackbarAction';

export default {
  title: '🚀 Cleanup Components/Snackbar/SnackbarAction',
  component: RcSnackbarAction,
  argTypes: {
    size: {
      table: { defaultValue: 'medium' },
    },
    ...sortInDocTable<keyof SnackbarActionProps>(['variant', 'disabled']),
    ...notControlInDocTable<keyof SnackbarActionProps>(['icon', 'symbol']),
  },
} as Meta;

type SnackbarActionProps = ComponentProps<typeof RcSnackbarAction>;

export const SnackbarAction: Story<SnackbarActionProps> = ({
  children,
  ...args
}) => {
  switchToControlKnobs();
  return (
    <RcSnackbarContent
      type="info"
      size={args.size}
      message="This is an error message."
      action={
        <>
          {args.variant === 'text' ? (
            <RcSnackbarAction key="1" {...args}>
              {children}
            </RcSnackbarAction>
          ) : (
            <RcSnackbarAction key="1" {...args} symbol={Add} />
          )}
          <RcSnackbarAction key="action1" disabled>
            Action
          </RcSnackbarAction>
          <RcSnackbarAction key="action2">Action</RcSnackbarAction>
          <RcSnackbarAction key="action3" variant="icon" symbol={Close} />
        </>
      }
    />
  );
};

SnackbarAction.args = {
  children: 'Example',
};
SnackbarAction.storyName = 'SnackbarAction';

SnackbarAction.parameters = {
  tags: [],
};
