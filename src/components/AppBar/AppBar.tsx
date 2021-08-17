import MuiAppBar, {
  AppBarProps as MuiAppBarProps,
} from '@material-ui/core/AppBar';

import { palette2, styled } from '../../foundation';

const TOP_BAR_HEIGHT = '56px';
const TOP_BAR_MIN_WIDTH = '480px';

type RcAppBarProps = MuiAppBarProps;

const RcAppBar = styled(MuiAppBar).attrs({ position: 'static' })`
  && {
    height: ${TOP_BAR_HEIGHT};
    min-width: ${TOP_BAR_MIN_WIDTH};
    background-color: ${palette2('neutral', 'b01')};
    background: linear-gradient(
      to right,
      ${palette2('header', 'bgLeft')},
      ${palette2('header', 'bgRight')}
    );
    box-shadow: none;
    border-bottom: 1px solid ${palette2('header', 'divider')};
    z-index: ${({ theme }) => `${theme.zIndex.drawer + 10}`};
  }
`;

RcAppBar.displayName = 'RcAppBar';

export { RcAppBar, RcAppBarProps };
