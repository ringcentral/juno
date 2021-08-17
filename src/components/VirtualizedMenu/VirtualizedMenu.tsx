import clsx from 'clsx';
import React, { forwardRef, useMemo, useRef } from 'react';

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
import { VirtualizedMenuStyle } from './styles';
import { RcVirtualizedMenuClasses } from './utils';
import {
  RcVirtualizedMenuList,
  RcVirtualizedMenuListProps,
  RcVirtualizedMenuListRef,
} from './VirtualizedMenuList';

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
      MenuListProps: { maxHeight = 416, onKeyDown, ...MenuListProps } = {},
      onClose,
      open,
      onEntering,
      onEntered,
      PaperProps: PaperPropsProp = {},
      PopoverClasses,
      transitionDuration = 'auto',
      variant = 'selectedMenu',
      ...rest
    } = props;
    const { document } = useRcPortalWindowContext();

    const popoverRef = useRef<HTMLDivElement>(null);
    const handleRef = useForkRef(ref, popoverRef);

    const menuListActionRef = useRef<RcVirtualizedMenuListRef>(null);

    const classes = useMemo(
      () => combineClasses(RcVirtualizedMenuClasses, classesProp),
      [classesProp],
    );

    const autoFocusItem = autoFocus && !disableAutoFocusItem && open;

    const events = useMemo(
      () =>
        combineProps(
          {
            onEntering: (element: HTMLElement, isAppearing: boolean) => {
              menuListActionRef.current?.adjustStyleForScrollbar();
              menuListActionRef.current?.scrollIntoViewAndFocus();

              onEntering?.(element, isAppearing);
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
          {
            onEntering,
            onEntered,
          },
        ),
      [maxHeight, onEntered, onEntering],
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
        container={document.body}
        classes={PopoverClasses}
        onClose={onClose}
        open={open}
        transitionDuration={transitionDuration}
        PaperProps={PaperProps}
        {...events}
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

export { RcVirtualizedMenu, RcVirtualizedMenuProps };
