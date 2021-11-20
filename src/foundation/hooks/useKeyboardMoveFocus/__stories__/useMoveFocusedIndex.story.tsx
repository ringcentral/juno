import { Meta, Story } from '@storybook/react';
import range from 'lodash/range';
import React, { FunctionComponent, useLayoutEffect, useRef } from 'react';

import { RcAvatar, RcBox, RcText } from '../../../../components';
import { Title } from '../../../../storybook/components';
import { isTestEnv } from '../../../../storybook/isTestEnv';
import styled from '../../../styled-components';
import { useResultRef } from '../../useResultRef';
import {
  useKeyboardMoveFocus,
  UseKeyboardMoveFocusParams,
} from '../useKeyboardMoveFocus';
import { useOnlyOneFocusable } from '../useOnlyOneFocusable';

export default {
  title: '🔧 Foundation/Hooks/useKeyboardMoveFocus',
  argTypes: {},
} as Meta;

const Container = styled.div<{ columns: number }>`
  width: ${({ columns }) => 32 * columns}px;
`;

const options = range(0, 20);

function getRandom(arr: any[], n: number) {
  const result = new Array(n);
  let len = arr.length;
  const taken = new Array(len);
  if (n > len)
    throw new RangeError('getRandom: more elements taken than available');
  while (n--) {
    const x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

const Column: FunctionComponent<
  {
    title: string;
  } & Pick<UseKeyboardMoveFocusParams<any>, 'columns' | 'infinite'>
> = ({ columns = 1, infinite, title }) => {
  const focusedIndexRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { focusIndex, getItemProps, setIndexTabIndex } = useOnlyOneFocusable({
    focusedIndexRef,
    containerRef,
  });
  const disabledOptionsRef = useResultRef(() =>
    isTestEnv ? [2, 4, 6] : getRandom(options, 5),
  );

  const getOptionDisabled = (index: number) =>
    disabledOptionsRef.current.includes(index);

  const { onKeyFocusedIndexHandle, getNextFocusableOption } =
    useKeyboardMoveFocus({
      options,
      focusedIndexRef,
      infinite,
      columns,
      onFocusedIndexChange: (event, toIndex) => {
        focusedIndexRef.current = toIndex;
        focusIndex(toIndex);

        event.preventDefault();
      },
      getOptionSearchText: (option) => {
        return `${option}`;
      },
      getOptionDisabled,
    });

  useLayoutEffect(() => {
    const toIndex = getNextFocusableOption();

    if (toIndex !== focusedIndexRef.current) {
      focusedIndexRef.current = toIndex;
      setIndexTabIndex(toIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Title>{title}</Title>
      <Container
        ref={containerRef}
        columns={columns}
        onKeyDown={onKeyFocusedIndexHandle}
      >
        {options.map((x, index) => (
          <RcAvatar
            key={x}
            clickable
            size="xsmall"
            color="avatar.global"
            disabled={getOptionDisabled(index)}
            {...getItemProps(index)}
          >
            {`${index}`}
          </RcAvatar>
        ))}
      </Container>
    </div>
  );
};

export const useKeyboardMoveFocusExample: Story<{}> = () => {
  return (
    <>
      <Title>
        Use keyboard to move index in the box, work with{' '}
        <RcText highlight>useOnlyOneFocusable</RcText>
      </Title>
      <RcBox
        display="flex"
        width="100%"
        justifyContent="space-around"
        flexWrap="wrap"
      >
        <Column columns={1} title="1 column(non infinite)" />
        <Column columns={1} infinite title="1 columns" />
        <Column columns={2} infinite title="2 columns" />
        <Column columns={2} infinite="order" title="2 columns(order mode)" />
        <Column columns={3} infinite title="3 columns" />
        <Column columns={4} infinite title="4 columns" />
        <Column columns={5} infinite title="5 columns" />
        <Column columns={6} infinite title="6 columns" />
        <Column columns={6} infinite title="6 columns" />
        <Column columns={7} infinite title="7 columns" />
        <Column columns={8} infinite title="8 columns" />
        <Column columns={9} infinite title="9 columns" />
        <Column columns={10} infinite title="10 columns" />
      </RcBox>
    </>
  );
};

useKeyboardMoveFocusExample.args = {};
useKeyboardMoveFocusExample.storyName = 'useKeyboardMoveFocus';
