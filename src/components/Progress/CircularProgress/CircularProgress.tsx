import MuiCircularProgress from '@material-ui/core/CircularProgress';
import React, { ComponentProps, forwardRef, useMemo } from 'react';

import {
  combineClasses,
  RcBaseProps,
  RcPaletteKeys,
  styled,
  useThemeProps,
} from '../../../foundation';
import { CircularProgressStyle } from './styles';
import { RcCircularProgressClasses } from './utils';

type RcCircularProgressProps = {
  /** custom color */
  color?: RcPaletteKeys | 'inherit';
} & RcBaseProps<ComponentProps<typeof MuiCircularProgress>, 'color'>;

const _RcCircularProgress = forwardRef<any, RcCircularProgressProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcCircularProgress' });
    const { classes: classesProp, color, ...rest } = props;
    const classes = useMemo(
      () => combineClasses(RcCircularProgressClasses, classesProp),
      [classesProp],
    );

    return (
      <MuiCircularProgress
        {...rest}
        color="inherit"
        ref={ref}
        classes={classes}
      />
    );
  },
);

const RcCircularProgress = styled(_RcCircularProgress)`
  ${CircularProgressStyle}
`;

RcCircularProgress.defaultProps = {
  size: 24,
  color: 'interactive.f01',
};

RcCircularProgress.displayName = 'RcCircularProgress';

export { RcCircularProgress };
export type { RcCircularProgressProps };
