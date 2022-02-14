import React, { ComponentProps } from 'react';

import { Meta, Story } from '@storybook/react';

import { AlignJustify } from '@ringcentral/juno-icon';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
  Title,
} from '@ringcentral/juno-storybook';

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
      name: 'Spec',
      href: 'https://app.abstract.com/projects/d893ad32-0d8d-4e65-a37a-b4a5c881c51b/branches/3c7760bb-8d54-4def-9b30-a50638e618db/commits/4bed494768a18c9e3d10d11dec38590203d12fd3/files/8ffaf9bc-6939-4ef9-9bd1-6aa5b460e2ae/layers/450E7402-70DD-4134-9F26-27B08F55459B?mode=design',
    },
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
