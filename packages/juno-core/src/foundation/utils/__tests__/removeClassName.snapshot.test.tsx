import React, { useRef } from 'react';

import { render, screen, cleanup } from '@testing-library/react';

import { RcChip } from '../../../components';
import { RcThemeProvider } from '../../theme';
import { removeClassName } from '../removeClassName';
import { renderHook } from '@testing-library/react-hooks';

afterEach(cleanup);

describe('removeClassName work correctly', () => {
  it('should remove parent className', () => {
    const {
      result: { current: ref },
    } = renderHook(() => useRef<HTMLDivElement>(null));

    render(
      <RcThemeProvider prefixGlobalClass="example">
        <RcChip ref={ref} label="example" className="some-other-class" />
      </RcThemeProvider>,
    );

    const elm = ref.current!;

    expect(elm.className).toContain('example-MuiChip-root');

    removeClassName(ref, 'MuiChip-root');

    expect(elm.className).not.toContain('example-MuiChip-root');
    expect(document.body).toMatchSnapshot();
  });

  it('can remove children className', () => {
    const {
      result: { current: ref },
    } = renderHook(() => useRef<HTMLDivElement>(null));

    render(
      <RcThemeProvider prefixGlobalClass="example">
        <RcChip ref={ref} label="example" className="some-other-class" />
      </RcThemeProvider>,
    );

    const elm = screen.getByText('example');
    expect(elm.className).toContain('example-MuiChip-label');

    removeClassName(ref, 'MuiChip-label', {
      scanChildren: true,
    });

    expect(elm.className).not.toContain('example-MuiChip-label');
    expect(document.body).toMatchSnapshot();
  });

  it('remove contain target class once', () => {
    const {
      result: { current: ref },
    } = renderHook(() => useRef<HTMLDivElement>(null));

    render(
      <div ref={ref} className="abc bcd efg abc-def">
        example
      </div>,
    );
    const elm = screen.getByText('example');

    removeClassName(ref, 'bcd');
    expect(elm.className).toBe('abc efg abc-def');

    removeClassName(ref, 'abc');
    expect(elm.className).toBe('efg');
  });

  it('when set fullMath should only remove target class', () => {
    const {
      result: { current: ref },
    } = renderHook(() => useRef<HTMLDivElement>(null));

    render(
      <div ref={ref} className="abc bcd bcd-efg efg abc-def">
        example
      </div>,
    );
    const elm = screen.getByText('example');

    removeClassName(ref, 'bcd', { fullMatch: true });
    expect(elm.className).toBe('abc bcd-efg efg abc-def');

    removeClassName(ref, 'abc', { fullMatch: true });
    expect(elm.className).toBe('bcd-efg efg abc-def');

    removeClassName(ref, 'efg');
    expect(elm.className).toBe('abc-def');
  });
});
