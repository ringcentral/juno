import { combineClasses } from '../combineProps';

describe('combineClasses work correctly', () => {
  it('number will be cover with sourceProps', () => {
    expect(
      combineClasses(
        {
          input: 'a1',
          root: {
            a: 'a1',
          },
          root2: {
            a: 'a1',
            root3: {
              a: 'a1',
            },
            root4: {
              a: 'a1',
            },
          },
        },
        {
          input: 'a2',
          root: {
            a: 'a2',
          },
          root2: {
            a: 'a2',
            root3: {
              a: 'a2',
            },
          },
        },
      ),
    ).toStrictEqual({
      input: 'a1 a2',
      root: {
        a: 'a1 a2',
      },
      root2: {
        a: 'a1 a2',
        root3: {
          a: 'a1 a2',
        },
        root4: {
          a: 'a1',
        },
      },
    });
  });

  it('undefined', () => {
    expect(
      combineClasses(
        {
          input: 'a1',
          root: {
            a: 'a1',
          },
        },
        {
          input: 'a2',
          root: {
            a: undefined,
          },
        },
      ),
    ).toStrictEqual({
      input: 'a1 a2',
      root: {
        a: 'a1',
      },
    });
  });

  it('undefined2', () => {
    expect(
      combineClasses(
        {
          input: 'a1',
          root: {
            a: undefined,
          },
        },
        {
          input: 'a2',
          root: {
            a: 'a1',
          },
        },
      ),
    ).toStrictEqual({
      input: 'a1 a2',
      root: {
        a: 'a1',
      },
    });
  });

  it('string will be cover with sourceProps', () => {
    expect(combineClasses({ a: 'cool' }, { a: null })).toStrictEqual({
      a: 'cool',
    });
  });

  it('string will be cover with sourceProps2', () => {
    expect(
      combineClasses({ className: 'cool' }, { className: null }),
    ).toStrictEqual({
      className: 'cool',
    });
  });

  it('string will be cover with sourceProps3', () => {
    expect(combineClasses({ a: null }, { a: 'cool' })).toStrictEqual({
      a: 'cool',
    });
  });

  it('string will be cover with sourceProps43', () => {
    expect(
      combineClasses({ className: null }, { className: 'cool' }),
    ).toStrictEqual({
      className: 'cool',
    });
  });
});
