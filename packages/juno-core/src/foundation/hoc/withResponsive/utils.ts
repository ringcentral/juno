import {
  FullBreakpoint,
  getMatchDetail,
} from '../../contexts/ResponsiveContext';
import { BaseSizeKey } from '../../typings';
import { WithResponsivePatterns } from './types';

export type SizeMap = Partial<Record<FullBreakpoint | 'default', BaseSizeKey>>;

export const getSizeMap = (withResponsiveTokens: WithResponsivePatterns) => {
  const sizeMap: SizeMap = {};

  for (const withResponsiveToken of withResponsiveTokens) {
    const [size, breakpointKey = 'default'] = withResponsiveToken.split('.');

    sizeMap[breakpointKey] = size as BaseSizeKey;
  }

  return sizeMap;
};

export const getMatchedSize = (
  sizeMap: SizeMap,
  matchDetail: ReturnType<typeof getMatchDetail>,
) => {
  let matchedSize: BaseSizeKey | null = null;
  // breakpoint > gtBreakpoint > ltBreakpoint > default
  if (matchDetail !== null) {
    const { matchBP, gtMatchGroup, ltMatchGroup } = matchDetail;
    if (matchBP !== null && sizeMap[matchBP] !== undefined) {
      matchedSize = sizeMap[matchBP]!;
    } else {
      matchedSize = (() => {
        // high priority
        for (const gtBP of gtMatchGroup) {
          const size = sizeMap[gtBP];
          if (size !== undefined) return size;
        }

        // low priority
        for (const ltBP of ltMatchGroup) {
          const size = sizeMap[ltBP];
          if (size !== undefined) return size;
        }

        return null;
      })();
    }
  }

  if (matchedSize === null && sizeMap.default !== undefined) {
    matchedSize = sizeMap.default;
  }

  return matchedSize;
};
