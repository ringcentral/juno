import { css } from '../styled-components';

/**
 * ellipsis style
 *
 * @returns
 * ```css
 * white-space: nowrap;
 * overflow: hidden;
 * text-overflow: ellipsis;
 * ```
 */
export function ellipsis() {
  return css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
}
