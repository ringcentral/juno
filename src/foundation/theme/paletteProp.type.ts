import { PaletteReturnType } from '../styles/newPalette';
import { LiteralUnion } from '../typings';
import { RcPaletteKeys } from './palette.type';

export type RcPaletteProp = LiteralUnion<
  RcPaletteKeys | string[] | PaletteReturnType
>;
