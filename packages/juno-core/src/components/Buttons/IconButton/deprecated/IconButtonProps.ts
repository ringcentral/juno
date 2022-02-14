import { ElementType, ReactNode, RefObject } from 'react';

import { StandardProps as MuiStandardProps } from '@material-ui/core';
import { PopperProps as MuiPopperProps } from '@material-ui/core/Popper';
import { TooltipProps as MuiTooltipProps } from '@material-ui/core/Tooltip';

import { RcBaseProps, RcBaseSize, RcPaletteProp } from '../../../../foundation';
import { RcIconProps } from '../../../Icon';

type RcIconButtonVariant = 'round' | 'plain' | 'inverse' | 'outline';

type RcIconButtonSize =
  | RcBaseSize<
      | 'xsmall'
      | 'small'
      | 'medium'
      | 'large'
      | 'xlarge'
      | 'xxlarge'
      | 'xxxlarge'
    >
  /** @deprecated please use xsmall */
  | 'tiny';

type RcIconButtonClassKey =
  | 'root'
  | 'ripple'
  | 'disabled'
  | 'invisible'
  | 'outline';

interface RcIconButtonBaseProps
  extends MuiStandardProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    RcIconButtonClassKey
  > {}

type RcIconButtonProps = RcIconButtonBaseProps & {
  classes?: {
    /** define class for the button */
    root?: string;
    /** define class for the icon */
    icon?: string;
  };
  /** for  variant === 'inverse', is keep bg */
  shouldPersistBg?: boolean;
  /** make iconButton unVisible, default with false */
  invisible?: boolean;
  /** variant, default with round */
  variant?: RcIconButtonVariant;
  /** button size, with default with medium   */
  size?: RcIconButtonSize;
  /** default with 'grey.600'  */
  color?: RcPaletteProp;
  /**  pass the ref to the button */
  ref?: any;
  /** to include it in icon element */
  children?: ReactNode;
  /** when stretchIcon, will make 'round', 'inverse', 'outline' type icon and font using bigger size, default with false */
  stretchIcon?: boolean;
  /** disable the iconButton */
  disabled?: boolean;
  /** disable TouchRipple, default with false */
  disableTouchRipple?: boolean;
  /** still useColor WhenDisabled */
  useColorWhenDisabled?: boolean;
  /** define button type */
  type?: 'button' | 'reset' | 'submit';
  as?: ElementType | keyof JSX.IntrinsicElements;
} & RcIconButtonDeprecatedProps &
  RcBaseProps<RcIconProps, 'color' | 'children' | 'size'>;

type RcIconButtonDeprecatedProps = {
  /** @deprecated don't have any logic below, now need anymore */
  autoFocus?: boolean;
  /**
   * @deprecated
   * enable tooltip even button is disabled. default with false
   */
  alwaysEnableTooltip?: boolean;
  /**
   * @deprecated tooltip title for the iconButton
   * please use `title`
   */
  tooltipTitle?: string;
  /**
   * @deprecated tooltip placement, default with bottom
   * please use `TooltipProps` with `placement`
   */
  tooltipPlacement?: MuiTooltipProps['placement'];
  /**
   * @deprecated not use ToolTip, default with false
   * please use `TooltipProps` with `tooltipForceHide`
   */
  disableToolTip?: boolean;
  /**
   * @deprecated popperProps for the icon tooltip
   * please use `TooltipProps` with `PopperProps`
   */
  popperProps?: Pick<MuiPopperProps, 'disablePortal'>;
  /**
   * @deprecated control the tooltip open or not
   * please use `TooltipProps` with `tooltipForceHide`
   */
  tooltipForceHide?: boolean;
  /**
   * @deprecated will make iconButton becomes a link, default with false
   * please write jsx outside by yourself
   * ```ts
   * <a rel="noopener noreferrer external" target="_blank" href={href}>
   *   <RcIconButton .../>
   * </a>
   * ```
   */
  externalLink?: boolean;
  /** @deprecated ariaLabel, when null using tooltipTitle. use 'aria-label' replace */
  ariaLabel?: string;
  /**
   * @deprecated  make iconButton becomes download button
   * please write jsx by yourself
   * ```ts
   * <a download href={href} ref={aRef}>
   *   <RcIconButton .../>
   * </a>
   * ```
   */
  download?: boolean;
  /** @deprecated ref to the button, please `ref` directly */
  buttonRef?: RefObject<HTMLButtonElement>;
  /**
   * @deprecated when download is true, pass the ref to the link
   * please write jsx by yourself
   * ```ts
   * <a download href={href} ref={aRef}>f
   *   <RcIconButton .../>
   * </a>
   * ```
   */
  aRef?: RefObject<HTMLAnchorElement>;
  /**
   * @deprecated when externalLink or download is true, the link is available
   * please write jsx by yourself
   * ```ts
   * <a download href={href} ref={aRef}>
   *   <RcIconButton .../>
   * </a>
   * ```
   */
  href?: string;
};

const rcIconButtonWarning = [
  {
    prop: 'autoFocus',
    time: '2021-3',
    comment: `@deprecated don't have any logic below, now need anymore */`,
  },
  {
    prop: 'tooltipTitle',
    time: '2021-3',
    comment: `@deprecated tooltip title for the iconButton
   * please use \`title\`
   */`,
  },
  {
    prop: 'tooltipPlacement',
    time: '2021-3',
    comment: `@deprecated tooltip placement, default with bottom
   * please use \`TooltipProps\` with \`placement\`
   */`,
  },
  {
    prop: 'disableToolTip',
    time: '2021-3',
    comment: `@deprecated not use ToolTip, default with false
   * please use \`TooltipProps\` with \`tooltipForceHide\`
   */`,
  },
  {
    prop: 'popperProps',
    time: '2021-3',
    comment: `@deprecated popperProps for the icon tooltip
   * please use \`TooltipProps\` with \`PopperProps\`
   */`,
  },
  {
    prop: 'tooltipForceHide',
    time: '2021-3',
    comment: `@deprecated control the tooltip open or not
   * please use \`TooltipProps\` with \`tooltipForceHide\`
   */`,
  },
  {
    prop: 'externalLink',
    time: '2021-3',
    comment: `@deprecated will make iconButton becomes a link, default with false
   * please write jsx outside by yourself
   * \`\`\`ts
   * <a rel="noopener noreferrer external" target="_blank" href={href}>
   *   <RcIconButton .../>
   * </a>
   * \`\`\`
   */`,
  },
  {
    prop: 'ariaLabel',
    time: '2021-3',
    comment: `@deprecated ariaLabel, when null using tooltipTitle. use 'aria-label' replace */`,
  },
  {
    prop: 'download',
    time: '2021-3',
    comment: `@deprecated  make iconButton becomes download button
   * please write jsx by yourself
   * \`\`\`ts
   * <a download href={href} ref={aRef}>
   *   <RcIconButton .../>
   * </a>
   * \`\`\`
   */`,
  },
  {
    prop: 'buttonRef',
    time: '2021-3',
    comment: `@deprecated ref to the button, please \`ref\` directly */`,
  },
  {
    prop: 'aRef',
    time: '2021-3',
    comment: `@deprecated when download is true, pass the ref to the link
   * please write jsx by yourself
   * \`\`\`ts
   * <a download href={href} ref={aRef}>
   *   <RcIconButton .../>
   * </a>
   * \`\`\`
   */`,
  },
  {
    prop: 'href',
    time: '2021-3',
    comment: `@deprecated when externalLink or download is true, the link is available
   * please write jsx by yourself
   * \`\`\`ts
   * <a download href={href} ref={aRef}>
   *   <RcIconButton .../>
   * </a>
   * \`\`\`
   */`,
  },
];

export { rcIconButtonWarning };
export type {
  RcIconButtonDeprecatedProps,
  RcIconButtonProps,
  RcIconButtonSize,
  RcIconButtonVariant,
};
