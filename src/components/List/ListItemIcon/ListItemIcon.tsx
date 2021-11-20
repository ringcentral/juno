import MuiListItemIcon from '@material-ui/core/ListItemIcon';
import React, { ComponentProps, forwardRef, useMemo } from 'react';

import {
  combineClasses,
  RcBaseProps,
  RcPaletteProp,
  styled,
  useThemeProps,
} from '../../../foundation';
import { ListItemIconStyle } from './styles';
import { RcListItemIconClasses } from './utils';

type RcListItemIconProps = {
  /** color for root container */
  color?: RcPaletteProp;
} & RcBaseProps<ComponentProps<typeof MuiListItemIcon>>;

const _RcListItemIcon = forwardRef<any, RcListItemIconProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcListItemIcon' });
  const { classes: classesProp, children, color, ...rest } = props;
  const classes = useMemo(
    () => combineClasses(RcListItemIconClasses, classesProp),
    [classesProp],
  );

  return (
    <MuiListItemIcon {...rest} ref={ref} classes={classes}>
      {children}
    </MuiListItemIcon>
  );
});

const RcListItemIcon = styled(_RcListItemIcon)`
  ${ListItemIconStyle};
`;

RcListItemIcon.defaultProps = {};

RcListItemIcon.displayName = 'RcListItemIcon';

export { RcListItemIcon };
export type { RcListItemIconProps };
