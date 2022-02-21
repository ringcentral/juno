import React from 'react';

import { RcButton, useThrottle } from '@ringcentral/juno';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🔧 Foundation/Hooks/useThrottle',
  argTypes: {},
} as Meta;

export const useThrottleExample: Story<{}> = () => {
  const debounceFn = useThrottle(
    () => console.log('trigger event with 1000ms throttle'),
    1000,
  );

  const handleClick = () => {
    console.log('click');
    debounceFn();
  };

  return <RcButton onClick={handleClick}>Trigger event</RcButton>;
};

useThrottleExample.args = {};
useThrottleExample.storyName = 'useThrottle';
