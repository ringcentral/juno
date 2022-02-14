import React, { ComponentProps } from 'react';

import { Meta, Story } from '@storybook/react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
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
      name: 'Spec',
      href: 'https://app.abstract.com/projects/d893ad32-0d8d-4e65-a37a-b4a5c881c51b/branches/master/commits/7c0e8cc79e14b0cf155cb92b36c1dad5eb7803f1/files/667d44de-f29d-4d3a-857b-c8e2e7b59540/layers/A760AD1E-149E-455D-B3DA-D1BC88A30726',
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

ListItem.storyName = 'ListItem';
