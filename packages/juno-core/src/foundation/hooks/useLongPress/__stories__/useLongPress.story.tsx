import React, { useState } from 'react';

import {
  RcBox,
  RcButton,
  RcSlide,
  RcText,
  RcTypography,
  useLongPress,
} from '@ringcentral/juno';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🔧 Foundation/Hooks/useLongPress',
  argTypes: {},
} as Meta;

export const UseTouchMouseEventExample: Story<{}> = () => {
  const [events, setEvents] = useState<string[]>([]);

  function addLog(message: string) {
    setEvents([`${events.length + 1}. ${message}`, ...events]);
  }

  const { ref, ...eventProps } = useLongPress(
    {
      onPress: (e, reason) => {
        console.log('onPress', e, reason);
        addLog(`onPress: ${reason}`);
      },
      onTap: (e, reason) => {
        console.log('onTap', e, reason);
        addLog(`onTap: ${reason}`);
      },
    },
    {},
    { delay: 1000 },
  );

  return (
    <>
      <RcTypography color="neutral.f06">
        Provide longPress helper, both{' '}
        <RcText highlight>`click`/`tab`/`keydown</RcText>('a11y keyboard')` will
        trigger event
        <li>- Trigger `onTap` when user action leave small than delay time.</li>
        <li>- Trigger `onPress` when action time is long than delay time.</li>
      </RcTypography>
      <RcButton ref={ref} {...eventProps}>
        Trigger event
      </RcButton>

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

UseTouchMouseEventExample.args = {};
UseTouchMouseEventExample.storyName = 'useLongPress';
