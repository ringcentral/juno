/**
 * this file origin from Mui source to change below Tabs content
 * ! just change the MuiTabs component to our RcTabs
 * https://github.com/mui-org/material-ui/blob/master/packages/material-ui-lab/src/TabList/TabList.js
 */
import React, { forwardRef, useMemo } from 'react';

import {
  combineClasses,
  RcBaseProps,
  styled,
  useThemeProps,
} from '../../../foundation';
import { RcTabProps } from '../Tab/Tab';
import { getPanelId, getTabId, useTabContext } from '../TabContext';
import { RcTabs, RcTabsProps } from '../Tabs';
import { TabListStyle } from './styles';
import { RcTabListClasses } from './utils';

type RcTabListProps = {} & RcBaseProps<RcTabsProps>;

const _RcTabList = forwardRef<any, RcTabListProps>(
  (inProps: RcTabListProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcTabList' });
    const { classes: classesProp, children: childrenProp, ...rest } = props;
    const classes = useMemo(
      () => combineClasses(RcTabListClasses, classesProp),
      [classesProp],
    );

    const context = useTabContext();
    if (context === null) {
      throw new TypeError('[RcTabList] No TabContext provided');
    }

    const children = React.Children.map(
      childrenProp,
      (child: React.ReactElement<RcTabProps>) => {
        const { value } = child.props;
        return React.cloneElement(child, {
          'aria-controls': getPanelId(context, value),
          id: getTabId(context, value),
        });
      },
    );

    return (
      <RcTabs {...rest} ref={ref} classes={classes} value={context.value}>
        {children}
      </RcTabs>
    );
  },
);

const RcTabList = styled(_RcTabList)`
  ${TabListStyle}
`;

RcTabList.defaultProps = {};

RcTabList.displayName = 'RcTabList';

export { RcTabList };
export type { RcTabListProps };
