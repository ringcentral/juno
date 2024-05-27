import { screen, render, fireEvent } from '@testing-library/react';
import { useFocusInside } from '../useFocusInside';
import React from 'react';

const App = () => {
  const { start, end } = useFocusInside();
  return (
    <div>
      {start}
      <button data-focusable>start</button>
      <button data-focusable>end</button>
      {end}
    </div>
  );
};

describe('useFocusInside', () => {
  test('Focus should be move inside start and end, never focus on focus-inside-x element', () => {
    render(<App />);

    fireEvent.focus(screen.getByTestId('focus-inside-start'));
    expect(screen.getByText('end')).toHaveFocus();

    fireEvent.focus(screen.getByTestId('focus-inside-end'));
    expect(screen.getByText('start')).toHaveFocus();
  });
});
