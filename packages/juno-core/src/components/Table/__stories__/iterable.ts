export const isIterable = <T = unknown>(o: any): o is Iterable<T> => {
  if (o === null || o === undefined) {
    return false;
  }
  return typeof o[Symbol.iterator] === 'function';
};

/**
 * Map Iterable<T> to Iterable<K>
 */
export function* iterateMap<T, K>(
  iterator: Iterable<T>,
  mapfn: (value: T, i: number) => K,
): Iterable<K> {
  let i = 0;
  for (const value of iterator) {
    yield mapfn(value, i);
    i++;
  }
}
