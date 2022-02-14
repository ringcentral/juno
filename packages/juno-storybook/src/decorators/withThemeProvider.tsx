import {
  RcDefaultDarkTheme,
  RcDefaultHighContrastTheme,
  RcIconButton,
  RcThemeProvider,
} from '@ringcentral/juno';
import { addons, StoryContext } from '@storybook/addons';
import { UPDATE_GLOBALS } from '@storybook/core-events';
import { Story as StoryType } from '@storybook/react';
import React from 'react';
import BrightnessContrastIcon from '../assets/BrightnessContrast';
import SunIcon from '../assets/Sun';
import { MainStoryView } from '../components';
import { isTestEnv } from '../isTestEnv';
import type { TagProps } from '../typings/tag';

const channel = addons.getChannel();

type CustomStoryContext = StoryContext & {
  globals: StoryContext['globals'] & {
    themeId: string;
  };
};

const themeMap = {
  light: {},
  dark: RcDefaultDarkTheme,
  highContrast: RcDefaultHighContrastTheme,
};

export function withThemeProvider(
  Story: StoryType,
  context: CustomStoryContext,
) {
  const { themeId } = context.globals;
  const backgroundColor = context.parameters['backgroundColor'];

  const tags: TagProps[] = context.parameters['tags'] || [];

  return (
    <RcThemeProvider theme={themeMap[themeId]}>
      {!isTestEnv ? (
        <MainStoryView
          tags={tags}
          name={context.name}
          backgroundColor={backgroundColor}
          themeChildren={
            <RcIconButton
              variant="round"
              symbol={themeId !== 'dark' ? SunIcon : BrightnessContrastIcon}
              aria-label="switch-icon-button"
              onClick={() =>
                channel.emit(UPDATE_GLOBALS, {
                  globals: {
                    themeId: themeId === 'light' ? 'dark' : 'light',
                  },
                })
              }
              size="medium"
              color="neutral.f06"
            />
          }
        >
          <Story {...context} />
        </MainStoryView>
      ) : (
        <Story {...context} />
      )}
    </RcThemeProvider>
  );
}
