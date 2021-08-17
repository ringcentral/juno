import {
  css,
  palette2,
  radius,
  RcThemedStyled,
  shadows,
  spacing,
} from '../../../../foundation';
import { RcToggleButton } from '../../ToggleButton';
import { RcToggleButtonSpace } from '../../ToggleButton/utils';
import { RcToggleButtonGroupProps } from '../ToggleButtonGroup';

export const boxStyle: RcThemedStyled<RcToggleButtonGroupProps, any> = ({
  size,
  orientation,
}) => {
  const { inner, outer, area } = RcToggleButtonSpace[size!];
  const isHorizontal = orientation !== 'vertical';

  const radiusValue = radius('round');

  const startPadding = spacing(area + inner - 0.25);
  const endPadding = spacing(area + inner);

  const outerPadding = spacing(area + outer);

  return css`
    background-color: ${palette2('neutral', 'elevation')};
    box-shadow: ${shadows('1')};
    border-radius: ${radius('round')};

    ${RcToggleButton} {
      ${isHorizontal
        ? css`
            padding-left: ${startPadding};
            margin-left: 1px;
            padding-right: ${endPadding};
          `
        : css`
            padding-top: ${startPadding};
            margin-top: 1px;
            padding-bottom: ${endPadding};
          `};
    }

    ${RcToggleButton}:first-child {
      ${isHorizontal
        ? css`
            border-top-left-radius: ${radiusValue};
            border-bottom-left-radius: ${radiusValue};
            padding-left: ${outerPadding};
            margin-left: 0px;
          `
        : css`
            border-top-left-radius: ${radiusValue};
            border-top-right-radius: ${radiusValue};
            padding-top: ${outerPadding};
            margin-top: 0px;
          `};
    }

    ${RcToggleButton}:last-child {
      ${isHorizontal
        ? css`
            border-top-right-radius: ${radiusValue};
            border-bottom-right-radius: ${radiusValue};
            padding-right: ${outerPadding};
          `
        : css`
            border-bottom-left-radius: ${radiusValue};
            border-bottom-right-radius: ${radiusValue};
            padding-bottom: ${outerPadding};
          `};
    }
  `;
};
