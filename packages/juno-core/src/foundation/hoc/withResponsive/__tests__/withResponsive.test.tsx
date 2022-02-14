import React, { FC } from 'react';

import { screen } from '@testing-library/react';

import { cleanup, render } from '@ringcentral/juno-test';
import { RcResponsiveContext } from '../../../contexts';
import { BaseSizeKey } from '../../../typings';
import { withResponsive } from '../withResponsive';

const Component: FC<{ size?: BaseSizeKey; size2?: BaseSizeKey }> = ({
  size = 'medium',
  size2 = 'medium',
}) => (
  <>
    <div data-test-automation-id="size">{size}</div>
    <div data-test-automation-id="size2">{size2}</div>
  </>
);

Component.displayName = 'Component';

const ResponsiveCmp = withResponsive(Component, ['size', 'size2']);

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
  cleanup();
});

describe('test withResponsive', () => {
  it('should cover undefined', () => {
    render(
      <RcResponsiveContext.Provider value={'md'}>
        <ResponsiveCmp size={undefined} />
      </RcResponsiveContext.Provider>,
    );

    expect(screen.getByTestId('size').textContent).toBe('medium');
    expect(screen.getByTestId('size2').textContent).toBe('medium');
  });

  it('should no pass hiddenPatterns to component', () => {
    render(
      <RcResponsiveContext.Provider value={'md'}>
        <ResponsiveCmp hiddenPatterns={'gt-lg'} />
      </RcResponsiveContext.Provider>,
    );

    expect(screen.queryByTestId('size')).toBeInTheDocument();
  });

  it.each`
    hide                  | exist
    ${'md'}               | ${false}
    ${'gt-lg'}            | ${true}
    ${'gt-sm'}            | ${false}
    ${'xs'}               | ${true}
    ${['lt-md', 'lt-lg']} | ${false}
    ${['gt-lg']}          | ${true}
  `('should hide component when match responsiveHidden', ({ hide, exist }) => {
    render(
      <RcResponsiveContext.Provider value={'md'}>
        <ResponsiveCmp hiddenPatterns={hide} size={['large.md']} />
      </RcResponsiveContext.Provider>,
    );

    expect(!!screen.queryByTestId('size')).toBe(exist);
  });

  it.each`
    sizePattern                                     | size          | describe
    ${'large'}                                      | ${'large'}    | ${'pass a size string directly'}
    ${['small.xs']}                                 | ${'medium'}   | ${'no match size'}
    ${['small.xs', 'xxxlarge']}                     | ${'xxxlarge'} | ${'no match size and have default size'}
    ${['small.xs', 'xlarge.lt-lg']}                 | ${'xlarge'}   | ${'match size in array'}
    ${['xsmall.md', 'small.gt-sm', 'xlarge.lt-lg']} | ${'xsmall'}   | ${'match size in array (test priority, breakpoint > gtBreakpoint > ltBreakpoint (1))'}
    ${['small.gt-sm', 'xlarge.lt-lg']}              | ${'small'}    | ${'match size in array (test priority, breakpoint > gtBreakpoint > ltBreakpoint (2))'}
    ${['xlarge.lt-lg', 'small.gt-sm']}              | ${'small'}    | ${'match size in array (test priority, breakpoint > gtBreakpoint > ltBreakpoint (3))'}
    ${['xlarge.lt-lg', 'small.lt-xl']}              | ${'xlarge'}   | ${'match size in array (test priority, small range have hight priority (1))'}
    ${['small.gt-sm', 'medium.gt-xs']}              | ${'small'}    | ${'match size in array (test priority, small range have hight priority (2))'}
    ${['small.gt-xs', 'medium.gt-xs']}              | ${'medium'}   | ${'match size in array (test order, pattern can be covered (1))'}
    ${['small.md', 'xlarge.md']}                    | ${'xlarge'}   | ${'match size in array (test order, pattern can be covered (2))'}
  `('should have correct size when $describe', ({ sizePattern, size }) => {
    render(
      <RcResponsiveContext.Provider value={'md'}>
        <ResponsiveCmp size={sizePattern} />
      </RcResponsiveContext.Provider>,
    );

    expect(screen.queryByTestId('size')?.textContent).toBe(size);
  });
});
