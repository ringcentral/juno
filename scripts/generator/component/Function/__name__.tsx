import React, { ComponentProps, forwardRef, useMemo } from 'react';

import Mui__name__ from '@material-ui/core/__name__';

import { combineClasses, RcBaseProps, styled } from '../../foundation';
import { __name__Style } from './styles';
import { Rc__name__Classes } from './utils';

type Rc__name__Props = {} & RcBaseProps<ComponentProps<typeof Mui__name__>>;

const _Rc__name__ = forwardRef<any, Rc__name__Props>(
  ({ classes: classesProp, children, ...rest }, ref) => {
    const classes = useMemo(
      () => combineClasses(Rc__name__Classes, classesProp),
      [classesProp],
    );

    return (
      <Mui__name__ {...rest} ref={ref} classes={classes}>
        {children}
      </Mui__name__>
    );
  },
);

const Rc__name__ = styled(_Rc__name__)`
  ${__name__Style}
`;

Rc__name__.defaultProps = {};

Rc__name__.displayName = 'Rc__name__';

export { Rc__name__, Rc__name__Props };
