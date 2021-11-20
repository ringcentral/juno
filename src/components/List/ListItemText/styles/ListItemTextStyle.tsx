import {
  css,
  ellipsis,
  palette2,
  RcThemedStyled,
  spacing,
  typography,
  getParsePaletteColor,
} from '../../../../foundation';
import { RcListItemTextProps } from '../ListItemText';
import { RcListItemTextClasses } from '../utils';

export const ListItemTextStyle: RcThemedStyled<RcListItemTextProps, any> = ({
  alignCenter,
  primaryColor: primaryColorProp,
  lineThrough,
  primaryTypographyProps,
  secondaryTypographyProps,
  isEllipsis,
}) => {
  const primaryColor = getParsePaletteColor(
    primaryColorProp || primaryTypographyProps?.color,
    palette2('neutral', 'f06'),
  );
  const secondaryColor = getParsePaletteColor(
    secondaryTypographyProps?.color,
    palette2('neutral', 'f04'),
  );

  const primaryTypography = typography(
    primaryTypographyProps?.variant || 'body1',
  );
  const secondaryTypography = typography(
    secondaryTypographyProps?.variant || 'caption1',
  );

  const textDisplay = css`
    ${isEllipsis && ellipsis()};
    text-decoration-line: ${lineThrough ? 'line-through' : 'inherit'};
  `;

  return css`
    ${alignCenter &&
    css`
      flex: 'none !important';
    `}

    padding: 0;
    /** for next ListSecondaryAction default margin */
    margin: 0 ${spacing(2)} 0 0;

    &.${RcListItemTextClasses.multiline} {
      margin: ${spacing(1, 2, 1, 0)};
    }

    &.${RcListItemTextClasses.inset} {
      padding-left: ${spacing(14)};
    }

    .${RcListItemTextClasses.primary} {
      ${textDisplay};
      ${primaryTypography};
      color: ${primaryColor};
    }

    .${RcListItemTextClasses.secondary} {
      ${textDisplay};
      ${secondaryTypography};
      color: ${secondaryColor};
    }
  `;
};
