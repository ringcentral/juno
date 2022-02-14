import { breakpointList } from './breakpointList';
import {
  BreakpointMatchDetail,
  BreakpointMatchGroups,
  BreakpointMatchMap,
  GTBreakpoint,
  LTBreakpoint,
  MatchedBreakpoint,
} from './types';

const matchCache = new Map<MatchedBreakpoint, BreakpointMatchDetail>();

const getMatchGroups = (
  breakpoint: MatchedBreakpoint,
): BreakpointMatchGroups => {
  const ltMatchGroup: LTBreakpoint[] = [];
  const gtMatchGroup: GTBreakpoint[] = [];
  if (breakpoint === null) {
    for (let i = 0; i < breakpointList.length; i++) {
      ltMatchGroup.push(`lt-${breakpointList[i]}` as LTBreakpoint);
    }
  } else {
    const bpIndex = breakpointList.indexOf(breakpoint);

    for (let i = 0; i < bpIndex; i++) {
      gtMatchGroup.unshift(`gt-${breakpointList[i]}` as GTBreakpoint);
    }

    for (let i = bpIndex + 1; i < breakpointList.length; i++) {
      ltMatchGroup.push(`lt-${breakpointList[i]}` as LTBreakpoint);
    }
  }
  return { ltMatchGroup, gtMatchGroup };
};

const getMatchMap = (
  { ltMatchGroup, gtMatchGroup }: BreakpointMatchGroups,
  matchBP: MatchedBreakpoint,
): BreakpointMatchMap => {
  const matchMap: BreakpointMatchMap = {};

  if (matchBP !== null) matchMap[matchBP] = true;

  for (const ltBP of ltMatchGroup) {
    const [, bp] = ltBP.split('-');
    matchMap[`lt${bp.toUpperCase()}`] = true;
    matchMap[ltBP] = true;
  }
  for (const gtBP of gtMatchGroup) {
    const [, bp] = gtBP.split('-');
    matchMap[`gt${bp.toUpperCase()}`] = true;
    matchMap[gtBP] = true;
  }

  return matchMap;
};

export const getMatchDetail = (breakpoint: MatchedBreakpoint) => {
  if (!matchCache.has(breakpoint)) {
    const matchGroups = getMatchGroups(breakpoint);
    const matchMap = getMatchMap(matchGroups, breakpoint);

    matchCache.set(breakpoint, {
      ...matchGroups,
      matchBP: breakpoint,
      matchMap,
    });
  }

  return matchCache.get(breakpoint)!;
};
