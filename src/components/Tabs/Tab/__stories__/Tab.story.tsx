import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';

import PinSvg from '../../../../icon/Pin';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../../storybook';
import { RcIcon } from '../../../Icon';
import { RcTab } from '../Tab';
import { RcBadge } from '../../../Badge';
import { RcTypography } from '../../../Typography';

export default {
  title: '🚀 Cleanup Components/Tabs/Tab',
  component: RcTab,
  argTypes: {
    ...sortInDocTable<keyof TabProps>([]),
    ...notControlInDocTable<keyof TabProps>([]),
    ...notShowInDocTable<keyof TabProps>([]),
  },
} as Meta;

type TabProps = ComponentProps<typeof RcTab>;

export const Tab: Story<TabProps> = ({ children, ...args }) => {
  switchToControlKnobs();
  return (
    <>
      <RcTab {...args} label="Just Tab Component" />
      <br />
      <RcTab {...args} label="With Icon" icon={<RcIcon symbol={PinSvg} />} />
      <br />
      <RcTab
        {...args}
        label={
          <>
            <RcTypography variant="body1" component="span">
              Tab 1
            </RcTypography>
            <RcBadge badgeContent={5} overlap="none" />
          </>
        }
        value="tab_1"
      />
    </>
  );
};

Tab.storyName = 'Tab';

Tab.args = {
  tabIndex: 0,
  direction: undefined,
};

Tab.argTypes = {
  ...notControlInDocTable<keyof TabProps>([]),
};

Tab.parameters = {
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
