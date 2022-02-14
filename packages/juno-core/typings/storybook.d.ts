import '@storybook/addons';
import type { TagProps } from '@ringcentral/juno-storybook/src/typings/tag';

declare module '@storybook/addons' {
  interface Parameters {
    tags?: TagProps[];
  }
}
