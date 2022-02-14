export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * null is no match, it means small than XS
 */
export type MatchedBreakpoint = Breakpoint | null;

export type GTBreakpoint = 'gt-xs' | 'gt-sm' | 'gt-md' | 'gt-lg' | 'gt-xl';
export type LTBreakpoint = 'lt-sm' | 'lt-md' | 'lt-lg' | 'lt-xl';

export type FullBreakpoint = GTBreakpoint | LTBreakpoint | Breakpoint;

export type BreakpointMatchMap = Partial<
  Record<
    | 'gtXS'
    | 'gtSM'
    | 'gtMD'
    | 'gtLG'
    | 'gtXL'
    | 'ltSM'
    | 'ltMD'
    | 'ltLG'
    | 'ltXL'
    | FullBreakpoint,
    true
  >
>;

export type BreakpointMatchDetail = {
  matchBP: MatchedBreakpoint;
  /**
   * large to small
   * example: [gtSM, gtXS]
   */
  gtMatchGroup: GTBreakpoint[];
  /**
   * small to large
   * example: [ltSM, ltLG]
   */
  ltMatchGroup: LTBreakpoint[];
  matchMap: BreakpointMatchMap;
};

export type BreakpointMatchGroups = Pick<
  BreakpointMatchDetail,
  'gtMatchGroup' | 'ltMatchGroup'
>;
