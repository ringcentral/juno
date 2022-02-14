import React, { ComponentProps, forwardRef, useMemo } from 'react';

import MuiCardContent from '@material-ui/core/CardContent';

import {
  combineClasses,
  RcBaseProps,
  styled,
  useThemeProps,
} from '../../../foundation';
import { CardContentStyle } from './styles';
import { RcCardContentClasses } from './utils';

type RcCardContentProps = {} & RcBaseProps<
  ComponentProps<typeof MuiCardContent>
>;

const _RcCardContent = forwardRef<any, RcCardContentProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcCardContent' });
  const { classes: classesProp, children, ...rest } = props;
  const classes = useMemo(
    () => combineClasses(RcCardContentClasses, classesProp),
    [classesProp],
  );

  return (
    <MuiCardContent {...rest} ref={ref} classes={classes}>
      {children}
    </MuiCardContent>
  );
});

const RcCardContent = styled(_RcCardContent)`
  ${CardContentStyle}
`;

RcCardContent.defaultProps = {};

RcCardContent.displayName = 'RcCardContent';

export { RcCardContent };
export type { RcCardContentProps };
