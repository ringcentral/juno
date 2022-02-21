import React, { ComponentProps } from 'react';

import { RcDialDelete, RcIconButton } from '@ringcentral/juno';
import { Deletenumber } from '@ringcentral/juno-icon';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🚀 Cleanup Components/Dialer/DialDelete',
  component: RcDialDelete,
  argTypes: {
    ...sortInDocTable<keyof DialDeleteProps>([]),
    ...notControlInDocTable<keyof DialDeleteProps>([]),
    ...notShowInDocTable<keyof DialDeleteProps>([]),
  },
} as Meta;

type DialDeleteProps = ComponentProps<typeof RcDialDelete>;

export const DialDelete: Story<DialDeleteProps> = ({ children, ...args }) => {
  switchToControlKnobs();
  return (
    <RcDialDelete
      {...args}
      onDelete={(e, reason) => {
        console.log('delete', e, reason);
      }}
      onClear={(e, reason) => {
        console.log('clear', e, reason);
      }}
    >
      <RcIconButton
        symbol={Deletenumber}
        data-sign="deleteButton"
        title="delete"
        variant="plain"
        size="large"
      />
    </RcDialDelete>
  );
};

DialDelete.storyName = 'DialDelete';

DialDelete.args = {};

DialDelete.argTypes = {
  ...notControlInDocTable<keyof DialDeleteProps>([]),
};

DialDelete.parameters = {
  tags: [
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
