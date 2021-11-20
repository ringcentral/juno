import MuiGrid from '@material-ui/core/Grid';
import React, { ComponentProps, forwardRef, useMemo } from 'react';

import {
  combineClasses,
  RcBaseProps,
  styled,
  useThemeProps,
} from '../../foundation';
import { GridStyle } from './styles';
import { RcGridClasses } from './utils';

type RcGridProps = {} & RcBaseProps<ComponentProps<typeof MuiGrid>>;

const _RcGrid = forwardRef<any, RcGridProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcGrid' });
  const { classes: classesProp, children, ...rest } = props;
  const classes = useMemo(
    () => combineClasses(RcGridClasses, classesProp),
    [classesProp],
  );

  return (
    <MuiGrid {...rest} ref={ref} classes={classes}>
      {children}
    </MuiGrid>
  );
});

const RcGrid = styled(_RcGrid)`
  ${GridStyle}
`;

RcGrid.defaultProps = {};

RcGrid.displayName = 'RcGrid';

export { RcGrid };
export type { RcGridProps };
