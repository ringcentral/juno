import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import { RcButton } from '../../../../components/Buttons';
import { useDebounce } from '../useDebounce';

export default {
  title: '🔧 Foundation/Hooks/useDebounce',
  argTypes: {},
} as Meta;

export const useDebounceExample: Story<{}> = () => {
  const debounceFn = useDebounce((value: number) => {
    alert(`trigger event after 1000ms debounce, get value: ${value}`);
    return 50;
  }, 1000);

  const handleClick = () => {
    console.log('click');
    debounceFn(9999);
  };

  return (
    <>
      <RcButton onClick={handleClick}>Trigger event(debounce 1000ms)</RcButton>
      <br />
      <RcButton
        color="danger.b04"
        onClick={() => {
          debounceFn.cancel();
        }}
      >
        cancel
      </RcButton>
      <br />
      <RcButton
        color="success.b04"
        onClick={() => {
          console.log(debounceFn.flush());
        }}
      >
        flush (trigger pending event inimitably)
      </RcButton>
    </>
  );
};

useDebounceExample.args = {};
useDebounceExample.storyName = 'useDebounce';
