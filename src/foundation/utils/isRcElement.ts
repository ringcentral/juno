import { isValidElement, ReactElement } from 'react';

function isRcElement<T = any>(
  element: any,
  names: string[],
): element is ReactElement<T> {
  return (
    isValidElement(element) &&
    names.indexOf((element.type as any)?.displayName) !== -1
  );
}

export { isRcElement };
