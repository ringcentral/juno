export type UnionPick<T extends string, K extends T> = keyof Pick<
  Record<T, any>,
  K
>;

export type UnionOmit<T extends string, K extends T> = keyof Omit<
  Record<T, any>,
  K
>;

// https://github.com/Microsoft/TypeScript/issues/29729
// * for make union literal type can also accept normal string
export type LiteralUnion<T> = T | (string & Record<never, never>);
