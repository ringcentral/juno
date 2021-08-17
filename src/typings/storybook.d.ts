import '@storybook/addons';
import { RcPaletteKeys } from '../foundation';

type TagProps = {
  name: 'Mui' | 'Spec' | 'Accessibility' | 'Source';
  value?: string;
  color?: RcPaletteKeys;
  href?: string;
};

declare module '@storybook/addons' {
  interface Parameters {
    tags?: TagProps[];
  }
}
