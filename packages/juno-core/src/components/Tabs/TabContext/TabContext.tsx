import { ComponentProps, FunctionComponent } from 'react';

import MuiTabContext, {
  getPanelId,
  getTabId,
  useTabContext,
  TabContextValue,
} from '@material-ui/lab/TabContext';

const RcTabContext = MuiTabContext as FunctionComponent<
  ComponentProps<typeof MuiTabContext>
>;

RcTabContext.displayName = 'RcTabContext';

export { getPanelId, getTabId, RcTabContext, useTabContext, TabContextValue };
