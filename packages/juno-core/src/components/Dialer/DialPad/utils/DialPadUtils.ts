import {
  Asterisk,
  Hash,
  Svg0,
  Svg1,
  Svg2,
  Svg3,
  Svg4,
  Svg5,
  Svg6,
  Svg7,
  Svg8,
  Svg9,
} from '@ringcentral/juno-icon';

import { SvgSymbol } from '../../../Icon';

export type DIALER_PAD_ICON_VALUES =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '*'
  | '0'
  | '#';

export type DialPadSoundMap = { [key in DIALER_PAD_ICON_VALUES]: string };

export type DialKeyTimerMap = {
  [key in DIALER_PAD_ICON_VALUES]?: number;
};

export const DIALER_PAD_ICONS: [SvgSymbol, DIALER_PAD_ICON_VALUES, string][] = [
  [Svg1, '1', ''],
  [Svg2, '2', 'A B C'],
  [Svg3, '3', 'D E F'],
  [Svg4, '4', 'G H I'],
  [Svg5, '5', 'J K L'],
  [Svg6, '6', 'M N O'],
  [Svg7, '7', 'P Q R S'],
  [Svg8, '8', 'T U V'],
  [Svg9, '9', 'W X Y Z'],
  [Asterisk, '*', ''],
  [Svg0, '0', '+'],
  [Hash, '#', ''],
];

export const DIALER_PAD_PLUS = '+';

export const ACCEPTABLE_KEYS: string[] = [
  ...DIALER_PAD_ICONS.map(([, value]) => value),
  DIALER_PAD_PLUS,
];
