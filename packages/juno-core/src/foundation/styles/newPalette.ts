import { RcPalette, RcPaletteProp, RcThemeProps } from '../theme';
import { parseColor } from '../utils/parseColor';
import { doAlpha } from './opacity';

type NU<T> = NonNullable<T>;

type Pl = RcPalette;

type PaletteReturnType = ({ theme }: RcThemeProps) => any;

/**
 * This is the new version palette, support five layer types palette color get,
 * ! Not support opacity, please use `setOpacity` to do that,
 * ! like `setOpacity(palette2('neutral', 'b05'), '80')`
 * @param obj main color
 * @param prop1 sub
 */
function palette2<T extends keyof Pl>(obj: T): PaletteReturnType;

/**
 * This is the new version palette, support five layer types palette color get,
 * ! Not support opacity, please use `setOpacity` to do that,
 * ! like `setOpacity(palette2('neutral', 'b05'), '80')`
 * @param obj main color
 * @param prop1 sub
 */
function palette2<T extends keyof Pl, P1 extends keyof NU<Pl[T]>>(
  obj: T,
  prop1: P1,
): PaletteReturnType;

/**
 * This is the new version palette, support five layer types palette color get,
 * ! Not support opacity, please use `setOpacity` to do that,
 * ! like `setOpacity(palette2('neutral', 'b05'), '80')`
 * @param obj main color
 * @param prop1 sub
 * @param prop2 sub
 */
function palette2<
  T extends keyof Pl,
  P1 extends keyof NU<Pl[T]>,
  P2 extends keyof NU<NU<Pl[T]>[P1]>,
>(obj: T, prop1: P1, prop2: P2): PaletteReturnType;

/**
 * This is the new version palette, support five layer types palette color get,
 * ! Not support opacity, please use `setOpacity` to do that,
 * ! like `setOpacity(palette2('neutral', 'b05'), '80')`
 * @param obj main color
 * @param prop1 sub
 * @param prop2 sub
 * @param prop3 sub
 */
function palette2<
  T extends keyof Pl,
  P1 extends keyof NU<Pl[T]>,
  P2 extends keyof NU<NU<Pl[T]>[P1]>,
  P3 extends keyof NU<NU<NU<Pl[T]>[P1]>[P2]>,
>(obj: T, prop1: P1, prop2: P2, prop3: P3): PaletteReturnType;

/**
 * This is the new version palette, support five layer types palette color get,
 * ! Not support opacity, please use `setOpacity` to do that,
 * ! like `setOpacity(palette2('neutral', 'b05'), '80')`
 * @param obj main color
 * @param prop1 sub
 * @param prop2 sub
 * @param prop3 sub
 * @param prop4 sub
 */
function palette2<
  T extends keyof Pl,
  P1 extends keyof NU<Pl[T]>,
  P2 extends keyof NU<NU<Pl[T]>[P1]>,
  P3 extends keyof NU<NU<NU<Pl[T]>[P1]>[P2]>,
  P4 extends keyof NU<NU<NU<NU<Pl[T]>[P1]>[P2]>[P3]>,
>(obj: T, prop1: P1, prop2: P2, prop3: P3, prop4: P4): PaletteReturnType;

/**
 * This is the new version palette, support five layer types palette color get,
 * ! Not support opacity, please use `setOpacity` to do that,
 * ! like `setOpacity(palette2('neutral', 'b05'), '80')`
 * @param obj main color
 * @param prop1 sub
 * @param prop2 sub
 * @param prop3 sub
 * @param prop4 sub
 */
function palette2(category: any, ...keys: any[]): PaletteReturnType {
  return getPaletteColor(category, ...keys);
}

function getPaletteColor(...args: any[]) {
  const [category, ...keys] = args;

  return ({ theme }: RcThemeProps): any => {
    const colorMap = theme.palette[category];

    if (!colorMap) {
      // * that means that just want to use normal value, like a string with rgba or #FFFF or white...
      return category;
    }

    if (typeof colorMap === 'string') {
      return colorMap;
    }

    return keys.reduce((acc, curr, i) => {
      // if type is the latest one, check is that to be number
      if (i === keys.length - 1) {
        if (typeof curr === 'number') {
          return doAlpha(acc, curr, theme);
        }
      }
      return acc == null ? '' : acc[curr];
    }, colorMap);
  };
}

function getParsePaletteColor(
  color?: RcPaletteProp,
  defaultColor?: RcPaletteProp | null,
  useMain = true,
) {
  const args = parseColor(color, defaultColor, useMain);

  if (!args) {
    return () => null;
  }

  if (typeof args === 'string') {
    return () => args;
  }

  if (typeof args === 'function') {
    return args;
  }

  return getPaletteColor(...args);
}

export { getParsePaletteColor, palette2 };
export type { PaletteReturnType };
