import lodashOmit from 'lodash/omit';

/** enhance lodash type */
export const omit = <T extends Object, K extends (keyof T)[]>(
  classes: T | undefined,
  keys: K,
): Partial<{
  [K2 in Exclude<keyof T, K[number]>]: T[K2];
}> => {
  return lodashOmit(classes, keys) as any;
};
