import MuiPaper from '@material-ui/core/Paper';
import React, { ComponentProps, forwardRef, useMemo } from 'react';

import {
  combineClasses,
  RcBaseProps,
  styled,
  useThemeProps,
} from '../../foundation';
import { PaperStyle } from './styles';
import { RcPaperClasses } from './utils';

type RcPaperProps = {} & RcBaseProps<ComponentProps<typeof MuiPaper>>;

const _RcPaper = forwardRef<any, RcPaperProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcPaper' });
  const { classes: classesProp, children, ...rest } = props;
  const classes = useMemo(
    () => combineClasses(RcPaperClasses, classesProp),
    [classesProp],
  );

  return (
    <MuiPaper {...rest} ref={ref} classes={classes}>
      {children}
    </MuiPaper>
  );
});

const RcPaper = styled(_RcPaper)`
  ${PaperStyle}
`;

RcPaper.defaultProps = {};

RcPaper.displayName = 'RcPaper';

export { RcPaper };
export type { RcPaperProps };
