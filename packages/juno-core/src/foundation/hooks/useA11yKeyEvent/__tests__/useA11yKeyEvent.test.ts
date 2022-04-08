import { renderHook } from '@testing-library/react-hooks';

import { useA11yKeyEvent } from '../useA11yKeyEvent';

describe('useA11yKeyDown', () => {
  it('should call fn when press "Space"', () => {
    const fn = jest.fn();
    const { result: hookRef } = renderHook(() => useA11yKeyEvent(fn));
    hookRef.current({
      preventDefault: jest.fn(),
      type: 'keydown',
      key: ' ',
    } as any);
    expect(fn).toHaveBeenCalled();
  });
  it('should not call fn when press "A"', () => {
    const fn = jest.fn();
    const { result: hookRef } = renderHook(() => useA11yKeyEvent(fn));
    hookRef.current({
      preventDefault: jest.fn(),
      type: 'keydown',
      key: 'a',
    } as any);
    expect(fn).not.toHaveBeenCalled();
  });
  it('Custom key', () => {
    const fn = jest.fn();
    const { result: hookRef } = renderHook(() =>
      useA11yKeyEvent(fn, { checkKeys: ['a'] }),
    );
    hookRef.current({
      preventDefault: jest.fn(),
      type: 'keydown',
      key: 'a',
    } as any);
    expect(fn).toHaveBeenCalled();

    fn.mockRestore();

    hookRef.current({
      preventDefault: jest.fn(),
      type: 'keydown',
      key: ' ',
    } as any);
    expect(fn).not.toHaveBeenCalled();
  });
});
