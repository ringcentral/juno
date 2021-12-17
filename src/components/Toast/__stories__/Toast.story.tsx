import React, { ComponentProps } from 'react';

import { Meta, Story } from '@storybook/react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../storybook';
import { RcToast } from '../Toast';
import { RcButton } from '../../Buttons';
import { useState } from '@storybook/addons';
import { RcToastContainer } from '../ToastContainer';

export default {
  title: '🚀 Cleanup Components/Toast',
  component: RcToast,
  argTypes: {
    ...sortInDocTable<keyof ToastProps>([]),
    ...notControlInDocTable<keyof ToastProps>([]),
    ...notShowInDocTable<keyof ToastProps>([]),
  },
} as Meta;

type ToastProps = ComponentProps<typeof RcToast>;

export const Toast: Story<ToastProps> = ({ children, ...args }) => {
  switchToControlKnobs();

  const [open, setOpen] = useState(false);

  return (
    <>
      <RcButton onClick={() => setOpen((pre) => !pre)}>
        {open ? 'close' : 'open'} toast
      </RcButton>
      <RcToast {...args} open={open} onClose={() => setOpen(false)} />
      <RcToastContainer />
    </>
  );
};

Toast.storyName = 'Toast';

Toast.args = {
  message: 'Toooooast!!!',
  dismissButton: true,
};

Toast.argTypes = {
  ...notControlInDocTable<keyof ToastProps>([]),
};
