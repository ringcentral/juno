export type NotNullRecord<T extends symbol, K = any> = Partial<
  Record<NonNullable<T>, K>
>;
