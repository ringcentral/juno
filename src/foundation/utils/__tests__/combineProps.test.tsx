import React from 'react';

import { combineProps } from '../combineProps';

describe('combineProps work correctly', () => {
  it('number will be cover with sourceProps', () => {
    expect(combineProps({ v: 11 }, { v: 0 })).toStrictEqual({ v: 0 });
  });

  it('string will be cover with sourceProps', () => {
    expect(combineProps({ a: 'cool' }, { a: 'not cool' })).toStrictEqual({
      a: 'not cool',
    });
    expect(combineProps({ a: undefined }, { a: 'not cool' })).toStrictEqual({
      a: 'not cool',
    });
    expect(combineProps({ a: 'cool' }, { a: undefined })).toStrictEqual({
      a: 'cool',
    });
  });

  it('className will be group together, and the second will at follow up', () => {
    expect(
      combineProps({ className: 'a-1' }, { className: 'a-2' }),
    ).toStrictEqual({
      className: 'a-1 a-2',
    });

    expect(
      combineProps({ className: 'a-1' }, { className: undefined }),
    ).toStrictEqual({
      className: 'a-1',
    });

    expect(combineProps({}, { className: 'a-2' })).toStrictEqual({
      className: 'a-2',
    });
  });

  it('date will be cover', () => {
    expect(
      combineProps({ v: new Date('1999/1/1') }, { v: new Date('2000/1/1') }),
    ).toStrictEqual({ v: new Date('2000/1/1') });

    expect(combineProps({ v: new Date('1999/1/1') }, {})).toStrictEqual({
      v: new Date('1999/1/1'),
    });

    expect(
      combineProps({ v: new Date('1999/1/1') }, { v: undefined }),
    ).toStrictEqual({
      v: new Date('1999/1/1'),
    });

    expect(
      combineProps({ v: undefined }, { v: new Date('1999/1/1') }),
    ).toStrictEqual({
      v: new Date('1999/1/1'),
    });
  });

  it('array will be cover', () => {
    expect(combineProps({ v: [] }, { v: [1, 2, 3] })).toStrictEqual({
      v: [1, 2, 3],
    });

    expect(combineProps({ v: undefined }, { v: [1, 2, 3] })).toStrictEqual({
      v: [1, 2, 3],
    });

    expect(combineProps({}, { v: [1, 2, 3] })).toStrictEqual({
      v: [1, 2, 3],
    });
  });

  it('RegExp will be cover', () => {
    expect(combineProps({ v: /value/g }, { v: /value2/g })).toStrictEqual({
      v: /value2/g,
    });
    expect(combineProps({ v: undefined }, { v: /value2/g })).toStrictEqual({
      v: /value2/g,
    });
    expect(combineProps({}, { v: /value2/g })).toStrictEqual({
      v: /value2/g,
    });
  });

  it('Error will be cover', () => {
    expect(
      combineProps({ v: new Error() }, { v: new Error('error message') }),
    ).toStrictEqual({ v: new Error('error message') });
    expect(
      combineProps({ v: new Error() }, { v: new Error('error message') }),
    ).toStrictEqual({ v: new Error('error message') });
    expect(
      combineProps({ v: new Error() }, { v: new Error('error message') }),
    ).toStrictEqual({ v: new Error('error message') });
  });

  it('Symbol will be cover', () => {
    const sym = Symbol('symbol message');
    expect(combineProps({ v: Symbol('') }, { v: sym })).toStrictEqual({
      v: sym,
    });
    expect(combineProps({ v: undefined }, { v: sym })).toStrictEqual({
      v: sym,
    });
    expect(combineProps({}, { v: sym })).toStrictEqual({
      v: sym,
    });
  });

  it('React Element will be cover', () => {
    const el = <div />;
    expect(combineProps({ v: <span /> }, { v: el })).toStrictEqual({
      v: el,
    });
    expect(combineProps({ v: undefined }, { v: el })).toStrictEqual({
      v: el,
    });
    expect(combineProps({}, { v: el })).toStrictEqual({
      v: el,
    });
  });

  it('function will be cover', () => {
    const onClick = jest.fn();
    const onClick2 = jest.fn();
    const { onClick: onCombineClick } = combineProps(
      {
        onClick: () => {
          onClick();
        },
      },
      {
        onClick: () => {
          onClick2();
        },
      },
    );

    onCombineClick();

    expect(onClick).toBeCalled();
    expect(onClick2).toBeCalled();
  });

  it('trigger order of function is `intoFunction(e) => defaultFunction(e)`', () => {
    const results: string[] = [];
    const { onClick: onCombineClick } = combineProps(
      {
        onClick: () => {
          results.push('default');
        },
      },
      {
        onClick: () => {
          results.push('into');
        },
      },
    );

    onCombineClick();

    expect(results).toStrictEqual(['into', 'default']);
  });

  it('Component will be cover by coverProps', () => {
    const A = () => {
      return <div>123</div>;
    };

    const B = () => {
      return <div>123</div>;
    };

    expect(
      combineProps(
        {
          component: A,
        },
        {
          component: B,
        },
        ['component'],
      ),
    ).toStrictEqual({ component: B });
  });

  it('object will be cover', () => {
    expect(
      combineProps(
        {
          v: {
            a: 1,
            b: 3,
            c: 'group',
            d: {
              className: 'group',
              d1: 0,
              d2: 3,
              classes: { root: 'group1', item: 'group1', good: 'c1' },
            },
            e: false,
          },
          g: 'group',
        },
        {
          v: {
            a: 11,
            b: 33,
            c: 'group2',
            d: {
              className: 'group2',
              d1: 10,
              d2: 30,
              classes: { root: 'group2', item: 'group2' },
            },
            e: true,
          },
        },
      ),
    ).toStrictEqual({
      g: 'group',
      v: {
        a: 11,
        b: 33,
        c: 'group2',
        d: {
          d1: 10,
          d2: 30,
          className: 'group group2',
          classes: {
            good: 'c1',
            item: 'group1 group2',
            root: 'group1 group2',
          },
        },
        e: true,
      },
    });

    const input = {
      v: {
        a: 1,
        b: 3,
        c: 'group',
        d: {
          className: 'group',
          d1: 0,
          d2: 3,
          classes: { root: 'group1', item: 'group1', good: 'c1' },
        },
        e: false,
      },
      g: 'group',
    };

    expect(combineProps(input, {} as any)).toStrictEqual(input);
    expect(combineProps({} as any, input)).toStrictEqual(input);
    expect(combineProps(input, undefined)).toStrictEqual(input);
    expect(combineProps(input, undefined)).toStrictEqual(input);
    expect(combineProps(null, input)).toStrictEqual(input);
    expect(combineProps(null, input)).toStrictEqual(input);
  });

  it('string will be cover with sourceProps', () => {
    expect(combineProps({ a: 'cool' }, { a: null })).toStrictEqual({
      a: null,
    });
  });

  it('string will be cover with sourceProps2', () => {
    expect(
      combineProps({ className: 'cool' }, { className: null }),
    ).toStrictEqual({
      className: 'cool',
    });
  });

  it('string will be cover with sourceProps3', () => {
    expect(combineProps({ a: null }, { a: 'cool' })).toStrictEqual({
      a: 'cool',
    });
  });

  it('string will be cover with sourceProps4', () => {
    expect(
      combineProps({ className: null }, { className: 'cool' }),
    ).toStrictEqual({
      className: 'cool',
    });
  });

  it('string will be cover with sourceProps5', () => {
    expect(
      combineProps({ className: 'null' }, { className: null }),
    ).toStrictEqual({
      className: 'null',
    });
  });

  it('string will be cover with sourceProps6', () => {
    expect(combineProps({ a: 'null' }, { a: null })).toStrictEqual({
      a: null,
    });
  });
});
