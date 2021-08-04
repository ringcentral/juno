import { css } from '../styled-components';
import { RcThemeProps } from '../theme/theme.type';
import { RcTypographyKeys } from '../theme/typography.type';

/**
 * get typography key value with token
 *
 * @example
 * ```ts
 * typographyProp('body1', 'fontSize')
 * ```
 */
function typographyProp(name: RcTypographyKeys, key: string) {
  if (name === 'inherit') {
    return undefined;
  }
  return ({ theme }: RcThemeProps) => {
    const themeOfTypography = theme.typography[name];
    if (typeof themeOfTypography !== 'object') {
      throw new Error(`Unexpected typography name: ${name}`);
    }
    return themeOfTypography[key];
  };
}

/**
 * get typography style from token
 *
 * @example
 * ```ts
 * typography('body1')
 * ```
 */
function typography(
  /** name of token */
  name: RcTypographyKeys,
  /** not contain `line-hight` style */
  fontOnly = false,
) {
  const fontCss = css`
    font-size: ${typographyProp(name, 'fontSize')};
    font-weight: ${typographyProp(name, 'fontWeight')};
    font-family: ${({ theme }: RcThemeProps) => theme.typography['fontFamily']};
  `;
  return fontOnly
    ? fontCss
    : css`
        ${fontCss};
        line-height: ${typographyProp(name, 'lineHeight')};
      `;
}

export { typography, typographyProp };
