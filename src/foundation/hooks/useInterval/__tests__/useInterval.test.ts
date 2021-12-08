import { renderHook } from '@testing-library/react-hooks';

import { useInterval } from '../useInterval';

describe('useInterval()', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it.each`
    intervalTime
    ${1000}
    ${2000}
    ${3000}
  `(
    '[useInterval] interval trigger with time correctly with intervalTime: $intervalTime',
    ({ intervalTime }) => {
      const fn = jest.fn();

      renderHook(() => useInterval(fn, intervalTime));

      jest.advanceTimersByTime(intervalTime);
      expect(fn).toBeCalledTimes(1);

      jest.advanceTimersByTime(intervalTime);
      expect(fn).toBeCalledTimes(2);
    },
  );

  it.each`
    intervalTime
    ${1000}
    ${2000}
    ${3000}
  `(
    '[useInterval] interval cancel correctly with intervalTime: $intervalTime',
    ({ intervalTime }) => {
      const fn = jest.fn();

      const { result } = renderHook(() => useInterval(fn, intervalTime));

      const {
        current: { cancel },
      } = result;

      cancel();

      jest.advanceTimersByTime(intervalTime);
      expect(fn).not.toBeCalled();
    },
  );

  it.each`
    intervalTime
    ${1000}
    ${2000}
    ${3000}
  `(
    '[useInterval] interval play correctly with intervalTime: $intervalTime',
    ({ intervalTime }) => {
      const fn = jest.fn();

      const { result } = renderHook(() => useInterval(fn, intervalTime));

      const {
        current: { cancel, play },
      } = result;

      cancel();

      jest.advanceTimersByTime(intervalTime);
      expect(fn).not.toBeCalled();

      play();

      jest.advanceTimersByTime(intervalTime);
      expect(fn).toBeCalledTimes(1);

      jest.advanceTimersByTime(intervalTime);
      expect(fn).toBeCalledTimes(2);
    },
  );

  it.each`
    intervalTime
    ${1000}
    ${2000}
    ${3000}
  `(
    '[useInterval] interval pause correctly with intervalTime: $intervalTime',
    ({ intervalTime }) => {
      const fn = jest.fn();

      const { result } = renderHook(() => useInterval(fn, intervalTime));

      const {
        current: { cancel, play, pause },
      } = result;

      jest.advanceTimersByTime(intervalTime);
      // that will get times with 1
      expect(fn).toBeCalledWith(1);

      jest.advanceTimersByTime(intervalTime / 2);
      expect(fn).toBeCalledTimes(1);

      pause();
      jest.advanceTimersByTime(intervalTime);
      // still call once
      expect(fn).toBeCalledTimes(1);

      play();
      jest.advanceTimersByTime(intervalTime);
      // that will get times with 2
      expect(fn).toBeCalledWith(2);

      expect(fn).toBeCalledTimes(2);

      cancel();
      jest.advanceTimersByTime(intervalTime);
      expect(fn).toBeCalledTimes(2);

      play();
      jest.advanceTimersByTime(intervalTime);
      // re-start with number 1
      expect(fn).toBeCalledWith(1);
      expect(fn).toBeCalledTimes(3);
    },
  );

  it.each`
    intervalTime
    ${1000}
    ${2000}
    ${3000}
  `(
    '[useInterval] interval init with not start immediately with intervalTime: $intervalTime',
    ({ intervalTime }) => {
      const fn = jest.fn();

      const { result } = renderHook(() => useInterval(fn, intervalTime, false));

      const {
        current: { play },
      } = result;

      jest.advanceTimersByTime(intervalTime);
      expect(fn).not.toBeCalled();

      play();
      jest.advanceTimersByTime(intervalTime);
      expect(fn).toBeCalledTimes(1);
    },
  );

  it.each`
    intervalTime
    ${1000}
    ${2000}
    ${3000}
  `(
    '[useInterval] interval getInterval running state with intervalTime: $intervalTime',
    ({ intervalTime }) => {
      const fn = jest.fn();

      const { result } = renderHook(() => useInterval(fn, intervalTime, false));

      const {
        current: { play, cancel, getRunning, pause },
      } = result;

      expect(getRunning()).toBe(false);

      play();
      expect(getRunning()).toBe(true);

      pause();
      expect(getRunning()).toBe(false);

      play();
      expect(getRunning()).toBe(true);

      cancel();
      expect(getRunning()).toBe(false);
    },
  );
});
