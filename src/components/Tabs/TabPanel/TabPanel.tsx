import MuiTabPanel from '@material-ui/lab/TabPanel';
import React, { ComponentProps, forwardRef, useMemo } from 'react';

import {
  combineClasses,
  RcBaseProps,
  styled,
  useThemeProps,
} from '../../../foundation';
import { useTabContext } from '../TabContext';
import { TabPanelStyle } from './styles';
import { RcTabPanelClasses } from './utils';

type RcTabPanelProps = {} & RcBaseProps<ComponentProps<typeof MuiTabPanel>>;

const _RcTabPanel = forwardRef<any, RcTabPanelProps>(
  (inProps: RcTabPanelProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcTabPanel' });
    const { classes: classesProp, children, ...rest } = props;
    const classes = useMemo(
      () => combineClasses(RcTabPanelClasses, classesProp),
      [classesProp],
    );

    // * that just check is that have context, others let mui handle inner
    const context = useTabContext();
    if (context === null) {
      throw new TypeError('[RcTabList] No RcTabContext provided');
    }

    return (
      <MuiTabPanel {...rest} ref={ref} classes={classes}>
        {children}
      </MuiTabPanel>
    );
  },
);

const RcTabPanel = styled(_RcTabPanel)`
  ${TabPanelStyle}
`;

RcTabPanel.defaultProps = {};

RcTabPanel.displayName = 'RcTabPanel';

export { RcTabPanel, RcTabPanelProps };
