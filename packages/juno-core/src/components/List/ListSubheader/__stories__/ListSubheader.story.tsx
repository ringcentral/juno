import React, { ComponentProps } from 'react';

import {
  RcList,
  RcListItem,
  RcListItemText,
  RcListSubheader,
} from '@ringcentral/juno';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🚀 Cleanup Components/Lists/ListSubheader',
  component: RcListSubheader,
  argTypes: {
    ...sortInDocTable<keyof ListSubheaderProps>([]),
    ...notControlInDocTable<keyof ListSubheaderProps>([]),
    ...notShowInDocTable<keyof ListSubheaderProps>([]),
  },
} as Meta;

type ListSubheaderProps = ComponentProps<typeof RcListSubheader>;

export const ListSubheader: Story<ListSubheaderProps> = ({
  children,
  ...args
}) => {
  return (
    <RcList subheader={<li />} style={{ height: '200px', overflow: 'auto' }}>
      {[0, 1, 2, 3, 4].map((sectionId) => (
        <li key={`section-${sectionId}`}>
          <ul>
            <RcListSubheader {...args}>
              {`I'm sticky ${sectionId}`}
            </RcListSubheader>
            {[0, 1, 2].map((item) => (
              <RcListItem key={`item-${sectionId}-${item}`}>
                <RcListItemText primary={`Item ${item}`} />
              </RcListItem>
            ))}
          </ul>
        </li>
      ))}
    </RcList>
  );
};

ListSubheader.args = {};

ListSubheader.argTypes = {
  ...notControlInDocTable<keyof ListSubheaderProps>([]),
};

ListSubheader.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/demos/lists/#pinned-subheader-list',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

ListSubheader.storyName = 'ListSubheader';
