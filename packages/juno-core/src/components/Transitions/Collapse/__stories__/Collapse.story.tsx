import React, { ComponentProps, useState } from 'react';

import { RcBox, RcButton, RcCollapse } from '@ringcentral/juno';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🚀 Cleanup Components/🌈Animations/Transition/Collapse',
  component: RcCollapse,
  argTypes: {
    ...sortInDocTable<keyof CollapseProps>([]),
    ...notControlInDocTable<keyof CollapseProps>([]),
    ...notShowInDocTable<keyof CollapseProps>([]),
  },
} as Meta;

type CollapseProps = ComponentProps<typeof RcCollapse>;

export const Collapse: Story<CollapseProps> = ({
  children,
  in: openProp,
  ...args
}) => {
  switchToControlKnobs();
  const [open, setOpen] = useState(openProp);

  return (
    <>
      <RcButton
        onClick={() => {
          setOpen(!open);
        }}
      >
        Collapse
      </RcButton>
      <br />
      <br />
      <RcBox display="flex">
        <RcCollapse in={open} {...args}>
          <RcBox width="100px" height="100px" bgcolor="neutral.b03" />
        </RcCollapse>

        <RcCollapse in={open} collapsedSize="28px">
          <RcBox
            width="100px"
            marginLeft="1rem"
            height="100px"
            bgcolor="neutral.b03"
          />
        </RcCollapse>
      </RcBox>
    </>
  );
};

Collapse.storyName = 'Collapse';

Collapse.args = {};

Collapse.argTypes = {
  ...notControlInDocTable<keyof CollapseProps>([]),
};

Collapse.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/transitions/#collapse',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
