import React, { useRef } from 'react';

import { RcButton, useForceUpdate } from '@ringcentral/juno';
import { Title } from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🔧 Foundation/Hooks/useForceUpdate',
  argTypes: {},
} as Meta;

export const useForceUpdateExample: Story<{}> = () => {
  const forceUpdate = useForceUpdate();

  const count = useRef(0);

  count.current++;

  return (
    <>
      <Title>Trigger force update</Title>
      <RcButton onClick={forceUpdate}>Render times: {count.current}</RcButton>
      <br />
      <br />
      <Title>
        Event you trigger forceUpdate many time, that will only trigger update
        once
      </Title>
      <RcButton
        onClick={() => {
          forceUpdate();
          forceUpdate();
          forceUpdate();
          forceUpdate();
          forceUpdate();
          forceUpdate();
        }}
      >
        Render times: {count.current}
      </RcButton>
    </>
  );
};

useForceUpdateExample.args = {};
useForceUpdateExample.storyName = 'useForceUpdate';
