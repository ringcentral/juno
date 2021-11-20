import clsx from 'clsx';
import React, {
  forwardRef,
  FunctionComponent,
  HTMLAttributes,
  memo,
} from 'react';

import {
  RcBaseProps,
  RcBaseSize,
  RcPaletteProp,
  styled,
  withDeprecatedCheck,
  useThemeProps,
} from '../../foundation';
import { RcCircularProgress, RcCircularProgressProps } from '../Progress';
import { IconStyle, StyledSvg } from './styles';
import { RcIconSizes } from './utils';
import { useIconService } from './utils/IconService';

export type RcIconSize = RcBaseSize<
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'inherit'
  | 'xlarge'
  | 'xxlarge'
  | 'xxxlarge'
>;

// TODO this will be removed when released.
/** @deprecated please use `RcIconSize` */
export type IconSize =
  | 'extraSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'inherit'
  | 'moreLarge'
  | 'extraLarge'
  | 'mediumLarge';

type BrowserSpriteSymbol = {
  id: string;
  viewBox: string;
  content: string;
  node?: SVGSymbolElement;
};

type SvgSymbol = BrowserSpriteSymbol | React.ComponentType<any>;

type RcIconProps = {
  /** Component for render */
  symbol?: SvgSymbol;
  /** is that icon replace to loading */
  loading?: boolean;
  /** Props send to `RcCircularProgress` when loading is `true` */
  CircularProgressProps?: RcCircularProgressProps;
  /** color of icon */
  color?: RcPaletteProp;
  /** size of icon */
  size?: RcIconSize;
  // ---------------------@deprecated-----------------------------
  /** @deprecated use CircularProgressProps to replace that */
  loadingSize?: RcCircularProgressProps['size'];
  /** @deprecated use loading to replace that */
  useLoading?: boolean;
  /** @deprecated this props will be remove when using svg */
  icon?: string;
  /** @deprecated */
  desc?: string;
  /** @deprecated use color replace that */
  iconColor?: RcPaletteProp;
  /** @deprecated use size replace that */
  iconSize?: IconSize;
} & RcBaseProps<HTMLAttributes<HTMLSpanElement>, 'color'>;

/**
 * * this is a component alway have same props,
 * * that just for render a icon, so here we can memo that
 */
const _RcIcon = memo(
  forwardRef<any, RcIconProps>((inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcIcon' });
    const {
      loadingSize,
      useLoading,
      iconColor,
      iconSize,
      icon,
      desc,
      className,
      loading = useLoading,
      CircularProgressProps,
      symbol,
      children,
      // * pick props
      color,
      size,
      ...rest
    } = props;
    const { iconMap = {} } = useIconService();

    let href = '';
    let Icon: FunctionComponent | null = null;
    let iconName: string = '';
    let renderDom;

    if (symbol) {
      if (typeof symbol === 'object' && symbol.id) {
        href = `#${symbol.id}`;
        iconName = `${symbol.id}`;
      } else {
        Icon = symbol as FunctionComponent;
        renderDom = <Icon />;
        iconName = symbol['iconName'];
      }
      // TODO: this will be remove when all using svg
    } else if (typeof children === 'string' || icon) {
      const childrenIconKey = (children && children.toString()) || icon || '';
      Icon = iconMap[childrenIconKey];

      iconName = childrenIconKey;

      if (Icon) {
        renderDom = <Icon />;
      }
    } else {
      renderDom = children;
    }

    const _className = clsx(className, iconName, 'icon');

    if (loading) {
      const progressSize = RcIconSizes[size!];

      return (
        <RcCircularProgress
          // TODO: here will be remove when loadingSize remove
          size={
            loadingSize || typeof progressSize === 'string'
              ? '1em' // default size as 16px
              : progressSize
          }
          ref={ref}
          {...CircularProgressProps}
        />
      );
    }

    return (
      <span className={_className} {...rest} ref={ref}>
        {renderDom && <StyledSvg>{renderDom}</StyledSvg>}
        {href && (
          <StyledSvg>
            <svg role="img">
              {!!desc && <title>{desc}</title>}
              <use xlinkHref={href} href={href} />
            </svg>
          </StyledSvg>
        )}
      </span>
    );
  }),
);

const RcIcon = styled(
  withDeprecatedCheck(
    _RcIcon,
    [
      {
        prop: 'icon',
        time: '2021-1',
        comment: 'please use symbol to replace icon',
      },
      {
        prop: 'children',
        time: '2021-1',
        comment: 'please use symbol to replace children',
      },
      {
        prop: 'iconSize',
        time: '2021-1',
        comment: 'please use size',
      },
      {
        prop: 'iconColor',
        time: '2021-1',
        comment: 'please use color',
      },
      {
        prop: 'useLoading',
        time: '2021-1',
        comment: 'please use loading',
      },
      {
        prop: 'loadingSize',
        time: '2021-1',
        comment:
          'please use CircularProgressProps={{ size: 24 }} to set custom loading size',
      },
      {
        prop: 'desc',
        time: '2021-1',
        comment: 'please use symbol',
      },
    ],
    'RcIcon',
  ),
)`
  ${IconStyle}
`;

RcIcon.defaultProps = {
  size: 'large',
};
RcIcon.displayName = 'RcIcon';

export { RcIcon };
export type { RcIconProps, SvgSymbol };
