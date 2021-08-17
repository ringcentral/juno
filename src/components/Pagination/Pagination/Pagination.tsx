import MuiPagination from '@material-ui/lab/Pagination';
import React, { ComponentProps, forwardRef, useMemo } from 'react';
import {
  combineProps,
  RcBaseProps,
  styled,
  useThemeProps,
} from '../../../foundation';
import { paginationStyle } from './styles';
import { RcPaginationClasses } from './utils';

type RcPaginationProps = {} & RcBaseProps<ComponentProps<typeof MuiPagination>>;

const _RcPagination = forwardRef<any, RcPaginationProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcPagination' });
  const { classes: classesProp, ...reset } = props;

  const classes = useMemo(
    () => combineProps(RcPaginationClasses, classesProp),
    [classesProp],
  );

  return <MuiPagination ref={ref} classes={classes} {...reset} />;
});

/** @release */
const RcPagination = styled(_RcPagination)`
  ${paginationStyle}
`;

RcPagination.defaultProps = {};

RcPagination.displayName = 'RcPagination';

export { RcPagination, RcPaginationProps };
