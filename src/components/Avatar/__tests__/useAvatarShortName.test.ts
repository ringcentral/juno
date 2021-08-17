import { renderHook } from '@testing-library/react-hooks';

import { useAvatarShortName } from '../utils/useAvatarShortName';

describe('useAvatarShortName', () => {
  it.each`
    firstName        | lastName      | email                             | result
    ${'Shining'}     | ${'Miao'}     | ${undefined}                      | ${'SM'}
    ${'0Shin;ing'}   | ${'5Miao;'}   | ${undefined}                      | ${'05'}
    ${'Shining'}     | ${''}         | ${undefined}                      | ${'S'}
    ${''}            | ${'M'}        | ${undefined}                      | ${'M'}
    ${''}            | ${''}         | ${'shining.miao@ringcentral.com'} | ${'S'}
    ${''}            | ${''}         | ${''}                             | ${''}
    ${undefined}     | ${undefined}  | ${undefined}                      | ${''}
    ${'大0Shin;ing'} | ${'Ｆ5Miao;'} | ${undefined}                      | ${''}
  `(
    '[useAvatarShortName] work correctly',
    ({ firstName, lastName, email, result }) => {
      const shortName = renderHook(() =>
        useAvatarShortName({
          firstName,
          lastName,
          email,
        }),
      );
      expect(shortName.result.current).toBe(result);
    },
  );
});
