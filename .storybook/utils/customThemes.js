import { create } from '@storybook/theming';
import * as packageJSON from '../../package.json';

const brandTitle = `
<div style="display: flex; align-items: center;">
  <img src="/assets/logo.png" style="width: 50px; margin-right: 1em;">
  <br />
  <div>
    <h1>Juno</h1>
    <h3>v${packageJSON.version}</h3>
  </div>
</div>
`;

export const customThemes = {
  light: create({
    base: 'light',
    brandTitle,
  }),
  dark: create({
    base: 'dark',
    brandTitle,
  }),
  highContrast: create({
    base: 'dark',
    brandTitle,
  }),
};

export const getTheme = (type) => customThemes[type];
