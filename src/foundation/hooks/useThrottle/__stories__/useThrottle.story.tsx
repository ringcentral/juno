import { Meta, Story } from '@storybook/react';
import React from 'react';

import { RcButton } from '../../../../components/Buttons';
import { useThrottle } from '../useThrottle';

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
