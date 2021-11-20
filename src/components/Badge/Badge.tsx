import MuiBadge from '@material-ui/core/Badge';
import { capitalize } from '@material-ui/core/utils';
import clsx from 'clsx';
import React, {
  ComponentProps,
  ComponentType,
  ElementType,
  forwardRef,
  useMemo,
} from 'react';

import {
  combineProps,
  RcBaseProps,
  RcPaletteKeys,
  styled,
  UnionPick,
  useThemeProps,
} from '../../foundation';
import { RcBox } from '../Box';
import { RcPresence, RcPresenceProps } from '../Presence';
import { BadgeStyle } from './styles';
import { RcBadgeClasses } from './utils';

type RcBadgeProps = {
  /** tag color, default is `highlight.b03` */
  color?: RcPaletteKeys;
  /** text color, default is `neutral.f01` */
  textColor?: RcPaletteKeys;
  /** tag border color */
  borderColor?: RcPaletteKeys;
  /** The component used for the root node. Either a string to use a HTML element or a component. */
  component?: ElementType;
  /** Wrapped shape the badge should overlap */
  overlap?:
    | UnionPick<
        NonNullable<ComponentProps<typeof MuiBadge>['overlap']>,
        'circular' | 'rectangular'
      >
    | 'none';
  /**
   * Custom dot render Component in `dot` mode
   * if you don't want any dot, you can set `null`
   */
  dotComponent?: ComponentType<any> | null;
  /** when mode is dot, that addition dotProps */
  dotProps?: RcPresenceProps;
} & RcBaseProps<ComponentProps<typeof MuiBadge>, 'overlap' | 'color'>;

const _RcBadge = forwardRef<any, RcBadgeProps>((inProps: RcBadgeProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcBadge' });

  const {
    classes: classesProp,
    children,
    overlap,
    color,
    variant,
    textColor,
    anchorOrigin,
    borderColor,
    component,
    dotComponent,
    dotProps,
    ...rest
  } = props;

  const classes = useMemo(
    () => combineProps(RcBadgeClasses, classesProp),
    [classesProp],
  );

  const CustomDotBadge = useMemo(() => {
    const isDot = variant === 'dot';

    return isDot
      ? forwardRef<any, any>(({ children: OmitChildren, ...rest }, ref) => {
          const { horizontal, vertical } = anchorOrigin!;

          const addClassName = `MuiBadge-anchorOrigin${capitalize(
            vertical!,
          )}${capitalize(horizontal!)}${capitalize(overlap!)}`;

          const DotComponent = dotComponent ?? RcPresence;

          const applyDotProps = combineProps(
            { className: clsx(addClassName, RcBadgeClasses.badge) },
            dotProps,
          );

          return (
            <div {...rest} ref={ref}>
              {children}
              {dotComponent !== null && (
                <RcBox position="absolute" zIndex="1" clone>
                  <DotComponent {...applyDotProps} />
                </RcBox>
              )}
            </div>
          );
        })
      : undefined;
  }, [anchorOrigin, children, dotComponent, dotProps, overlap, variant]);

  return (
    <MuiBadge
      {...rest}
      variant={variant}
      anchorOrigin={anchorOrigin}
      component={(component || CustomDotBadge) as any}
      overlap={overlap !== 'none' ? overlap : undefined}
      ref={ref}
      classes={classes}
    >
      {children}
    </MuiBadge>
  );
});

const RcBadge = styled(_RcBadge)`
  ${BadgeStyle}
`;

RcBadge.defaultProps = {
  color: 'highlight.b03',
  textColor: 'neutral.f01',
  overlap: 'rectangular',
  anchorOrigin: {
    horizontal: 'right',
    vertical: 'top',
  },
};

RcBadge.displayName = 'RcBadge';

export { RcBadge };
export type { RcBadgeProps };
