import React, { ComponentProps } from 'react';

import { Meta, Story } from '@storybook/react';

import { notControlInDocTable, switchToControlKnobs } from '../../../storybook';
import { Title } from '../../../storybook/components';
import { RcLink } from '../../Link';
import { RcText } from '../../Text';
import { RcBox } from '../Box';

export default {
  title: '🚀 Cleanup Components/Box',
  component: RcBox,
  argTypes: {
    children: {
      description: 'Box render function or node.',
      control: { type: 'object' },
    },
    clone: {
      description: `If \`true\`, the box will recycle its children DOM element. It's using \`React.cloneElement\` internally.`,
      control: { type: 'boolean' },
    },
    component: {
      description: `The component used for the root node. Either a string to use a DOM element or a component.`,
      control: { type: 'object' },
    },
  },
} as Meta;

type BoxProps = ComponentProps<typeof RcBox>;

export const Box: Story<BoxProps> = ({ children, ...args }) => {
  switchToControlKnobs();
  return (
    <>
      <Title>
        The Box component packages{' '}
        <RcText highlight>all the style functions</RcText> that are exposed in{' '}
        <RcLink href="https://material-ui.com/system/basics/" variant="inherit">
          <RcText highlight>@material-ui/system</RcText>
        </RcLink>
      </Title>
      <RcBox color="neutral.f06" bgcolor="neutral.b01" clone width={300}>
        <div>Box Example</div>
      </RcBox>
      <RcBox
        zIndex="modal"
        color="warning.f02"
        bgcolor="neutral.b03"
        border="1px solid"
        borderColor="warning.f02"
        m={1}
        p={3}
        component="div"
        boxShadow={3}
        width={1 / 4}
      >
        Box Example
      </RcBox>
    </>
  );
};

Box.storyName = 'Box';

Box.args = {};

Box.argTypes = {
  ...notControlInDocTable<keyof BoxProps>([]),
};

Box.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/box/',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
