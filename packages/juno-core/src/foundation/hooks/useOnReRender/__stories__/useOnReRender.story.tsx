import React, { useRef } from 'react';

import { Title } from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

import { RcText } from '../../../../components';
import { RcButton } from '../../../../components/Buttons';
import { useForceUpdate } from '../../useForceUpdate';
import { useOnReRender } from '../useOnReRender';

export default {
  title: '🔧 Foundation/Hooks/useOnReRender',
  argTypes: {},
} as Meta;

export const useOnReRenderExample: Story<{}> = () => {
  const count = useRef(0);
  count.current++;
  const forceUpdate = useForceUpdate();

  useOnReRender(() => {
    console.log(
      'this only trigger when re-render, first time render not be trigger',
    );

    return () => {
      console.log('destroy also only trigger when have re-render');
    };
  });

  return (
    <>
      <Title>
        <RcText highlight>useOnReRender</RcText>
        only trigger when <RcText highlight>re-render</RcText>, that event will
        not trigger in first render
      </Title>
      <Title>Render times: {count.current}</Title>
      <RcButton onClick={forceUpdate}>ForceRender</RcButton>
    </>
  );
};

useOnReRenderExample.args = {};
useOnReRenderExample.storyName = 'useOnReRender';
