import React, {
  ComponentProps,
  ComponentType,
  forwardRef,
  ReactElement,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import { isFragment } from 'react-is';
import {
  combineProps,
  getScrollbarSize,
  isRcElement,
  logInDev,
  RcBaseProps,
  styled,
  useEventCallback,
  useForkRef,
  useHiddenTabindex,
  useKeyboardMoveFocus,
  useMountState,
  useOnlyOneFocusable,
  useRcPortalWindowContext,
  useTheme,
  useThemeProps,
} from '../../foundation';
import { RcList } from '../List/List/List';
import { RcMenuListProps } from '../Menu/MenuList';
import {
  Components,
  FlatIndexLocationWithAlign,
  isOutOfRange,
  ListRange,
  modifyVlScrollerStyle,
  useDynamicHeight,
  useHighlightScroll,
  Virtuoso,
  VirtuosoHandle,
} from '../Virtuoso';
import { RcVisuallyHidden } from '../VisuallyHidden';
import { StyledMenuListPadding } from './styles';

type RcVirtualizedMenuListRef = {
  /** scroll into current active item */
  scrollIntoViewAndFocus: () => void;
  /** after render check that scroll bar width */
  adjustStyleForScrollbar: () => void;
  /** adjust container height */
  adjustContainerHeight: (value: number) => void;
};

// disableListWrap is same as loop
type RcVirtualizedMenuListProps = {
  /**
   * A ref for imperative actions.
   *
   * - `openMenu`: open the listbox menu
   * - `closeMenu`: close the listbox menu
   */
  action?: React.Ref<RcVirtualizedMenuListRef>;
  /**
   * ## should always keep absolute for better render,
   * but when you wrap that in modal or a non have width container,
   * set that as `unset`, let outside `absolute` container to calculate that.
   */
  position?: 'absolute' | 'unset';
  /**
   * inner `Virtuoso` props
   *
   * https://virtuoso.dev/virtuoso-api-reference/
   */
  VirtuosoProps?: RcBaseProps<
    ComponentProps<typeof Virtuoso>,
    'data' | 'itemContent' | 'totalCount' | 'components' | 'overscan'
  >;
} & RcMenuListProps;

const _RcVirtualizedMenuList = forwardRef<any, RcVirtualizedMenuListProps>(
  (inProps: RcVirtualizedMenuListProps, ref) => {
    const props = useThemeProps({
      props: inProps,
      name: 'RcVirtualizedMenuList',
    });
    const {
      action,
      disablePadding,
      autoFocus = false,
      VirtuosoProps,
      autoFocusItem = false,
      children: childrenProp,
      className,
      classes,
      disabledItemsFocusable = false,
      disableListWrap = false,
      variant = 'selectedMenu',
      maxHeight = '100%' as const,
      autoClose,
      position,
      onClose,
      ...rest
    } = props;

    const theme = useTheme();
    const { document } = useRcPortalWindowContext();

    const vlRef = useRef<VirtuosoHandle>(null);
    const innerListRef = React.useRef<HTMLElement>(null);
    const handleRef = useForkRef(innerListRef, ref);
    const rangeChangedRef = useRef<ListRange>({ startIndex: 0, endIndex: 0 });
    const isMountedRef = useMountState();
    const itemRenderedDescriptorRef = useRef<{
      resolve: () => void;
      index: number;
    } | null>(null);

    let hasSearchText = false;
    /**
     * the index of the item should receive focus
     * in a `variant="selectedMenu"` it's the first `selected` item
     * otherwise it's the very first item.
     */
    let activeItemIndex = -1;
    // since we inject focus related props into children we have to do a lookahead
    // to check if there is a `selected` item. We're looking for the last `selected`
    // item and use the first valid item as a fallback
    const items = React.Children.map(childrenProp, (child, index) => {
      if (!React.isValidElement(child)) {
        return;
      }

      if (process.env.NODE_ENV !== 'production' && isFragment(child)) {
        logInDev({
          component: 'RcVirtualizedMenuList',
          message: [
            "Material-UI: The Menu component doesn't accept a Fragment as a child.",
            'Consider providing an array instead.',
          ].join('\n'),
        });
      }

      if (!child.props.disabled) {
        if (variant === 'selectedMenu' && child.props.selected) {
          activeItemIndex = index;
        } else if (activeItemIndex === -1) {
          activeItemIndex = index;
        }
      }

      if (child.props['data-search-text'] !== undefined) {
        hasSearchText = true;
      }

      return child;
    }) as ReactElement[];

    const itemCount = items.length;

    const focusedIndexRef = useRef(activeItemIndex);
    focusedIndexRef.current = activeItemIndex;

    const onContainerHeightChange = useEventCallback(
      (changeHeight: number): void => {
        const scroller = scrollerRef.current;
        if (scroller?.style) {
          scroller.style.height = `${changeHeight}px`;
        }
      },
    );

    const { totalListHeightChanged, style, containerHeighRef } =
      useDynamicHeight({
        itemCount,
        maxContainerHeight: maxHeight,
        onContainerHeightChange,
      });

    const modifyScrollPosition = () => vlRef.current?.scrollBy({ top: -8 });

    const {
      scrollerRef,
      scrollerRefFn,
      itemsRendered,
      scrollToHighlightedIndex,
    } = useHighlightScroll({
      containerHeighRef,
      scrollToIndex: (location: FlatIndexLocationWithAlign) => {
        vlRef.current?.scrollToIndex(location);

        if (location.index === 0) modifyScrollPosition();
      },
    });

    const { focusIndex, getItemProps } = useOnlyOneFocusable({
      focusedIndexRef,
      containerRef: innerListRef,
    });

    const focusItemByIndex = (
      currentfocusedIndex: number | null,
      targetfocusedIndex: number,
    ) => {
      scrollToHighlightedIndex(
        currentfocusedIndex === null ? 0 : currentfocusedIndex,
        targetfocusedIndex,
      );
      if (isOutOfRange(targetfocusedIndex, rangeChangedRef.current)) {
        new Promise<void>((resolve) => {
          itemRenderedDescriptorRef.current = {
            resolve,
            index: targetfocusedIndex,
          };
        }).then(() => {
          focusIndex(targetfocusedIndex);
        });
      } else {
        focusIndex(targetfocusedIndex);
      }
    };

    const { onKeyFocusedIndexHandle, getNextFocusableOption } =
      useKeyboardMoveFocus({
        options: items,
        focusedIndexRef,
        infinite: !disableListWrap,
        onFocusedIndexChange: (event, toIndex) => {
          focusItemByIndex(focusedIndexRef.current, toIndex);

          event.preventDefault();
        },
        getOptionDisabled: (child) => {
          return (
            !disabledItemsFocusable &&
            (child.props.disabled ||
              child.props['aria-disabled'] ||
              child.props['data-disabled-focus'] ||
              // if that item is divider also not allow to select
              isRcElement(child, ['RcDivider', 'RcVirtualizedDivider']))
          );
        },
        // * only when any children have search-text field need search
        getOptionSearchText: hasSearchText
          ? (child) => {
              return child.props['data-search-text'];
            }
          : undefined,
      });
    const hiddenRef = useRef<HTMLDivElement>(null);

    const events = useHiddenTabindex(hiddenRef);

    const onMounted = useEventCallback(() => {
      // * when index change forceUpdate for keep inner and outside state sync

      if (autoFocus) {
        innerListRef.current?.focus();
      }

      if (disabledItemsFocusable) {
        focusItemByIndex(null, 0);
      } else {
        // * when init find available default index
        const initFocusedIndex = getNextFocusableOption();

        if (autoFocusItem) {
          // * timeout for wait vl render complete
          setTimeout(() => {
            focusItemByIndex(null, initFocusedIndex);
          }, 0);
        }
      }
    });

    useImperativeHandle(action, () => ({
      scrollIntoViewAndFocus: onMounted,
      adjustStyleForScrollbar: () => {
        const listElm = innerListRef.current!;
        const scrollElm = scrollerRef.current!;

        if (
          typeof maxHeight === 'number' &&
          scrollElm.clientHeight === maxHeight
        ) {
          const scrollbarSize = `${getScrollbarSize()}px`;
          const styleDirection =
            theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight';

          listElm.style[styleDirection] = scrollbarSize;
          listElm.style.width = `calc(100% + ${scrollbarSize})`;
          scrollElm.style.overflowX = 'hidden';
        }
      },
      adjustContainerHeight: (value) => {
        containerHeighRef.current = value;
        onContainerHeightChange(value);
      },
    }));

    const components = useMemo<Components>(
      () => ({
        Header: disablePadding
          ? undefined
          : (StyledMenuListPadding as ComponentType),
        Footer: disablePadding
          ? undefined
          : (StyledMenuListPadding as ComponentType),
        List: React.forwardRef(({ children, ...listRest }, listRef) => {
          const toRef = useForkRef(handleRef, listRef);

          return (
            <RcList
              role="menu"
              ref={toRef}
              {...combineProps(listRest, rest as any)}
            >
              {children}
            </RcList>
          );
        }),
        Item: ({ children: child, ...itemRest }) => {
          const index = itemRest['data-index'];

          return React.cloneElement(child as any, {
            ...itemRest,
            'aria-posinset': index,
            'aria-setsize': itemCount,
            ...getItemProps(index),
          });
        },
      }),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [],
    );

    const combine = combineProps(
      {
        tabIndex: -1,
        scrollerRef: (scrollElm: HTMLElement) => {
          scrollerRefFn(scrollElm);

          modifyVlScrollerStyle(scrollElm, position);

          // * when not have scrollerRef mean that is first render
          if (!isMountedRef.current) {
            onMounted();
          }
        },
        onKeyDown: onKeyFocusedIndexHandle,
        itemsRendered,
        rangeChanged: (range) => {
          rangeChangedRef.current = range;
          const focusedIndex = focusedIndexRef.current;
          const listElm = scrollerRef.current;
          if (
            listElm &&
            document.activeElement &&
            document.activeElement !== listElm &&
            listElm.contains(document.activeElement) &&
            isOutOfRange(focusedIndex, range)
          ) {
            listElm.focus();
          }

          const itemRenderedDescriptor = itemRenderedDescriptorRef.current;
          if (
            itemRenderedDescriptor &&
            !isOutOfRange(itemRenderedDescriptor.index, rangeChangedRef.current)
          ) {
            itemRenderedDescriptor.resolve();
            itemRenderedDescriptorRef.current = null;
          }
        },
        totalListHeightChanged,
        style,
        ...events,
      },
      VirtuosoProps,
    );

    return (
      <>
        <RcVisuallyHidden
          ref={hiddenRef}
          onFocus={() => {
            focusItemByIndex(
              rangeChangedRef.current?.startIndex || 0,
              focusedIndexRef.current,
            );
          }}
        />
        <Virtuoso
          ref={vlRef}
          data={items}
          itemContent={(index, data) => data as any}
          totalCount={itemCount}
          components={components}
          {...combine}
        />
      </>
    );
  },
);

const RcVirtualizedMenuList = styled(_RcVirtualizedMenuList)``;

RcVirtualizedMenuList.defaultProps = {};

RcVirtualizedMenuList.displayName = 'RcVirtualizedMenuList';

export { RcVirtualizedMenuList };
export type { RcVirtualizedMenuListProps, RcVirtualizedMenuListRef };
