/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useRef, useState } from 'react';

import {
  RcBox,
  RcButton,
  RcSlide,
  RcText,
  RcTypography,
  useForceUpdate,
  useGlobalListener,
} from '@ringcentral/juno';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🔧 Foundation/Hooks/useGlobalListener',
  argTypes: {},
} as Meta;

export const UseGlobalListenerExample: Story<{}> = () => {
  const [events, setEvents] = useState<string[]>([]);
  const boxRef = useRef<HTMLDivElement>(null);
  function addLog(message: string) {
    console.log(message);
    setEvents([`${events.length + 1}. ${message}`, ...events]);
  }

  const blur1 = useGlobalListener('blur', () => addLog('blur event1'));
  const blur2 = useGlobalListener('blur', () => addLog('blur event2'));
  const blur3 = useGlobalListener('blur', () => addLog('blur event3'));

  useGlobalListener(
    'touchend',
    () => addLog('touchend'),
    {
      passive: false,
    },
    { target: boxRef, customKey: 'box-touchend' },
  );

  const focus = useGlobalListener(
    'focus',
    () => {
      addLog('focus event');
    },
    { target: window },
  );

  const forceUpdate = useForceUpdate();

  useEffect(() => {
    // first forceUpdate for make that listening state show correctly
    forceUpdate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <RcTypography color="neutral.f06">
        change page focus state to view how that work, you can use{' '}
        <RcText highlight>getEventListeners(window)</RcText> to view state
        change after remove all listeners or add new listeners
      </RcTypography>
      <RcBox textAlign="right" ref={boxRef}>
        <RcButton
          color={focus.state.listening ? 'success.b04' : 'danger.b04'}
          onClick={() => {
            focus.state.listening ? focus.remove() : focus.listen();
            forceUpdate();
          }}
        >
          {focus.state.listening ? 'focus listening' : 'focus un listening'}
        </RcButton>{' '}
        <RcButton
          color={blur1.state.listening ? 'success.b04' : 'danger.b04'}
          onClick={() => {
            blur1.state.listening ? blur1.remove() : blur1.listen();
            forceUpdate();
          }}
        >
          {blur1.state.listening ? 'blur1 listening' : 'blur1 un listening'}
        </RcButton>{' '}
        <RcButton
          color={blur2.state.listening ? 'success.b04' : 'danger.b04'}
          onClick={() => {
            blur2.state.listening ? blur2.remove() : blur2.listen();
            forceUpdate();
          }}
        >
          {blur2.state.listening ? 'blur2 listening' : 'blur2 un listening'}
        </RcButton>{' '}
        <RcButton
          color={blur3.state.listening ? 'success.b04' : 'danger.b04'}
          onClick={() => {
            blur3.state.listening ? blur3.remove() : blur3.listen();
            forceUpdate();
          }}
        >
          {blur3.state.listening ? 'blur3 listening' : 'blur3 un listening'}
        </RcButton>
      </RcBox>

      <RcBox height="300px" width="500px" style={{ overflowX: 'hidden' }}>
        {events.map((event) => (
          <RcSlide in key={event} direction="left">
            <RcTypography color="neutral.f06">{event}</RcTypography>
          </RcSlide>
        ))}
      </RcBox>
    </>
  );
};

UseGlobalListenerExample.args = {};
UseGlobalListenerExample.storyName = 'useGlobalListener';
