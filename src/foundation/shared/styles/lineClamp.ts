import { css } from '../../styled-components';
import { px } from '../theme';

export function lineClamp(lineNumber: number, maxHeight: number) {
  return css`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${lineNumber};
    -webkit-box-orient: vertical;
    max-height: ${px(maxHeight)};
    word-break: break-word;
  `;
}
