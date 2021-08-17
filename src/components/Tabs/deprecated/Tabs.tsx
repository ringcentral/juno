import difference from 'lodash/difference';
import isEqual from 'lodash/isEqual';
import React, {
  Children,
  ComponentProps,
  createRef,
  MouseEvent,
  PureComponent,
  ReactElement,
  RefObject,
} from 'react';

import { combineProps, RcBaseProps, RcBaseSize } from '../../../foundation';
import MoreHorizIcon from '../../../icon/MoreHoriz';
import { RcMenuItem, RcMenuProps } from '../../Menu';
import { RcTooltip } from '../../Tooltip';
import {
  StyledTab,
  StyledTabContainer,
  StyledTabContent,
  StyledTabIcon,
  StyledTabProps,
  StyledTabs,
  StyledWrapper,
} from './styles';
import { RcTabProps } from './Tab';
import {
  ExtendedRcMenu,
  IndicatorDefaultClassName,
  RcMoreTabClassName,
} from './utils';
import MuiTabs from '@material-ui/core/Tabs';

type States = {
  hideMenu: boolean;
  indexSelected: number; // selected tab index
  indexTabs: number[]; // show tab index
  indexMenus: number[]; // menu tab index, when length > 0, then it has more tab
  indexLazyLoadComponents: number[]; // lazy load container component index
  remeasure: boolean;
  anchorEl: (EventTarget & Element) | null;
  disableIndicatorTransition: boolean;
};

type RcTabPosition = 'left' | 'center' | 'right';

type RcTabsProps = {
  /** when resize, pass the width */
  width?: number;
  /** will save it as local key to cache */
  tag?: string;
  /** default select Tab Index */
  defaultActiveIndex: number;
  /** Lists of RcTab */
  children: ReactElement<RcTabProps>[];
  /** triggered when tab change */
  onChangeTab?: (index: number) => void;
  /** tooltip when user hover on more tab. */
  moreText?: string; // more tab support i18N
  /** with tab flow direction, with options: 'left' | 'center' | 'right' */
  position?: RcTabPosition;
  /** force Tabs to display: flex; */
  forceFlex?: boolean;
  /** bind events to Lifecycle of Tabs */
  cmpLifecycle?: {
    /** trigger when RcTabs mounted */
    mounted?: (cmp: any) => void;
    /** trigger when RcTabs unmounted */
    willUnmount?: () => void;
  };
  /** trigger when the more tab close */
  onClose?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  /** pass className to Tabs Element */
  className?: string;
  /** tab Menus display in a average width */
  averageWidth?: boolean;
  /** tab MoreButton Props */
  MoreButtonProps?: StyledTabProps & {
    TooltipProps?: RcBaseProps<
      ComponentProps<typeof RcTooltip>,
      'tooltipForceHide' | 'title' | 'children'
    >;
  };
  /** tab MoreMenuPopper Props */
  MoreMenuProps?: Omit<
    RcMenuProps,
    | 'id'
    | 'open'
    | 'value'
    | 'key'
    | 'onClose'
    | 'variant'
    | 'anchorEl'
    | 'children'
  >;
  /** tabs size */
  size?: RcBaseSize<'small' | 'large'>;
  /**
   * Props applied to the tab indicator element.
   */
  TabIndicatorProps?: ComponentProps<typeof MuiTabs>['TabIndicatorProps'];
};

const MORE_TAB_INDEX = 10000; // more tab mui auto add child index
const MORE_TAB_MENU_INDEX = 10001; // more tab mui auto add child index
const cacheConfig = {};

class RcTabs extends PureComponent<RcTabsProps, States> {
  // not include more tab
  private _tabTitles: (string | JSX.Element)[] = [];

  private _tabRefs: RefObject<HTMLDivElement>[] = [];

  private _tabWidths: number[] = [];

  private _tabWidthsTotal: number = 0;

  private _automationIds: string[] = []; // automation ids, not include more tab

  // more tab
  private _moreRef: RefObject<HTMLDivElement>;

  private _moreWidth: number = 0;

  // right rail container
  private _containerRef: RefObject<any>;

  private _containerWidth: number = 0;

  private _moreMenuId: string;

  static defaultProps: Partial<RcTabsProps> = {
    size: 'small',
  };

  constructor(props: RcTabsProps) {
    super(props);
    this._tabRefs = Children.map(
      props.children,
      (child: ReactElement<RcTabProps>) => {
        this._tabTitles.push(child.props.title); // add tab title
        this._automationIds.push(child.props.automationId || ''); // add automation id
        return createRef(); // add tab ref
      },
    );
    this._moreRef = createRef();
    this._containerRef = createRef();
    this._moreMenuId = props.tag ? `${props.tag}-more-menu` : 'tabs-more-menu';
    let indexSelected =
      this._getLocalSelectedIndex() || props.defaultActiveIndex || 0;
    if (indexSelected > Children.count(props.children) - 1) {
      indexSelected = 0;
    }

    this.state = {
      indexSelected,
      indexLazyLoadComponents: [indexSelected],
      hideMenu: false,
      indexTabs: [],
      indexMenus: [],
      remeasure: false,
      anchorEl: null,
      disableIndicatorTransition: true,
    };
  }

  componentDidMount() {
    this._measureMoreWidth();
    this._measureTabWidths();
    this._measureContainerWidth();
    this._calculateIndexTabsAndIndexMenus();
    const { cmpLifecycle } = this.props;
    cmpLifecycle && cmpLifecycle.mounted && cmpLifecycle.mounted(this);
  }

  componentWillUnmount() {
    const { cmpLifecycle } = this.props;
    cmpLifecycle && cmpLifecycle.willUnmount && cmpLifecycle.willUnmount();
  }

  UNSAFE_componentWillReceiveProps(nextProps: RcTabsProps) {
    const { children } = nextProps;
    const newTabTitles: (string | JSX.Element)[] = [];
    Children.map(children, (child: ReactElement<RcTabProps>) =>
      newTabTitles.push(child.props.title),
    );
    // force update after i18n ready
    if (difference(newTabTitles, this._tabTitles).length !== 0) {
      this._moreWidth = 0;
      this._tabTitles = newTabTitles;
      this.setState({ remeasure: true });
    }

    if (nextProps.width === 0) {
      this.setState({ hideMenu: true, anchorEl: null });
    } else {
      this.setState({ hideMenu: false });
    }
  }

  private _measureContainerWidth = () => {
    const domContainer = this._containerRef.current;
    // TODO: test issue with window
    if (domContainer && window && window.getComputedStyle) {
      const cs = window.getComputedStyle(domContainer);
      const paddingX =
        parseFloat(cs.paddingLeft!) + parseFloat(cs.paddingRight!);
      const borderX =
        parseFloat(cs.borderLeftWidth!) + parseFloat(cs.borderRightWidth!);
      this._containerWidth = domContainer.offsetWidth - paddingX - borderX;
    }
  };

  private _measureTabWidths = () => {
    this._tabWidthsTotal = 0;
    this._tabWidths = this._tabRefs.map((_ref: RefObject<HTMLElement>) => {
      if (_ref.current && _ref.current.getBoundingClientRect) {
        const width = _ref.current.getBoundingClientRect().width;
        this._tabWidthsTotal += width;
        return width;
      }
      return 0;
    });
  };

  private _calculateIndexTabsAndIndexMenus = () => {
    const { averageWidth } = this.props;
    const { indexSelected } = this.state; // current selected tab index
    let indexTabs: number[] = [];
    const indexMenus: number[] = [];
    if (this._tabWidthsTotal < this._containerWidth || averageWidth) {
      // 0. there is no more tab, show all tab
      indexTabs = this._tabWidths.map((width: number, index: number) => index);
    } else {
      // 0. there must be more tab
      // 1. add more tab width
      let sum = this._moreWidth;
      // 2. add selected tab index
      if (sum + this._tabWidths[indexSelected] < this._containerWidth) {
        indexTabs.push(indexSelected);
        sum += this._tabWidths[indexSelected];
      }
      // 3. add order tab index
      this._tabWidths.forEach((width: number, index: number) => {
        if (index === indexSelected) {
          return; // continue
        }
        if (sum + width < this._containerWidth) {
          indexTabs.push(index); // add to tab list
        } else {
          indexMenus.push(index); // 4. add to menu list
        }
        sum += width;
      });
      // 5. change original array
      indexTabs.sort();
    }
    if (
      isEqual(this.state.indexMenus, indexMenus) &&
      isEqual(this.state.indexTabs, indexTabs)
    ) {
      return;
    }
    this.setState({
      indexMenus,
      indexTabs,
    });
  };

  private _handleTabChange = (event: MouseEvent, indexSelected: number) => {
    if (indexSelected === MORE_TAB_INDEX) {
      return;
    }
    this._setSelectedTabIndex(indexSelected);
  };

  private _openMenu = (evt: MouseEvent) => {
    const { currentTarget } = evt;
    this.setState({
      anchorEl: currentTarget,
    });
  };

  private _handleCloseMoreMenu = (
    e?:
      | React.MouseEvent<Element, globalThis.MouseEvent>
      | React.KeyboardEvent<Element>,
  ) => {
    const { onClose } = this.props;
    onClose && onClose(e!);

    this.setState({
      anchorEl: null,
    });
  };

  private _handleMenuItemClick = (index: number) => {
    this._setSelectedTabIndex(index);
  };

  private _setSelectedTabIndex = (indexSelected: number) => {
    let { indexLazyLoadComponents } = this.state;
    const { tag, onChangeTab } = this.props;
    if (!indexLazyLoadComponents.includes(indexSelected)) {
      indexLazyLoadComponents = indexLazyLoadComponents.concat(indexSelected);
    }
    this.setState({
      indexSelected,
      indexLazyLoadComponents,
      disableIndicatorTransition: false,
    });

    if (tag) {
      this._setLocalSelectedIndex(indexSelected);
    }
    onChangeTab && onChangeTab(indexSelected);
  };

  private _getLocalKey = () => {
    const { tag } = this.props;
    return `tabs-${tag}`;
  };

  private _getLocalSelectedIndex = () => {
    const value = cacheConfig[this._getLocalKey()];
    return Number(value) || 0;
  };

  private _setLocalSelectedIndex = (index: number) => {
    cacheConfig[this._getLocalKey()] = index;
  };

  private _renderMoreAndMenu = () => {
    const { indexMenus, hideMenu, anchorEl } = this.state;
    const { MoreMenuProps } = this.props;

    if (indexMenus.length === 0 || hideMenu) {
      return null; // no more tab
    }

    return [
      this._renderMore({ tooltipForceHide: false }),
      <ExtendedRcMenu
        id={this._moreMenuId}
        open={Boolean(anchorEl)}
        value={MORE_TAB_MENU_INDEX}
        key={MORE_TAB_MENU_INDEX}
        onClose={this._handleCloseMoreMenu as any}
        variant="menu"
        anchorEl={anchorEl}
        {...MoreMenuProps}
      >
        {indexMenus.map((item: number) => {
          const handleClick = () => {
            this._handleCloseMoreMenu();
            this._handleMenuItemClick(item);
          };
          return (
            <RcMenuItem
              data-test-automation-id={this._automationIds[item]}
              key={item}
              onClick={handleClick}
            >
              {this._tabTitles[item]}
            </RcMenuItem>
          );
        })}
      </ExtendedRcMenu>,
    ];
  };

  private _renderMore = ({
    tooltipForceHide,
  }: {
    tooltipForceHide: boolean;
  }) => {
    const { tag, moreText, MoreButtonProps = {} } = this.props;
    const { TooltipProps, ...rest } = MoreButtonProps;

    return this._renderStyledTab({
      value: MORE_TAB_INDEX,
      icon: (
        <RcTooltip
          {...TooltipProps}
          key="more"
          tooltipForceHide={tooltipForceHide}
          title={moreText!}
        >
          <StyledTabIcon
            size="medium"
            color={['neutral', 'f04']}
            symbol={MoreHorizIcon}
          />
        </RcTooltip>
      ),
      className: RcMoreTabClassName,
      onClick: this._openMenu,
      ref: this._moreRef,
      automationId: `${tag}-more`,
      'aria-controls': this._moreMenuId,
      'aria-haspopup': 'true',
      ...rest,
    });
  };

  private _renderForShow = () => {
    const { indexTabs } = this.state;

    const tabs = indexTabs.map((item: number) => {
      return this._renderStyledTab({
        value: item,
        label: this._tabTitles[item],
        automationId: this._automationIds[item],
      });
    });

    const tabMoreAndMenu = this._renderMoreAndMenu();

    if (tabMoreAndMenu) {
      tabs.push(...tabMoreAndMenu);
    }
    return tabs;
  };

  private _renderStyledTab = ({
    value,
    automationId,
    ...rest
  }: StyledTabProps) => {
    const { averageWidth, size } = this.props;

    return (
      <StyledTab
        averageWidth={averageWidth}
        size={size}
        data-test-automation-id={automationId}
        key={value}
        value={value}
        {...rest}
      />
    );
  };

  private _renderForMeasure = () => {
    const { children } = this.props;
    const tabs = Children.map(
      children,
      (child: ReactElement<RcTabProps>, index: number) =>
        this._renderStyledTab({
          value: index,
          label: child.props.title,
          ref: this._tabRefs[index],
          automationId: this._automationIds[index],
        }),
    );
    tabs.push(this._renderMore({ tooltipForceHide: false })); // add more tab
    return tabs;
  };

  componentDidUpdate(prevProps: RcTabsProps) {
    const { indexTabs, indexSelected, remeasure } = this.state;
    const { width } = this.props;

    // selected menu list tab index
    if (indexTabs.length > 0 && !indexTabs.includes(indexSelected)) {
      this._calculateIndexTabsAndIndexMenus();
    }

    // resize width
    if (prevProps.width !== width) {
      if (this._moreWidth === 0) {
        this._setRemeasure(true);
      } else {
        // Notes: only measure container width
        this._measureContainerWidth();
        this._calculateIndexTabsAndIndexMenus();
      }
    }

    // remeasure width
    if (remeasure && this._moreWidth === 0) {
      this._measureMoreWidth();
      this._measureTabWidths();
      this._measureContainerWidth();
      this._calculateIndexTabsAndIndexMenus();
      this._setRemeasure(false);
    }
  }

  private _setRemeasure = (remeasure: boolean) => {
    this.setState({ remeasure });
  };

  private _measureMoreWidth = () => {
    const domMore = this._moreRef.current;
    if (domMore && domMore.getBoundingClientRect) {
      this._moreWidth = domMore.getBoundingClientRect().width;
    }
  };

  openTabByIndex = (index: number) => {
    this._setSelectedTabIndex(index);
  };

  renderTabContents = () => {
    const { children } = this.props;
    const { indexSelected, indexLazyLoadComponents } = this.state;
    return Children.map(
      children,
      (child: ReactElement<RcTabProps>, index: number) => {
        const className = index === indexSelected ? 'show' : '';
        return (
          // eslint-disable-next-line react/no-array-index-key
          <StyledTabContent key={index} className={className}>
            {indexLazyLoadComponents.includes(index) && child.props.children}
          </StyledTabContent>
        );
      },
    );
  };

  renderTabs() {
    const { indexTabs, indexSelected, disableIndicatorTransition } = this.state;

    const {
      position,
      forceFlex,
      averageWidth,
      size,
      TabIndicatorProps: TabIndicatorPropsProp,
    } = this.props;

    // Notice:
    // 1. when first execute render, then indexTabs length equal 0
    // 2. when right rail hide, then indexTabs length equal 0
    // 3. when select menu list tab, then selected tab index not mounted yet
    let index: number | boolean = indexSelected;
    if (indexTabs.length === 0 || !indexTabs.includes(index)) {
      index = false; // It don't want any selected tab index
    }

    // Notice: when average the tabs width, must use left position.
    const _position = averageWidth ? 'left' : position;

    // Notice: The width needs to be remeasured
    const child =
      this._moreWidth === 0 ? this._renderForMeasure() : this._renderForShow();

    const TabIndicatorProps = combineProps(
      { className: IndicatorDefaultClassName },
      TabIndicatorPropsProp,
    );

    return (
      <StyledTabs
        averageWidth={averageWidth}
        size={size}
        forceFlex={forceFlex}
        position={_position}
        value={index}
        onChange={this._handleTabChange as any}
        indicatorColor="primary"
        textColor="primary"
        TabIndicatorProps={TabIndicatorProps}
        ref={this._containerRef}
        disableIndicatorTransition={disableIndicatorTransition}
      >
        {child}
      </StyledTabs>
    );
  }

  render() {
    const { className } = this.props;
    return (
      <StyledWrapper className={className}>
        {this.renderTabs()}
        <StyledTabContainer>{this.renderTabContents()}</StyledTabContainer>
      </StyledWrapper>
    );
  }
}

export { RcTabs, RcTabsProps, RcTabPosition };
