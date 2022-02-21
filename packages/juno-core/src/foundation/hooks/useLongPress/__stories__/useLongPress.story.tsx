import React from 'react';

import { RcButton, useLongPress } from '@ringcentral/juno';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🔧 Foundation/Hooks/useLongPress',
  argTypes: {},
} as Meta;

export const useTouchMouseEventExample: Story<{}> = () => {
  const { ref, ...events } = useLongPress(
    {
      onPress: (e) => {
        console.log('onPress', e);
      },
      onTap: (e) => {
        console.log('onTap', e);
      },
    },
    {},
    { delay: 1000 },
  );

  return (
    <RcButton ref={ref} {...events}>
      Trigger event
    </RcButton>
  );
};

useTouchMouseEventExample.args = {};
useTouchMouseEventExample.storyName = 'useLongPress';
