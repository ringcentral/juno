import isArray from 'lodash/isArray';
import React, { ComponentType, forwardRef, useMemo } from 'react';

import {
  FullBreakpoint,
  getMatchDetail,
  useResponsiveContext,
} from '../../contexts/ResponsiveContext';
import { BaseSizeKey } from '../../typings';
import { WithResponsivePatterns, WithResponsiveSizes } from './types';
import { getMatchedSize, getSizeMap, SizeMap } from './utils';

type ResponsiveComponentProps<P extends any, K extends keyof P> = Omit<P, K> &
  {
    /**
     * when you pass a size string, size will be pass to component directly
     *
     * when you pass a pattern array, matched size will be pass to component
     *
     * pattern priority:
     *
     * 1, breakpoint > gtBreakpoint > ltBreakpoint > default.
     * such as small.md > small.gt-sm > small.lt-lg > small
     *
     * 2. breakpoint can be covered.
     * such as [small.gt-sm, large.gt-sm] equal [large.gt-sm]
     *
     * 3. small range > large range
     * such as small.gt-xl > small.gt-lg, small.lt-sm > small.lt-md
     */
    [key in K]: P[key] extends BaseSizeKey | undefined
      ? NonNullable<P[key]> | WithResponsiveSizes[NonNullable<P[key]>][]
      : never;
  } & {
    /** component would be hidden when match hidden patterns   */
    hiddenPatterns?: FullBreakpoint | FullBreakpoint[];
  };

/**
 * Make component can responsive size
 */
function withResponsive<P extends any, K extends keyof P>(
  Component: ComponentType<P>,
  responsivePropKeys: K[],
) {
  const responsiveKeys: ('hiddenPatterns' | K)[] = [
    'hiddenPatterns',
    ...responsivePropKeys,
  ];

  const ResponsiveComponent = forwardRef<any, ResponsiveComponentProps<P, K>>(
    (props, ref) => {
      const breakpoint = useResponsiveContext();

      const componentProps = responsiveKeys.reduce(
        (props, key) => {
          Reflect.deleteProperty(props, key);
          return props;
        },
        { ...props },
      );

      const matchDetail =
        breakpoint === undefined ? null : getMatchDetail(breakpoint);

      const hidden = useMemo<boolean>(() => {
        const hiddenPatterns = props.hiddenPatterns;
        if (hiddenPatterns === undefined) return false;

        // I think should hide component when context no pass breakpoint and hidden patterns is exist
        if (matchDetail === null) return true;

        if (!isArray(hiddenPatterns))
          return matchDetail.matchMap[hiddenPatterns] ?? false;

        for (const pattern of hiddenPatterns) {
          if (matchDetail.matchMap[pattern]) return true;
        }

        return false;
        // * compare hidden patterns directly
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [matchDetail, ...[props.hiddenPatterns].flat()]);

      const patternCaches = useMemo(
        () => {
          const cache: Partial<Record<K, SizeMap | BaseSizeKey>> = {};

          for (const responsivePropKey of responsivePropKeys) {
            const patternsOrSize = props[responsivePropKey] as
              | (BaseSizeKey | undefined)
              | WithResponsivePatterns;

            // is pattern
            if (isArray(patternsOrSize)) {
              cache[responsivePropKey] = getSizeMap(patternsOrSize);
            }
            // is size, pass directly
            else {
              cache[responsivePropKey] = patternsOrSize;
            }
          }

          return cache;
          // * compare all patterns directly
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        responsivePropKeys.map((key) => props[key]),
      );

      const sizeProps = useMemo(() => {
        const result: Partial<Record<K, BaseSizeKey>> = {};

        if (matchDetail === null) return result;

        for (const responsivePropKey of responsivePropKeys) {
          const sizeMapOrSize: SizeMap | BaseSizeKey | undefined =
            patternCaches[responsivePropKey];

          // is size, pass directly
          if (typeof sizeMapOrSize !== 'object') {
            result[responsivePropKey] = sizeMapOrSize;
          }
          // is size map
          else {
            const matchedSize = getMatchedSize(sizeMapOrSize, matchDetail);

            if (matchedSize !== null) {
              result[responsivePropKey] = matchedSize;
            }
          }
        }
        return result;
      }, [matchDetail, patternCaches]);

      if (hidden) {
        // TODO: maybe we need addition props to control just set display: none, or visible: hidden
        return null;
      }

      return <Component {...(componentProps as P)} ref={ref} {...sizeProps} />;
    },
  );

  ResponsiveComponent.displayName = `WithResponsive(${Component.displayName})`;

  return ResponsiveComponent;
}

export { withResponsive };
