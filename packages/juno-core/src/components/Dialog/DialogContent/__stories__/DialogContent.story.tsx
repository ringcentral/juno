import React, { ComponentProps } from 'react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

import { RcDialogContent } from '../DialogContent';

export default {
  title: '🚀 Cleanup Components/Dialog/DialogContent',
  component: RcDialogContent,
  argTypes: {
    ...sortInDocTable<keyof DialogContentProps>([]),
    ...notControlInDocTable<keyof DialogContentProps>([]),
    ...notShowInDocTable<keyof DialogContentProps>([]),
  },
} as Meta;

type DialogContentProps = ComponentProps<typeof RcDialogContent>;

export const DialogContent: Story<DialogContentProps> = ({
  children,
  ...args
}) => {
  switchToControlKnobs();
  return <RcDialogContent {...args}>{children}</RcDialogContent>;
};

DialogContent.storyName = 'DialogContent';

DialogContent.args = {
  children: 'Content',
};

DialogContent.argTypes = {
  ...notControlInDocTable<keyof DialogContentProps>([]),
};

DialogContent.parameters = {
  tags: [
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
