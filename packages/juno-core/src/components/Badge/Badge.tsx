import React, {
  ComponentProps,
  ComponentType,
  ElementType,
  forwardRef,
  useMemo,
  useRef,
} from 'react';

import MuiBadge from '@material-ui/core/Badge';

import {
  combineClasses,
  logInDev,
  RcBaseProps,
  RcPaletteKeys,
  styled,
  UnionPick,
  useChange,
  useForkRef,
  useThemeProps,
} from '../../foundation';
import { RcPresenceProps } from '../Presence';
import { BadgeStyle } from './styles';
import { RcBadgeClasses, useRoundBadgeOffset } from './utils';
import { DotBadgeContext, DotBadge } from './DotBadge';

type RcBadgeProps = {
  /** tag color, default is `umi.mentioned` */
  color?: RcPaletteKeys;
  /** text color, default is `umi.text` */
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
    invisible,
    badgeContent,
    showZero = false,
    ...rest
  } = props;

  // * should never change overlap
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useChange(
      (prev) => {
        if (!prev) return;

        logInDev({
          component: 'RcBadge',
          message: 'Should not change `overlap` prop after component render',
          level: 'error',
        });
      },
      () => overlap,
    );
  }

  const innerRef = useRef<HTMLElement>(null);
  const badgeRef = useForkRef(innerRef, ref);

  const isRound = overlap === 'round';
  const isDot = variant === 'dot';
  const notPassOverlapToMui = overlap !== 'none' && !isRound;

  // overlap will never change in production mode
  if (isRound) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useRoundBadgeOffset(innerRef);
  }

  const classes = useMemo(
    () => combineClasses(RcBadgeClasses, classesProp),
    [classesProp],
  );

  const renderBadge = (customComponent: any = component) => (
    <MuiBadge
      {...rest}
      variant={variant}
      invisible={invisible}
      badgeContent={badgeContent}
      showZero={showZero}
      anchorOrigin={anchorOrigin}
      component={customComponent}
      // TODO: that as any for ts v3.8 still not support pick variable out of if check
      overlap={notPassOverlapToMui ? (overlap as any) : undefined}
      ref={badgeRef}
      classes={classes}
    >
      {children}
    </MuiBadge>
  );

  if (isDot) {
    return (
      <DotBadgeContext.Provider
        value={{
          anchorOrigin,
          dotComponent,
          dotProps,
          invisible,
          overlap,
          children,
          badgeContent,
          showZero,
        }}
      >
        {renderBadge(DotBadge)}
      </DotBadgeContext.Provider>
    );
  }

  return renderBadge(component);
});

const RcBadge = styled(_RcBadge)`
  ${BadgeStyle}
`;

RcBadge.defaultProps = {
  color: 'umi.mentioned',
  textColor: 'umi.text',
  overlap: 'rectangular',
  anchorOrigin: {
    horizontal: 'right',
    vertical: 'top',
  },
};

RcBadge.displayName = 'RcBadge';

export { RcBadge };
export type { RcBadgeProps };
