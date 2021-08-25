import MuiButton from '@material-ui/core/Button';
import React, {
  ComponentProps,
  forwardRef,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react';

import {
  combineClasses,
  isRcElement,
  RcBaseColor,
  RcBaseProps,
  RcPaletteKeys,
  RcTheme,
  removeClassName,
  styled,
  useForkRef,
  useTheme,
  useThemeProps,
  withDeprecatedCheck,
} from '../../../foundation';
import { RcIcon, RcIconProps } from '../../Icon';
import { RcIconSizes } from '../../Icon/utils';
import { RcCircularProgress, RcCircularProgressProps } from '../../Progress';
import { withTooltip } from '../../Tooltip';
import { buttonStyle } from './styles';
import { getButtonIconSize, RcButtonClasses, RcButtonSize } from './utils';

type RcButtonColor = RcBaseColor<
  'primary' | 'secondary' | 'negative' | 'positive' | 'action' | 'neutral'
>;

type RcButtonColorLoadingMode = 'prefix' | 'replace' | 'suffix';

type RcButtonVariant = 'text' | 'outlined' | 'contained' | 'plain';

type RcButtonRadius = keyof RcTheme['radius'];

type RcButtonProps = {
  /** size of button, default is `large` */
  size?: RcButtonSize;
  /** variant of button, default is `contained` */
  variant?: RcButtonVariant;
  /** color of button */
  color?: RcPaletteKeys | RcButtonColor;
  /** is button loading, when `loading` that default `disabled` will be true  */
  loading?: boolean;
  /** loading mode with button, default is `replace` */
  loadingMode?: RcButtonColorLoadingMode;
  /** Props send to `RcCircularProgress` when loading is `true` */
  CircularProgressProps?: RcCircularProgressProps;
  /** component for render root button, default is `button` */
  component?: React.ElementType;
  /** border radius for button */
  radius?: RcButtonRadius;
  /** should keep elevation when type is `container` */
  keepElevation?: boolean;
  /** @deprecated Icon, please use startIcon with `<RcIcon />` */
  IconProps?: RcIconProps;
} & RcBaseProps<
  ComponentProps<typeof MuiButton>,
  | 'color'
  | 'size'
  | 'variant'
  | 'title'
  // * use disableFocusRipple, so omit that
  | 'focusRipple'
>;

const _RcButton = forwardRef<any, RcButtonProps>(
  (inProps: RcButtonProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcButton' });
    const {
      children: childrenProp,
      classes: classesProp,
      startIcon: startIconProp,
      endIcon: endIconProp,
      loading,
      loadingMode,
      disabled = loading,
      IconProps,
      size,
      color,
      CircularProgressProps,
      variant,
      radius,
      keepElevation,
      ...rest
    } = props;

    const theme = useTheme();
    const innerRef = useRef<HTMLButtonElement>(null);
    const buttonRef = useForkRef(innerRef, ref);

    const isPlain = variant === 'plain';
    const isReplace = loadingMode === 'replace';
    const iconSize = getButtonIconSize(size);

    const loadingElm = useMemo(() => {
      if (loading) {
        const progressSize = RcIconSizes[iconSize];

        return (
          <RcCircularProgress
            size={progressSize}
            color="inherit"
            {...CircularProgressProps}
          />
        );
      }
      return undefined;
    }, [CircularProgressProps, iconSize, loading]);

    const getCurrIcon = useCallback(
      (currIcon: React.ReactNode) => {
        if (
          isRcElement<RcIconProps>(currIcon, ['RcIcon']) &&
          currIcon.props.size === RcIcon.defaultProps!.size
        ) {
          return React.cloneElement(currIcon, { size: iconSize });
        }

        return currIcon;
      },
      [iconSize],
    );

    const startIcon = useMemo(() => {
      if (loadingElm) {
        switch (loadingMode) {
          case 'prefix':
            return loadingElm;
          case 'replace':
            return undefined;
          default:
            break;
        }
      }

      if (startIconProp) {
        return getCurrIcon(startIconProp);
      }

      // TODO: IconProps will be remove
      if (IconProps) {
        return <RcIcon size={iconSize} {...IconProps} />;
      }

      return undefined;
    }, [
      IconProps,
      getCurrIcon,
      iconSize,
      loadingElm,
      loadingMode,
      startIconProp,
    ]);

    const endIcon = useMemo(() => {
      if (loadingElm) {
        switch (loadingMode) {
          case 'suffix':
            return loadingElm;
          case 'replace':
            return undefined;
          default:
            break;
        }
      }

      if (endIconProp) {
        return getCurrIcon(endIconProp);
      }

      return undefined;
    }, [loadingElm, endIconProp, loadingMode, getCurrIcon]);

    const classes = useMemo(
      () => combineClasses(RcButtonClasses, classesProp),
      [classesProp],
    );

    // * need remove not need MuiButton-iconSizeMedium for icon render correct
    useLayoutEffect(() => {
      removeClassName(innerRef, 'MuiButton-iconSizeMedium');
    });

    return (
      <MuiButton
        ref={buttonRef}
        disabled={disabled}
        variant={isPlain ? undefined : (variant as any)}
        disableRipple={theme?.props?.MuiButton?.disableRipple || isPlain}
        startIcon={startIcon}
        endIcon={endIcon}
        classes={classes}
        {...rest}
      >
        {loading && isReplace ? loadingElm : childrenProp}
      </MuiButton>
    );
  },
);

/** @release */
const RcButton = styled(
  withDeprecatedCheck(
    withTooltip(_RcButton),
    [
      {
        prop: 'IconProps',
        time: '2021-4',
        comment: `@deprecated Icon, please use startIcon with \`<RcIcon />\` */`,
      },
    ],
    'RcButton',
  ),
)`
  ${buttonStyle}
`;

RcButton.defaultProps = {
  size: 'large',
  color: 'primary',
  variant: 'contained',
  loadingMode: 'replace',
};

RcButton.displayName = 'RcButton';

export {
  RcButton,
  RcButtonSize,
  RcButtonProps,
  RcButtonColor,
  RcButtonColorLoadingMode,
  RcButtonVariant,
};
