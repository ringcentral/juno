import React, { ComponentProps } from 'react';

import { Meta, Story } from '@storybook/react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../../storybook';
import { RcButton } from '../../Button';
import { RcButtonGroup } from '../ButtonGroup';

export default {
  title: '🚀 Cleanup Components/Buttons/ButtonGroup',
  component: RcButtonGroup,
  argTypes: {
    ...sortInDocTable<keyof ButtonGroupProps>([]),
    ...notControlInDocTable<keyof ButtonGroupProps>([]),
    ...notShowInDocTable<keyof ButtonGroupProps>([]),
  },
} as Meta;

type ButtonGroupProps = ComponentProps<typeof RcButtonGroup>;

export const ButtonGroup: Story<ButtonGroupProps> = ({ children, ...args }) => {
  switchToControlKnobs();
  return (
    <RcButtonGroup {...args}>
      <RcButton>One</RcButton>
      <RcButton>Two</RcButton>
    </RcButtonGroup>
  );
};

ButtonGroup.storyName = 'ButtonGroup';

ButtonGroup.args = {};

ButtonGroup.argTypes = {
  ...notControlInDocTable<keyof ButtonGroupProps>([]),
};

ButtonGroup.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/button-group/#button-group',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
