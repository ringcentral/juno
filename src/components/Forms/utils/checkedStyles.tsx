import { ReactNode } from 'react';

import {
  css,
  getParsePaletteColor,
  nonTouchHoverMedia,
  palette2,
  px,
  RcBaseLabelPlacement,
  RcClassesProps,
  RcPaletteProp,
  RcThemedStyled,
  setOpacity,
} from '../../../foundation';
import { RcIconButtonSize } from '../../Buttons/IconButton';
import { RcIconButtonSizes } from '../../Buttons/IconButton/utils';

const backgroundColor = palette2('neutral', 'f02');
const disabledColor = palette2('disabled', 'f02');
const errorColor = palette2('danger', 'b04');

export type CheckedStyledClasses = RcClassesProps<
  'root' | 'checked' | 'disabled'
>;

export type RcCheckedStyledProps<T = RcBaseLabelPlacement> = {
  /** label for control */
  label?: ReactNode;
  /** formControlLabelProps when have label */
  formControlLabelProps?: T;
  /** that below icon size */
  size?: RcIconButtonSize;
  /** more palette color support */
  color?: RcPaletteProp;
  /** is that error */
  error?: boolean;
  /** show color when not checked */
  followColorWhenUnChecked?: boolean;
};

/** provide custom color for check icon */
export const checkedStyles: RcThemedStyled<
  RcCheckedStyledProps<any> & Required<CheckedStyledClasses>,
  any
> = ({ color, error, followColorWhenUnChecked, size, classes }) => {
  const _color = error ? errorColor : getParsePaletteColor(color);
  const ripplePaddingSize = px(RcIconButtonSizes[size!] / 2);

  return css`
    &.${classes.root} {
      color: ${followColorWhenUnChecked ? _color : backgroundColor};
      padding: ${ripplePaddingSize};

      &.${classes.checked} {
        color: ${_color};
      }

      ${nonTouchHoverMedia} {
        &:hover {
          background-color: ${setOpacity(
            followColorWhenUnChecked ? _color : backgroundColor,
            '12',
          )};

          &.${classes.checked} {
            color: ${setOpacity(_color, '08', true)};
            background-color: ${setOpacity(_color, '12')};
          }
        }
      }

      &.${classes.disabled} {
        color: ${disabledColor};
      }
    }
  `;
};
