import { ClassNameMap } from '@material-ui/styles';

import { Classes, ClassesMap } from '../typings';

export type RcClassesProps<T extends string> = {
  /** classes apply for elements */
  classes?: Partial<ClassNameMap<T>>;
};

export const RcClasses = <T>(classes: Classes<T>[], prefix: string) => {
  return classes.reduce<ClassesMap<T>>((prev, curr) => {
    prev[curr as string] = `${prefix}-${curr}`;
    return prev;
  }, {});
};
