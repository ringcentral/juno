import { Meta, Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';

import { styled } from '../../../../foundation';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../../storybook';
import { RcPaper } from '../../../Paper';
import { RcTypography } from '../../../Typography';
import { RcTab } from '../../Tab';
import { RcTabContext } from '../../TabContext';
import { RcTabList } from '../../TabList';
import { RcTabPanel } from '../TabPanel';

export default {
  title: '🚀 Cleanup Components/Tabs/TabContext/TabPanel',
  component: RcTabPanel,
  argTypes: {
    ...sortInDocTable<keyof TabPanelProps>([]),
    ...notControlInDocTable<keyof TabPanelProps>([]),
    ...notShowInDocTable<keyof TabPanelProps>([]),
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

type TabPanelProps = ComponentProps<typeof RcTabPanel>;

const CustomTabPanel = styled(RcTabPanel)<{ idx: number }>`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;

    background: linear-gradient(
      120deg,
      #84fab0 ${({ idx }) => `${idx * 10}%`},
      #8fd3f4 ${({ idx }) => `${(idx + 1.5) * 10}%`}
    );
  }
`;

export const TabPanel: Story<TabPanelProps> = ({ ...args }) => {
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

  const TabContentChildren = tabsData.map((tab, idx) => {
    const { value, content } = tab;
    return (
      <CustomTabPanel {...args} idx={idx} key={value} value={value}>
        {content}
      </CustomTabPanel>
    );
  });

  return (
    <>
      <RcTypography variant="body2" gutterBottom>
        Custom RcTabPanel
      </RcTypography>
      <RcTabContext value={value}>
        <RcPaper square>
          <RcTabList onChange={handleChange} aria-label="simple tabs example">
            {TabChildren}
          </RcTabList>
        </RcPaper>
        {TabContentChildren}
      </RcTabContext>
    </>
  );
};

TabPanel.storyName = 'TabPanel';

TabPanel.args = {};

TabPanel.argTypes = {
  ...notControlInDocTable<keyof TabPanelProps>(['value']),
};
