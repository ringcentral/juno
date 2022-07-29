import React, { ComponentProps } from 'react';

import { RcButtonBase, RcTypography, styled } from '@ringcentral/juno';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🚀 Cleanup Components/Buttons/ButtonBase',
  component: RcButtonBase,
  argTypes: {
    ...sortInDocTable<keyof ButtonBaseProps>([]),
    ...notControlInDocTable<keyof ButtonBaseProps>([]),
    ...notShowInDocTable<keyof ButtonBaseProps>([]),
  },
} as Meta;

type ButtonBaseProps = ComponentProps<typeof RcButtonBase>;

const Wrapper = styled.div`
  .ripple {
    color: red;
  }
`;

type ButtonBaseButtonProps = ComponentProps<typeof RcButtonBase>;

export const ButtonBase: Story<ButtonBaseButtonProps> = ({ ...args }) => {
  return (
    <Wrapper>
      <RcButtonBase
        {...args}
        TouchRippleProps={{
          classes: {
            ripple: 'ripple',
          },
        }}
      >
        <RcTypography color="neutral.f06">cool</RcTypography>
      </RcButtonBase>
    </Wrapper>
  );
};

ButtonBase.args = {};

ButtonBase.argTypes = {
  ...notControlInDocTable<keyof ButtonBaseProps>([]),
};

ButtonBase.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/api/button-base/',
    },
  ],
};

ButtonBase.storyName = 'ButtonBase';
