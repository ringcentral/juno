import { mount } from 'enzyme';
import React from 'react';

import { RcThemeProvider } from '../src/foundation';

export const mountWithTheme = (content: React.ReactNode, ...args: any[]) => {
  if (args.length > 0) {
    return mount(<RcThemeProvider>{content}</RcThemeProvider>, ...args);
  }
  return mount(<RcThemeProvider>{content}</RcThemeProvider>);
};
