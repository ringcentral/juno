/**
 * add px for values
 * px(1, 2, 3, 4); // returns: 1px 2px 3px 4px
 * @param values
 */
export function px(...values: number[]): string {
  return values.map((n) => `${n}px`).join(' ');
}
