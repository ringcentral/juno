import React, { ComponentProps, ElementType, forwardRef, useMemo } from 'react';

import MuiTypography from '@material-ui/core/Typography';

import {
  RcBaseProps,
  RcTextPaletteKeys,
  RcTypographyKeys,
  styled,
  useThemeProps,
} from '../../foundation';
import { withTooltip, WithTooltipProps } from '../Tooltip';
import { TypographyStyle } from './styles';
import { MuiDefaultColor, RcCustomTypographyVariant } from './utils';

type RcTypographyVariant = RcTypographyKeys;
type RcTypographyWeight = 'normal' | 'bold';

type RcTypographyColor =
  | RcTextPaletteKeys
  | NonNullable<ComponentProps<typeof MuiTypography>['color']>;

type RcTypographyProps = {
  /** variant of Typography, view `RcTypographyVariant` */
  variant?: RcTypographyVariant;
  /**
   * component for root render, default value can view `RcCustomTypographyVariant`
   * default variant `body1` is `p` <br />
   */
  component?: ElementType;
  /** color for apply to text, support full palette */
  color?: RcTypographyColor;
  /** custom weight */
  weight?: RcTypographyWeight;
} & RcBaseProps<
  ComponentProps<typeof MuiTypography>,
  'variant' | 'variantMapping' | 'classes' | 'color' | 'title'
> &
  WithTooltipProps;

const _RcTypography = forwardRef<any, RcTypographyProps>(
  (inProps: RcTypographyProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcTypography' });
    const {
      variant,
      color: colorProp,
      component: componentProp,
      weight,
      ...rest
    } = props;
    const component = componentProp || RcCustomTypographyVariant[variant!];

    const color = useMemo(
      () =>
        MuiDefaultColor.includes(colorProp!) ? (colorProp as any) : undefined,
      [colorProp],
    );

    return (
      <MuiTypography
        // * for use html view variant
        data-variant={variant}
        // * for use html view color
        data-color={typeof colorProp === 'string' ? colorProp : undefined}
        ref={ref}
        color={color}
        variant="inherit"
        component={component!}
        {...rest}
      />
    );
  },
);

/** @release */
const RcTypography = styled<WithTooltipProps<RcTypographyProps>>(
  withTooltip(_RcTypography),
)`
  ${TypographyStyle}
`;

RcTypography.defaultProps = {
  variant: 'body1',
  color: 'initial',
};

RcTypography.displayName = 'RcTypography';

export { RcTypography };
export type { RcTypographyProps, RcTypographyVariant, RcTypographyWeight };
