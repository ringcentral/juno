import { Meta, Story } from '@storybook/react/types-6-0';
import range from 'lodash/range';
import React, { ComponentProps } from 'react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
} from '../../../storybook';
import { RcListItemText } from '../../List/ListItemText';
import { RcMenuItem } from '../../Menu/MenuItem';
import { Virtuoso } from '../Virtuoso';

export default {
  title: '🚀 Cleanup Components/Virtuoso',
  component: Virtuoso,
  argTypes: {
    ...sortInDocTable<keyof VirtuosoProps>([]),
    ...notControlInDocTable<keyof VirtuosoProps>([]),
    ...notShowInDocTable<keyof VirtuosoProps>([]),
  },
} as Meta;

type VirtuosoProps = ComponentProps<typeof Virtuoso>;

const menus = range(0, 1000);

export const VirtuosoExample: Story<Partial<VirtuosoProps>> = ({
  children,
  ...args
}) => {
  return (
    <>
      <Virtuoso
        style={{ height: '200px' }}
        totalCount={1000}
        data={menus}
        itemContent={(index) => {
          const label = `${index}-MenuItem`;
          return (
            <RcMenuItem key={index} data-search-text={label}>
              <RcListItemText primary={label} />
            </RcMenuItem>
          );
        }}
        {...args}
      />
    </>
  );
};

VirtuosoExample.args = {};

VirtuosoExample.argTypes = {
  ...notControlInDocTable<keyof VirtuosoProps>([]),
};

VirtuosoExample.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/menus/',
      value: 'Menu',
    },
    {
      name: 'Source',
      value: 'virtuoso',
      href: 'https://virtuoso.dev/',
      color: 'avatar.lake',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
