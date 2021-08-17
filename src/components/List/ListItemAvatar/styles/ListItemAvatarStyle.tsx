import {
  css,
  flexCenterStyle,
  RcThemedStyled,
  spacing,
} from '../../../../foundation';
import { RcListItemAvatarProps } from '../ListItemAvatar';

export const ListItemAvatarStyle: RcThemedStyled<
  RcListItemAvatarProps,
  any
> = () => css`
  margin: ${spacing(0.75, 2, 0.75, 0)};
  min-width: 0;
  ${flexCenterStyle};
`;
