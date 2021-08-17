import clsx from 'clsx';
import React, { ComponentType, forwardRef, useMemo } from 'react';

import {
  CustomStyledComponentResult,
  RcBaseProps,
  RcBaseSize,
  RcClassesProps,
  RcPaletteProp,
  styled,
  useThemeProps,
  withDeprecatedCheck,
} from '../../foundation';
import { SvgSymbol } from '../Icon';
import { RcPresence, RcPresenceProps } from '../Presence';
import { RcTooltip, withTooltip, WithTooltipProps } from '../Tooltip';
import {
  RcAvatarMask,
  StyledAvatar,
  StyledAvatarWrapper,
  StyledIconAvatar,
  StyledPresenceWrapper,
} from './styles';
import { RcAvatarClasses, RcAvatarSizes } from './utils';

type RcAvatarSize = RcBaseSize<
  'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
>;

type RcAvatarClassKey = 'presenceWrapper' | 'avatarContainer' | 'mask';

type PresenceOrigin = {
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'right';
};

type RcAvatarProps<T extends boolean = true> = {
  /** The anchor of the presence. */
  presenceOrigin?: PresenceOrigin;
  /** src for avatar image */
  src?: string;
  /** attrs on img element */
  imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
  /** avatar size, also presence size if not custom presence */
  size?: RcAvatarSize;
  /** avatar color */
  color?: RcPaletteProp;
  /** is that avatar can be click, default is false */
  clickable?: T;
  /**
   * with mack in the bottom of avatar,
   * when pass boolean, that will use default `<RcIcon symbol={Edit} />` to render mask,
   * also can provide `jsx` to custom below render
   */
  mask?: boolean | JSX.Element;
  /** support custom presence */
  presence?: JSX.Element;
  /** useless when prop 'presence' is not empty */
  presenceProps?: Omit<RcPresenceProps, 'size' | 'borderSize'>;
  /** icon for `RcIcon` render */
  iconSymbol?: SvgSymbol;
  /** can custom the icon size, half mean that will be half size of avatar */
  iconSize?: RcAvatarSize | 'half';
  /** only show presence when hovered or active */
  shouldRenderPresenceHovered?: boolean;

  /**
   * @deprecated
   * support custom Img component, if render img in avatar content
   * useless when 'iconSymbol' is provide,
   * just use `<img src /> in children`
   */
  Img?: ComponentType<{ src: string }>;
  /** @deprecated if 'true', will just use color value, use `color` directly */
  customColor?: boolean;
  /** @deprecated force set avatar clickable, default is true, please use clickable to set clickable */
  unClickable?: boolean;
  /** @deprecated not used, just keep type temp */
  isMember?: boolean;
  /** @deprecated not used, just keep type temp */
  displayName?: string;
  /** @deprecated alt for img, just use `<img src /> in children or imgProps for apply alt` */
  alt?: string;
  /** @deprecated support tooltip for avatar, use title to replace */
  tooltip?: string;
} & RcClassesProps<RcAvatarClassKey> &
  RcBaseProps<
    T extends true
      ? React.DetailedHTMLProps<
          React.ButtonHTMLAttributes<HTMLButtonElement>,
          HTMLButtonElement
        >
      : React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLDivElement>,
          HTMLDivElement
        >,
    'color' | 'title'
  >;

const _RcAvatar = forwardRef<any, RcAvatarProps<true>>(
  (inProps: RcAvatarProps, ref) => {
    // change default unClickable to here, prevent warning
    const props = useThemeProps({ props: inProps, name: 'RcAvatar' });

    const {
      presenceOrigin,
      id: idProps,
      size,
      classes,
      color,
      children,
      clickable: _clickable,
      onClick,
      mask,
      presence,
      customColor,
      tooltip,
      iconSize,
      iconSymbol,
      src: srcProp,
      alt: altProp,
      Img,
      imgProps,
      presenceProps,
      displayName,
      ...rest
    } = props;

    let unClickable = props.unClickable;

    unClickable = unClickable ?? true;

    // TODO: only when use not set clickable, use the unClickable as click props,
    // TODO: let should remove when app replace all of that
    const clickable = _clickable ?? !unClickable;

    const handleClick = useMemo(() => {
      const haveClick = clickable || (!unClickable && onClick);

      return haveClick ? onClick : undefined;
    }, [clickable, onClick, unClickable]);

    const avatar = useMemo(() => {
      const avatarChildren = (() => {
        const src = srcProp || imgProps?.src;

        if (src) {
          const ImgComp = Img || 'img';
          return <ImgComp src={src} alt={altProp} {...imgProps} />;
        }

        if (iconSymbol) {
          const _size =
            iconSize === 'half'
              ? RcAvatarSizes[size!] / 2
              : RcAvatarSizes[iconSize || size!];

          return <StyledIconAvatar size={_size} symbol={iconSymbol} />;
        }

        return children || null;
      })();

      let _avatar = (
        <StyledAvatar
          size={size}
          color={color}
          iconSymbol={iconSymbol}
          className={clsx(
            classes?.avatarContainer,
            RcAvatarClasses.avatarContainer,
          )}
        >
          {avatarChildren}
          {mask && (
            <RcAvatarMask className={clsx(classes?.mask, RcAvatarClasses.mask)}>
              {typeof mask === 'boolean' ? undefined : mask}
            </RcAvatarMask>
          )}
        </StyledAvatar>
      );

      // TODO: this tooltip will be remove in Juno
      if (tooltip) {
        _avatar = <RcTooltip title={tooltip}>{_avatar}</RcTooltip>;
      }

      return _avatar;
    }, [
      Img,
      altProp,
      children,
      classes?.avatarContainer,
      classes?.mask,
      color,
      iconSize,
      iconSymbol,
      imgProps,
      mask,
      size,
      srcProp,
      tooltip,
    ]);

    const { horizontal, vertical } = presenceOrigin!;

    const presenceChildren = useMemo(() => {
      let _presence: JSX.Element | null = null;
      if (presence) {
        _presence = presence;
      } else if (presenceProps) {
        _presence = <RcPresence size={size} {...presenceProps} />;
      }

      if (_presence) {
        return (
          <StyledPresenceWrapper
            horizontal={horizontal}
            vertical={vertical}
            className={clsx(
              classes?.presenceWrapper,
              RcAvatarClasses.presenceWrapper,
            )}
          >
            {_presence}
          </StyledPresenceWrapper>
        );
      }

      return null;
    }, [classes, horizontal, presence, presenceProps, size, vertical]);

    /**
     * @deprecated
     * TODO: should remove in Juno
     * */
    const dataAttrProps = idProps
      ? {
          id: `${idProps}`,
          'data-uid': `${idProps}`,
          'data-cid': `${idProps}`,
          'data-test-automation-value': `${idProps}`,
        }
      : {};

    return (
      <StyledAvatarWrapper
        // as any for generic type
        ref={ref as any}
        {...dataAttrProps}
        onClick={handleClick}
        data-test-automation-class="avatar"
        // as any for generic type
        clickable={clickable as any}
        {...rest}
      >
        {avatar}
        {presenceChildren}
      </StyledAvatarWrapper>
    );
  },
);

const RcAvatar = styled(
  withDeprecatedCheck(
    withTooltip(_RcAvatar),
    [
      {
        prop: 'customColor',
        time: '2021-3',
        comment: `if 'true', will just use color value, use \`color\` directly `,
      },
      {
        prop: 'unClickable',
        time: '2021-3',
        comment: `force set avatar clickable, default is true, please use clickable to set clickable `,
      },
      {
        prop: 'isMember',
        time: '2021-3',
        comment: `not used, just keep type temp `,
      },
      {
        prop: 'displayName',
        time: '2021-3',
        comment: `not used, just keep type temp `,
      },
      {
        prop: 'alt',
        time: '2021-3',
        comment: `alt for img, just use \`<img src /> in children or imgProps for apply alt\` `,
      },
      {
        prop: 'tooltip',
        time: '2021-3',
        comment: `support tooltip for avatar, use title to replace `,
      },
    ],
    'RcAvatar',
  ),
)``;

RcAvatar.defaultProps = {
  size: 'medium',
  presenceOrigin: {
    horizontal: 'right',
    vertical: 'bottom',
  },
};

RcAvatar.displayName = 'RcAvatar';

const ExportType: <T extends boolean>(
  props: RcAvatarProps<T> & WithTooltipProps,
) => JSX.Element &
  CustomStyledComponentResult<
    RcAvatarProps<T> & WithTooltipProps
  > = RcAvatar as any;

export {
  ExportType as RcAvatar,
  RcAvatarProps,
  RcAvatarSize,
  StyledAvatar,
  PresenceOrigin,
};
