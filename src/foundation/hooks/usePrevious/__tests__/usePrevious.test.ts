import { renderHook } from '@testing-library/react-hooks';
import { useState } from 'react';
import { act } from 'react-dom/test-utils';

import { usePrevious } from '../usePrevious';

const setup = <T>(initialValue: T) => {
  return renderHook(() => {
    const [value, setValue] = useState<T>(initialValue);
    const prevValue = usePrevious(() => value);
    return { value, prevValue, setValue };
  });
};

describe('usePrevious()', () => {
  it('should be undefined when it was rendered first time', () => {
    const { result: hookRef } = setup(0);
    expect(hookRef.current.prevValue).toEqual(undefined);
  });

  it('should always get previous value', () => {
    const { result: hookRef } = setup<number | string | boolean | object>(0);

    act(() => hookRef.current.setValue('a'));
    expect(hookRef.current.prevValue).toBe(0);

    act(() => hookRef.current.setValue(true));
    expect(hookRef.current.prevValue).toBe('a');

    act(() => hookRef.current.setValue({}));
    expect(hookRef.current.prevValue).toBe(true);

    act(() => hookRef.current.setValue(0));
    expect(hookRef.current.prevValue).toEqual({});
  });
});
