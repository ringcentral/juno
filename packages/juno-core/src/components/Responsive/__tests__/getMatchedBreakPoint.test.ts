import { BreakpointMap, getMatchedBreakpoint } from '../utils';

const breakpointMap: BreakpointMap = {
  xs: 100,
  sm: 200,
  md: 300,
  lg: 400,
  xl: 500,
};

describe('test getMatchedBreakpoint', () => {
  it.each`
    width  | expected
    ${80}  | ${null}
    ${100} | ${'xs'}
    ${101} | ${'xs'}
    ${280} | ${'sm'}
    ${380} | ${'md'}
    ${410} | ${'lg'}
    ${480} | ${'lg'}
    ${580} | ${'xl'}
  `('return $expected when width is $width', ({ width, expected }) => {
    expect(getMatchedBreakpoint(width, breakpointMap)).toBe(expected);
  });
});
