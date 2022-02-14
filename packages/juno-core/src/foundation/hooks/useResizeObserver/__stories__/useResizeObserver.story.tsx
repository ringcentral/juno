import React, { useRef } from 'react';

import { Meta, Story } from '@storybook/react';

import { Title } from '@ringcentral/juno-storybook';
import styled from '../../../styled-components';
import { shadows } from '../../../styles';
import { useResizeObserver } from '../useResizeObserver';

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
