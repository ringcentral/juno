import React, {
  ComponentProps,
  forwardRef,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import MuiTooltip from '@material-ui/core/Tooltip';

import {
  combineClasses,
  combineProps,
  logInDev,
  RcBaseProps,
  RcBaseSize,
  RcPaletteProp,
  styled,
  useDeprecatedCheck,
  useForkRef,
  useRcPortalWindowContext,
  useThemeProps,
  setRef,
} from '../../foundation';
import { Mask, tooltipStyle } from './styles';
import { RcTooltipClasses, useTooltipForceHide } from './utils';

type RcTooltipSize = RcBaseSize<'medium' | 'large' | 'xlarge'>;

type RcTooltipProps = {
  /** focus hide the tooltip display */
  tooltipForceHide?: boolean;
  /** size of tooltip */
  size?: RcTooltipSize;
  /** color of tooltip */
  color?: RcPaletteProp;
  /** text color of tooltip */
  textColor?: RcPaletteProp;
  /** className for apply on tooltip popper */
  className?: string;
  /**
   * Ignore wrap children pointer-event
   *
   * ## that will add a span wrap children component, please make sure your style not effect
   */
  ignorePointer?: boolean;
  /** addition props for hidden mask in `ignorePointer` mode */
  maskProps?: ComponentProps<typeof Mask>;
  /**
   * @deprecated never inject in global
   */
  injectGlobalStyle?: boolean;
} & RcBaseProps<
  ComponentProps<typeof MuiTooltip>,
  'color' | 'arrow' | 'className'
>;

const _RcTooltip = forwardRef<any, RcTooltipProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcTooltip' });

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useDeprecatedCheck(RcTooltip, props, [
      {
        prop: 'injectGlobalStyle',
        time: '2021-3',
        comment: `@deprecated now need anymore */`,
      },
    ]);
  }

  const {
    children,
    tooltipForceHide,
    open: openProp,
    onOpen,
    onClose,
    // * that className will pass into children, just pick that and pass into root popper
    // * that also not a props in mui doc  https://material-ui.com/api/tooltip/
    className: classNameProp,
    classes: classesProp,
    PopperProps: PopperPropsProp,
    textColor,
    color,
    ignorePointer,
    size,
    maskProps,
    title,
    injectGlobalStyle,
    ...rest
  } = props;

  const { externalWindow } = useRcPortalWindowContext();

  const [isDisabledButton, setIsDisabledButton] = useState(false);
  const popperInnerRef = useRef<HTMLDivElement | null>(null);

  const innerRef = useRef<HTMLElement>(null);

  const tooltipRef = useForkRef(ref, innerRef);

  const classes = useMemo(
    () =>
      combineClasses(
        combineClasses({ popper: classNameProp }, RcTooltipClasses),
        classesProp,
      ),
    [classNameProp, classesProp],
  );

  const PopperProps = useMemo(() => {
    const { ref: tooltipPopperRef, ...restPopperPropsProp } =
      PopperPropsProp || {};

    return {
      ...combineProps(
        {
          container: externalWindow?.document.body,
          popperOptions: {
            // when popper update position, if left < 0 and top <= 0, that means popper is out of window
            // that occur when use not destroy component, use style hidden, host element be disappear, but popper still exist
            onUpdate: (e: any) => {
              const tooltipElm = popperInnerRef?.current;
              if (
                tooltipElm &&
                e.popper &&
                e.popper.left < 0 &&
                e.popper.top <= 0
              ) {
                tooltipElm.style.display = 'none';
              }
            },
          },
        },
        restPopperPropsProp,
      ),
      ref: (elm) => {
        popperInnerRef.current = elm;
        setRef(tooltipPopperRef, elm);
      },
    } as RcTooltipProps['PopperProps'];
  }, [PopperPropsProp, externalWindow?.document.body]);

  const forceHideAdditionProps = useTooltipForceHide({
    ref: innerRef,
    tooltipForceHide,
    open: openProp,
    onClose,
    onOpen,
  });

  const additionProp = forceHideAdditionProps ?? {
    open: openProp,
    onOpen,
    onClose,
  };

  // * use to fix when children button is `disabled` that error in Mui
  // * https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/Tooltip/Tooltip.js#L269

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useLayoutEffect(() => {
    const childNode = innerRef.current;
    if (
      isDisabledButton! &&
      childNode &&
      childNode.tagName.toLowerCase() === 'button' &&
      (childNode as any).disabled
    ) {
      setIsDisabledButton(true);
      if (process.env.NODE_ENV !== 'production') {
        logInDev({
          component: 'RcTooltip',
          message:
            'You have set a tooltip on disabled button, A disabled element does not fire events.',
        });
      }
    } else if (isDisabledButton) {
      setIsDisabledButton(false);
    }
  });

  return (
    <MuiTooltip
      ref={tooltipRef}
      title={isDisabledButton ? '' : title}
      arrow
      classes={classes}
      PopperProps={PopperProps}
      {...additionProp}
      {...rest}
    >
      {ignorePointer ? (
        <Mask {...(maskProps as any)}>{children}</Mask>
      ) : (
        children
      )}
    </MuiTooltip>
  );
});

/** @release */
const RcTooltip = styled(_RcTooltip)`
  ${tooltipStyle};
`;

RcTooltip.defaultProps = {
  placement: 'bottom',
  color: 'neutral.b04',
  textColor: 'neutral.f01',
  size: 'large',
};

RcTooltip.displayName = 'RcTooltip';

export { RcTooltip };
export type { RcTooltipProps, RcTooltipSize };
