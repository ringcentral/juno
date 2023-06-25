import { Theme as MuiTheme } from '@material-ui/core/styles';

import typography from './assets/typography.json';
import { DefaultTheme } from './DefaultTheme';

type RcTypographyPickFields =
  | 'fontFamily'
  | 'codeFontFamily'
  | 'fontSize'
  | 'htmlFontSize'
  | 'fontWeightLight'
  | 'fontWeightRegular'
  | 'fontWeightMedium'
  | 'fontWeightBold';

export type RcTypographyKeys =
  | 'display4'
  | 'display3'
  | 'display2'
  | 'display1'
  | 'headline2'
  | 'headline1'
  | 'title2'
  | 'title1'
  | 'subheading2'
  | 'subheading1'
  | 'body2'
  | 'body1'
  | 'caption2'
  | 'caption1'
  | 'inherit'
  | keyof ExtensionTypography;

export type RcTypographyAddition = Pick<
  typeof typography,
  RcTypographyPickFields
>;

export type RcTypographyDetail = {
  fontSize: string | number;
  fontWeight: number;
  lineHeight: string | number;
};

export type RcTypographies = Record<RcTypographyKeys, RcTypographyDetail>;

type ExtensionTypography = (DefaultTheme & { typography: {} })['typography'];

export type RcTypographyType = RcTypographyAddition &
  ExtensionTypography &
  RcTypographies &
  MuiTheme['typography'];
