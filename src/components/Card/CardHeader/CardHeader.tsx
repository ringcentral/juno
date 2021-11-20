import MuiCardHeader from '@material-ui/core/CardHeader';
import React, { ComponentProps, forwardRef, useMemo } from 'react';

import {
  combineClasses,
  RcBaseProps,
  overridableStyled,
  useThemeProps,
} from '../../../foundation';
import { CardHeaderStyle } from './styles';
import { RcCardHeaderClasses } from './utils';

type RcCardHeaderProps = {} & RcBaseProps<ComponentProps<typeof MuiCardHeader>>;

interface RcCardHeaderTypeMap<D extends React.ElementType = 'div'> {
  props: RcCardHeaderProps;
  defaultComponent: D;
}

const _RcCardHeader = forwardRef<any, RcCardHeaderProps>(
  (inProps: RcCardHeaderProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcCardHeader' });
    const { classes: classesProp, children, ...rest } = props;
    const classes = useMemo(
      () => combineClasses(RcCardHeaderClasses, classesProp),
      [classesProp],
    );

    return (
      <MuiCardHeader {...rest} ref={ref} classes={classes}>
        {children}
      </MuiCardHeader>
    );
  },
);

const RcCardHeader = overridableStyled<RcCardHeaderTypeMap>(_RcCardHeader)`
  ${CardHeaderStyle}
`;

RcCardHeader.defaultProps = {};

RcCardHeader.displayName = 'RcCardHeader';

export { RcCardHeader };
export type { RcCardHeaderProps };
