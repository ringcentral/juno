import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';

import { RcButton } from '../../../../components/Buttons';
import { Title } from '../../../../storybook/components';
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
