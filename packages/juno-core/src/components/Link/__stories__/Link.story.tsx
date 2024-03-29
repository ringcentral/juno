import React, { ComponentProps } from 'react';

import { RcLink } from '@ringcentral/juno';
import { notShowInDocTable, paletteChoice } from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🚀 Cleanup Components/Link',
  component: RcLink,
  argTypes: {
    color: {
      options: paletteChoice,
      control: {
        type: 'select',
      },
    },
    children: {
      control: {
        type: 'text',
      },
    },
    ...notShowInDocTable<keyof LinkProps>(['handleOnClick', 'size']),
  },
} as Meta;

type LinkProps = ComponentProps<typeof RcLink>;

export const Link: Story<LinkProps> = ({ children, ...args }) => {
  return (
    <>
      <RcLink
        tabIndex={0}
        href="https://ringcentral.github.io/juno/assets/logo.png"
        target="_blank"
        onClick={(e) => {
          console.log('onClick');
        }}
        onKeyDown={(e) => {
          console.log('onKeyDown');
        }}
        {...args}
      >
        {children}
      </RcLink>
      <br />
      <RcLink
        tabIndex={0}
        onClick={(e) => {
          console.log('onClick');
        }}
        {...args}
        Component="div"
        underline
      >
        {children}
      </RcLink>
    </>
  );
};

Link.args = {
  children: 'button',
};

Link.parameters = {
  tags: [
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
