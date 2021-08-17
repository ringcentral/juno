import MuiTabContext, {
  getPanelId,
  getTabId,
  useTabContext,
} from '@material-ui/lab/TabContext';
import { ComponentProps, FunctionComponent } from 'react';

const RcTabContext = MuiTabContext as FunctionComponent<
  ComponentProps<typeof MuiTabContext>
>;

RcTabContext.displayName = 'RcTabContext';

export { RcTabContext, useTabContext, getPanelId, getTabId };
