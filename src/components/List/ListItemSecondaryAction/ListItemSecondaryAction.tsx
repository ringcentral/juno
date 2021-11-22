import React, {
  ComponentProps,
  forwardRef,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react';

import MuiListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import {
  combineClasses,
  RcBaseProps,
  removeClassName,
  styled,
  useForkRef,
  useThemeProps,
} from '../../../foundation';
import { ListItemSecondaryActionStyle } from './styles';
import { RcListItemSecondaryActionClasses } from './utils';

type RcListItemSecondaryActionProps = {} & RcBaseProps<
  ComponentProps<typeof MuiListItemSecondaryAction>
>;

const _RcListItemSecondaryAction = forwardRef<
  any,
  RcListItemSecondaryActionProps
>((inProps, ref) => {
  const props = useThemeProps({
    props: inProps,
    name: 'RcListItemSecondaryAction',
  });
  const { classes: classesProp, children, ...rest } = props;
  const innerRef = useRef<HTMLDivElement>(null);
  const divRef = useForkRef(innerRef, ref);

  const classes = useMemo(
    () => combineClasses(RcListItemSecondaryActionClasses, classesProp),
    [classesProp],
  );

  // * need remove not need MuiButton-iconSizeMedium for icon render correct
  useLayoutEffect(() => {
    removeClassName(innerRef, 'MuiListItemSecondaryAction-root');
  });

  return (
    <MuiListItemSecondaryAction {...rest} ref={divRef} classes={classes}>
      {children}
    </MuiListItemSecondaryAction>
  );
});

const RcListItemSecondaryAction = styled(_RcListItemSecondaryAction)`
  ${ListItemSecondaryActionStyle}
`;

RcListItemSecondaryAction.defaultProps = {};

RcListItemSecondaryAction.displayName = 'RcListItemSecondaryAction';

export { RcListItemSecondaryAction };
export type { RcListItemSecondaryActionProps };
