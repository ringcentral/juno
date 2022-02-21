import React, { useRef } from 'react';

import { shadows, styled, useResizeObserver } from '@ringcentral/juno';
import { Title } from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🔧 Foundation/Hooks/useResizeObserver',
  argTypes: {},
} as Meta;

const Wrapper = styled.div`
  width: 280px;
  resize: both;
  overflow: hidden;
  box-shadow: ${shadows('16')};
`;

export const useResizeObserverExample: Story<{}> = () => {
  const ref = useRef<HTMLDivElement>(null);

  useResizeObserver(ref, () => {
    console.log('resize');
  });

  return (
    <Wrapper ref={ref}>
      <Title>Resize here</Title>
    </Wrapper>
  );
};

useResizeObserverExample.args = {};
useResizeObserverExample.storyName = 'useResizeObserver';
