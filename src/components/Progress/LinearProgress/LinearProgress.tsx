import MuiLinearProgress from '@material-ui/core/LinearProgress';
import React, { ComponentProps, forwardRef, useMemo } from 'react';

import {
  combineClasses,
  RcBaseProps,
  RcPaletteKeys,
  styled,
  useThemeProps,
} from '../../../foundation';
import { LinearProgressStyle } from './styles';
import { RcLinearProgressClasses } from './utils';

type RcLinearProgressProps = {
  /** custom color */
  color?: RcPaletteKeys;
} & RcBaseProps<ComponentProps<typeof MuiLinearProgress>, 'color'>;

const _RcLinearProgress = forwardRef<any, RcLinearProgressProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcLinearProgress' });
    const { classes: classesProp, color, ...rest } = props;
    const classes = useMemo(
      () => combineClasses(RcLinearProgressClasses, classesProp),
      [classesProp],
    );

    return <MuiLinearProgress {...rest} ref={ref} classes={classes} />;
  },
);

const RcLinearProgress = styled(_RcLinearProgress)`
  ${LinearProgressStyle}
`;

RcLinearProgress.defaultProps = {
  color: 'interactive.f01',
};

RcLinearProgress.displayName = 'RcLinearProgress';

export { RcLinearProgress };
export type { RcLinearProgressProps };
