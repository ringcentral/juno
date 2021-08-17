import { css } from '../styled-components';
import { RcTheme } from '../theme/theme.type';
import { shadowBorder } from './focusVisible';
import { palette2 } from './newPalette';

type ShadowBorderParams = Parameters<typeof shadowBorder>;

export type FakeBorderOption = {
  /** should use pseudo */
  pseudo?: boolean;
  /** radius with fake border */
  radius?: ShadowBorderParams[0];
  /** color for fake border */
  color?: ShadowBorderParams[1];
  /** border size, default is `1` */
  size?: number;
  /** is that inset, default is `true` */
  inset?: boolean;
  /** should allow `transparent` color, default is `false`,
   * if got `transparent` that will no have any style
   */
  allowTransparent?: boolean;
};

export const fakeBorder = ({
  pseudo,
  inset = true,
  radius,
  size = 1,
  color = palette2('highContrast'),
  allowTransparent,
}: FakeBorderOption = {}) => {
  return ({ theme }: { theme?: RcTheme }) => {
    const colorValue =
      typeof color === 'function' && theme ? color({ theme }) : color;

    if (!allowTransparent && colorValue === 'transparent') return;

    if (pseudo) {
      return shadowBorder(radius, colorValue, inset, size);
    }

    return css`
      box-shadow: ${inset ? 'inset' : ''} 0 0 0 ${size}px ${colorValue};
    `;
  };
};
