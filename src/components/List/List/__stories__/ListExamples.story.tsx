import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../../storybook';
import { RcListItem } from '../../ListItem';
import { RcListItemText } from '../../ListItemText';
import { RcList } from '../List';

import draft from '../../../../icon/Draft';
import inbox from '../../../../icon/Inbox';
import { RcIcon } from '../../../Icon';
import { RcDivider } from '../../../Divider';
import { RcListItemIcon } from '../../ListItemIcon';
import { RcListItemSecondaryAction } from '../../ListItemSecondaryAction';
import { RcIconButton } from '../../../Buttons/IconButton';

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
          <RcIcon symbol={inbox} />
        </RcListItemIcon>
        <RcListItemText primary="Inbox" />
      </RcListItem>
      <RcListItem>
        <RcListItemIcon>
          <RcIcon symbol={draft} />
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
            <RcIconButton size="small" aria-label="Comments" symbol={inbox} />
          </RcListItemSecondaryAction>
        </RcListItem>
      ))}
    </RcList>
  );
};

ListControlExamples.args = {};

ListControlExamples.storyName = 'List With Control';
