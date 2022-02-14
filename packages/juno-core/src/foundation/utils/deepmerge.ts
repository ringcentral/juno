// @ts-ignore
import { deepmerge as MuiDeepmerge } from '@material-ui/utils';

/** deep merge two object */
function deepmerge<T>(x: Partial<T>, y: Partial<T>): T;

function deepmerge<T1, T2>(x: Partial<T1>, y: Partial<T2>): T1 & T2;

function deepmerge(...args: any) {
  return MuiDeepmerge(...args);
}

export { deepmerge };
