import MuiHidden, {
  HiddenProps as MuiHiddenProps,
} from '@material-ui/core/Hidden';

type RcHiddenProps = MuiHiddenProps;

const RcHidden = MuiHidden;

RcHidden.displayName = 'RcHidden';

export { RcHidden, RcHiddenProps };
