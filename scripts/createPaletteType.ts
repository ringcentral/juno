import path from 'path';

import {
  paletteChoice,
  textPaletteChoice,
} from '../src/storybook/utils/paletteChoice';
import { Lib } from './utils';

console.log(`[JUNO] Create static palette type`);

const paletteTemplate = `export type RcPaletteKeys =
  | '${paletteChoice.join(`'\n  | '`)}';\n`;

const textPaletteTemplate = `export type RcTextPaletteKeys =
  | '${textPaletteChoice.join(`'\n  | '`)}';\n`;

const targetTypePath = path.join(
  __dirname,
  '../src/foundation/theme/palette.type.ts',
);
Lib.writeFile(
  targetTypePath,
  [paletteTemplate, textPaletteTemplate].join('\n'),
);

console.log(`[JUNO] Create static palette type success\n${targetTypePath}`);
