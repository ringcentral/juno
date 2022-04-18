import React, { useState } from 'react';

import {
  RcBox,
  RcButton,
  RcSlide,
  RcTypography,
  useTouchMouseEvent,
} from '@ringcentral/juno';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🔧 Foundation/Hooks/useTouchMouseEvent',
  argTypes: {},
} as Meta;

export const UseTouchMouseEventExample: Story<{}> = () => {
  const [events, setEvents] = useState<string[]>([]);
  function addLog(message: string) {
    setEvents([`${events.length + 1}. ${message}`, ...events]);
  }

  const props = useTouchMouseEvent({
    onTouchStart: (e) => {
      console.log('onTouchStart', e);
      addLog('onTouchStart');
    },
    onTouchEnd: (e) => {
      console.log('onTouchEnd', e);
      addLog('onTouchEnd');
    },
    onMouseDown: (e) => {
      console.log('onMouseDown', e);
      addLog('onMouseDown');
    },
    onMouseUp: (e) => {
      console.log('onMouseUp', e);
      addLog('onMouseUp');
    },
  });

  return (
    <div>
      <RcButton {...props}>Trigger event</RcButton>

      <RcBox height="300px" width="500px" style={{ overflowX: 'hidden' }}>
        {events.map((event) => (
          <RcSlide in key={event} direction="left">
            <RcTypography color="neutral.f06">{event}</RcTypography>
          </RcSlide>
        ))}
      </RcBox>
    </div>
  );
};

UseTouchMouseEventExample.args = {};
UseTouchMouseEventExample.storyName = 'useTouchMouseEvent';
