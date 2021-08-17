module.exports = {
  stories: ['../src/**/*.story.tsx', '../src/**/*.story.mdx'],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
    {
      /**
      Once "display full source" is restored as the default behavior of addon-storysource, @storybook/addon-docs can be
      uninstalled (as it is provided as part of addon-essentials) and this config can be removed
      See: https://github.com/storybookjs/storybook/tree/master/addons/storysource#displaying-full-source
      */
      name: '@storybook/addon-docs',
      options: {
        sourceLoaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
    '@storybook/addon-essentials',
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'none',
  },
};
