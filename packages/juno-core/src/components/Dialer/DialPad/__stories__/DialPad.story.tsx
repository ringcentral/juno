import React, { ComponentProps } from 'react';

import { RcDialerPadSounds, RcDialPad, styled } from '@ringcentral/juno';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
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
  switchToControlKnobs();

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
