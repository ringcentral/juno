import React, { ComponentProps } from 'react';

import { Meta, Story } from '@storybook/react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../../storybook';
import { RcListItemText } from '../../ListItemText';
import { RcListItem } from '../ListItem';

export default {
  title: '🚀 Cleanup Components/Lists/ListItem',
  component: RcListItem,
  argTypes: {
    ...sortInDocTable<keyof ListItemProps>([
      'size',
      'autoFocus',
      'disabled',
      'selected',
      'highlighted',
      'singleLine',
      'canHover',
      'button',
      'divider',
      'isInline',
      'alignItems',
      'disableGutters',
      'dense',
      'baseColor',
      'component',
    ]),
    ...notControlInDocTable<keyof ListItemProps>([]),
    ...notShowInDocTable<keyof ListItemProps>(['maxWidth']),
  },
} as Meta;

type ListItemProps = ComponentProps<typeof RcListItem>;

export const ListItem: Story<ListItemProps> = ({ children, ...args }) => {
  switchToControlKnobs();

  return (
    <>
      <RcListItem {...args}>
        <RcListItemText primary="ListItem Content" />
      </RcListItem>
      <br />
      <RcListItem {...args} selected>
        <RcListItemText
          primary="Primary content"
          secondary="Secondary content"
        />
      </RcListItem>
      <br />
      <RcListItem {...args} highlighted color="success.b05">
        <RcListItemText
          primary="Primary content"
          secondary="Secondary content"
        />
      </RcListItem>
      <br />
      <RcListItem {...args} highlighted color="highlight.b01">
        <RcListItemText
          primary="Primary content"
          secondary="Secondary content"
        />
      </RcListItem>
    </>
  );
};

ListItem.args = {};

ListItem.argTypes = {
  ...notControlInDocTable<keyof ListItemProps>([]),
};

ListItem.parameters = {
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

ListItem.storyName = 'ListItem';
