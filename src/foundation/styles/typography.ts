import { css } from '../styled-components';
import { RcThemeProps } from '../theme/theme.type';
import { RcTypographyKeys } from '../theme/typography.type';

/** ******************************************
 *              Typography                  *
 ******************************************* */

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
 * typography
 * @param name
 */
function typography(name: RcTypographyKeys, fontOnly = false) {
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
