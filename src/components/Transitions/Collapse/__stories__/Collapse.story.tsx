import { Meta, Story } from '@storybook/react/types-6-0';
import React, { ComponentProps, useState } from 'react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../../storybook';
import { RcBox } from '../../../Box';
import { RcButton } from '../../../Buttons';
import { RcCollapse } from '../Collapse';

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

        <RcCollapse in={open} collapsedHeight="28px">
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
