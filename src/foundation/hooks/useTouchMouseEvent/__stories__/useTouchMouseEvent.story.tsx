import React from 'react';

import { Meta, Story } from '@storybook/react';

import { RcButton } from '../../../../components/Buttons';
import { useTouchMouseEvent } from '../useTouchMouseEvent';

export default {
  title: '🔧 Foundation/Hooks/useTouchMouseEvent',
  argTypes: {},
} as Meta;

export const useTouchMouseEventExample: Story<{}> = () => {
  const props = useTouchMouseEvent({
    onTouchStart: (e) => {
      console.log('onTouchStart', e);
    },
    onTouchEnd: (e) => {
      console.log('onTouchEnd', e);
    },
    onMouseDown: (e) => {
      console.log('onMouseDown', e);
    },
    onMouseUp: (e) => {
      console.log('onMouseUp', e);
    },
  });

  return <RcButton {...props}>Trigger event</RcButton>;
};

useTouchMouseEventExample.args = {};
useTouchMouseEventExample.storyName = 'useTouchMouseEvent';
