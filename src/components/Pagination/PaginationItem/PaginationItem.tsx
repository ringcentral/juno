import React, { ComponentProps, forwardRef, useMemo } from 'react';

import MuiPaginationItem from '@material-ui/lab/PaginationItem';

import {
  combineProps,
  overridableStyled,
  RcBaseProps,
  useThemeProps,
} from '../../../foundation';
import { RcPaginationItemClasses } from './utils';

type RcPaginationItemProps = {} & RcBaseProps<
  ComponentProps<typeof MuiPaginationItem>
>;

interface RcPaginationItemTypeMap<D extends React.ElementType = 'div'> {
  props: RcPaginationItemProps;
  defaultComponent: D;
}

const _RcPaginationItem = forwardRef<any, RcPaginationItemProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcPaginationItem' });
    const { classes: classesProp, children, ...rest } = props;
    const classes = useMemo(
      () => combineProps(RcPaginationItemClasses, classesProp),
      [classesProp],
    );

    return (
      <MuiPaginationItem {...rest} ref={ref} classes={classes}>
        {children}
      </MuiPaginationItem>
    );
  },
);

const RcPaginationItem = overridableStyled<RcPaginationItemTypeMap>(
  _RcPaginationItem,
)``;

RcPaginationItem.defaultProps = {};

RcPaginationItem.displayName = 'RcPaginationItem';

export { RcPaginationItem };
export type { RcPaginationItemProps };
