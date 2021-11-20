import MuiList from '@material-ui/core/List';
import React, { ComponentProps, forwardRef, useMemo } from 'react';

import {
  combineClasses,
  RcBaseProps,
  styled,
  useThemeProps,
} from '../../../foundation';
import { ListStyle } from './styles';
import { RcListClasses } from './utils';

type RcListProps = {} & RcBaseProps<ComponentProps<typeof MuiList>>;

const _RcList = forwardRef<any, RcListProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcList' });
  const { classes: classesProp, children, ...rest } = props;
  const classes = useMemo(
    () => combineClasses(RcListClasses, classesProp),
    [classesProp],
  );

  return (
    <MuiList {...rest} ref={ref} classes={classes}>
      {children}
    </MuiList>
  );
});

const RcList = styled(_RcList)`
  ${ListStyle}
`;

RcList.defaultProps = {
  disablePadding: true,
};

RcList.displayName = 'RcList';

export { RcList };
export type { RcListProps };
