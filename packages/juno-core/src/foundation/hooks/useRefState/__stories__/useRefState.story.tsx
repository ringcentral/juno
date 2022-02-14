import React from 'react';

import { Title } from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

import { RcButton } from '../../../../components';
import { useRefState } from '../useRefState';

export default {
  title: '🔧 Foundation/Hooks/useRefState',
  argTypes: {},
} as Meta;

export const useRefStateExample: Story<{}> = () => {
  const [valueRef, setValue] = useRefState(1);

  return (
    <>
      <RcButton onClick={() => setValue(valueRef.current + 1)}>
        add (re-render)
      </RcButton>
      <RcButton onClick={() => setValue(valueRef.current + 1, false)}>
        add (non-render)
      </RcButton>
      <Title>{valueRef.current}</Title>
    </>
  );
};

useRefStateExample.args = {};
useRefStateExample.storyName = 'useRefState';
