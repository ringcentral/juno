import type { RcPaletteKeys } from '@ringcentral/juno';

export type TagProps = {
  name: 'Mui' | 'Spec' | 'Accessibility' | 'Source';
  value?: string;
  color?: RcPaletteKeys;
  href?: string;
};
