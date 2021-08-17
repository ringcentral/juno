import MuiListItemIcon, {
  ListItemIconProps,
} from '@material-ui/core/ListItemIcon';
import React, { FunctionComponent } from 'react';

import {
  palette2,
  spacing,
  styled,
  typography,
} from '../../../../../foundation';

type RcListItemIconProps = ListItemIconProps & {};

const _RcListItemIcon: FunctionComponent<RcListItemIconProps> = ({
  ...rest
}) => <MuiListItemIcon {...rest} />;

const StyledMuiListItemIcon = styled(_RcListItemIcon)`
  min-width: unset;
  margin-right: ${spacing(2)};
  ${typography('subheading1')};
  color: ${palette2('neutral', 'f04')};
`;

export { StyledMuiListItemIcon };
