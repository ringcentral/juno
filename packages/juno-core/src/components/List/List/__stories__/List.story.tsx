import React, { ComponentProps } from 'react';

import { Meta, Story } from '@storybook/react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
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
      name: 'Spec',
      href: 'https://app.abstract.com/projects/d893ad32-0d8d-4e65-a37a-b4a5c881c51b/branches/master/commits/9e531c6b30974c6e11ee1ca2030d489988c01e23/files/8ffaf9bc-6939-4ef9-9bd1-6aa5b460e2ae/layers/A760AD1E-149E-455D-B3DA-D1BC88A30726',
    },
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
