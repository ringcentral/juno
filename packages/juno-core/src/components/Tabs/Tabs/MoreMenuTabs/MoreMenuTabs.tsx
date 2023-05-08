import MuiTabs from '@material-ui/core/Tabs';
import React, {
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  getResizeObserver,
  RcBaseProps,
  styled,
  useForkRef,
  useMountState,
  useOnReRender,
  useThrottle,
  useRcPortalWindowContext,
} from '../../../../foundation';
import {
  DEFAULT_MORE_MENU_TAB_LABEL,
  MoreMenuTab,
  MoreMenuTabProps,
} from '../MoreMenuTab';
import { RcTabsProps } from '../Tabs';
import { MoreMenuTabSentinel } from './MoreMenuTabSentinel';
import { GroupTabInfoType, RcTabsMoreMenuGroupInfoType } from './utils';

type MoreButtonProps = {
  onGroupInfoChange?: (info: RcTabsMoreMenuGroupInfoType) => void;
} & RcBaseProps<
  MoreMenuTabProps,
  'size' | 'menuItems' | 'onChange' | 'orientation' | 'ref' | 'innerRef'
>;

type MoreMenuTabsProps = RcTabsProps;

type TabInfo = GroupTabInfoType & { value: any; element: ReactElement };
type GroupInfo = { all: TabInfo[]; tab: TabInfo[]; menu: TabInfo[] };

// with of more button with a icon
const basicMoreButtonSize = 44;

const getTabsInfoFromChildren = (children: ReactNode) => {
  const childrenInfo = React.Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      const key = child.key ?? index;

      return {
        index,
        key,
        value: child.props.value ?? key,
        element: child,
      };
    }
    return null;
  });

  if (!childrenInfo) return [] as TabInfo[];

  return childrenInfo.filter((info) => Boolean(info));
};

const _MoreMenuTabs = forwardRef<any, MoreMenuTabsProps>((props, ref) => {
  const {
    orientation,
    children: childrenProp,
    value,
    onChange,
    MoreButtonProps = {},
    resizeThrottleTime = 100,
    ...rest
  } = props;

  const { onGroupInfoChange, ...MoreButtonPropsRest } = MoreButtonProps;

  const isVertical = orientation === 'vertical';
  const sizeKey = isVertical ? 'offsetHeight' : 'offsetWidth';

  const innerRef = useRef<HTMLButtonElement>(null);
  const moreTabRef = useRef<HTMLButtonElement>(null);
  const sentinelStartRef = useRef<HTMLDivElement>(null);
  const tabsRef = useForkRef(innerRef, ref);
  const { externalWindow = window } = useRcPortalWindowContext();

  const mountStateRef = useMountState();

  const [groupInfo, setGroupInfo] = useState<GroupInfo>(() => {
    const tabsInfo = getTabsInfoFromChildren(childrenProp);

    if (!tabsInfo) {
      return {
        all: [] as TabInfo[],
        tab: [] as TabInfo[],
        menu: [] as TabInfo[],
      };
    }

    return {
      all: tabsInfo,
      tab: tabsInfo,
      menu: [] as TabInfo[],
    };
  });

  const throttleCalculateGroupInfo = useThrottle(() => {
    const tablist = innerRef.current?.querySelector('[role="tablist"]');

    if (!tablist) return;

    const allTabs = Array.from(tablist.children) as HTMLElement[];
    const allTabsSize: number[] = [];
    const selectedIndex = groupInfo.all.findIndex(
      (info) => info.value === value,
    );
    const tablistSize = tablist[sizeKey];
    let moreButtonSize = basicMoreButtonSize;

    let allTabsSizeSumWidthoutMoreButton = 0;

    for (const tabEl of allTabs) {
      if (typeof tabEl.dataset['tabOriginIndex'] === 'string') {
        const tabOriginIndex = Number(tabEl.dataset['tabOriginIndex']);
        const elSize = tabEl[sizeKey];
        allTabsSize[tabOriginIndex] = elSize;
        allTabsSizeSumWidthoutMoreButton += elSize;
      } else if (typeof tabEl.dataset['tabMoreButton'] === 'string') {
        const elSize = tabEl[sizeKey];
        moreButtonSize = elSize;
      }
    }

    const newGroupInfo = {
      all: groupInfo.all,
      tab: [] as TabInfo[],
      menu: [] as TabInfo[],
    };

    if (allTabsSizeSumWidthoutMoreButton > tablistSize) {
      const allTabsSizeSum = allTabsSizeSumWidthoutMoreButton + moreButtonSize;
      let targetSize = allTabsSizeSum;

      for (let i = allTabsSize.length - 1; i >= 0; i--) {
        if (i !== selectedIndex) {
          targetSize -= allTabsSize[i];
          newGroupInfo.menu.unshift(groupInfo.all[i]);
          if (targetSize <= tablistSize) {
            break;
          }
        }
      }

      newGroupInfo.tab = groupInfo.all.filter(
        (info) => !newGroupInfo.menu.some(({ index }) => index === info.index),
      );
    } else {
      newGroupInfo.tab = newGroupInfo.all;
    }

    let shouldUpdateGroupInfo = false;
    if (
      newGroupInfo.tab.length === groupInfo.tab.length &&
      newGroupInfo.tab.length === groupInfo.tab.length
    ) {
      for (let i = 0; i < groupInfo.tab.length; i++) {
        if (newGroupInfo.tab[i] !== groupInfo.tab[i]) {
          shouldUpdateGroupInfo = true;
          break;
        }
      }
    } else {
      shouldUpdateGroupInfo = true;
    }

    if (shouldUpdateGroupInfo) {
      // prevent resize observer loop limit exceeded
      setTimeout(() => {
        if (mountStateRef.current) setGroupInfo(newGroupInfo);
      }, 0);
    }
  }, resizeThrottleTime);

  useEffect(() => {
    const tablist = innerRef.current?.querySelector('[role="tablist"]');

    if (!tablist) return;

    const resizeObserver = getResizeObserver(
      throttleCalculateGroupInfo,
      externalWindow,
    );

    resizeObserver.observe(tablist);

    for (const tabItem of Array.from(tablist.children)) {
      resizeObserver.observe(
        tabItem,
        // TODO: remove this, after remove ResizeObserver polyfill
        // @ts-ignore
        { box: 'border-box' },
      );
    }

    const mutationObserver = new (
      externalWindow as unknown as typeof globalThis
    ).MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'childList') {
          mutation.removedNodes.forEach((removedNode: HTMLElement) => {
            if (removedNode.getAttribute('role') === 'tab') {
              resizeObserver.unobserve(removedNode);
            }
          });

          mutation.addedNodes.forEach((addedNode: HTMLElement) => {
            if (addedNode.getAttribute('role') === 'tab') {
              resizeObserver.observe(
                addedNode,
                // TODO: remove this, after remove ResizeObserver polyfill
                // @ts-ignore
                { box: 'border-box' },
              );
            }
          });

          // should re-calculate group info when dom is removed and not added
          if (mutation.removedNodes.length && !mutation.addedNodes.length) {
            setTimeout(() => {
              if (mountStateRef.current) throttleCalculateGroupInfo();
            }, 0);
          }
        }
      }
    });

    mutationObserver.observe(tablist, {
      childList: true,
    });

    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // No need calculate during the first rendering,
  // resize observer will do this
  useOnReRender(
    () => {
      throttleCalculateGroupInfo();
    },
    [value],
    false,
  );

  useOnReRender(
    () => {
      const tabsInfo = getTabsInfoFromChildren(childrenProp);
      const newGroupInfo = {
        all: tabsInfo,
        tab: [] as TabInfo[],
        menu: [] as TabInfo[],
      };

      setGroupInfo((preGroupInfo) => {
        // Prevent moreButton from flickering after children update
        for (const tabInfo of tabsInfo) {
          if (preGroupInfo.tab.some(({ key }) => tabInfo.key === key)) {
            newGroupInfo.tab.push(tabInfo);
          } else {
            // push new tab or invisible old tab to menu group
            newGroupInfo.menu.push(tabInfo);
          }
        }
        return newGroupInfo;
      });
    },
    [childrenProp],
    false,
  );

  useEffect(() => {
    onGroupInfoChange?.([
      groupInfo.tab.map(({ index, key }) => ({ index, key })),
      groupInfo.menu.map(({ index, key }) => ({ index, key })),
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupInfo]); // ignore onGroupInfoChange

  const useMoreMode = groupInfo.menu.length > 0;

  const MoreMenuTabCmp = (() => {
    if (!useMoreMode) return null;

    const menuItems = groupInfo.menu.map(({ key, element }) => {
      return { ...element.props, key };
    });

    return useMoreMode ? (
      <MoreMenuTab
        {...MoreButtonPropsRest}
        key={DEFAULT_MORE_MENU_TAB_LABEL}
        size={rest.size}
        menuItems={menuItems}
        ref={moreTabRef}
        onChange={onChange}
        orientation={orientation}
      />
    ) : null;
  })();

  const children = (() => {
    const tabGroupElements = groupInfo.tab.map(
      ({ index, key, value: tabValue, element }) => {
        return cloneElement(element, {
          key,
          value: tabValue,
          'data-tab-origin-index': index,
          'data-tab-key': key,
        });
      },
    );

    if (!useMoreMode) return tabGroupElements;

    return [
      ...tabGroupElements,
      <MoreMenuTabSentinel
        id="start"
        value="sentinel-start"
        key="sentinel-start"
        ref={sentinelStartRef}
        onFocus={() => {
          moreTabRef.current?.focus();
        }}
      />,
      ...groupInfo.menu.map(({ index, key, value: tabValue, element }) => {
        return cloneElement(element, {
          key,
          value: tabValue,
          'data-tab-origin-index': index,
          'data-tab-key': key,
          'aria-hidden': true,
          disabled: true,
          style: {
            ...element.props.style,
            opacity: 0,
            position: 'absolute',
            top: 0,
            left: 0,
          },
        });
      }),
      <MoreMenuTabSentinel
        id="end"
        value="sentinel-end"
        key="sentinel-end"
        onFocus={() => {
          const focusTarget =
            sentinelStartRef.current?.previousElementSibling ||
            moreTabRef.current;

          if (focusTarget) (focusTarget as HTMLElement).focus();
        }}
      />,
    ];
  })();

  return (
    <MuiTabs
      {...rest}
      ref={tabsRef}
      value={value}
      variant="standard"
      indicatorColor="primary"
      textColor="primary"
      onChange={onChange}
      orientation={orientation}
    >
      {children}
      {MoreMenuTabCmp}
    </MuiTabs>
  );
});

/** inner component */
const MoreMenuTabs = styled(_MoreMenuTabs)``;

MoreMenuTabs.displayName = 'MoreMenuTabs';

export { MoreMenuTabs };
export type { MoreButtonProps, MoreMenuTabsProps, RcTabsMoreMenuGroupInfoType };
