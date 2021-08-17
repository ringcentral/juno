import MuiTab from '@material-ui/core/Tab';
import React, { ComponentProps, forwardRef, useMemo } from 'react';

import {
  combineProps,
  RcBaseProps,
  RcBaseSize,
  styled,
  useThemeProps,
} from '../../../foundation';
import { TabStyle } from './styles';
import { RcTabClasses } from './utils';

type RcTabSize = RcBaseSize<'small' | 'large'>;

type RcTabProps = {
  /** tab size, default is `small` */
  size?: RcTabSize;
  /** tab wrapper flex direction, default is `vertical` */
  direction?: 'vertical' | 'horizontal';
} & RcBaseProps<ComponentProps<typeof MuiTab>, 'wrapped' | 'textColor'>;

const _RcTab = forwardRef<any, RcTabProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcTab' });
  const { classes: classesProp, children, direction, ...rest } = props;
  const classes = useMemo(() => combineProps(RcTabClasses, classesProp), [
    classesProp,
  ]);

  return <MuiTab {...rest} ref={ref} classes={classes} />;
});

const RcTab = styled(_RcTab)`
  ${TabStyle}
`;

RcTab.defaultProps = {
  size: 'small',
};

RcTab.displayName = 'RcTab';

export { RcTab, RcTabProps };
