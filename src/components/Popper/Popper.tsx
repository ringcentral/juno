import MuiPopper from '@material-ui/core/Popper';
import React, { ComponentProps, forwardRef } from 'react';

import {
  RcBaseProps,
  styled,
  useRcPortalWindowContext,
  useThemeProps,
} from '../../foundation';
import { PopperStyle } from './styles';

type RcPopperProps = {} & RcBaseProps<ComponentProps<typeof MuiPopper>>;

const _RcPopper = forwardRef<any, RcPopperProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcPopper' });
  const { children, ...rest } = props;
  const { externalWindow } = useRcPortalWindowContext();

  return (
    <MuiPopper container={externalWindow?.document.body} {...rest} ref={ref}>
      {children}
    </MuiPopper>
  );
});

const RcPopper = styled(_RcPopper)`
  ${PopperStyle};
`;

RcPopper.defaultProps = {};

RcPopper.displayName = 'RcPopper';

export { RcPopper, RcPopperProps };
