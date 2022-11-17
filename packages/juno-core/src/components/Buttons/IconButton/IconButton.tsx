import React, { forwardRef, memo, ReactElement, useMemo } from 'react';

import clsx from 'clsx';

import {
  combineProps,
  RcBaseProps,
  RcClassesProps,
  RcTheme,
  styled,
  UnionOmit,
  useDeprecatedCheck,
  useTheme,
  useThemeProps,
  combineClasses,
  RcBaseFocusVariant,
} from '../../../foundation';
import { RcIcon, RcIconProps, RcIconSize } from '../../Icon';
import { RcTooltip, withTooltip } from '../../Tooltip';
import { RcButtonBase, RcButtonBaseProps } from '../ButtonBase';
import {
  RcIconButtonDeprecatedProps,
  rcIconButtonWarning,
} from './deprecated/IconButtonProps';
import { iconButtonStyle } from './styles';
import { RcIconButtonClasses, RcIconButtonTouchRippleClasses } from './utils';

type RcIconButtonVariant =
  | 'round'
  | 'plain'
  | 'inverse'
  | 'outline'
  | 'contained';

type RcIconButtonSize = UnionOmit<RcIconSize, 'inherit'>;

type RcIconButtonProps = {
  /** variant, default with `round` */
  variant?: RcIconButtonVariant;
  /** button size, with default with `medium`   */
  size?: RcIconButtonSize;
  /** persist background color */
  shouldPersistBg?: boolean;
  /** make iconButton unVisible, default with `false` */
  invisible?: boolean;
  /** stretch icon to same size as container */
  stretchIcon?: boolean;
  /** still use color when disabled */
  useColorWhenDisabled?: boolean;
  /** custom border radius for tag, default is `lg` */
  radius?: keyof RcTheme['radius'];
  /**
   * `box-shadow` with token
   * 0 ~ 24 for different elevation shadow
   */
  elevation?: keyof RcTheme['shadows'];
  /**
   * `box-shadow` with token when button active
   * 0 ~ 24 for different elevation shadow
   */
  activeElevation?: keyof RcTheme['shadows'];
  /**
   * not have fake border on `inverse` and `contained` variant in `highContrast` theme
   */
  disabledFakeBorder?: boolean;
  /**
   * pass props to below Icon component
   */
  IconProps?: RcIconProps;
  /**
   * Set focus style for component.
   * Only use for `inverse` and `round` variant.
   * `plain` variant always use `focusRing`
   *
   * @default 'highlight'
   */
  focusVariant?: RcBaseFocusVariant<'highlight' | 'focusRing'>;
} & RcIconButtonDeprecatedProps &
  Pick<
    RcIconProps,
    | 'symbol'
    | 'loading'
    | 'CircularProgressProps'
    | 'iconColor'
    | 'iconSize'
    | 'color'
  > &
  RcClassesProps<
    | 'round'
    | 'invisible'
    | 'outline'
    | 'contained'
    | 'inverse'
    | 'icon'
    | 'persistBg'
  > &
  RcBaseProps<RcButtonBaseProps, 'color'>;

const _RcIconButton = memo(
  forwardRef<HTMLButtonElement, RcIconButtonProps>((inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcIconButton' });

    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useDeprecatedCheck(RcIconButton, props, rcIconButtonWarning as any);
    }

    const {
      buttonRef = ref,
      IconProps = {},
      className,
      classes: classesProp,
      children,
      title,
      disabledFakeBorder,
      symbol,
      disabled,
      invisible,
      type,
      loading,
      TouchRippleProps,
      variant,
      CircularProgressProps,
      color,
      shouldPersistBg,
      stretchIcon,
      iconColor,
      iconSize,
      disableTouchRipple,
      useColorWhenDisabled,
      size,
      radius,
      elevation,
      activeElevation,
      aRef,
      tooltipTitle,
      tooltipForceHide,
      disableToolTip,
      alwaysEnableTooltip,
      tooltipPlacement,
      ariaLabel,
      popperProps,
      externalLink,
      download,
      href,
      focusVariant,
      ...rest
    } = props;

    const theme = useTheme();

    const isOutline = variant === 'outline';
    const isContained = variant === 'contained';
    const isInverse = variant === 'inverse';
    const isPlain = variant === 'plain';
    const isRound = variant === 'round';

    const classes = useMemo(
      () => combineClasses(RcIconButtonClasses, classesProp),
      [classesProp],
    );

    const IconClassName = clsx(className, classes.root, {
      [classes.disabled]: disabled,
      [classes.invisible]: invisible,
      [classes.outline]: isOutline,
      [classes.contained]: isContained,
      [classes.inverse]: isInverse,
      [classes.round]: isRound,
    });

    const iconButton = (() => {
      // `color` already handle in StyledIconButton
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const { color, ...IconPropsWithoutColor } = IconProps;

      const icon =
        React.isValidElement(children) || children === '' ? (
          (children as ReactElement)
        ) : (
          <RcIcon
            symbol={symbol}
            className={classes!.icon}
            loading={loading}
            size="inherit"
            CircularProgressProps={CircularProgressProps}
            {...IconPropsWithoutColor}
          >
            {children as string}
          </RcIcon>
        );

      const iconButton = (
        <RcButtonBase
          ref={buttonRef as any}
          disableRipple={theme.props?.MuiButtonBase?.disableRipple || isPlain}
          type={type}
          disabled={disabled}
          aria-label={ariaLabel || tooltipTitle || title}
          title={title}
          aria-disabled={disabled}
          className={IconClassName}
          TouchRippleProps={combineProps(
            {
              classes: RcIconButtonTouchRippleClasses,
            },
            TouchRippleProps,
          )}
          {...rest}
        >
          {icon}
        </RcButtonBase>
      );

      if (download && href) {
        return (
          <a download href={href} ref={aRef}>
            {iconButton}
          </a>
        );
      }

      if (externalLink && href) {
        return (
          <a rel="noopener noreferrer external" target="_blank" href={href}>
            {iconButton}
          </a>
        );
      }
      return iconButton;
    })();

    if (
      !!tooltipTitle &&
      ((!disabled && !disableToolTip) || (disabled && alwaysEnableTooltip))
    ) {
      return (
        <RcTooltip
          title={tooltipTitle}
          tooltipForceHide={tooltipForceHide}
          placement={tooltipPlacement}
          PopperProps={popperProps}
        >
          {iconButton}
        </RcTooltip>
      );
    }
    return iconButton;
  }),
);

const RcIconButton = styled(withTooltip(_RcIconButton))`
  ${iconButtonStyle}
`;

RcIconButton.displayName = 'RcIconButton';

RcIconButton.defaultProps = {
  variant: 'round',
  color: 'neutral.f04',
  size: 'medium',
  type: 'button',
  focusRipple: true,
  disableTouchRipple: true,
  classes: {},
  useRcTooltip: true,
  focusVariant: 'highlight',
};

export { RcIconButton };
export type { RcIconButtonProps, RcIconButtonSize, RcIconButtonVariant };
