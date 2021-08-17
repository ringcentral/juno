/**
 * swap position of an array,
 * @param arr source arr
 * @param index1 source index
 * @param index2 target index
 * @example
 * ```ts
 * const arr = [0, 1, 2, 3];
 * swapArrayLocs(arr, 0, 3);
 * console.log(arr); // result: [3, 1 ,2 ,0]
 * ```
 */
export const swapArrayLocs = <T>(arr: T, index1: number, index2: number): T => {
  const temp = arr[index1];

  arr[index1] = arr[index2];
  arr[index2] = temp;

  return arr;
};
