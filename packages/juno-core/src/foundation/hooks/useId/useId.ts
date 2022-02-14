import uniqueId from 'lodash/uniqueId';

import { useResultRef } from '../useResultRef';

const DEFAULT_PREFIX = 'rc-juno-id-';

/**
 * Generates a unique ID.
 *
 * @param id - Default component id or prefix id.
 * @param prefixMode Whether enable prefix the ID with.
 * @returns unique ID
 * @example
 * useId() => 'rc-juno-id-xxxx'
 * useId('') => 'rc-juno-id-xxxx'
 * useId(null) => 'rc-juno-id-xxxx'
 * useId(undefined) => 'rc-juno-id-xxxx'
 * useId('nameId') => 'nameId'
 * useId('nameId', true) => 'nameId-xxxx'
 */
export function useId(id?: string, prefixMode?: boolean): string {
  const { current: resultId } = useResultRef<string>(() => {
    if (id) {
      if (prefixMode) {
        return uniqueId(`${id}-`);
      }
      return id;
    }

    return uniqueId(DEFAULT_PREFIX);
  });

  return resultId;
}
