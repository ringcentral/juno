import React, { ComponentProps, forwardRef, useMemo } from 'react';

import MuiListItemAvatar from '@material-ui/core/ListItemAvatar';

import {
  combineClasses,
  RcBaseProps,
  styled,
  useThemeProps,
} from '../../../foundation';
import { ListItemAvatarStyle } from './styles';
import { RcListItemAvatarClasses } from './utils';

type RcListItemAvatarProps = {} & RcBaseProps<
  ComponentProps<typeof MuiListItemAvatar>
>;

const _RcListItemAvatar = forwardRef<any, RcListItemAvatarProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcListItemAvatar' });
    const { classes: classesProp, children, ...rest } = props;
    const classes = useMemo(
      () => combineClasses(RcListItemAvatarClasses, classesProp),
      [classesProp],
    );

    return (
      <MuiListItemAvatar {...rest} ref={ref} classes={classes}>
        {children}
      </MuiListItemAvatar>
    );
  },
);

const RcListItemAvatar = styled(_RcListItemAvatar)`
  ${ListItemAvatarStyle};
`;

RcListItemAvatar.defaultProps = {};

RcListItemAvatar.displayName = 'RcListItemAvatar';

export { RcListItemAvatar };
export type { RcListItemAvatarProps };
