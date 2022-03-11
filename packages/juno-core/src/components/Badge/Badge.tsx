import React, {
  ComponentProps,
  ComponentType,
  ElementType,
  forwardRef,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react';

import clsx from 'clsx';

import MuiBadge from '@material-ui/core/Badge';
import { capitalize } from '@material-ui/core/utils';

import {
  combineProps,
  px,
  RcBaseProps,
  RcPaletteKeys,
  styled,
  UnionPick,
  useForkRef,
  useThemeProps,
} from '../../foundation';
import { RcBox } from '../Box';
import { RcPresence, RcPresenceProps } from '../Presence';
import { BadgeStyle } from './styles';
import { getRoundOffset, RcBadgeClasses, roundBadgeMarginKey } from './utils';

type RcBadgeProps = {
  /** tag color, default is `highlight.b03` */
  color?: RcPaletteKeys;
  /** text color, default is `neutral.f01` */
  textColor?: RcPaletteKeys;
  /** tag border color */
  borderColor?: RcPaletteKeys;
  /** The component used for the root node. Either a string to use a HTML element or a component. */
  component?: ElementType;
  /**
   * Wrapped shape the badge should overlap
   * - `circular`: for circular children
   * - `rectangular`: for rectangular children
   * - `round`: for round radius rectangular children, like
   * ```jsx
   * <RcButton radius="round">click</RcButton>
   * ```
   * - `none`: not do any overlap on that badge
   */
  overlap?:
    | UnionPick<
        NonNullable<ComponentProps<typeof MuiBadge>['overlap']>,
        // TODO: when upgrade to v2 that can be remove
        'circular' | 'rectangular'
      >
    | 'none'
    | 'round';
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

  const innerRef = useRef<HTMLElement>(null);
  const badgeRef = useForkRef(innerRef, ref);
  const currHeightRef = useRef(0);

  const isRound = overlap === 'round';
  const isDot = variant === 'dot';

  const classes = useMemo(
    () => combineProps(RcBadgeClasses, classesProp),
    [classesProp],
  );

  const CustomDotBadge = useMemo(() => {
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
  }, [isDot, dotProps, overlap, anchorOrigin, children, dotComponent]);

  useLayoutEffect(() => {
    const badgeElm = innerRef.current;

    if (!badgeElm || !isRound) return;

    const height = badgeElm.clientHeight;

    if (currHeightRef.current !== height) {
      currHeightRef.current = height;

      const offset = getRoundOffset(height / 2);
      badgeElm.style.setProperty(roundBadgeMarginKey, px(offset));
    }
  });

  const notPassOverlapToMui = overlap !== 'none' && !isRound;

  return (
    <MuiBadge
      {...rest}
      variant={variant}
      anchorOrigin={anchorOrigin}
      component={(component || CustomDotBadge) as any}
      // TODO: that as any for ts v3.8 still not support pick variable out of if check
      overlap={notPassOverlapToMui ? (overlap as any) : undefined}
      ref={badgeRef}
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
