import React, { ComponentProps } from 'react';

import range from 'lodash/range';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

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
      name: 'Spec',
      href: 'https://share.goabstract.com/22b47ad0-05ea-4bcc-8bf0-37aafc4b38ae?mode=design&sha=9e531c6b30974c6e11ee1ca2030d489988c01e23',
    },
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
