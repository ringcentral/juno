import React, { useState } from 'react';

import { Title } from '../../../../storybook/components';
import { Meta, Story } from '@storybook/react';

import { RcButton } from '../../../../components/Buttons';
import { useInterval } from '../useInterval';

export default {
  title: '🔧 Foundation/Hooks/useInterval',
  argTypes: {},
} as Meta;

export const useRetryExample: Story<{}> = () => {
  const [times, setTimes] = useState(0);

  const { cancel, play, pause, getRunning } = useInterval((t) => {
    console.log('current times from 0', t);
    setTimes(t);
  }, 1000);

  return (
    <>
      <RcButton onClick={() => pause()} color="warning.b03">
        Pause
      </RcButton>
      <RcButton onClick={() => play()} color="success.b04">
        Continue
      </RcButton>
      <RcButton
        onClick={() => {
          cancel();
          setTimes(0);
        }}
        color="danger.b03"
      >
        Cancel
      </RcButton>
      <RcButton
        onClick={() => {
          // eslint-disable-next-line no-alert
          alert(`current interval running state is ${getRunning()}`);
        }}
      >
        Get Running State
      </RcButton>
      <Title>{times}</Title>
    </>
  );
};

useRetryExample.args = {};
useRetryExample.storyName = 'useInterval';
