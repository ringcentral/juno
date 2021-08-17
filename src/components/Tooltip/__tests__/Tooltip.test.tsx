import React from 'react';
import * as renderer from 'react-test-renderer';

import { RcThemeProvider } from '../../../foundation';
import { RcTooltip } from '../Tooltip';

describe('Tooltip style check, use as to check all style, because that issue with Mui Grow', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <RcThemeProvider>
          <RcTooltip title="I'm tooltip" open as="div">
            <div>Text</div>
          </RcTooltip>
        </RcThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
