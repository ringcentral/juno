import React, { ComponentProps } from 'react';

import {
  RcDialerPadSounds,
  RcDialPad,
  RcDialPadButton,
  spacing,
  styled,
} from '@ringcentral/juno';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🚀 Cleanup Components/Dialer/DialPad',
  component: RcDialPad,
  argTypes: {
    ...sortInDocTable<keyof DialPadProps>([]),
    ...notControlInDocTable<keyof DialPadProps>([]),
    ...notShowInDocTable<keyof DialPadProps>([]),
  },
} as Meta;

type DialPadProps = ComponentProps<typeof RcDialPad>;

const Wrapper = styled.div`
  width: 280px;
  resize: horizontal;
  overflow: hidden;
`;

export const DialPad: Story<DialPadProps> = ({ children, ...args }) => {
  return (
    <Wrapper>
      <RcDialPad
        sounds={RcDialerPadSounds}
        getDialPadButtonProps={(v) => ({ 'data-test-id': `${v}` })}
        {...args}
      />
    </Wrapper>
  );
};

const CustomWrapper = styled.div`
  width: 195px;
  overflow: hidden;

  ${RcDialPadButton} {
    margin: ${spacing(2)};
  }
`;

export const CustomDialPad: Story<DialPadProps> = ({ children, ...args }) => {
  return (
    <CustomWrapper>
      <RcDialPad
        sounds={RcDialerPadSounds}
        getDialPadButtonProps={(v) => ({
          'data-test-id': `${v}`,
          size: 'large',
          variant: 'contained',
          color: 'neutral.b03',
          elevation: '0',
          activeElevation: '0',
        })}
        autoSize={false}
        {...args}
      />
    </CustomWrapper>
  );
};

DialPad.storyName = 'DialPad';

DialPad.args = {};

DialPad.argTypes = {
  ...notControlInDocTable<keyof DialPadProps>([]),
};

DialPad.parameters = {
  tags: [
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
