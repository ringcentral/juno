// @ts-nocheck
import './index.css';

// import { addons } from '@storybook/addons';
// import { UPDATE_GLOBALS } from '@storybook/core-events';
import { themes } from '@storybook/theming';

import { withThemeProvider } from '@ringcentral/juno-storybook';
import { getThemeValue } from './utils';

const [themeType] = getThemeValue();

export const globalTypes = {
  themeId: {
    name: 'themeId',
    description: 'Global theme for components',
    defaultValue: themeType,
    toolbar: {
      icon: 'paintbrush',
      items: [
        { title: 'Light', value: 'light' },
        { title: 'Dark', value: 'dark' },
        { title: 'highContrast', value: 'highContrast' },
      ],
    },
  },
};

// https://github.com/storybookjs/storybook/issues/7066#issuecomment-813489815
export const parameters = {
  // viewMode: 'docs',
  docs: {
    theme: themes[themeType],
  },
  options: {
    storySort: {
      order: [
        'README',
        'CHANGELOG',
        'CONTRIBUTION',
        '📖 Guides',
        '💅 Style system',
        '💅 Style system/🎨 Use Juno Token',
        '📖 Component Docs',
        '🔧 Foundation',
        '🚀 Cleanup Components',
        '🚀 Cleanup Components/🌈Animations',
        'API Reference',
      ],
    },
  },
};

export const decorators = [withThemeProvider];

// TODO: this doc will not render when switch theme, check how to resolve this issue
// const channel = addons.getChannel();

// channel.on(UPDATE_GLOBALS, (args) => {
//   // TODO: that is workaround for coc page can't change parameters after file load
//   if ((window, window.location.href.includes('viewMode=docs'))) {
//     window.location.reload();
//   }
// });
