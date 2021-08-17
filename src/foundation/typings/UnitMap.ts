/**
 * @ignore
 *
 * fixed a map with unit key
 */
export type UnitMap<T extends string | number | symbol, K = any> = {
  [key in T]: K;
};

/**
 * @ignore
 *
 * convert `classes` type to `classes map` type
 */
export type ClassesMap<
  T extends { classes?: any } | undefined,
  K = any
> = Partial<UnitMap<Classes<T>, K>>;

/** @ignore */
type ClassesReturn<
  T extends
    | {
        classes?: any;
      }
    | undefined
> = keyof NonNullable<NonNullable<T>['classes']>;

/**
 * get type of `classes` prop
 *
 * @returns classes type of prop
 */
export type Classes<T extends { classes?: any } | undefined> = ClassesReturn<T>;
