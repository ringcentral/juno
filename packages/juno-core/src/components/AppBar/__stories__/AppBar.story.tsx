import React, { ComponentProps } from 'react';

import { RcAppBar } from '@ringcentral/juno';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🚀 Cleanup Components/AppBar',
  component: RcAppBar,
  argTypes: {
    ...sortInDocTable<keyof AppBarProps>([]),
    ...notControlInDocTable<keyof AppBarProps>([]),
    ...notShowInDocTable<keyof AppBarProps>([]),
  },
} as Meta;

type AppBarProps = ComponentProps<typeof RcAppBar>;

export const AppBar: Story<AppBarProps> = ({ children, ...args }) => {
  return <RcAppBar {...args}>{children}</RcAppBar>;
};

AppBar.storyName = 'AppBar';

AppBar.args = {};

AppBar.argTypes = {
  ...notControlInDocTable<keyof AppBarProps>([]),
};

AppBar.parameters = {
  tags: [
    // {
    //   name: 'Spec',
    //   href: '',
    // },
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/app-bar',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
