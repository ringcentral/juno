import React from 'react';

import { Meta, Story } from '@storybook/react';

import { RcBox } from '../../../components';
import { Title } from '../../../storybook/components';
import { useTheme } from '../../styled-components';
import { RcThemeProvider } from '../ThemeProvider';
import {
  RcDefaultDarkTheme,
  RcDefaultHighContrastTheme,
} from '../ThemeSwitcherProvider';

export default {
  title: '🔧 Foundation/Hooks/useTheme',
  argTypes: {},
} as Meta;

export const ThemeValue = () => {
  const theme = useTheme();
  return (
    <RcBox color="neutral.f06" bgcolor="neutral.elevation">
      <pre>{JSON.stringify(theme, null, 2)}</pre>
    </RcBox>
  );
};

export const useThemeExample: Story<{}> = () => {
  return (
    <>
      <Title>Current Theme</Title>
      <ThemeValue />
      <Title>Dark Theme</Title>
      <RcThemeProvider theme={RcDefaultDarkTheme}>
        <ThemeValue />
      </RcThemeProvider>
      <Title>HighContrast Theme</Title>
      <RcThemeProvider theme={RcDefaultHighContrastTheme}>
        <ThemeValue />
      </RcThemeProvider>
    </>
  );
};

useThemeExample.args = {};
useThemeExample.storyName = 'useTheme';
