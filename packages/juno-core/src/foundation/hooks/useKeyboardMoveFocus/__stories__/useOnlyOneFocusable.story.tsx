import React, { useRef } from 'react';

import range from 'lodash/range';

import {
  RcIconButton,
  RcText,
  styled,
  useOnlyOneFocusable,
} from '@ringcentral/juno';
import { Add } from '@ringcentral/juno-icon';
import { Title } from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🔧 Foundation/Hooks/useOnlyOneFocusable',
  argTypes: {},
} as Meta;

const Container = styled.div<{ columns: number }>`
  width: ${({ columns }) => 40 * columns}px;
`;

const columns = 3;

const options = range(0, 8);

export const useOnlyOneFocusableExample: Story<{}> = () => {
  const focusedIndexRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { getItemProps } = useOnlyOneFocusable({
    focusedIndexRef,
    containerRef,
  });

  return (
    <>
      <Title>
        Only latest be focus item can be focus, this hook always use with{' '}
        <RcText highlight>useKeyboardMoveFocus</RcText>
      </Title>
      <Container ref={containerRef} columns={columns}>
        {options.map((x, index) => (
          <RcIconButton key={x} symbol={Add} {...getItemProps(index)} />
        ))}
      </Container>
    </>
  );
};

useOnlyOneFocusableExample.args = {};
useOnlyOneFocusableExample.storyName = 'useOnlyOneFocusable';
