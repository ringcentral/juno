import { getMatchDetail } from '../getMatchDetail';

const XSDetail = {
  matchBP: 'xs',
  ltMatchGroup: ['lt-sm', 'lt-md', 'lt-lg', 'lt-xl'],
  gtMatchGroup: [],
  matchMap: {
    xs: true,
    ltXL: true,
    ltLG: true,
    ltMD: true,
    ltSM: true,
    'lt-xl': true,
    'lt-lg': true,
    'lt-md': true,
    'lt-sm': true,
  },
};
const MDDetail = {
  matchBP: 'md',
  ltMatchGroup: ['lt-lg', 'lt-xl'],
  gtMatchGroup: ['gt-sm', 'gt-xs'],
  matchMap: {
    md: true,
    ltLG: true,
    ltXL: true,
    gtSM: true,
    gtXS: true,
    'lt-lg': true,
    'lt-xl': true,
    'gt-sm': true,
    'gt-xs': true,
  },
};
const NullDetail = {
  matchBP: null,
  ltMatchGroup: ['lt-xs', 'lt-sm', 'lt-md', 'lt-lg', 'lt-xl'],
  gtMatchGroup: [],
  matchMap: {
    ltXL: true,
    ltLG: true,
    ltMD: true,
    ltSM: true,
    ltXS: true,
    'lt-xl': true,
    'lt-lg': true,
    'lt-md': true,
    'lt-sm': true,
    'lt-xs': true,
  },
};

describe('getMatchDetail', () => {
  it.each`
    breakpoint | expected
    ${'xs'}    | ${XSDetail}
    ${'md'}    | ${MDDetail}
    ${null}    | ${NullDetail}
  `('test', ({ breakpoint, expected }) => {
    const result = getMatchDetail(breakpoint);
    expect(result).toStrictEqual(expected);
  });
});
