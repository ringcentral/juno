import {
  BreakpointMatchMap,
  getMatchDetail,
  MatchedBreakpoint,
  useResponsiveContext,
} from '../../contexts';

/**
 * get all matched breakpoints
 * @param defaultBreakpoint use defaultBreakpoint when Responsive init (will pass undefined)
 */
const useResponsiveMatch = (
  defaultBreakpoint?: MatchedBreakpoint,
): BreakpointMatchMap => {
  const _breakpoint = useResponsiveContext();
  const breakpoint =
    _breakpoint === undefined ? defaultBreakpoint : _breakpoint;

  if (breakpoint === undefined) return {};

  const matchDetail = getMatchDetail(breakpoint);

  return matchDetail.matchMap;
};

export { useResponsiveMatch };
