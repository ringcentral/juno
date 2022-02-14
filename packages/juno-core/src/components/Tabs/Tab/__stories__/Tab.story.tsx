import React, { ComponentProps } from 'react';

import { Pin as PinSvg } from '@ringcentral/juno-icon';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

import { RcBadge } from '../../../Badge';
import { RcIcon } from '../../../Icon';
import { RcTypography } from '../../../Typography';
import { RcTab } from '../Tab';

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
      name: 'Spec',
      href: 'https://app.abstract.com/projects/d893ad32-0d8d-4e65-a37a-b4a5c881c51b/branches/master/commits/61ef0d5dc04f09a714f4f7f383738f95e0826a16/files/8ffaf9bc-6939-4ef9-9bd1-6aa5b460e2ae/layers/3EFB9023-C9C4-4422-A95C-0CFCA8C54E33',
    },
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
