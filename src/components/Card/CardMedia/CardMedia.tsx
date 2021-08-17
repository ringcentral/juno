import MuiCardMedia from '@material-ui/core/CardMedia';
import React, { ComponentProps, forwardRef, useMemo } from 'react';

import {
  combineClasses,
  RcBaseProps,
  overridableStyled,
  useThemeProps,
} from '../../../foundation';
import { CardMediaStyle } from './styles';
import { RcCardMediaClasses } from './utils';

type RcCardMediaProps = {} & RcBaseProps<ComponentProps<typeof MuiCardMedia>>;

interface RcCardMediaTypeMap<D extends React.ElementType = 'div'> {
  props: RcCardMediaProps;
  defaultComponent: D;
}

const _RcCardMedia = forwardRef<any, RcCardMediaProps>(
  (inProps: RcCardMediaProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcCardMedia' });
    const { classes: classesProp, children, ...rest } = props;
    const classes = useMemo(
      () => combineClasses(RcCardMediaClasses, classesProp),
      [classesProp],
    );

    return (
      <MuiCardMedia {...rest} ref={ref} classes={classes}>
        {children}
      </MuiCardMedia>
    );
  },
);

const RcCardMedia = overridableStyled<RcCardMediaTypeMap>(_RcCardMedia)`
  ${CardMediaStyle}
`;

RcCardMedia.defaultProps = {};

RcCardMedia.displayName = 'RcCardMedia';

export { RcCardMedia, RcCardMediaProps };
