import { getTheme } from './customThemes';

const THEME_KEY = 'storybook-themeId';

const getUserSystemTheme = () => {
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark';
  }

  return 'light';
};

export function getThemeValue() {
  try {
    const theme =
      getTheme(localStorage.getItem(THEME_KEY)) ||
      getTheme(getUserSystemTheme());

    if (theme) {
      return [theme.base, theme];
    }
  } catch (error) {}

  return ['light', {}];
}

export function setThemeValue(type) {
  localStorage.setItem(THEME_KEY, type);
}
