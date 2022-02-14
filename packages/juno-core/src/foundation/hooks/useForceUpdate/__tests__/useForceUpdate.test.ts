import { useRef } from 'react';

import { act } from 'react-dom/test-utils';

import { renderHook } from '@testing-library/react-hooks';

import { useForceUpdate } from '../useForceUpdate';

const setup = () => {
  return renderHook(() => {
    const countRef = useRef(0);
    const forceUpdate = useForceUpdate();
    return { countRef, forceUpdate };
  });
};

describe('useForceUpdate()', () => {
  it('when trigger forceUpdate that count will increase', () => {
    const { result: hookRef } = setup();
    act(() => hookRef.current.forceUpdate());

    setTimeout(() => {
      expect(hookRef.current.countRef.current).toBe(1);
    }, 0);
  });

  it('when trigger forceUpdate in same lifecycle, still increase one', () => {
    const { result: hookRef } = setup();
    act(() => {
      hookRef.current.forceUpdate();
      hookRef.current.forceUpdate();
      hookRef.current.forceUpdate();
      hookRef.current.forceUpdate();
      hookRef.current.forceUpdate();
    });

    setTimeout(() => {
      expect(hookRef.current.countRef.current).toBe(1);
    }, 0);
  });
});
