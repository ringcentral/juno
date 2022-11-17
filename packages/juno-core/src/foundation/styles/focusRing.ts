import { css } from '../styled-components';
import { palette2 } from './newPalette';

export type FocusRingVariant = 'normal' | 'inset';

const focusRingOffsetMap = {
  normal: '2px',
  inset: '-2px',
};

export const focusRing = (variant: FocusRingVariant) => {
  return css`
    outline-color: ${palette2('interactive', 'b02')};
    outline-width: 2px;
    outline-style: solid;
    outline-offset: ${focusRingOffsetMap[variant]};
  `;
};
