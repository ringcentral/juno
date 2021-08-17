import {
  css,
  palette2,
  RcThemedStyled,
  spacing,
  typography,
} from '../../../../foundation';
import { RcCheckboxClasses } from '../../Checkbox/utils';
import { RcRadioClasses } from '../../Radio/utils';
import { RcSwitchClasses } from '../../Switch/utils';
import { RcFormControlLabelProps } from '../FormControlLabel';
import { RcFormControlLabelClasses } from '../utils';

const controlsClassName = `.${RcCheckboxClasses.root}, .${RcRadioClasses.root}`;

export const FormControlLabelStyle: RcThemedStyled<
  RcFormControlLabelProps,
  any
> = () => {
  return css`
    color: ${palette2('neutral', 'f06')};
    ${typography('body2')};

    .${RcFormControlLabelClasses.disabled} {
      color: ${palette2('disabled', 'f02')};
    }

    ${controlsClassName} {
      margin-left: 0;
      margin-right: ${spacing(1)};
    }

    .${RcSwitchClasses.root} {
      margin: ${spacing(3)};
    }

    &.${RcFormControlLabelClasses.labelPlacementStart} {
      ${controlsClassName} {
        margin-left: ${spacing(1)};
        margin-right: 0;
      }
    }
  `;
};
