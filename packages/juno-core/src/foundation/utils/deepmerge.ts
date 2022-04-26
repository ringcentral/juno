// @ts-ignore
import { deepmerge as MuiDeepmerge } from '@material-ui/utils';
import { DeepPartial } from '../typings';

/** deep merge two object */
function deepmerge<T>(x: DeepPartial<T>, y: DeepPartial<T>): T;

function deepmerge<T1, T2>(x: DeepPartial<T1>, y: DeepPartial<T2>): T1 & T2;

function deepmerge(...args: any) {
  return MuiDeepmerge(...args);
}

export { deepmerge };
