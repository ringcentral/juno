import React, { ComponentProps, forwardRef, useMemo } from 'react';

import MuiTabs from '@material-ui/core/Tabs';

import {
  combineProps,
  RcBaseProps,
  styled,
  useThemeProps,
} from '../../../foundation';
import { RcTabProps } from '../Tab';
import type {
  MoreButtonProps,
  RcTabsMoreMenuGroupInfoType,
} from './MoreMenuTabs';
import { MoreMenuTabs } from './MoreMenuTabs';
import { TabsStyle } from './styles';
import { RcTabsClasses } from './utils';

type RcTabsVariant = 'standard' | 'scrollable' | 'fullWidth' | 'moreMenu';

type RcTabsProps = {
  /**
   *  Determines additional display behavior of the tabs:
   *
   *  - `scrollable` will invoke scrolling properties and allow for horizontally
   *  scrolling (or swiping) of the tab bar.
   *  -`fullWidth` will make the tabs grow to use all the available space,
   *  which should be used for small views, like on mobile.
   *  - `moreMenu` will add more menu icon button,
   *  display options that exceed the width of the Tabs in the Menu.
   *  - `standard` will render the default state.
   */
  variant?: RcTabsVariant;
  /** set tab size, default is `small` */
  size?: RcTabProps['size'];
  /**
   * Props applied to the tab indicator element.
   */
  TabIndicatorProps?: Omit<
    ComponentProps<typeof MuiTabs>['TabIndicatorProps'],
    'color'
  >;
  /**
   * Props applied to the `moreMenu` variant more button
   */
  MoreButtonProps?: MoreButtonProps;
} & RcBaseProps<
  ComponentProps<typeof MuiTabs>,
  'variant' | 'indicatorColor' | 'TabIndicatorProps' | 'textColor' | 'disabled'
>;

const _RcTabs = forwardRef<any, RcTabsProps>((inProps: RcTabsProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcTabs' });
  const {
    classes: classesProp,
    children: childrenProp,
    variant: variantProp,
    size,
    MoreButtonProps,
    ...rest
  } = props;

  const isMore = variantProp === 'moreMenu';

  const classes = useMemo(
    () => combineProps(RcTabsClasses, classesProp),
    [classesProp],
  );

  const children = useMemo(
    () =>
      React.Children.map(
        childrenProp,
        (child: React.ReactElement<RcTabProps>) =>
          React.cloneElement(child, { size }),
      ),
    [childrenProp, size],
  );

  if (isMore) {
    return (
      <MoreMenuTabs
        {...rest}
        ref={ref}
        classes={classes}
        size={size}
        MoreButtonProps={MoreButtonProps}
      >
        {children}
      </MoreMenuTabs>
    );
  }

  return (
    <MuiTabs
      {...rest}
      ref={ref}
      classes={classes}
      variant={isMore ? 'standard' : (variantProp as any)}
      indicatorColor="primary"
      textColor="primary"
    >
      {children}
    </MuiTabs>
  );
});

const RcTabs = styled(_RcTabs)`
  ${TabsStyle}
`;

RcTabs.defaultProps = {
  variant: 'standard',
  size: 'small',
};

RcTabs.displayName = 'RcTabs';

export { RcTabs };
export type { RcTabsMoreMenuGroupInfoType, RcTabsProps };
