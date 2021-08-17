import { Meta, Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../../storybook';
import { RcPaper } from '../../../Paper';
import { RcTab } from '../../Tab';
import { RcTabContext } from '../../TabContext';
import { RcTabPanel } from '../../TabPanel';
import { RcTabList } from '../TabList';

export default {
  title: '🚀 Cleanup Components/Tabs/TabContext/TabList',
  component: RcTabList,
  argTypes: {
    ...sortInDocTable<keyof TabListProps>([
      'variant',
      'size',
      'orientation',
      'centered',
      'scrollButtons',
      'selectionFollowsFocus',
    ]),
    ...notControlInDocTable<keyof TabListProps>([]),
    ...notShowInDocTable<keyof TabListProps>([]),
  },
} as Meta;

const tabsData = [
  { label: 'Tab 0', value: 'tab-0', content: 'Tab Content 0' },
  { label: 'Tab 1', value: 'tab-1', content: 'Tab Content 1' },
  { label: 'Tab 2', value: 'tab-2', content: 'Tab Content 2' },
  { label: 'Tab 3', value: 'tab-3', content: 'Tab Content 3' },
  { label: 'Tab 4', value: 'tab-4', content: 'Tab Content 4' },
  {
    label: 'Tab 5',
    value: 'tab-5',
    disabled: true,
    content: 'Tab Content 5',
  },
  { label: 'Tab 6', value: 'tab-6', content: 'Tab Content 6' },
  {
    label: 'Tab 77777777',
    value: 'tab-7',
    content: 'Tab Content 7',
  },
  { label: 'Tab 8', value: 'tab-8', content: 'Tab Content 8' },
  { label: 'Tab 9', value: 'tab-9', content: 'Tab Content 9' },
];

type TabListProps = ComponentProps<typeof RcTabList>;

export const TabList: Story<TabListProps> = ({ ...args }) => {
  switchToControlKnobs();

  const [value, setValue] = React.useState(tabsData[0].value);

  const handleChange = (event: React.ChangeEvent<{}>, value: any) => {
    setValue(value);
  };

  const TabChildren = tabsData.map((tab) => {
    const { label, value, disabled, content, ...rest } = tab;
    return (
      <RcTab
        key={label}
        label={label}
        value={value}
        disabled={disabled}
        {...rest}
      />
    );
  });

  const TabContentChildren = tabsData.map((tab) => {
    const { value, content } = tab;
    return (
      <RcTabPanel key={value} value={value}>
        {content}
      </RcTabPanel>
    );
  });

  return (
    <RcTabContext value={value}>
      <RcPaper square>
        <RcTabList
          {...args}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          {TabChildren}
        </RcTabList>
      </RcPaper>
      {TabContentChildren}
    </RcTabContext>
  );
};

TabList.storyName = 'TabList';

TabList.args = {};

TabList.argTypes = {
  ...notControlInDocTable<keyof TabListProps>([]),
};
