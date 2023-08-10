import React, { forwardRef, useMemo, useRef } from 'react';

import clsx from 'clsx';

import {
  combineClasses,
  combineProps,
  RcBaseProps,
  styled,
  useEventCallback,
  useForkRef,
  useRcPortalWindowContext,
  useThemeProps,
} from '../../foundation';
import { RcMenuProps } from '../Menu';
import { RcPopover } from '../Popover';
import { RcFade } from '../Transitions';
import { VirtualizedMenuStyle } from './styles';
import { RcVirtualizedMenuClasses } from './utils';
import {
  RcVirtualizedMenuList,
  RcVirtualizedMenuListProps,
  RcVirtualizedMenuListRef,
} from './VirtualizedMenuList';
import { PopoverActions } from '@material-ui/core';

type RcVirtualizedMenuProps = {
  /** props for apply on inner `MenuList` */
  MenuListProps?: RcVirtualizedMenuListProps;
} & RcBaseProps<RcMenuProps, 'MenuListProps'>;

const _RcVirtualizedMenu = forwardRef<any, RcVirtualizedMenuProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcVirtualizedMenu' });
    const {
      autoFocus = true,
      children,
      classes: classesProp,
      disableAutoFocusItem = false,
      MenuListProps: {
        maxHeight = 416,
        onKeyDown,
        VirtuosoProps,
        ...MenuListProps
      } = {},
      onClose,
      open,
      TransitionProps: TransitionPropsProp,
      PaperProps: PaperPropsProp = {},
      PopoverClasses,
      transitionDuration = 'auto',
      variant = 'selectedMenu',
      action: popoverActionProp = null,
      ...rest
    } = props;
    const { document } = useRcPortalWindowContext();

    const popoverRef = useRef<HTMLDivElement>(null);
    const handleRef = useForkRef(ref, popoverRef);

    const popoverAction = useRef<PopoverActions>(null);
    const handlePopoverAction = useForkRef(popoverAction, popoverActionProp);

    const menuListActionRef = useRef<RcVirtualizedMenuListRef>(null);

    const classes = useMemo(
      () => combineClasses(RcVirtualizedMenuClasses, classesProp),
      [classesProp],
    );

    const autoFocusItem = autoFocus && !disableAutoFocusItem && open;

    const TransitionProps = useMemo(
      () =>
        combineProps(
          {
            onEntering: () => {
              menuListActionRef.current?.adjustStyleForScrollbar();
              menuListActionRef.current?.scrollIntoViewAndFocus();
            },
            onEntered: () => {
              const popoverElm = popoverRef.current!;
              const paperElm = popoverElm.querySelector(
                `.${RcVirtualizedMenuClasses.paper}`,
              )!;

              // check that paper height is same as vl scroll, if not adjust that containerHeight
              const newHeight = paperElm.clientHeight;
              if (newHeight !== maxHeight) {
                menuListActionRef.current?.adjustContainerHeight(newHeight);
              }
            },
          },
          TransitionPropsProp,
        ),
      [maxHeight, TransitionPropsProp],
    );

    const PaperProps = combineProps(
      {
        classes: {
          root: classes?.paper,
        },
      },
      PaperPropsProp,
    );

    const handleListKeyDown = useEventCallback(
      (event: React.KeyboardEvent<HTMLUListElement>): void => {
        onKeyDown?.(event);

        if (event.key === 'Tab') {
          event.preventDefault();

          if (onClose) {
            onClose(event, 'tabKeyDown');
          }
        }
      },
    );

    return (
      <RcPopover
        ref={handleRef}
        action={handlePopoverAction}
        container={document.body}
        classes={PopoverClasses}
        onClose={onClose}
        open={open}
        // FIXME: workaround for virtualized menu height incorrect issue
        TransitionComponent={RcFade}
        transitionDuration={transitionDuration}
        PaperProps={PaperProps}
        TransitionProps={TransitionProps}
        {...rest}
      >
        <RcVirtualizedMenuList
          position="unset"
          action={menuListActionRef}
          autoFocus={autoFocus}
          autoFocusItem={autoFocusItem}
          maxHeight={maxHeight}
          variant={variant}
          onKeyDown={handleListKeyDown}
          VirtuosoProps={{
            ...VirtuosoProps,
            totalListHeightChanged: (height) => {
              VirtuosoProps?.totalListHeightChanged?.(height);
              // fix for popover position incorrect issue
              queueMicrotask(() => {
                popoverAction.current?.updatePosition();
              });
            },
          }}
          {...MenuListProps}
          className={clsx(classes.list, MenuListProps.className)}
        >
          {children}
        </RcVirtualizedMenuList>
      </RcPopover>
    );
  },
);

const RcVirtualizedMenu = styled(_RcVirtualizedMenu)`
  ${VirtualizedMenuStyle}
`;

RcVirtualizedMenu.defaultProps = {
  autoFocus: true,
  variant: 'selectedMenu',
  getContentAnchorEl: null,
  anchorReference: 'anchorEl',
  anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
};

export { RcVirtualizedMenu };
export type { RcVirtualizedMenuProps };
