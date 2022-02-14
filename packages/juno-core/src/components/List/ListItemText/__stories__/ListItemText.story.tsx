import React, { ComponentProps } from 'react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

import { RcListItem } from '../../ListItem';
import { RcListItemText } from '../ListItemText';

export default {
  title: '🚀 Cleanup Components/Lists/ListItemText',
  component: RcListItemText,
  argTypes: {
    ...sortInDocTable<keyof ListItemTextProps>([
      'inset',
      'disableTypography',
      'isEllipsis',
      'primary',
      'primaryTypographyProps',
      'secondary',
      'secondaryTypographyProps',
    ]),
    ...notControlInDocTable<keyof ListItemTextProps>([]),
    ...notShowInDocTable<keyof ListItemTextProps>([
      'primaryColor',
      'alignCenter',
      'lineThrough',
    ]),
  },
} as Meta;

type ListItemTextProps = ComponentProps<typeof RcListItemText>;

export const ListItemText: Story<ListItemTextProps> = ({
  children,
  ...args
}) => {
  switchToControlKnobs();
  return (
    <RcListItem>
      <RcListItemText {...args} />
    </RcListItem>
  );
};

ListItemText.args = {
  primary: 'ListItem Primary Content',
  secondary: 'ListItem Secondary Content',
  primaryTypographyProps: {
    variant: 'body1',
    color: 'neutral.f06',
  },
  secondaryTypographyProps: {
    variant: 'caption1',
    color: 'neutral.f04',
  },
};

ListItemText.argTypes = {
  ...notControlInDocTable<keyof ListItemTextProps>([]),
};

ListItemText.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/demos/lists/',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

ListItemText.storyName = 'ListItemText';
