import React from 'react';

import { cleanup, render } from '@ringcentral/juno-test';
import { act, screen } from '@testing-library/react';

import { withDelay } from '../withDelay';

const DELAY = 1000;
const TestComponent = () => <div>My Component</div>;
const DelayedComponent = withDelay(TestComponent);

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
  cleanup();
});

describe('withDelay()', () => {
  describe('delay', () => {
    it(`should render component after ${DELAY}ms [JPT-4067]`, () => {
      render(<DelayedComponent delay={DELAY} />);

      expect(screen.queryByText('My Component')).not.toBeInTheDocument();
      act(() => {
        jest.advanceTimersByTime(DELAY);
      });
      expect(screen.queryByText('My Component')).toBeInTheDocument();
    });

    it('should render component immediately', () => {
      render(<DelayedComponent />);
      expect(screen.queryByText('My Component')).toBeInTheDocument();
    });
  });

  describe('placeholder', () => {
    it('should render placeholder', () => {
      render(
        <DelayedComponent delay={DELAY} placeholder={<div>Placeholder</div>} />,
      );
      expect(screen.queryByText('My Component')).not.toBeInTheDocument();
      expect(screen.queryByText('Placeholder')).toBeInTheDocument();

      act(() => {
        jest.advanceTimersByTime(DELAY);
      });
      expect(screen.queryByText('My Component')).toBeInTheDocument();
    });
  });
});
