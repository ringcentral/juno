import { BreakpointMatchDetail, getMatchDetail } from '../../../contexts';
import { getMatchedSize, getSizeMap } from '../utils';

describe('test getSizeMap', () => {
  it('split size token', () => {
    expect(getSizeMap(['large.gt-lg'])).toStrictEqual({ 'gt-lg': 'large' });
    expect(getSizeMap(['small.gt-md'])).toStrictEqual({ 'gt-md': 'small' });
    expect(getSizeMap(['small.md'])).toStrictEqual({ md: 'small' });
  });

  it('default size token', () => {
    expect(getSizeMap(['large'])).toStrictEqual({ default: 'large' });
    expect(getSizeMap(['small'])).toStrictEqual({ default: 'small' });
  });

  it('size token can be covered', () => {
    expect(getSizeMap(['large', 'large.gt-lg', 'small'])).toStrictEqual({
      default: 'small',
      'gt-lg': 'large',
    });
    expect(getSizeMap(['large.gt-lg', 'small', 'medium.gt-lg'])).toStrictEqual({
      default: 'small',
      'gt-lg': 'medium',
    });
  });
});

const MDDetail: BreakpointMatchDetail = getMatchDetail('md');

describe('test getMatchedSize', () => {
  it('should return default size when no matched size', () => {
    expect(getMatchedSize({ sm: 'large', default: 'medium' }, MDDetail)).toBe(
      'medium',
    );

    expect(
      getMatchedSize({ 'lt-md': 'large', default: 'small' }, MDDetail),
    ).toBe('small');
  });

  it('should return null when no matched size and no default size', () => {
    expect(getMatchedSize({ sm: 'large' }, MDDetail)).toBe(null);
    expect(getMatchedSize({ 'lt-md': 'large' }, MDDetail)).toBe(null);
  });

  it('test priority, breakpoint > gtBreakpoint > ltBreakpoint', () => {
    expect(
      getMatchedSize(
        { md: 'large', 'lt-lg': 'small', 'gt-sm': 'xsmall' },
        MDDetail,
      ),
    ).toBe('large');

    expect(
      getMatchedSize({ 'lt-lg': 'small', 'gt-sm': 'xsmall' }, MDDetail),
    ).toBe('xsmall');

    expect(getMatchedSize({ 'lt-lg': 'small' }, MDDetail)).toBe('small');
  });

  it('test priority, small range have hight priority', () => {
    expect(
      getMatchedSize({ 'lt-lg': 'small', 'lt-xl': 'xsmall' }, MDDetail),
    ).toBe('small');

    expect(getMatchedSize({ 'lt-xl': 'xsmall' }, MDDetail)).toBe('xsmall');

    expect(
      getMatchedSize({ 'gt-xs': 'small', 'gt-sm': 'xsmall' }, MDDetail),
    ).toBe('xsmall');

    expect(getMatchedSize({ 'gt-xs': 'small' }, MDDetail)).toBe('small');
  });
});
