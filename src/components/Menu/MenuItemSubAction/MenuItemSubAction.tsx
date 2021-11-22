import { ListItemSecondaryActionProps as MuiListItemSecondaryActionProps } from '@material-ui/core/ListItemSecondaryAction';

import { RcBaseProps } from '../../../foundation';
import { StyledMenuItemSubAction } from './styles';

type RcMenuItemSubActionProps = RcBaseProps<MuiListItemSecondaryActionProps>;

/** @deprecated use RcListItemSecondaryAction */
const RcMenuItemSubAction = StyledMenuItemSubAction;

RcMenuItemSubAction.displayName = 'RcMenuItemSubAction';

export { RcMenuItemSubAction };
export type { RcMenuItemSubActionProps };
