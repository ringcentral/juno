import React, { ComponentProps } from 'react';

import { Meta, Story } from '@storybook/react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../../storybook';
import { RcCheckbox } from '../../../Forms/Checkbox';
import { RcFormControlLabel } from '../../../Forms/FormControlLabel';
import { RcListItem } from '../../ListItem';
import { RcListItemText } from '../../ListItemText';
import { RcListItemSecondaryAction } from '../ListItemSecondaryAction';

export default {
  title: '🚀 Cleanup Components/Lists/ListItemSecondaryAction',
  component: RcListItemSecondaryAction,
  argTypes: {
    ...sortInDocTable<keyof ListItemSecondaryActionProps>([]),
    ...notControlInDocTable<keyof ListItemSecondaryActionProps>([]),
    ...notShowInDocTable<keyof ListItemSecondaryActionProps>([]),
  },
} as Meta;

type ListItemSecondaryActionProps = ComponentProps<
  typeof RcListItemSecondaryAction
>;

export const ListItemSecondaryAction: Story<ListItemSecondaryActionProps> = ({
  children,
  ...args
}) => {
  switchToControlKnobs();
  return (
    <RcListItem singleLine>
      <RcListItemText primary="ListItem Content" />
      <RcListItemSecondaryAction {...args}>
        <span>meta</span>
        <RcFormControlLabel control={<RcCheckbox indeterminate />} label="" />
      </RcListItemSecondaryAction>
    </RcListItem>
  );
};

ListItemSecondaryAction.args = {};

ListItemSecondaryAction.argTypes = {
  ...notControlInDocTable<keyof ListItemSecondaryActionProps>([]),
};

ListItemSecondaryAction.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/demos/lists/#list-controls',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

ListItemSecondaryAction.storyName = 'ListItemSecondaryAction';
