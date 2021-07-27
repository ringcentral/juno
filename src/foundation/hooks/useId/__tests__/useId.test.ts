import { EachRun } from '../../../../../tests';
import { renderHooks } from '../../../../../tests/utils/renderHooks';
import { useId } from '../useId';

// * useId() => 'rc-juno-id-xxxx'
// * useId('') => 'rc-juno-id-xxxx'
// * useId(null) => 'rc-juno-id-xxxx'
// * useId(undefined) => 'rc-juno-id-xxxx'
// * useId('nameId') => 'nameId'
// * useId('nameId', true) => 'nameId-xxxx'
describe('useId()', () => {
  it.each`
    args                | result
    ${[]}               | ${'rc-juno-id-1'}
    ${['']}             | ${'rc-juno-id-2'}
    ${[undefined]}      | ${'rc-juno-id-3'}
    ${[null]}           | ${'rc-juno-id-4'}
    ${['nameId']}       | ${'nameId'}
    ${['nameId', true]} | ${'nameId-5'}
  `(
    '[useId] useId correct result',
    EachRun`
      Scenario: useId correct result
      Given: create useId with $args
      Then: result will be $result ${(args, context) => {
        const hookRef = renderHooks(() => useId(...args.args));
        expect(hookRef.current).toEqual(args.result);
      }}
    `,
  );
});
