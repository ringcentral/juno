import React, { ComponentProps, useState } from 'react';

import { RcBox, RcGrow, RcSwitch } from '@ringcentral/juno';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🚀 Cleanup Components/🌈Animations/Transition/Grow',
  component: RcGrow,
  argTypes: {
    ...sortInDocTable<keyof GrowProps>([]),
    ...notControlInDocTable<keyof GrowProps>([]),
    ...notShowInDocTable<keyof GrowProps>([]),
  },
} as Meta;

type GrowProps = ComponentProps<typeof RcGrow>;

export const Grow: Story<GrowProps> = ({ children, in: openProp, ...args }) => {
  const [open, setOpen] = useState(!!openProp);

  return (
    <>
      <RcSwitch
        checked={open}
        label="Show"
        onClick={() => {
          setOpen(!open);
        }}
      />
      <br />
      <br />
      <RcBox display="flex">
        <RcGrow in={open} {...args}>
          <RcBox width="100px" height="100px" bgcolor="neutral.b03" />
        </RcGrow>
      </RcBox>
    </>
  );
};

Grow.storyName = 'Grow';

Grow.args = {};

Grow.argTypes = {
  ...notControlInDocTable<keyof GrowProps>([]),
};

Grow.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/transitions/#Grow',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
