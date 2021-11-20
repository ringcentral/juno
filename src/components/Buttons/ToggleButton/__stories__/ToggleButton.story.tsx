import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';

import { AlignJustify } from '../../../../icon';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../../storybook';
import { Title } from '../../../../storybook/components';
import { RcToggleButton } from '../ToggleButton';

export default {
  title: '🚀 Cleanup Components/Buttons/ToggleButtonGroup/ToggleButton',
  component: RcToggleButton,
  argTypes: {
    ...sortInDocTable<keyof ToggleButtonProps>([
      'variant',
      'size',
      'symbol',
      'IconProps',
      'selected',
      'disabled',
    ]),
    ...notControlInDocTable<keyof ToggleButtonProps>([]),
    ...notShowInDocTable<keyof ToggleButtonProps>([]),
  },
} as Meta;

type ToggleButtonProps = ComponentProps<typeof RcToggleButton>;

export const ToggleButton: Story<ToggleButtonProps> = ({
  children,
  ...args
}) => {
  switchToControlKnobs();
  return (
    <>
      <Title>ToggleButton should use with RcToggleButton</Title>
      <RcToggleButton value="justify" {...args} symbol={AlignJustify} />
    </>
  );
};

ToggleButton.storyName = 'ToggleButton';

ToggleButton.args = {};

ToggleButton.argTypes = {
  ...notControlInDocTable<keyof ToggleButtonProps>([]),
};

ToggleButton.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/toggle-button/#toggle-buttons',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
