import React, { useState } from 'react';

import { Title } from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

import { RcText, RcTextField } from '../../../../components';
import { useKeyDownOnce } from '../useKeyDownOnce';

export default {
  title: '🔧 Foundation/Hooks/useKeyDownOnce',
  argTypes: {},
} as Meta;

export const useKeyDownOnceExample: Story<{}> = () => {
  const [count, setCount] = useState(0);
  const originEvents = {
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => {
      console.log('onKeyDown', e);
      setCount(count + 1);
    },
    onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => {
      console.log('onKeyUp', e);
    },
  };

  const events = useKeyDownOnce(['1', '2', '3'], originEvents);

  return (
    <>
      <Title variant="body1">
        Trigger onKeyDown once time when hold press on key(1,2,3), others will
        not trigger event
      </Title>
      <RcTextField {...events}>Trigger keydown many time</RcTextField>
      <br />
      <br />
      <Title variant="body1">
        Trigger onKeyDown many time when hold press on key
      </Title>
      <RcTextField {...originEvents}>Trigger keydown only once</RcTextField>
      <RcText color="neutral.f06">Trigger times: {count}</RcText>
    </>
  );
};

useKeyDownOnceExample.args = {};
useKeyDownOnceExample.storyName = 'useKeyDownOnce';
