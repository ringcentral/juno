import { css } from '../styled-components';
import { LiteralUnion } from '../typings';

/**
 * flex width set
 *
 * @example
 *
 * ```tsx
 * `${flexWidth('auto')}`
 * // flex: 1 1 auto
 * // max-width: unset
 * // max-width: unset
 *
 *
 * `${flexWidth('500px')}`
 * // flex: 1 1 500px
 * // max-width: 500px
 * // max-width: 500px
 * ```
 */
export const flexWidth = (width: LiteralUnion<'auto'>) => css`
  flex: 1 1 ${width};

  ${width !== 'auto'
    ? css`
        max-width: ${width};
        min-width: ${width};
      `
    : css`
        max-width: unset;
        min-width: unset;
      `}
`;
