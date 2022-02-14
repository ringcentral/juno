import { isValidElement } from 'react';

import isPlainObject from 'lodash/isPlainObject';

/**
 * Combine props object together
 *
 * that will group className, classes together
 * function will auto combine together,
 * trigger order is `intoProps.someFn(e) => defaultProps.someFn(e)`
 *
 * @param baseProps base props you want to combine together
 * @param newProps want to combine in to props
 * @param coverPropKeys some prop key you want to cover, not combine when type is function, ex. `ComponentType`
 *
 *
 * @example
 * ```tsx
 * combineProps(
    {
      children: <A />,
      value: '1',
      className: 'a1',
      classes: {
        root: 'root1'
      },
      count: 1,
      size: 'large',
      onClick: fn1
    },
    {
      children: <B />,
      value: '2',
      className: 'a2',
      classes: {
        root: 'root2'
      },
      count: 2,
      size: undefined,
      onClick: fn2
    },
  )
  // output result:
  {
    children: <B />,
    value: '2',
    className: 'a1 a2',
    classes: {
      root: 'root1 root2'
    },
    count: 2,
    size: 'large',
    onClick: (e) => {
      fn2(e);
      fn1(e);
    }
  }
 * ```
 */
export const combineProps = <T>(
  baseProps: T,
  newProps: T,
  coverPropKeys?: (keyof T)[],
): NonNullable<T> =>
  innerCombineProps({
    baseProps,
    newProps,
    coverPropKeys,
  });

/**
 * Combine two classes
 *
 * @param baseClasses base classes you want to combine together
 * @param newClasses new classes want to combine in to props
 *
 * @example
 * ```ts
 * combineClasses(
    {
      root: 'a1',
      input: 'a1',
      un1: undefined,
      un2: 'a4',
    },
    {
      root: 'a1',
      input: 'a2',
      un1: 'a3',
      un2: undefined,
      un3: 'a5',
    },
  )
  // output result:
  {
    root: 'a1 a1',
    input: 'a1 a2',
    un1: 'a3',
    un2: 'a4',
    un3: 'a5',
  }
 * ```
 */
export const combineClasses = <T>(
  baseClasses: T,
  newClasses: T,
): NonNullable<T> =>
  innerCombineProps({
    baseProps: baseClasses,
    newProps: newClasses,
    combineAllString: true,
  });

type GroupChildProps = {
  /** base Props */
  baseProps: any;
  /** new Props */
  newProps: any;
  /** is should combine all string */
  combineAllString?: boolean;
  /** should cover props */
  coverPropKeys?: any[];
};

const innerCombineProps = (params: GroupChildProps) => {
  const { baseProps, newProps } = params;
  if (!newProps || Object.keys(newProps).length === 0) {
    return baseProps;
  }

  const outputProps = mergeChildProps(params);

  return {
    ...newProps,
    ...outputProps,
  };
};

function mergeChildProps({
  baseProps,
  newProps,
  combineAllString,
  coverPropKeys,
}: GroupChildProps) {
  const result = Object.keys(baseProps || {}).reduce((output, curr) => {
    const prop = baseProps[curr];
    const propTo = newProps[curr];

    if (propTo !== undefined) {
      // * all typeof type below
      // "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"
      switch (typeof prop) {
        case 'undefined':
          output[curr] = propTo;
          break;
        case 'object': {
          if (
            !isValidElement(propTo) &&
            !isValidElement(prop) &&
            isPlainObject(propTo) &&
            isPlainObject(prop)
          ) {
            output[curr] = mergeChildProps({
              baseProps: prop,
              newProps: propTo || {},
              combineAllString: combineAllString || curr === 'classes',
            });
          } else {
            output[curr] = propTo;
          }
          break;
        }
        case 'string':
          if (combineAllString || curr === 'className') {
            output[curr] = [prop, propTo]
              .filter((x) => typeof x === 'string' && x)
              .join(' ');
          } else {
            output[curr] = propTo;
          }
          break;
        case 'boolean':
        case 'symbol':
        case 'bigint':
        case 'number':
          output[curr] = propTo;
          break;
        case 'function':
          if (coverPropKeys && coverPropKeys.includes(curr) && propTo) {
            output[curr] = propTo;
          } else {
            output[curr] = (...args: any) => {
              // * exec outside first
              propTo?.(...args);
              prop?.(...args);
            };
          }
          break;
        default:
      }
    } else {
      output[curr] = prop;
    }

    return output;
  }, {});

  // if result is an empty {} reset that to undefined
  if (Object.keys(result).length === 0) {
    return undefined;
  }

  return {
    ...newProps,
    ...result,
  };
}
