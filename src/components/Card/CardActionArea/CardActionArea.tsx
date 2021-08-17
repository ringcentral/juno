import MuiCardActionArea from '@material-ui/core/CardActionArea';
import clsx from 'clsx';
import React, { ComponentProps, forwardRef, useMemo } from 'react';

import {
  combineClasses,
  combineProps,
  omit,
  overridableStyled,
  RcBaseProps,
  RcClassesProps,
  useThemeProps,
} from '../../../foundation';
import { useRcCardContext } from '../Card/CardContext';
import { CardActionAreaStyle } from './styles';
import {
  RcCardActionAreaClasses,
  RcCardActionAreaRippleClasses,
} from './utils';

type RcCardActionAreaProps = {} & RcClassesProps<'disableRipple'> &
  RcBaseProps<ComponentProps<typeof MuiCardActionArea>>;

interface RcCardActionAreaTypeMap<D extends React.ElementType = 'div'> {
  props: RcCardActionAreaProps;
  defaultComponent: D;
}

const _RcCardActionArea = forwardRef<any, RcCardActionAreaProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcCardActionArea' });
    const {
      className: classNameProp,
      classes: classesProp,
      TouchRippleProps: TouchRipplePropsProp,
      onFocusVisible,
      onBlur,
      disableRipple,
      disableTouchRipple,
      ...rest
    } = useThemeProps({ props, name: 'MuiButtonBase' });

    const { setFocusVisible } = useRcCardContext();

    const events = useMemo(
      () =>
        combineProps(
          {
            onFocusVisible: () => setFocusVisible(true),
            onBlur: () => setFocusVisible(false),
          },
          {
            onFocusVisible,
            onBlur,
          },
        ),
      [onBlur, onFocusVisible, setFocusVisible],
    );

    const classes = useMemo(
      () =>
        combineClasses(
          omit(RcCardActionAreaClasses, ['disableRipple']),
          classesProp,
        ),
      [classesProp],
    );

    const className = clsx(classNameProp, {
      [RcCardActionAreaClasses.disableRipple]:
        disableRipple || disableTouchRipple,
    });

    const TouchRippleProps = useMemo(
      () =>
        combineProps(
          { classes: RcCardActionAreaRippleClasses },
          TouchRipplePropsProp,
        ),
      [TouchRipplePropsProp],
    );

    return (
      <MuiCardActionArea
        {...rest}
        {...events}
        ref={ref}
        className={className}
        classes={classes}
        TouchRippleProps={TouchRippleProps}
        disableRipple={disableRipple}
        disableTouchRipple={disableTouchRipple}
      />
    );
  },
);

const RcCardActionArea = overridableStyled<RcCardActionAreaTypeMap>(
  _RcCardActionArea,
)`
  ${CardActionAreaStyle}
`;

RcCardActionArea.defaultProps = {};

RcCardActionArea.displayName = 'RcCardActionArea';

export { RcCardActionArea, RcCardActionAreaProps };
