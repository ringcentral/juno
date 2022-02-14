import React from 'react';

import {
  css,
  focusVisibleColor,
  getParsePaletteColor,
  isRcElement,
  opacity,
  palette2,
  radius,
  RcThemedStyled,
  setOpacity,
} from '../../../foundation';
import { RcRatingProps } from '../Rating';
import { RcRatingClasses } from '../utils';

const getColor: RcThemedStyled<RcRatingProps> = ({ emphasized, color }) => {
  return emphasized ? palette2('warning', 'f01') : getParsePaletteColor(color);
};

export const RatingStyle: RcThemedStyled<RcRatingProps, any> = (props) => {
  const { icon, emptyIcon, emphasized, color } = props;

  const isIcon =
    React.isValidElement(icon) &&
    React.isValidElement(emptyIcon) &&
    isRcElement(icon, ['RcIcon']) &&
    isRcElement(emptyIcon, ['RcIcon']);

  return css`
    &.${RcRatingClasses.focusVisible}
      .${RcRatingClasses.iconActive},
      input:focus
      + .${RcRatingClasses.pristine} {
      outline: none;
      border-radius: ${radius('xxl')};
      box-shadow: 0 0 0 1px ${focusVisibleColor};
    }

    .${RcRatingClasses.iconActive} {
      transform: scale(1, 1);
    }

    .${RcRatingClasses.label} {
      padding: 0 8px;
    }

    .${RcRatingClasses.iconFilled} {
      color: ${getColor};
    }

    .${RcRatingClasses.iconEmpty} {
      color: ${palette2('neutral', 'f04')};
    }

    &.${RcRatingClasses.disabled} {
      opacity: 1;

      .${RcRatingClasses.iconFilled} {
        ${isIcon
          ? css`
              color: ${color === 'neutral.f06' && !emphasized
                ? palette2('neutral', 'f04')
                : setOpacity(getColor(props), '40', true)};
            `
          : css`
              opacity: ${opacity('64')};
            `}
      }

      .${RcRatingClasses.iconEmpty} {
        color: ${palette2('disabled', 'f02')};
      }
    }

    &.${RcRatingClasses.readOnly} .${RcRatingClasses.icon} {
      padding: 0 8px;
    }
  `;
};
