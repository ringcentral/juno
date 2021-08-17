import { breakpointList, MatchedBreakpoint } from '../../../foundation';
import { BreakpointMap } from './types';

const bpListL2S = [...breakpointList].reverse();

export const getMatchedBreakpoint = (
  width: number,
  breakpointMap: BreakpointMap,
): MatchedBreakpoint =>
  // no match when width is less than min width of XS
  bpListL2S.find((bp) => width >= breakpointMap[bp]) || null;
