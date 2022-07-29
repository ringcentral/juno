import React, { ComponentProps } from 'react';

import { Meta, Story } from '@storybook/react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
} from '@ringcentral/juno-storybook';
import { Rc__name__ } from '../__name__';

export default {
  title: '__name__',
  component: Rc__name__,
  argTypes: {
    ...sortInDocTable<keyof __name__Props>([]),
    ...notControlInDocTable<keyof __name__Props>([]),
    ...notShowInDocTable<keyof __name__Props>([]),
  },
} as Meta;

type __name__Props = ComponentProps<typeof Rc__name__>;

export const __name__: Story<__name__Props> = ({ children, ...args }) => {
  return <Rc__name__ {...args}>{children}</Rc__name__>;
};

__name__.storyName = '__name__';

__name__.args = {};

__name__.argTypes = {
  ...notControlInDocTable<keyof __name__Props>([]),
};

__name__.parameters = {
  tags: [
    {
      name: 'Spec',
      href: '',
    },
    {
      name: 'Mui',
      href: '',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
