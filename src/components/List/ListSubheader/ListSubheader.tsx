import MuiListSubheader from '@material-ui/core/ListSubheader';
import React, { ComponentProps, forwardRef, useMemo } from 'react';

import {
  combineClasses,
  RcBaseProps,
  styled,
  useThemeProps,
} from '../../../foundation';
import { ListSubheaderStyle } from './styles';
import { RcListSubheaderClasses } from './utils';

type RcListSubheaderProps = {
  /** The component used for the root node. Either a string to use a HTML element or a component. */
  component?: React.ElementType;
} & RcBaseProps<ComponentProps<typeof MuiListSubheader>, 'color'>;

const _RcListSubheader = forwardRef<any, RcListSubheaderProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcListSubheader' });
    const { classes: classesProp, children, ...rest } = props;
    const classes = useMemo(
      () => combineClasses(RcListSubheaderClasses, classesProp),
      [classesProp],
    );

    return (
      <MuiListSubheader {...rest} ref={ref} classes={classes} color="default">
        {children}
      </MuiListSubheader>
    );
  },
);

const RcListSubheader = styled(_RcListSubheader)`
  ${ListSubheaderStyle}
`;

RcListSubheader.defaultProps = {
  component: 'li',
};

RcListSubheader.displayName = 'RcListSubheader';

export { RcListSubheader, RcListSubheaderProps };
