import { addons } from '@storybook/addons';
import { UPDATE_GLOBALS } from '@storybook/core-events';

import { getTheme, getThemeValue, setThemeValue } from './utils';

const [, theme] = getThemeValue();

// https://storybook.js.org/docs/riot/configure/features-and-behavior
// can view node_modules/@storybook/api/node_modules/@storybook/theming/dist/types.d.ts to get theme types
addons.setConfig({
  theme,
  showRoots: true,
});

addons.register('theme-switcher', (api) => {
  const channel = addons.getChannel();
  channel.on(UPDATE_GLOBALS, (args) => {
    const { globals } = args;

    const type = globals.themeId;

    const themeVars = getTheme(type);

    setThemeValue(themeVars.base);

    // * addons.setConfig only work before config init, need use setOption to switch theme
    api.setOptions({
      theme: themeVars,
    });
  });
});
