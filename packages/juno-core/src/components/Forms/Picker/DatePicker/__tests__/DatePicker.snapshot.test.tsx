import React from 'react';

import { fireEvent, render, screen } from '@ringcentral/juno-test';

import { RcDatePicker } from '../DatePicker';

describe('RcDatePicker', () => {
  it('Check RcDatePicker render correctly in popup', () => {
    const { container } = render(<RcDatePicker />);

    const textbox = screen.getByRole('textbox');
    fireEvent.click(textbox);

    expect(container.parentElement).toMatchSnapshot();
  });
});
