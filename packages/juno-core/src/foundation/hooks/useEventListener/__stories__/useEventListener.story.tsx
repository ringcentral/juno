import React, { useRef } from 'react';

import { Meta, Story } from '@storybook/react';

import { RcText } from '../../../../components';
import { RcBox } from '../../../../components/Box';
import { RcButton } from '../../../../components/Buttons';
import { Title } from '@ringcentral/juno-storybook';
import { useEventListener } from '../useEventListener';

export default {
  title: '🔧 Foundation/Hooks/useEventListener',
  argTypes: {},
} as Meta;

export const useEventListenerExample: Story<{}> = () => {
  const ref = useRef<HTMLElement>(null);

  const listener = useEventListener(ref, 'click', () =>
    console.log('trigger event'),
  );

  const keydownListener = useEventListener(
    window,
    'keyup',
    (e: KeyboardEvent) => console.log('window key up', e.key),
  );

  return (
    <>
      <Title>
        Click Button that event bind with{' '}
        <RcText highlight>useEventListener</RcText>
      </Title>
      <RcButton ref={ref}>Click</RcButton>
      <br />
      <br />
      <RcBox textAlign="right">
        <RcButton onClick={() => listener.listen()}>Listen again</RcButton>{' '}
        <RcButton onClick={() => listener.remove()}>Remove listen</RcButton>
      </RcBox>
      <br />
      <br />
      <Title>
        keydown in this window that event bind with{' '}
        <RcText highlight>useEventListener</RcText>
      </Title>
      <RcBox textAlign="right">
        <RcButton color="danger.b04" onClick={() => keydownListener.listen()}>
          Listen again
        </RcButton>{' '}
        <RcButton color="danger.b04" onClick={() => keydownListener.remove()}>
          Remove listen
        </RcButton>
      </RcBox>
    </>
  );
};

useEventListenerExample.args = {};
useEventListenerExample.storyName = 'useEventListener';
