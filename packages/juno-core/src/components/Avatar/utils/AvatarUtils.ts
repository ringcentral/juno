import { RcClasses, RcTypographyKeys, UnitMap } from '../../../foundation';
import { RcAvatarProps, RcAvatarSize } from '../Avatar';

export const RcAvatarSizes: UnitMap<RcAvatarSize, number> = {
  xxsmall: 24,
  xsmall: 32,
  small: 40,
  medium: 64,
  large: 80,
  xlarge: 100,
};

export const RcAvatarClasses = RcClasses<RcAvatarProps>(
  ['presenceWrapper', 'avatarContainer', 'mask'],
  'RcAvatar',
);

export const RcAvatarFonts: UnitMap<RcAvatarSize, RcTypographyKeys> = {
  xlarge: 'display2',
  large: 'display1',
  medium: 'title2',
  small: 'subheading2',
  xsmall: 'subheading2',
  xxsmall: 'caption2',
};
