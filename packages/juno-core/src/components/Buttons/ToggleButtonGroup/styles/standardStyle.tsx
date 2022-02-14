import { css, radius, RcThemedStyled, spacing } from '../../../../foundation';
import { RcToggleButtonSpace } from '../../ToggleButton/utils';
import { RcToggleButtonGroupProps } from '../ToggleButtonGroup';
import {
  RcToggleButtonGroupClasses,
  toggleButtonBetweenClassName,
} from '../utils';

export const standardStyle: RcThemedStyled<RcToggleButtonGroupProps, any> = ({
  orientation,
  size,
}) => {
  const isHorizontal = orientation !== 'vertical';
  const { inner, outer, area } = RcToggleButtonSpace[size!];

  // * add 1px for border
  const margins = isHorizontal
    ? spacing(inner, inner, inner, inner + 0.25)
    : spacing(inner, inner, inner + 0.25, inner);

  const outerSpace = spacing(outer);

  return css`
    ${`${toggleButtonBetweenClassName},
  .${RcToggleButtonGroupClasses.groupedHorizontal},
  .${RcToggleButtonGroupClasses.groupedVertical}`} {
      margin: ${margins};
      padding: ${spacing(area)};
      border: none;
      border-radius: ${radius('sm')};

      ${isHorizontal
        ? css`
            margin-top: 0;
            margin-bottom: 0;
          `
        : css`
            margin-left: 0;
            margin-right: 0;
          `};

      &:first-child {
        ${isHorizontal
          ? css`
              margin-left: ${outerSpace};
            `
          : css`
              margin-top: ${outerSpace};
            `};
      }

      &:last-child {
        ${isHorizontal
          ? css`
              margin-right: ${outerSpace};
            `
          : css`
              margin-bottom: ${outerSpace};
            `};
      }
    }
  `;
};
