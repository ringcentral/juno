import { RefObject } from 'react';

type RemoveClassNameOptions = {
  /**
   * make replace also scan child nodes
   *
   * @default false
   */
  scanChildren?: boolean;
  /**
   * is that should fullMatch class name
   *
   * @default false
   */
  fullMatch?: boolean;
};

/**
 * remove className from element, default will not scan child nodes, if you want to scan child nodes, set `scanChildren` to `true`.
 *
 * @param elmRef target element reference
 * @param removeClass className to remove, default will use class `includes` to check, if you want to use full match, set `fullMatch` to `true`
 *
 * @example
 * ```js
 * elm => <div class="abc bcd efg abc-def"></div>
 *
 * removeClassName(elmRef, 'bcd');
 *
 * elm => <div class="abc efg abc-def"></div>
 *
 * removeClassName(elmRef, 'abc');
 * elm => <div class="efg"></div>
 * ```
 */
export function removeClassName(
  elmRef: RefObject<HTMLElement>,
  removeClass: string,
  { scanChildren = false, fullMatch = false }: RemoveClassNameOptions = {},
) {
  const elm = elmRef.current;

  if (!elm) return;

  if (elm.className.includes(removeClass)) {
    elm.className = cleanClass(elm, removeClass, fullMatch);
  }

  if (scanChildren) {
    const nodes = elm.querySelectorAll(`[class*="${removeClass}"]`);

    if (nodes?.length > 0) {
      nodes.forEach(
        (node) => (node.className = cleanClass(node, removeClass, fullMatch)),
      );
    }
  }
}

function cleanClass(
  elm: Element,
  removeClass: string,
  fullMatch: boolean,
): string {
  return elm.className
    .trim()
    .split(/\s+/)
    .filter(
      (className) =>
        !(fullMatch
          ? className === removeClass
          : className.includes(removeClass)),
    )
    .join(' ');
}
