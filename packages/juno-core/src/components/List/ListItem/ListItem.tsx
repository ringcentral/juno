import React, { ComponentProps, forwardRef, useMemo } from 'react';

import clsx from 'clsx';

import MuiListItem from '@material-ui/core/ListItem';

import {
  combineClasses,
  combineProps,
  RcBaseProps,
  RcBaseSize,
  RcPaletteProp,
  styled,
  useThemeProps,
  useDeprecatedCheck,
} from '../../../foundation';
import { withTooltip, WithTooltipProps } from '../../Tooltip';
import { ListItemStyle } from './styles';
import {
  RcListItemClasses,
  RcListItemMultilineClassName,
  RcListItemRippleClasses,
} from './utils';

type RcListItemColor = 'primary' | 'secondary' | 'black';

type RcListItemSize = RcBaseSize<'small' | 'medium'>;

type RcListItemProps = {
  /** ListItem size, default is 'medium' */
  size?: RcListItemSize;
  /** ? when hover on item, display different background, default is true */
  canHover?: boolean;
  /** ? display of ListItem */
  isInline?: boolean;
  /** is single line, default is false */
  singleLine?: boolean;
  /**
   * listItem use this color to calc hover, pressed, selected, disabled background color
   *
   * @default action.grayLight
   */
  color?: RcPaletteProp;
  /**
   * @deprecated should use color directly
   *
   * listItem use this color to calc hover, pressed, selected, disabled background color
   * default to black
   */
  baseColor?: RcListItemColor;
  /** Is this listItem highlighted */
  highlighted?: boolean;
  /** The component used for the root node. Either a string to use a HTML element or a component.
   * By default, it's a li when button is false and a div when button is true. */
  component?: React.ElementType;
  /** If true, the list item will be a button (using ButtonBase).
   * Props intended for ButtonBase can then be applied to ListItem. */
  button?: boolean;
  /** @deprecated max-width for ListItem, recommend using classes to define. */
  maxWidth?: number;
  /** native value attribute */
  value?: React.LiHTMLAttributes<'li'>['value'];
} & WithTooltipProps &
  RcBaseProps<ComponentProps<typeof MuiListItem>, 'title' | 'button'>;

const _RcListItem = forwardRef<any, RcListItemProps>(
  (inProps: RcListItemProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcListItem' });

    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useDeprecatedCheck(RcListItem, props, [
        {
          prop: 'baseColor',
          time: '2021-9',
          comment: '@deprecated should use color directly',
        },
        {
          prop: 'maxWidth',
          time: '2021-4',
          comment: 'recommend using classes to define',
        },
      ]);
    }

    const {
      classes: classesProp,
      color,
      TouchRippleProps: TouchRipplePropsProp,
      children,
      className,
      singleLine,
      button,
      size,
      canHover,
      isInline,
      baseColor,
      title,
      highlighted,
      maxWidth,
      ...rest
    } = props;
    const classes = useMemo(
      () => combineClasses(RcListItemClasses, classesProp),
      [classesProp],
    );

    const ListItemClassName = useMemo(
      () =>
        clsx(className, {
          [RcListItemMultilineClassName]: !singleLine,
        }),
      [className, singleLine],
    );

    // * when not button can't have TouchRippleProps
    const additionProps = useMemo<Partial<RcListItemProps>>(
      () =>
        button
          ? {
              TouchRippleProps: combineProps(
                { classes: RcListItemRippleClasses },
                TouchRipplePropsProp,
              ),
            }
          : {},
      [TouchRipplePropsProp, button],
    );

    return (
      <MuiListItem
        {...rest}
        {...additionProps}
        ref={ref}
        title={typeof title === 'string' ? title : undefined}
        classes={classes}
        className={ListItemClassName}
        button={button as any}
      >
        {children}
      </MuiListItem>
    );
  },
);

const RcListItem = styled(withTooltip(_RcListItem))`
  ${ListItemStyle};
`;

RcListItem.defaultProps = {
  singleLine: false,
  button: true,
  canHover: true,
  size: 'medium',
};

RcListItem.displayName = 'RcListItem';

export { RcListItem };
export type { RcListItemColor, RcListItemProps, RcListItemSize };
