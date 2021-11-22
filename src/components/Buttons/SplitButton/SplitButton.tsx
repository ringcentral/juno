import React, {
  forwardRef,
  ReactElement,
  ReactNode,
  useMemo,
  useRef,
  useState,
} from 'react';

import clsx from 'clsx';

import {
  checkDefaultPrevented,
  combineClasses,
  combineProps,
  logInDev,
  omit,
  RcBaseProps,
  RcClassesProps,
  styled,
  UnionOmit,
  useEventCallback,
  useForkRef,
  useTheme,
  useThemeProps,
} from '../../../foundation';
import { RcIconProps, RcIconSize } from '../../Icon';
import { RcMenu, RcMenuProps } from '../../Menu/Menu';
import { WithTooltipProps } from '../../Tooltip';
import { RcButton, RcButtonProps } from '../Button';
import { RcButtonGroup, RcButtonGroupProps } from '../ButtonGroup';
import { RcIconButtonProps } from '../IconButton';
import { splitButtonStyle, StyledArrowIcon } from './styles';
import {
  getVariant,
  RcSplitButtonClasses,
  RcSplitButtonTouchRippleClasses,
  variantIsHandler,
} from './utils';

type RcSplitButtonChildrenProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: ReactNode;
} & WithTooltipProps;

type CustomButtonProps = Partial<RcButtonProps & WithTooltipProps>;

type RcSplitRoundButtonSpacingSize = UnionOmit<RcIconSize, 'inherit'>;

type RcSplitButtonVariant = 'round' | 'plainIcon' | RcButtonProps['variant'];

type RcSplitButtonProps = {
  /** type of variant, default is `contained` */
  variant?: RcSplitButtonVariant;
  /** left Action button (`RcButton`) props */
  ActionButtonProps?: CustomButtonProps;
  /** right Control button(`RcButton`) props */
  ControlButtonProps?: { ArrowIconProps?: RcIconProps } & RcBaseProps<
    CustomButtonProps,
    'children'
  >;
  /** props for Menu component */
  MenuProps?: RcBaseProps<RcMenuProps, 'open' | 'anchorEl'>;
  /** emit when menu open */
  onOpen?: () => void;
  /** loading state */
  loading?: boolean;
} & Pick<RcMenuProps, 'onClose'> &
  Pick<RcButtonProps, 'type' | 'color' | 'disabled'> &
  RcBaseProps<
    RcButtonGroupProps,
    'onChange' | 'onClick' | 'orientation' | 'fullWidth'
  > &
  RcClassesProps<'actionButton' | 'controlButton' | 'menuOpen'> &
  Pick<RcIconButtonProps, 'size'>;

const DEFAULT_DELAY = 166;

const _RcSplitButton = forwardRef<any, RcSplitButtonProps>(
  (inProps: RcSplitButtonProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcSplitButton' });
    const {
      classes: classesProp,
      type,
      size,
      color,
      variant,
      disabled,
      ControlButtonProps: ControlButtonPropsProp,
      ActionButtonProps: ActionButtonPropsProp,
      MenuProps,
      children: childrenProp,
      onOpen,
      onClose,
      className,
      loading,
      ...rest
    } = props;
    const theme = useTheme();
    const {
      title: actionButtonTitle,
      className: actionButtonClassNameProp,
      ...ActionButtonProps
    } = ActionButtonPropsProp!;

    const variantIs = variantIsHandler(variant);

    const toButtonSize = ['xlarge', 'xxlarge', 'xxxlarge'].includes(size!)
      ? 'large'
      : (size as RcButtonProps['size']);

    const {
      ArrowIconProps,
      onClick: onControlButtonClick,
      className: controlButtonClassNameProp,
      ...ControlButtonProps
    } = ControlButtonPropsProp!;

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>();
    const [enterNextDelay, setEnterNextDelay] = useState(DEFAULT_DELAY);

    const innerRef = useRef<HTMLButtonElement>(null);
    const splitRef = useForkRef(innerRef, ref);

    const isMenuOpen = !!anchorEl;

    const { classes, actionButtonClassName, controlButtonClassName } =
      useMemo(() => {
        const result = combineClasses(RcSplitButtonClasses, classesProp);

        return {
          classes: omit(result, ['actionButton', 'controlButton', 'menuOpen']),
          actionButtonClassName: result?.actionButton,
          controlButtonClassName: result?.controlButton,
        };
      }, [classesProp]);

    const handleClick = useEventCallback(
      checkDefaultPrevented(() => {
        setAnchorEl(innerRef.current);
        onOpen?.();
      }),
    );

    const handleClose = useEventCallback(
      checkDefaultPrevented((event: {}, reason: any) => {
        if (enterNextDelay === 0) {
          setEnterNextDelay(DEFAULT_DELAY);
        }
        setAnchorEl(null);
        MenuProps?.onClose?.(event, reason);
        onClose?.(event, reason);
      }),
    );

    const SharedButtonProps: RcButtonProps = useMemo(() => {
      return {
        type,
        // when give size more than button accept, just set large
        size: toButtonSize,
        color,
        variant: getVariant(variant),
        disabled: loading ? true : undefined,
        disabledVariant: loading ? 'mask' : undefined,
      };
    }, [color, loading, toButtonSize, type, variant]);

    const { actionButtonProps, children } = useMemo(() => {
      if (!(childrenProp instanceof Array)) {
        logInDev({
          component: 'RcSplitButton',
          message:
            'children must be implement with RcSplitButtonChildrenProps[]',
        });
        return {};
      }

      const _children: ReactElement[] = [];
      let actionButtonProps: CustomButtonProps = {};

      React.Children.forEach(childrenProp, (child: JSX.Element, i) => {
        const {
          onClick,
          children,
          useRcTooltip = true,
          TooltipProps,
          title,
        } = child.props as RcSplitButtonChildrenProps;

        if (i === 0) {
          actionButtonProps = {
            title: actionButtonTitle || title,
            useRcTooltip,
            TooltipProps,
            onClick,
            children,
            className: combineClasses(
              actionButtonClassName,
              actionButtonClassNameProp,
            ),
          };
          return;
        }

        _children.push(
          React.cloneElement(child, {
            // * only first item need, because that will be auto focus when keyboard open
            ...(i === 1
              ? {
                  TooltipProps: {
                    // * that provide when menu open that tooltip position issue, value calculate from Mui
                    // * https://github.com/mui-org/material-ui/blob/6f56be2a07185be06984476aed9f518cbbd6b87d/packages/material-ui/src/Grow/Grow.js#L88
                    enterNextDelay,
                    onOpen: () => {
                      if (enterNextDelay === DEFAULT_DELAY) {
                        setEnterNextDelay(0);
                      }
                    },
                  } as RcSplitButtonChildrenProps['TooltipProps'],
                }
              : {}),
            ...child.props,
            ...combineProps(
              {
                onClick: handleClose,
              },
              {
                // run outside method first, if outside prevent default, that will not close menu
                onClick,
              },
            ),
          }),
        );
      });

      return {
        actionButtonProps,
        children: _children,
      };
    }, [
      actionButtonClassName,
      actionButtonClassNameProp,
      actionButtonTitle,
      childrenProp,
      enterNextDelay,
      handleClose,
    ]);

    const TouchRippleProps = useMemo(
      () =>
        variant === 'round'
          ? {
              classes: RcSplitButtonTouchRippleClasses,
            }
          : ({} as any),
      [variant],
    );

    const _ActionButtonProps = useMemo(() => {
      return {
        TouchRippleProps,
        loading,
        ...actionButtonProps,
        ...SharedButtonProps,
        ...ActionButtonProps,
      };
    }, [
      ActionButtonProps,
      SharedButtonProps,
      TouchRippleProps,
      actionButtonProps,
      loading,
    ]);

    const _ControlButtonProps = useMemo(() => {
      const combineControlProps = combineProps(
        {
          onClick: handleClick,
          TouchRippleProps,
          className: controlButtonClassName,
        },
        {
          onClick: onControlButtonClick,
          className: controlButtonClassNameProp,
        },
      );

      return {
        useRcTooltip: true,
        ...SharedButtonProps,
        ...combineControlProps,
        ...ControlButtonProps,
      };
    }, [
      handleClick,
      controlButtonClassName,
      onControlButtonClick,
      TouchRippleProps,
      controlButtonClassNameProp,
      SharedButtonProps,
      ControlButtonProps,
    ]);

    return (
      <>
        <RcButtonGroup
          disableRipple={
            theme.props?.MuiButtonGroup?.disableRipple ||
            variantIs(['plain', 'plainIcon'])
          }
          {...rest}
          className={clsx(className, {
            [RcSplitButtonClasses.menuOpen]: isMenuOpen,
          })}
          innerRef={splitRef}
          classes={classes}
        >
          <RcButton {..._ActionButtonProps} />
          <RcButton aria-haspopup="listbox" {..._ControlButtonProps}>
            <StyledArrowIcon
              open={isMenuOpen}
              size={variantIs(['round', 'plainIcon']) ? size : toButtonSize}
              {...ArrowIconProps}
            />
          </RcButton>
        </RcButtonGroup>
        <RcMenu
          {...MenuProps}
          anchorEl={anchorEl}
          open={isMenuOpen}
          onClose={handleClose}
        >
          {children}
        </RcMenu>
      </>
    );
  },
);

const RcSplitButton = styled(_RcSplitButton)`
  ${splitButtonStyle}
`;

RcSplitButton.displayName = 'RcSplitButton';

RcSplitButton.defaultProps = {
  size: RcButton.defaultProps!.size,
  color: RcButton.defaultProps!.color,
  variant: RcButton.defaultProps!.variant,
  ControlButtonProps: {},
  ActionButtonProps: {},
  MenuProps: {},
  disableElevation: true,
};

export { RcSplitButton };
export type {
  RcSplitButtonChildrenProps,
  RcSplitButtonProps,
  RcSplitButtonVariant,
  RcSplitRoundButtonSpacingSize,
};
