import { css } from '../styled-components';
import { palette2, getParsePaletteColor } from './newPalette';
import { radius } from './radius';
import { RcPaletteProp } from '../theme';

export type FocusRingVariant = 'normal' | 'inset';

const focusRingOffsetMap = {
  normal: '2px',
  inset: '0px',
};

export type FocusRingOptions = {
  /**
   * Border radius of reference element. Can help this utils to calculate focusRing radius.
   * Only useful if `pseudo` is true.
   * @default '0px'
   */
  borderRadius?: Parameters<typeof radius>[0];
  /**
   * Border radius of reference element. Can help this utils to calculate focusRing position.
   * Only useful if `pseudo` is true.
   * @default '0px'
   */
  borderWidth?: string;
  /**
   * Should use pseudo to show focusRing.
   * @default true
   */
  pseudo?: boolean;
  /**
   * Color of the gap between reference element and focusRing.
   * Only useful if `pseudo` is false.
   * @default 'neutral.b01'
   */
  gapColor?: RcPaletteProp;
};

export const focusRing = (
  variant: FocusRingVariant,
  options: FocusRingOptions = {},
) => {
  const { pseudo = true } = options;
  if (pseudo) {
    const { borderRadius = 'zero', borderWidth = '0px' } = options;

    const isInset = variant === 'inset';
    const offset = focusRingOffsetMap[variant];

    return css`
      &:after {
        pointer-events: none;
        content: '';
        position: absolute;
        inset: 0;

        margin: calc(-${offset} - ${borderWidth});
        border-radius: calc(${offset} + ${radius(borderRadius)});
        box-shadow: ${isInset ? 'inset' : ''} 0 0 0 2px
          ${palette2('interactive', 'f01')};
      }
    `;
  }

  const { gapColor = 'neutral.b01' } = options;

  return css`
    box-shadow: 0 0 0 2px ${getParsePaletteColor(gapColor)},
      0 0 0 4px ${palette2('interactive', 'f01')};
  `;
};
