import lodashPick from 'lodash/pick';

/** enhance lodash type */
export const pick = <T extends Object, K extends (keyof T)[]>(
  classes: T | undefined,
  keys: K,
): {
  [K2 in Extract<keyof T, K[number]>]: T[K2];
} => {
  return lodashPick(classes, keys) as any;
};
