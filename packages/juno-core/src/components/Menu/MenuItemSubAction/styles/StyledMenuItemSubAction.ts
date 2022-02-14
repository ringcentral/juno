import MuiListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import { spacing, styled } from '../../../../foundation';

const StyledMenuItemSubAction = styled(MuiListItemSecondaryAction)`
  && {
    right: ${spacing(2)};
  }
`;

export { StyledMenuItemSubAction };
