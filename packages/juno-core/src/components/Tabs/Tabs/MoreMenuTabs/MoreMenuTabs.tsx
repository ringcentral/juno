import React, {
  createRef,
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import isEqual from 'lodash/isEqual';

import MuiTabs from '@material-ui/core/Tabs';

import {
  RcBaseProps,
  styled,
  useForceUpdate,
  useForkRef,
  usePrevious,
  useResizeObserver,
  useThrottle,
} from '../../../../foundation';
import { RcTabProps } from '../../Tab';
import {
  DEFAULT_MORE_MENU_TAB_LABEL,
  MoreMenuTab,
  MoreMenuTabProps,
} from '../MoreMenuTab';
import { RcTabsProps } from '../Tabs';
import {
  computeChildBySize,
  DEFAULT_SIZE,
  getDomBoundingClientSize,
  getKey,
  parseKey,
  RcTabsMoreMenuGroupInfoType,
} from './utils';

type Size = {
  width: number;
  height: number;
};

type MoreButtonProps = {
  onGroupInfoChange?: (info: RcTabsMoreMenuGroupInfoType) => void;
} & RcBaseProps<
  MoreMenuTabProps,
  'size' | 'menuItems' | 'onChange' | 'orientation' | 'ref' | 'innerRef'
>;

type MoreMenuTabsProps = {
  MoreButtonProps?: MoreButtonProps;
} & RcTabsProps;

type TabRefType = {
  ref: React.RefObject<HTMLDivElement>;
  size: Size | null;
  index: number | undefined;
  value: MoreMenuTabsProps['value'];
};

type TabRefsMapType = Map<string, TabRefType>;

export const findChildrenByKey = (
  childrenProp: React.ReactNode,
  key: string,
) => {
  let children;
  React.Children.forEach(childrenProp, (child, idx) => {
    if (React.isValidElement(child)) {
      const keyString = typeof child.key === 'string' ? child.key : '';
      if (getKey(keyString, idx) === key) {
        children = child;
      }
    }
  });
  return children;
};

const _MoreMenuTabs = forwardRef<any, MoreMenuTabsProps>((props, ref) => {
  const {
    orientation,
    children: childrenProp,
    value: valueProp,
    onChange,
    MoreButtonProps = {},
    ...rest
  } = props;

  const { onGroupInfoChange, ...MoreButtonPropsRest } = MoreButtonProps;

  const prevChildrenProp = usePrevious(() => childrenProp);

  const isVertical = orientation === 'vertical';
  const oriStr = isVertical ? 'height' : 'width';

  const innerRef = useRef<HTMLButtonElement>(null);
  const moreTabRef = useRef<HTMLButtonElement>(null);
  const tabsRef = useForkRef(innerRef, ref);

  const tabRefsMapRef = useRef<TabRefsMapType>();
  const moreTabSizeRef = useRef<Size>(DEFAULT_SIZE);
  const allTabsSizeRef = useRef<Size>(DEFAULT_SIZE);
  const tabsTabChildRef = useRef<React.ReactElement[]>([]);
  const tabsSizeRef = useRef<Size>(DEFAULT_SIZE);
  const groupingRef = useRef<{
    tabs: string[];
    menu: string[];
  }>();

  const [menuTabChild, setMenuTabChild] = useState<React.ReactElement[]>([]);
  const [useMoreMode, setUseMoreMode] = useState(true);

  const hasResizeRef = useRef(true);
  const forceUpdate = useForceUpdate();

  const sizeChange = (size: Size) => {
    if (
      tabsSizeRef.current.height !== size.height ||
      tabsSizeRef.current.width !== size.width
    ) {
      tabsSizeRef.current = size;
      forceUpdate();
    }
  };

  const throttleTabsSizeChange = useThrottle(sizeChange, 300);

  useResizeObserver(
    innerRef,
    ([entry]: ResizeObserverEntry[]) => {
      const { width, height } = entry.contentRect;
      const obj = { width, height };
      hasResizeRef.current = true;
      throttleTabsSizeChange(obj);
    },
    { mode: 'none' },
  );

  const tabsSize = tabsSizeRef.current;

  // initial tabRefsMapRef and tabsTabChildRef
  if (
    tabRefsMapRef.current === undefined ||
    prevChildrenProp !== childrenProp
  ) {
    const tabRefs: TabRefsMapType = new Map();
    const tabsTabDefaultChild: React.ReactElement<RcTabProps>[] = [];

    React.Children.forEach(
      childrenProp,
      (child: React.ReactElement<RcTabProps>, index) => {
        const { ref, value } = child.props;
        const innerRef = createRef<HTMLDivElement>();
        const tabRef = ref ? useForkRef(innerRef, ref) : innerRef;

        const childrenValue = value || index;

        const children = React.cloneElement(child, {
          ref: tabRef,
          value: childrenValue,
        });

        const keyString = typeof child.key === 'string' ? child.key : '';
        tabRefs.set(getKey(keyString, index), {
          ref: tabRef as React.RefObject<HTMLDivElement>,
          size: null,
          index,
          value: childrenValue,
        });

        tabsTabDefaultChild.push(children);
      },
    );

    tabRefsMapRef.current = tabRefs;
    tabsTabChildRef.current = tabsTabDefaultChild;
  }

  // get real render size when render
  useEffect(() => {
    if (childrenProp !== prevChildrenProp) {
      const tabRefsMap = tabRefsMapRef.current;

      if (tabRefsMap && tabRefsMap.size !== 0) {
        const allTabsSize = { ...DEFAULT_SIZE };

        tabRefsMap.forEach((value, key) => {
          const { width, height } = getDomBoundingClientSize(value.ref.current);
          allTabsSize.width += width;
          allTabsSize.height += height;

          const newRef: TabRefType = {
            ref: value.ref,
            size: { width, height },
            index: value.index,
            value: value.value,
          };

          tabRefsMap.set(key, newRef);
        });

        allTabsSizeRef.current = allTabsSize;
      }

      const moreElm = moreTabRef?.current;
      if (moreElm) {
        const size = getDomBoundingClientSize(moreElm);
        moreTabSizeRef.current = size;
      }
    }
  }, [childrenProp, prevChildrenProp]);

  useEffect(() => {
    let currSelectTabItem: [string, TabRefType] | undefined;

    const tabRefsMap = tabRefsMapRef.current;

    if (tabRefsMap) {
      currSelectTabItem = [...tabRefsMap].find(([, mapValue]) => {
        return valueProp === mapValue.value || valueProp === mapValue.index;
      });
    }

    const computeGroupingInfo = (
      tabsTabLabel: string[],
      menuTabLabel: string[],
    ) => {
      const newGrouping = {
        tabs: tabsTabLabel,
        menu: menuTabLabel,
      };
      if (!isEqual(groupingRef.current, newGrouping)) {
        groupingRef.current = newGrouping;
        onGroupInfoChange?.([
          tabsTabLabel.map((key) => parseKey(key)),
          menuTabLabel.map((key) => parseKey(key)),
        ]);
      }
    };

    const computeWhetherToUseMoreMode = (tabsSize: Size, allTabsSize: Size) => {
      if (
        allTabsSize.width === 0 ||
        allTabsSize.height === 0 ||
        tabsSize.width === 0 ||
        tabsSize.height === 0
      ) {
        return false;
      }

      if (!isVertical) {
        return allTabsSize.width > tabsSize.width;
      }

      return allTabsSize.height > tabsSize.height;
    };

    const computedMoreModeChild = (tabRefsMap: TabRefsMapType) => {
      const labelArray: { key: string; size: number }[] = [];

      tabRefsMap.forEach((value, key) => {
        labelArray.push({
          key,
          size: value.size ? value.size[oriStr] : 0,
        });
      });
      const limitSize = tabsSize[oriStr] - moreTabSizeRef.current[oriStr];

      const { plainArr: tabsTabLabel, groupArr: menuTabLabel } =
        computeChildBySize(labelArray, currSelectTabItem?.[0], limitSize);

      computeGroupingInfo(tabsTabLabel, menuTabLabel);

      const tabsTabChild = tabsTabLabel.map((key) =>
        findChildrenByKey(childrenProp, key),
      );

      const menuTabChild = menuTabLabel.map((key) =>
        findChildrenByKey(childrenProp, key),
      );

      tabsTabChildRef.current = tabsTabChild as unknown as React.ReactElement[];
      setMenuTabChild(menuTabChild as unknown as React.ReactElement[]);
    };

    const computedStandardModeChild = (tabRefsMap: TabRefsMapType) => {
      const tabsTabLabel: string[] = [];

      tabRefsMap.forEach((value, key) => {
        tabsTabLabel.push(key);
      });

      computeGroupingInfo(tabsTabLabel, []);

      const tabsTabChild = tabsTabLabel.map((key) =>
        findChildrenByKey(childrenProp, key),
      );

      tabsTabChildRef.current = tabsTabChild as unknown as React.ReactElement[];
      setMenuTabChild([]);
    };

    const computeTabChild = (tabsSize: Size) => {
      const useMoreMode = computeWhetherToUseMoreMode(
        tabsSize,
        allTabsSizeRef.current,
      );

      setUseMoreMode(useMoreMode);

      if (tabRefsMap) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        useMoreMode
          ? computedMoreModeChild(tabRefsMap)
          : computedStandardModeChild(tabRefsMap);
      }
    };

    if (tabsSize.width !== 0 && tabsSize.height !== 0) {
      // computed: 1.resize 2. valueProp 3.moreMenuClick 4.children change
      // not computed: visible tab change
      if (
        groupingRef.current?.tabs.includes(currSelectTabItem?.[0] || '') &&
        !hasResizeRef.current &&
        prevChildrenProp === childrenProp
      ) {
        return;
      }

      computeTabChild(tabsSize);
      hasResizeRef.current = false;
    }
  }, [
    childrenProp,
    prevChildrenProp,
    isVertical,
    onGroupInfoChange,
    oriStr,
    tabsSize,
    valueProp,
  ]);

  const MoreMenuTabCmp = useMemo(() => {
    const menuItems = React.Children.map(menuTabChild, (child) => {
      return { ...child.props };
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
  }, [
    MoreButtonPropsRest,
    menuTabChild,
    onChange,
    orientation,
    rest.size,
    useMoreMode,
  ]);

  return (
    <MuiTabs
      {...rest}
      ref={tabsRef}
      value={valueProp}
      variant="standard"
      indicatorColor="primary"
      textColor="primary"
      onChange={onChange}
      orientation={orientation}
    >
      {tabsTabChildRef.current}
      {MoreMenuTabCmp}
    </MuiTabs>
  );
});

/** inner component */
const MoreMenuTabs = styled(_MoreMenuTabs)``;

MoreMenuTabs.displayName = 'MoreMenuTabs';

export { MoreMenuTabs };

export type { MoreButtonProps, MoreMenuTabsProps, RcTabsMoreMenuGroupInfoType };
