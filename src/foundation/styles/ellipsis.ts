import { css } from '../styled-components';

/**
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
