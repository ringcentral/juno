import MuiPopover from '@material-ui/core/Popover';
import React, { ComponentProps, forwardRef, useMemo } from 'react';

import {
  combineClasses,
  RcBaseProps,
  styled,
  useRcPortalWindowContext,
  useThemeProps,
} from '../../foundation';
import { PopoverStyle } from './styles';
import { RcPopoverClasses } from './utils';

type RcPopoverProps = {} & RcBaseProps<ComponentProps<typeof MuiPopover>>;

const _RcPopover = forwardRef<any, RcPopoverProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcPopover' });
  const { classes: classesProp, children, ...rest } = props;
  const classes = useMemo(() => combineClasses(RcPopoverClasses, classesProp), [
    classesProp,
  ]);
  const { externalWindow } = useRcPortalWindowContext();

  return (
    <MuiPopover
      container={externalWindow?.document.body}
      {...rest}
      ref={ref}
      classes={classes}
    >
      {children}
    </MuiPopover>
  );
});

const RcPopover = styled(_RcPopover)`
  ${PopoverStyle};
`;

RcPopover.defaultProps = {
  anchorOrigin: { vertical: 'top', horizontal: 'left' },
  anchorReference: 'anchorEl',
};

RcPopover.displayName = 'RcPopover';

export { RcPopover, RcPopoverProps };
