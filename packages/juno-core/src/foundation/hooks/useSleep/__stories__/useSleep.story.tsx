import React, { useState } from 'react';

import { Title } from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

import { RcButton } from '../../../../components/Buttons';
import { useSleep } from '../useSleep';

export default {
  title: '🔧 Foundation/Hooks/useSleep',
  argTypes: {},
} as Meta;

export const useRetryExample: Story<{}> = () => {
  const { sleep, cancel } = useSleep();
  const [text, setText] = useState('');

  return (
    <>
      <RcButton
        onClick={async (e) => {
          setText('start');
          try {
            await sleep(1000);
            setText('complete');
          } catch (error) {
            setText('cancel');
          }
        }}
      >
        Go
      </RcButton>
      <RcButton onClick={(e) => cancel()} color="danger.b03">
        Cancel
      </RcButton>
      <Title>{text}</Title>
    </>
  );
};

useRetryExample.args = {};
useRetryExample.storyName = 'useSleep';
