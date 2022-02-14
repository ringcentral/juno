import { RefObject } from 'react';

export function removeClassName(
  elmRef: RefObject<HTMLElement>,
  removeClass: string,
) {
  const elm = elmRef.current;

  if (!elm) return;

  if (elm.className.includes(removeClass)) {
    elm.className = cleanClass(elm, removeClass);
  }

  const icons = elm.querySelectorAll(`.${removeClass}`);

  if (icons?.length > 0) {
    icons.forEach((x) => (x.className = cleanClass(x, removeClass)));
  }
}

function cleanClass(elm: Element, removeClass: string): string {
  return elm.className.replace(removeClass, '').trim();
}
