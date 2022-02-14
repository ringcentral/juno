// this file template replace material-ui/core/utils method
// when upgrade mui that will not need assign type anymore
import { useEventCallback as MuiUseEventCallback } from '@material-ui/core/utils';

export const useEventCallback = <T extends (...args: any[]) => any>(
  func: T,
): T => {
  return MuiUseEventCallback(func) as any;
};
