import Icon0 from '../../../../icon/0';
import Icon1 from '../../../../icon/1';
import Icon2 from '../../../../icon/2';
import Icon3 from '../../../../icon/3';
import Icon4 from '../../../../icon/4';
import Icon5 from '../../../../icon/5';
import Icon6 from '../../../../icon/6';
import Icon7 from '../../../../icon/7';
import Icon8 from '../../../../icon/8';
import Icon9 from '../../../../icon/9';
import AsteriskIcon from '../../../../icon/Asterisk';
import HashIcon from '../../../../icon/Hash';
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
  [Icon1, '1', ''],
  [Icon2, '2', 'A B C'],
  [Icon3, '3', 'D E F'],
  [Icon4, '4', 'G H I'],
  [Icon5, '5', 'J K L'],
  [Icon6, '6', 'M N O'],
  [Icon7, '7', 'P Q R S'],
  [Icon8, '8', 'T U V'],
  [Icon9, '9', 'W X Y Z'],
  [AsteriskIcon, '*', ''],
  [Icon0, '0', '+'],
  [HashIcon, '#', ''],
];

export const DIALER_PAD_PLUS = '+';

export const ACCEPTABLE_KEYS: string[] = [
  ...DIALER_PAD_ICONS.map(([, value]) => value),
  DIALER_PAD_PLUS,
];
