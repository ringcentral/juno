import React from 'react';

import _ from 'lodash';

import { renderHook } from '@testing-library/react-hooks';

import {
  useKeyboardMoveFocus,
  UseKeyboardMoveFocusParams,
} from '../useKeyboardMoveFocus';

describe('useKeyboardMoveFocus()', () => {
  let mockOnFocusedIndexChangeFn = jest.fn();

  const options = _.range(0, 20);

  beforeEach(() => {
    mockOnFocusedIndexChangeFn = jest.fn();
  });

  function _useKeyboardMoveFocus(params: UseKeyboardMoveFocusParams<any>) {
    const {
      result: { current },
    } = renderHook(() =>
      useKeyboardMoveFocus({
        ...params,
        getOptionSearchText: (v) => `${v}`,
      }),
    );
    return current;
  }

  function getFocusSequence(
    keyStrSeq: string[][],
    params: UseKeyboardMoveFocusParams<any>,
  ) {
    return keyStrSeq.map((nextKeys) => {
      const { onKeyFocusedIndexHandle } = _useKeyboardMoveFocus(params);

      nextKeys.forEach((nextKey) => {
        const e = { key: nextKey } as React.KeyboardEvent<any>;
        onKeyFocusedIndexHandle(e);
      });

      const lastCall = mockOnFocusedIndexChangeFn.mock.calls.pop();

      return lastCall === undefined ? null : lastCall[1];
    });
  }

  it.each`
    currIndex | columns | infinite | result
    ${0}      | ${1}    | ${true}  | ${[19, null, 1, null, null, 19]}
    ${1}      | ${5}    | ${true}  | ${[16, 2, 6, 0, 0, 19]}
    ${15}     | ${5}    | ${true}  | ${[10, 16, 0, 19, 0, 19]}
    ${19}     | ${5}    | ${false} | ${[14, null, null, 18, 0, null]}
    ${18}     | ${6}    | ${false} | ${[12, 19, null, null, 0, 19]}
  `(
    '[useKeyboardMoveFocus] should call onFocusedIndexChange correctly when use arrow key to move',
    ({ currIndex, columns, infinite, result }) => {
      const keys = [
        ['ArrowUp'],
        ['ArrowRight'],
        ['ArrowDown'],
        ['ArrowLeft'],
        ['Home'],
        ['End'],
      ];

      const seq = getFocusSequence(keys, {
        focusedIndexRef: { current: currIndex },
        options,
        columns,
        infinite,
        onFocusedIndexChange: mockOnFocusedIndexChangeFn,
      });

      expect(seq).toEqual(result);
    },
  );

  it.each`
    currIndex | columns | infinite | result
    ${1}      | ${5}    | ${true}  | ${[1, 2, 3, 12, 19, 0]}
    ${19}     | ${5}    | ${false} | ${[1, 2, 3, 12, 19, 0]}
    ${18}     | ${6}    | ${false} | ${[1, 2, 3, 12, 19, 0]}
  `(
    '[useKeyboardMoveFocus] should call onFocusedIndexChange correctly when search text',
    ({ currIndex, columns, infinite, result }) => {
      const keys = [['1'], ['2'], ['3'], ['1', '2'], ['1', '9'], ['0', '2']];

      const seq = getFocusSequence(keys, {
        focusedIndexRef: { current: currIndex },
        options,
        columns,
        infinite,
        onFocusedIndexChange: mockOnFocusedIndexChangeFn,
      });

      expect(seq).toEqual(result);
    },
  );

  it.each`
    currIndex | columns | infinite | result
    ${-1}     | ${1}    | ${true}  | ${[18, null, 0, null, 0, 18, 1, 2, 3, 12, 1, 0]}
    ${1}      | ${5}    | ${true}  | ${[11, 2, 6, 0, 0, 18, 1, 2, 3, 12, 1, 0]}
    ${18}     | ${6}    | ${false} | ${[12, null, null, null, 0, null, 1, 2, 3, 12, 1, 0]}
  `(
    '[useKeyboardMoveFocus] should call onFocusedIndexChange correctly with disabled options',
    ({ currIndex, columns, infinite, result }) => {
      const keys = [
        ['ArrowUp'],
        ['ArrowRight'],
        ['ArrowDown'],
        ['ArrowLeft'],
        ['Home'],
        ['End'],
        ['1'],
        ['2'],
        ['3'],
        ['1', '2'],
        ['1', '9'],
        ['0', '2'],
      ];

      const disabledDict = { 16: true, 19: true };

      const seq = getFocusSequence(keys, {
        focusedIndexRef: { current: currIndex },
        options,
        columns,
        infinite,
        onFocusedIndexChange: mockOnFocusedIndexChangeFn,
        getOptionDisabled: (option) => !!disabledDict[option],
      });

      expect(seq).toEqual(result);
    },
  );

  it.each`
    currIndex | columns | infinite | result
    ${2}      | ${5}    | ${true}  | ${18}
    ${15}     | ${5}    | ${true}  | ${15}
    ${16}     | ${6}    | ${false} | ${15}
  `(
    '[useKeyboardMoveFocus] getPrevFocusableOption should return previous focusable option',
    ({ currIndex, columns, infinite, result }) => {
      const disabledDict = { 0: true, 1: true, 2: true, 16: true, 19: true };

      const { getPrevFocusableOption } = _useKeyboardMoveFocus({
        focusedIndexRef: { current: currIndex },
        options,
        columns,
        infinite,
        onFocusedIndexChange: (_) => {},
        getOptionDisabled: (option) => !!disabledDict[option],
      });
      expect(getPrevFocusableOption()).toEqual(result);
    },
  );

  it.each`
    currIndex | columns | infinite | result
    ${0}      | ${5}    | ${true}  | ${3}
    ${16}     | ${5}    | ${true}  | ${17}
    ${15}     | ${5}    | ${true}  | ${15}
    ${19}     | ${6}    | ${true}  | ${3}
  `(
    '[useKeyboardMoveFocus] getNextFocusableOption should return next focusable option',
    ({ currIndex, columns, infinite, result }) => {
      const disabledDict = { 0: true, 1: true, 2: true, 16: true, 19: true };

      const { getNextFocusableOption } = _useKeyboardMoveFocus({
        focusedIndexRef: { current: currIndex },
        options,
        columns,
        infinite,
        onFocusedIndexChange: (_) => {},
        getOptionDisabled: (option) => !!disabledDict[option],
      });
      expect(getNextFocusableOption()).toEqual(result);
    },
  );
});
