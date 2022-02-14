import React from 'react';

import { fireEvent, render, screen } from '@ringcentral/juno-test';

import { RcTimePicker } from '../TimePicker';

describe('TimePicker', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('When reopen menu should always in the main page', () => {
    const { getByRole } = render(<RcTimePicker value={58500000} />);

    const textbox = getByRole('textbox');
    fireEvent.click(textbox);

    const hourText = screen.getByTestId('time-picker-hour-text');
    fireEvent.click(hourText);

    screen.getByText('00');
    screen.getByText('01');
    screen.getByText('08');
    screen.getByText('09');
    screen.getByText('15');
    screen.getByText('23');

    fireEvent.keyDown(document.activeElement!, { key: 'Esc' });

    expect(screen.queryByRole('presentation')).toBeNull();

    fireEvent.click(textbox);
    const button = screen.getByTestId('time-picker-hour-prev-pagination');
    expect(button).toBeDefined();

    const minuteText = screen.getByTestId('time-picker-minute-text');
    fireEvent.click(minuteText);

    screen.getByText('00');
    screen.getByText('15');
    screen.getByText('30');
    screen.getByText('45');

    fireEvent.keyDown(document.activeElement!, { key: 'Enter' });

    expect(screen.queryByRole('presentation')).toBeNull();

    fireEvent.click(textbox);
    const checkAgainButton = screen.getByTestId(
      'time-picker-hour-prev-pagination',
    );
    expect(checkAgainButton).toBeDefined();
  });
});
