import { useMemo } from 'react';

import { RcPaletteProp } from '../../../foundation';

const AVATAR_COLORS: RcPaletteProp[] = [
  'avatar.tomato',
  'avatar.blueberry',
  'avatar.oasis',
  'avatar.gold',
  'avatar.sage',
  'avatar.ash',
  'avatar.persimmon',
  'avatar.pear',
  'avatar.brass',
  'avatar.lake',
];

export function getAvatarColorTokenFromId(id: number | string) {
  let hash = 0;
  const total = AVATAR_COLORS.length;

  for (const i of `${id ?? ''}`) {
    hash = hash + String(i).charCodeAt(0);
  }

  if (hash < 0) hash = -hash;

  return AVATAR_COLORS[hash % total];
}

/**
 * get color with `id` from buildIn avatar color map
 */
export const useAvatarColorToken = (id: number | string) => {
  const result = useMemo(() => getAvatarColorTokenFromId(id), [id]);

  return result;
};
