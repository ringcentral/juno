import {
  px,
  RcClasses,
  RcPaletteProp,
  spacing,
  UnitMap,
} from '../../../../foundation';
import {
  RcSnackbarContentProps,
  RcSnackbarContentSize,
  RcSnackbarContentType,
} from '../SnackbarContent';

const RcSnackbarContentColors: UnitMap<
  RcSnackbarContentType,
  {
    textColor: RcPaletteProp;
    bgColor: RcPaletteProp;
  }
> = {
  success: {
    textColor: 'neutral.f01',
    bgColor: 'success.b04',
  },
  error: {
    textColor: 'neutral.f01',
    bgColor: 'danger.b04',
  },
  info: {
    textColor: 'neutral.f01',
    bgColor: 'neutral.b04',
  },
  warn: {
    textColor: 'neutral.f07',
    bgColor: 'warning.b03',
  },
};

const RcSnackbarContentClasses = RcClasses<RcSnackbarContentProps>(
  ['message', 'action'],
  'RcSnackbarContent',
);

const RcSnackbarContentPaddings: UnitMap<RcSnackbarContentSize> = {
  small: spacing(1, 4),
  medium: spacing(3, 4),
};

const RcSnackbarContentLoadingSizes: UnitMap<RcSnackbarContentSize, number> = {
  small: 16,
  medium: 20,
};

const RcSnackbarContentLineHeight = px(24);

export {
  RcSnackbarContentColors,
  RcSnackbarContentClasses,
  RcSnackbarContentPaddings,
  RcSnackbarContentLoadingSizes,
  RcSnackbarContentLineHeight,
};
