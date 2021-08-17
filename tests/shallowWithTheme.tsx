import { shallow } from 'enzyme';
import React from 'react';

import { RcThemeProvider } from '../src/foundation';

export const shallowWithTheme = (content: React.ReactNode) =>
  shallow(<RcThemeProvider>{content}</RcThemeProvider>);
