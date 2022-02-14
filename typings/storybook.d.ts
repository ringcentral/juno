import '@storybook/addons';

declare module '@storybook/addons' {
  interface Parameters {
    tags?: TagProps[];
  }
}
