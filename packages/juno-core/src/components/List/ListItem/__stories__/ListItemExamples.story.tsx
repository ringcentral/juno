import React, { ComponentProps } from 'react';

import {
  RcAvatar,
  RcCheckbox,
  RcDivider,
  RcFormControlLabel,
  RcIcon,
  RcIconButton,
  RcList,
  RcListItem,
  RcListItemAvatar,
  RcListItemIcon,
  RcListItemSecondaryAction,
  RcListItemText,
  RcListSubheader,
  RcRadio,
  RcSwitch,
  RcThumbnail,
} from '@ringcentral/juno';
import { Info, Pdf, Star } from '@ringcentral/juno-icon';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

import avatar from '../../../Avatar/__stories__/img/avatar.jpg';

export default {
  title: '🚀 Cleanup Components/Lists/ListItem Examples',
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
    ...notShowInDocTable<keyof ListItemProps>(['singleLine', 'maxWidth']),
  },
} as Meta;

type ListItemProps = ComponentProps<typeof RcListItem>;

export const SingleLineListItemExamples: Story<ListItemProps> = ({
  ...args
}) => {
  const AvatarCase = (
    <>
      <RcListSubheader>Avatar Case:</RcListSubheader>
      <RcListItem singleLine {...args}>
        <RcListItemAvatar>
          <RcAvatar size="xsmall" src={avatar} />
        </RcListItemAvatar>
        <RcListItemText primary="with Avatar size xsmall" />
      </RcListItem>
      <RcListItem singleLine {...args}>
        <RcListItemAvatar>
          <RcAvatar size="medium" src={avatar} />
        </RcListItemAvatar>
        <RcListItemText primary="with Avatar size medium" />
      </RcListItem>
      <RcDivider component={'li'} />
    </>
  );

  const IconCase = (
    <>
      <RcListSubheader>Icon/IconButton Case:</RcListSubheader>
      <RcListItem singleLine {...args}>
        <RcListItemIcon>
          <RcIcon title="favorite" symbol={Star} size="small" />
        </RcListItemIcon>
        <RcListItemText primary="use RcIcon" />
      </RcListItem>
      <RcListItem singleLine {...args}>
        <RcListItemIcon>
          <RcIconButton
            variant="plain"
            title="favorite"
            symbol={Star}
            size="small"
          />
        </RcListItemIcon>
        <RcListItemText primary="use RcIconButton" />
      </RcListItem>
      <RcDivider component={'li'} />
    </>
  );

  const IconControlCase = (
    <>
      <RcListSubheader>
        IconControl Case: use ListItemIcon with just Control
      </RcListSubheader>
      <RcListItem singleLine {...args}>
        <RcListItemIcon>
          <RcCheckbox />
        </RcListItemIcon>
        <RcListItemText primary="Checkbox Case" />
      </RcListItem>
      <RcListItem singleLine {...args}>
        <RcListItemIcon>
          <RcRadio />
        </RcListItemIcon>
        <RcListItemText primary="Radio Case" />
      </RcListItem>
      <RcListItem singleLine {...args}>
        <RcListItemIcon>
          <RcSwitch />
        </RcListItemIcon>
        <RcListItemText primary="Switch Case" />
      </RcListItem>

      <RcListSubheader>
        IconControl Case: use ListItemIcon with FormControlLabel
      </RcListSubheader>
      <RcListItem singleLine {...args}>
        <RcListItemIcon>
          <RcFormControlLabel control={<RcCheckbox />} label="" />
        </RcListItemIcon>
        <RcListItemText primary="Checkbox Case" />
      </RcListItem>
      <RcListItem singleLine {...args}>
        <RcListItemIcon>
          <RcFormControlLabel control={<RcRadio />} label="" />
        </RcListItemIcon>
        <RcListItemText primary="Radio Case" />
      </RcListItem>
      <RcListItem singleLine {...args}>
        <RcListItemIcon>
          <RcFormControlLabel control={<RcSwitch />} label="" />
        </RcListItemIcon>
        <RcListItemText primary="Switch Case" />
      </RcListItem>

      <RcListSubheader>
        IconControl Case: not ListItemIcon and use FormControlLabel
      </RcListSubheader>
      <RcListItem singleLine {...args}>
        <RcFormControlLabel control={<RcCheckbox />} label="" />
        <RcListItemText primary="Checkbox Case" />
      </RcListItem>
      <RcListItem singleLine {...args}>
        <RcFormControlLabel control={<RcRadio />} label="" />
        <RcListItemText primary="RcRadio Case" />
      </RcListItem>
      <RcListItem singleLine {...args}>
        <RcFormControlLabel control={<RcSwitch />} label="" />
        <RcListItemText primary="RcSwitch Case" />
      </RcListItem>
      <RcDivider component={'li'} />
    </>
  );

  const SecondaryActionCase = (
    <>
      <RcListSubheader>SecondaryAction Case:</RcListSubheader>
      <RcListItem singleLine {...args}>
        <RcListItemText primary="with RcIconButton" />
        <RcListItemSecondaryAction>
          <RcIconButton variant="plain" symbol={Info} size="small" />
        </RcListItemSecondaryAction>
      </RcListItem>
      <RcListItem singleLine {...args}>
        <RcListItemText primary="with string content" />
        <RcListItemSecondaryAction>meta</RcListItemSecondaryAction>
      </RcListItem>
      <RcListItem singleLine {...args}>
        <RcListItemText primary="with RcIconButton and span" />
        <RcListItemSecondaryAction>
          <span>meta</span>
          <RcIconButton variant="plain" symbol={Info} size="small" />
        </RcListItemSecondaryAction>
      </RcListItem>
      <RcDivider component={'li'} />
    </>
  );

  const SecondaryActionControlCase = (
    <>
      <RcListSubheader>SecondaryActionControl Case:</RcListSubheader>
      <RcListItem singleLine {...args}>
        <RcListItemIcon>
          <RcFormControlLabel control={<RcCheckbox />} label="" />
        </RcListItemIcon>
        <RcListItemText primary="with FormControl Checkbox" />
        <RcListItemSecondaryAction>
          <RcFormControlLabel control={<RcCheckbox />} label="" />
        </RcListItemSecondaryAction>
      </RcListItem>
      <RcListItem singleLine {...args}>
        <RcListItemIcon>
          <RcFormControlLabel control={<RcRadio />} label="" />
        </RcListItemIcon>
        <RcListItemText primary="with FormControl RcRadio" />
        <RcListItemSecondaryAction>
          <RcFormControlLabel control={<RcRadio />} label="" />
        </RcListItemSecondaryAction>
      </RcListItem>
      <RcListItem singleLine {...args}>
        <RcListItemIcon>
          <RcFormControlLabel control={<RcSwitch />} label="" />
        </RcListItemIcon>
        <RcListItemText primary="with FormControl RcSwitch" />
        <RcListItemSecondaryAction>
          <RcFormControlLabel control={<RcSwitch />} label="" />
        </RcListItemSecondaryAction>
      </RcListItem>
      <RcDivider component={'li'} />
    </>
  );

  return (
    <RcList>
      {AvatarCase}
      {IconCase}
      {IconControlCase}
      {SecondaryActionCase}
      {SecondaryActionControlCase}
    </RcList>
  );
};

SingleLineListItemExamples.args = {
  singleLine: true,
};

SingleLineListItemExamples.argTypes = {};

SingleLineListItemExamples.storyName = 'Single-Line Item';

export const MultipleLineListItemExamples: Story<ListItemProps> = ({
  ...args
}) => {
  const MultipleLineActions = {
    Icon: (
      <RcListItemSecondaryAction>
        <RcIconButton variant="plain" symbol={Info} />
      </RcListItemSecondaryAction>
    ),
    Text: <RcListItemSecondaryAction>Meta</RcListItemSecondaryAction>,
    IconAndText: (
      <RcListItemSecondaryAction>
        <span>meta</span>
        <RcIconButton variant="plain" symbol={Info} size="small" />
      </RcListItemSecondaryAction>
    ),
  };

  const primary = 'Two-line item name';
  const secondary = 'Secondary Text';

  return (
    <RcList>
      {Object.entries(MultipleLineActions).map(([key, value]) => {
        return (
          <RcListItem key={key} {...args}>
            <RcListItemText primary={primary} secondary={secondary} />
            {value}
          </RcListItem>
        );
      })}
      <RcListItem {...args}>
        <RcListItemIcon>
          <RcIconButton
            variant="plain"
            title="favorite"
            symbol={Star}
            size="medium"
          />
        </RcListItemIcon>
        <RcListItemText primary={primary} secondary={secondary} />
      </RcListItem>
      <RcListItem {...args}>
        <RcFormControlLabel control={<RcCheckbox indeterminate />} label="" />
        <RcListItemText primary={primary} secondary={secondary} />
      </RcListItem>
      <RcListItem {...args}>
        <RcFormControlLabel control={<RcRadio />} label="" />
        <RcListItemText primary={primary} secondary={secondary} />
        <RcListItemSecondaryAction>
          <RcFormControlLabel control={<RcCheckbox indeterminate />} label="" />
        </RcListItemSecondaryAction>
      </RcListItem>
      <RcListItem {...args}>
        <RcListItemAvatar>
          <RcAvatar size="xsmall" src={avatar} />
        </RcListItemAvatar>
        <RcListItemText primary={primary} secondary={secondary} />
      </RcListItem>
      <RcListItem {...args}>
        <RcListItemIcon>
          <RcThumbnail symbol={Pdf} />
        </RcListItemIcon>
        <RcListItemText primary={primary} secondary={secondary} />
        <RcListItemSecondaryAction>
          <RcSwitch />
        </RcListItemSecondaryAction>
      </RcListItem>
      <RcListItem {...args}>
        <RcListItemIcon>
          <RcThumbnail symbol={Pdf} />
        </RcListItemIcon>
        <RcListItemText primary={primary} secondary={secondary} />
        <RcListItemSecondaryAction>
          <RcFormControlLabel control={<RcCheckbox indeterminate />} label="" />
        </RcListItemSecondaryAction>
      </RcListItem>
    </RcList>
  );
};

MultipleLineListItemExamples.args = {};

MultipleLineListItemExamples.argTypes = {};

MultipleLineListItemExamples.storyName = 'Multiple-Line Item';
