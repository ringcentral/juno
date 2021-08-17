import MuiListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { styled, spacing } from '../../../../foundation';

const StyledMenuItemSubAction = styled(MuiListItemSecondaryAction)`
  && {
    right: ${spacing(2)};
  }
`;

export { StyledMenuItemSubAction };
