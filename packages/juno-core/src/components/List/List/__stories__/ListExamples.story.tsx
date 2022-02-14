import React, { ComponentProps } from 'react';

import { Meta, Story } from '@storybook/react';

import { Draft, Inbox } from '@ringcentral/juno-icon';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { RcIconButton } from '../../../Buttons/IconButton';
import { RcDivider } from '../../../Divider';
import { RcIcon } from '../../../Icon';
import { RcListItem } from '../../ListItem';
import { RcListItemIcon } from '../../ListItemIcon';
import { RcListItemSecondaryAction } from '../../ListItemSecondaryAction';
import { RcListItemText } from '../../ListItemText';
import { RcList } from '../List';

export default {
  title: '🚀 Cleanup Components/Lists/List Examples',
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

export const ListSimpleExamples: Story<ListProps> = ({ children, ...args }) => {
  switchToControlKnobs();

  return (
    <RcList {...args}>
      <RcListItem>
        <RcListItemIcon>
          <RcIcon symbol={Inbox} />
        </RcListItemIcon>
        <RcListItemText primary="Inbox" />
      </RcListItem>
      <RcListItem>
        <RcListItemIcon>
          <RcIcon symbol={Draft} />
        </RcListItemIcon>
        <RcListItemText primary="Drafts" />
      </RcListItem>
      <RcDivider />
      <RcListItem>
        <RcListItemText primary="Trash" />
      </RcListItem>
      <RcListItem>
        <RcListItemText primary="Spam" />
      </RcListItem>
    </RcList>
  );
};

ListSimpleExamples.args = {};

ListSimpleExamples.storyName = 'Simple List';

export const ListControlExamples: Story<ListProps> = ({
  children,
  ...args
}) => {
  switchToControlKnobs();

  return (
    <RcList {...args}>
      {[0, 1, 2, 3].map((value) => (
        <RcListItem key={value} button>
          <RcListItemText primary={`Line item ${value + 1}`} />
          <RcListItemSecondaryAction>
            <RcIconButton size="small" aria-label="Comments" symbol={Inbox} />
          </RcListItemSecondaryAction>
        </RcListItem>
      ))}
    </RcList>
  );
};

ListControlExamples.args = {};

ListControlExamples.storyName = 'List With Control';
