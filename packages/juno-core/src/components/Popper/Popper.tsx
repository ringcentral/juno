import React, { ComponentProps, forwardRef } from 'react';

import MuiPopper from '@material-ui/core/Popper';

import {
  RcBaseProps,
  styled,
  useRcPortalWindowContext,
  useThemeProps,
} from '../../foundation';
import { PopperStyle } from './styles';
import { fixOffsetsModifer } from './modifiers';

type RcPopperProps = {} & RcBaseProps<ComponentProps<typeof MuiPopper>>;

const _RcPopper = forwardRef<any, RcPopperProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcPopper' });
  const { children, modifiers, ...rest } = props;
  const { externalWindow } = useRcPortalWindowContext();

  return (
    <MuiPopper
      container={externalWindow?.document.body}
      {...rest}
      modifiers={{ fixOffsets: fixOffsetsModifer, ...modifiers }}
      ref={ref}
    >
      {children}
    </MuiPopper>
  );
});

const RcPopper = styled(_RcPopper)`
  ${PopperStyle};
`;

RcPopper.defaultProps = {};

RcPopper.displayName = 'RcPopper';

export { RcPopper };
export type { RcPopperProps };
