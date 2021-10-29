import { Meta, Story } from '@storybook/react/types-6-0';
import React, { ComponentProps, FunctionComponent } from 'react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../../storybook';
import { RcPaper } from '../../../Paper';
import { RcTypography } from '../../../Typography';
import { RcTab } from '../../Tab';
import { RcTabs, RcTabsMoreMenuGroupInfoType } from '../Tabs';
import { RcBadge } from '../../../Badge';
import MoreHorizIcon from '../../../../icon/MoreHoriz';
import { RcIcon } from '../../../Icon';

export default {
  title: '🚀 Cleanup Components/Tabs/Tabs',
  component: RcTabs,
  argTypes: {
    ...sortInDocTable<keyof TabsProps>([
      'variant',
      'size',
      'orientation',
      'centered',
      'scrollButtons',
      'selectionFollowsFocus',
    ]),
    ...notControlInDocTable<keyof TabsProps>([]),
    ...notShowInDocTable<keyof TabsProps>([]),
  },
  excludeStories: /TabsExampleComponent/,
} as Meta;

type TabsProps = ComponentProps<typeof RcTabs>;

export const Tabs: Story<TabsProps> = ({ ...args }) => {
  switchToControlKnobs();
  return (
    <RcPaper square>
      <RcTabs {...args}>
        <RcTab label="Tab 1" />
        <RcTab label="Tab 2" />
        <RcTab label="Tab 3" />
        <RcTab label="Tab 4" />
        <RcTab label="Tab 5" />
        <RcTab label="Tab 6" disabled />
        <RcTab label="Tab 7" />
        <RcTab label="Tab 8" />
      </RcTabs>
    </RcPaper>
  );
};

Tabs.storyName = 'Tabs';

Tabs.args = {
  value: 0,
};

Tabs.argTypes = {
  ...notControlInDocTable<keyof TabsProps>([]),
};

Tabs.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/tabs/',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

const tabsData = [
  { label: 'Tab 0', value: 'tab-0', 'data-test-automation-id': 'tab-test-0' },
  { label: 'Tab 1', value: 'tab-1', 'data-test-automation-id': 'tab-test-1' },
  { label: 'Tab 2', value: 'tab-2', 'data-test-automation-id': 'tab-test-2' },
  { label: 'Tab 3', value: 'tab-3', 'data-test-automation-id': 'tab-test-3' },
  { label: 'Tab 4', value: 'tab-4', 'data-test-automation-id': 'tab-test-4' },
  {
    label: 'Tab 5',
    value: 'tab-5',
    disabled: true,
    'data-test-automation-id': 'tab-test-5',
  },
  { label: 'Tab 6', value: 'tab-6', 'data-test-automation-id': 'tab-test-6' },
  {
    label: 'Tab 77777777',
    value: 'tab-7',
    'data-test-automation-id': 'tab-test-7',
  },
  { label: 'Tab 8', value: 'tab-8', 'data-test-automation-id': 'tab-test-8' },
  { label: 'Tab 9', value: 'tab-9', 'data-test-automation-id': 'tab-test-9' },
];

export const TabsChangeExample: Story<TabsProps> = ({ ...args }) => {
  switchToControlKnobs();

  const [value, setValue] = React.useState('tab-0');
  const handleChange = (event: React.ChangeEvent<{}>, value: any) => {
    setValue(value);
  };

  const TabChildren = tabsData.map((tab) => {
    const { label, value, disabled, ...rest } = tab;
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

  return (
    <>
      <RcTypography color="neutral.f06" variant="body2" gutterBottom>
        variant = "standard"
      </RcTypography>
      <RcPaper square>
        <RcTabs
          {...args}
          value={value}
          onChange={handleChange}
          variant="standard"
        >
          {TabChildren}
        </RcTabs>
      </RcPaper>
      <br />
      <RcTypography color="neutral.f06" variant="body2" gutterBottom>
        variant = "scrollable"
      </RcTypography>
      <RcPaper square>
        <RcTabs
          {...args}
          value={value}
          onChange={handleChange}
          variant="scrollable"
        >
          {TabChildren}
        </RcTabs>
      </RcPaper>
      <br />
      <RcTypography color="neutral.f06" variant="body2" gutterBottom>
        variant = "fullWidth"
      </RcTypography>
      <RcPaper square>
        <RcTabs
          {...args}
          value={value}
          onChange={handleChange}
          variant="fullWidth"
        >
          {TabChildren}
        </RcTabs>
      </RcPaper>
      <br />
      <RcTypography color="neutral.f06" variant="body2" gutterBottom>
        variant = "moreMenu"
      </RcTypography>
      <RcPaper square>
        <RcTabs
          {...args}
          value={value}
          onChange={handleChange}
          variant="moreMenu"
          MoreButtonProps={{
            MenuProps: {
              id: 'custom-menu-id',
              MenuListProps: {
                className: 'moreMenuList-className',
              },
            },
            TooltipProps: {
              title: 'tooltip',
              'data-test-automation-id': 'tooltip-automation-id',
            },
          }}
        >
          {TabChildren}
        </RcTabs>
      </RcPaper>
      <br />
    </>
  );
};

TabsChangeExample.storyName = 'Tabs Example';

TabsChangeExample.argTypes = {
  ...notControlInDocTable<keyof TabsProps>(['variant']),
};

TabsChangeExample.args = {};

type TabsCustomExampleProps = {};

const tabsData2: {
  key: string;
  badgeNumber: number;
  label: string;
  value: string;
}[] = [
  {
    key: 'tab-0',
    badgeNumber: 7,
    label: 'Tab 0',
    value: 'tab-0',
  },
  {
    key: 'tab-1',
    badgeNumber: 0,
    label: 'Tab 1',
    value: 'tab-1',
  },
  {
    key: 'tab-2',
    badgeNumber: 54,
    label: 'Tab 2',
    value: 'tab-2',
  },
  {
    key: 'tab-3',
    badgeNumber: 72,
    label: 'Tab 3',
    value: 'tab-3',
  },
  {
    key: 'tab-4',
    badgeNumber: 2,
    label: 'Tab 4',
    value: 'tab-4',
  },
];

export const TabsCustomExample: Story<TabsCustomExampleProps> = (args) => {
  const [value, setValue] = React.useState('tab-0');
  const [moreBadgeNumber, setMoreBadgeNumber] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, value: any) => {
    console.log(event, value);
    setValue(value);
  };

  const MoreIconCmp = (
    <>
      <RcIcon size="medium" symbol={MoreHorizIcon} />
      <RcBadge badgeContent={moreBadgeNumber} showZero={false} overlap="none" />
    </>
  );

  const handleGroupInfoChange = (info: RcTabsMoreMenuGroupInfoType) => {
    const [tabItems, menuItems] = info;
    setMoreBadgeNumber(
      menuItems.reduce(
        (acc, curr) =>
          curr.index ? acc + tabsData2[curr.index].badgeNumber : acc,
        0,
      ),
    );
  };

  return (
    <>
      <RcTypography variant="body1" gutterBottom>
        Through the resize window, observe the change of the badge on the more
        button. (variant="moreMenu")
      </RcTypography>
      <RcPaper square>
        <RcTabs
          {...args}
          value={value}
          onChange={handleChange}
          MoreButtonProps={{
            MoreIcon: MoreIconCmp,
            direction: 'vertical',
            onGroupInfoChange: handleGroupInfoChange,
          }}
        >
          {tabsData2.map((data) => {
            const { key, label, value, badgeNumber } = data;
            return (
              <RcTab
                key={key}
                label={
                  <>
                    <RcTypography variant="body1" component="span">
                      {label}
                    </RcTypography>
                    <RcBadge
                      badgeContent={badgeNumber}
                      showZero={false}
                      overlap="none"
                    />
                  </>
                }
                value={value}
                direction="vertical"
              />
            );
          })}
        </RcTabs>
      </RcPaper>
    </>
  );
};
TabsCustomExample.args = {
  variant: 'moreMenu',
};

type TabsExampleComponentProps = {} & Partial<ComponentProps<typeof RcTabs>>;

export const TabsExampleComponent: FunctionComponent<TabsExampleComponentProps> = (
  args,
) => {
  const [value, setValue] = React.useState('tab-0');
  const handleChange = (event: React.ChangeEvent<{}>, value: any) => {
    setValue(value);
  };

  const TabChildren = tabsData.map((tab) => {
    const { label, value, disabled, ...rest } = tab;
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

  return (
    <RcPaper square>
      <RcTabs
        {...args}
        value={value}
        onChange={handleChange}
        variant="moreMenu"
      >
        {TabChildren}
      </RcTabs>
    </RcPaper>
  );
};
