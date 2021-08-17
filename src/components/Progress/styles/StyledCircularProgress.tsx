import MuiCircularProgress from '@material-ui/core/CircularProgress';

import { palette2, styled } from '../../../foundation';
import { RcCircularProgressClasses } from '../utils';

const StyledCircularProgress = styled(MuiCircularProgress)`
  &.${RcCircularProgressClasses.colorPrimary} {
    color: ${palette2('interactive', 'f01')};
  }
`;

export { StyledCircularProgress };
