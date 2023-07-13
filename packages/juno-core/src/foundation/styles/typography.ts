import { css } from '../styled-components';
import { RcThemeProps } from '../theme/theme.type';
import { RcTypographyKeys } from '../theme/typography.type';
import { logInDev } from '../utils';

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
      if (process.env.NODE_ENV !== 'production') {
        throw new Error(`Unexpected typography name: ${name}`);
      } else {
        logInDev({
          message: `Unexpected typography name: ${name}`,
          component: 'typographyProp',
          level: 'warn',
        });
        return undefined;
      }
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
