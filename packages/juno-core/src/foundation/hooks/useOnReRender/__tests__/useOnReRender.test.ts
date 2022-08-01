import { useState } from 'react';

import { act, renderHook } from '@testing-library/react-hooks';

import { useOnReRender } from '../useOnReRender';

const setup = <T>(initialValue: T) => {
  return renderHook(() => {
    const method = jest.fn();
    const destroyMethod = jest.fn();
    const [value, setValue] = useState<T>(initialValue);
    useOnReRender(() => {
      method();
      return () => {
        destroyMethod();
      };
    });
    return { value, method, destroyMethod, setValue };
  });
};

describe('useOnReRender()', () => {
  it('should not be call when rendered first time', () => {
    const { result: hookRef } = setup(0);
    expect(hookRef.current.method).not.toBeCalled();
    expect(hookRef.current.destroyMethod).not.toBeCalled();
  });

  it('should be call when render twice', () => {
    const { result: hookRef } = setup(0);
    act(() => hookRef.current.setValue(1));

    expect(hookRef.current.method).toBeCalled();
  });

  it('should be call when destroy', () => {
    const { result: hookRef } = setup(0);
    act(() => hookRef.current.setValue(1));

    expect(hookRef.current.method).toBeCalledTimes(1);

    act(() => hookRef.current.setValue(2));
    setTimeout(() => {
      expect(hookRef.current.method).toBeCalledTimes(2);
      expect(hookRef.current.destroyMethod).toBeCalled();
    }, 0);
  });
});
