import React, { ComponentProps } from 'react';

import { Meta, Story } from '@storybook/react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../../storybook';
import { RcListItem } from '../../ListItem';
import { RcListItemText } from '../../ListItemText';
import { RcList } from '../List';

export default {
  title: '🚀 Cleanup Components/Lists/List',
  component: RcList,
  argTypes: {
    ...sortInDocTable<keyof ListProps>([
      'dense',
      'disablePadding',
      'subheader',
    ]),
    ...notControlInDocTable<keyof ListProps>([]),
    ...notShowInDocTable<keyof ListProps>([]),
  },
} as Meta;

type ListProps = ComponentProps<typeof RcList>;

const ListItems = (
  <>
    <RcListItem>
      <RcListItemText primary="ListItem 1" />
    </RcListItem>
    <RcListItem>
      <RcListItemText primary="ListItem 2" />
    </RcListItem>
  </>
);

export const List: Story<ListProps> = ({ children, ...args }) => {
  switchToControlKnobs();
  return <RcList {...args}>{ListItems}</RcList>;
};

List.args = {};

List.argTypes = {
  ...notControlInDocTable<keyof ListProps>([]),
};

List.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/lists/',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

List.storyName = 'List';
