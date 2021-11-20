import { Meta, Story } from '@storybook/react';
import React, { useRef } from 'react';

import { flexCenterStyle, palette2, styled } from '../../../../foundation';
import { RcButton } from '../../../Buttons';
import { RcHighlight } from '../Highlight';

export default {
  title: '🚀 Cleanup Components/🌈Animations/Highlight',
} as Meta;

const Item = styled.div`
  height: 300px;
  width: 300px;
  color: ${palette2('neutral', 'f06')};
  ${flexCenterStyle};
`;

export const Highlight: Story<any> = () => {
  const highlightRef = useRef(() => {});

  return (
    <>
      <RcButton
        onClick={() => {
          highlightRef.current();
        }}
      >
        Highlight
      </RcButton>
      <RcHighlight
        action={highlightRef}
        onEnter={() => console.log('Enter')}
        onEntering={() => console.log('Entering')}
        onEntered={() => console.log('Entered')}
        onExit={() => console.log('Exit')}
        onExiting={() => console.log('Exiting')}
        onExited={() => console.log('Exited')}
      >
        <Item>Highlight</Item>
      </RcHighlight>
    </>
  );
};

Highlight.storyName = 'Highlight';

Highlight.args = {};

Highlight.argTypes = {};

Highlight.parameters = {
  tags: [
    {
      name: 'Source',
      value: 'react-transition-group',
      href: 'http://reactcommunity.org/react-transition-group/transition',
    },
  ],
};
