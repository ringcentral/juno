import { css } from '../styled-components';

/** reset browser button style */
export function nonStyleButton() {
  return css`
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  `;
}
