import { ClassNameMap } from '@material-ui/styles';

import { Classes, ClassesMap } from '../typings';

export type RcClassesProps<T extends string> = {
  /** classes apply for elements */
  classes?: Partial<ClassNameMap<T>>;
};

export const RcClasses = <T extends { classes?: any } | undefined>(
  classes: Classes<T>[],
  prefix: string,
) => {
  return classes.reduce<Record<string, string>>((prev, curr) => {
    prev[String(curr)] = `${prefix}-${String(curr)}`;
    return prev;
  }, {}) as ClassesMap<T>;
};
