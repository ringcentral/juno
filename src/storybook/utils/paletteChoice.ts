import palette from '../../foundation/theme/assets/palette.light.json';

const loopGetValue = (acc: any[], obj: any, parentKey: string[] = []) => {
  Object.entries(obj).forEach(([key, value]) => {
    switch (typeof value) {
      case 'object':
        loopGetValue(acc, value, [...parentKey, key]);
        break;
      case 'string':
        acc.push([...parentKey, key]);
        break;

      default:
        break;
    }
  });
};

export const allPaletteChoice = Object.keys(
  (() => {
    const arr: any[] = [];

    loopGetValue(arr, palette);

    return arr.reduce((acc, curr, i) => {
      acc[curr.join('.')] = curr;
      return acc;
    }, {});
  })(),
);

const ignorePaletteKeys = [
  ...[
    'vDisabled',
    'vNeutral',
    'vDanger',
    'vDisabled',
    'text',
    'primary',
    'secondary',
    'info',
    'grey',
    'error',
    'common',
    'background',
    'action',
  ].map((x) => `${x}\\.`),
  'success.light',
  'success.main',
  'warning.light',
  'warning.main',
  '.contrastText',
  '.dark',
  'divider',
  'type',
];

const includePalettes = [
  'header.divider',
  'action.grayLight',
  'action.grayDark',
  'action.primary',
];

function stringArrToRegExp(keyToTags?: string[]): RegExp {
  // eslint-disable-next-line security/detect-non-literal-regexp
  return new RegExp(keyToTags?.join('|') || '', 'g');
}

export const isValidPalettes = (x: string) =>
  !x.match(stringArrToRegExp(ignorePaletteKeys)) || includePalettes.includes(x);

export const paletteChoice = allPaletteChoice.filter((x) => isValidPalettes(x));

export const textPaletteChoice = paletteChoice.filter(
  (x) =>
    x.includes('text.') ||
    x.includes('neutral.') ||
    x.includes('interactive.') ||
    x.includes('content.'),
);
