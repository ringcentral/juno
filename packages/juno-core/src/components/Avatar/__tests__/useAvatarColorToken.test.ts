import { renderHook } from '@testing-library/react-hooks';

import { useAvatarColorToken } from '../utils/useAvatarColorToken';

describe('useAvatarColorToken', () => {
  it.each`
    id      | result
    ${'1'}  | ${'avatar.lake'}
    ${'2'}  | ${'avatar.tomato'}
    ${'3'}  | ${'avatar.blueberry'}
    ${'4'}  | ${'avatar.oasis'}
    ${'5'}  | ${'avatar.gold'}
    ${'6'}  | ${'avatar.sage'}
    ${'7'}  | ${'avatar.ash'}
    ${'8'}  | ${'avatar.persimmon'}
    ${'9'}  | ${'avatar.pear'}
    ${'10'} | ${'avatar.pear'}
    ${'11'} | ${'avatar.brass'}
    ${'12'} | ${'avatar.lake'}
    ${'13'} | ${'avatar.tomato'}
    ${'14'} | ${'avatar.blueberry'}
    ${'15'} | ${'avatar.oasis'}
    ${'16'} | ${'avatar.gold'}
    ${'17'} | ${'avatar.sage'}
    ${'18'} | ${'avatar.ash'}
    ${'19'} | ${'avatar.persimmon'}
    ${'20'} | ${'avatar.brass'}
    ${'21'} | ${'avatar.lake'}
    ${'22'} | ${'avatar.tomato'}
    ${'23'} | ${'avatar.blueberry'}
    ${'24'} | ${'avatar.oasis'}
  `('[useAvatarColorToken] $id work correctly', ({ id, result }) => {
    const shortName = renderHook(() => useAvatarColorToken(id));

    expect(shortName.result.current).toBe(result);
  });
});
