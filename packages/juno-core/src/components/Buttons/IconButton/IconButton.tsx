import React, { forwardRef, memo, ReactElement } from 'react';

import clsx from 'clsx';

import {
  combineProps,
  RcBaseProps,
  RcClassesProps,
  RcTheme,
  styled,
  UnionOmit,
  useTheme,
  useThemeProps,
  useDeprecatedCheck,
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
  RcClassesProps<'invisible' | 'outline' | 'contained' | 'icon' | 'persistBg'> &
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
      className,
      classes,
      children,
      title,
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
      autoFocus,
      href,
      ...rest
    } = props;

    const theme = useTheme();

    const isOutline = variant === 'outline';
    const isContained = variant === 'contained';
    const isPlain = variant === 'plain';

    const IconClassName = clsx(
      className,
      classes!.root,
      RcIconButtonClasses.root,
      {
        [RcIconButtonClasses.disabled]: disabled,
        [RcIconButtonClasses.invisible]: invisible,
        [RcIconButtonClasses.outline]: isOutline,
        [RcIconButtonClasses.contained]: isContained,
      },
    );

    const iconButton = (() => {
      const icon =
        React.isValidElement(children) || children === '' ? (
          (children as ReactElement)
        ) : (
          <RcIcon
            symbol={symbol}
            className={classes!.icon}
            loading={loading}
            CircularProgressProps={CircularProgressProps}
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
  centerRipple: true,
  classes: {},
  useRcTooltip: true,
};

export { RcIconButton };
export type { RcIconButtonProps, RcIconButtonSize, RcIconButtonVariant };
