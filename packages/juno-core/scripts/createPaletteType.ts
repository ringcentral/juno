import path from 'path';
import fs from 'fs';

import {
  paletteChoice,
  // textPaletteChoice,
} from '@ringcentral/juno-storybook/src/utils/paletteChoice';

console.log(`[JUNO] Create static palette type`);

const paletteTemplate = `export type RcPaletteKeys =
  | keyof DefaultPaletteKeys
  | '${paletteChoice.join(`'\n  | '`)}';\n`;

const textPaletteTemplate = `export type RcTextPaletteKeys = RcPaletteKeys;`;
// | '${textPaletteChoice.join(`'\n  | '`)}';\n`;

const targetTypePath = path.join(
  __dirname,
  '../src/foundation/theme/palette.type.ts',
);

fs.writeFileSync(
  targetTypePath,
  [
    'export interface DefaultPaletteKeys {}',
    '',
    paletteTemplate,
    textPaletteTemplate,
    '',
  ].join('\n'),
  { flag: 'w' },
);

console.log(`[JUNO] Create static palette type success\n${targetTypePath}`);
