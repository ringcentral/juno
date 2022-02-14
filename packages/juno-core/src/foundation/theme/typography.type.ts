import { Theme as MuiTheme } from '@material-ui/core/styles';

import typography from './assets/typography.json';

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
  | 'inherit';

export type RcTypographyAddition = Pick<
  typeof typography,
  RcTypographyPickFields
>;

export type RcTypographies = Record<
  RcTypographyKeys,
  {
    fontSize: string | number;
    fontWeight: number | number;
    lineHeight: string | number;
  }
>;

export type RcTypographyType = RcTypographyAddition &
  RcTypographies &
  MuiTheme['typography'];
