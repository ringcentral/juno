import {
  css,
  flexCenterStyle,
  palette2,
  RcThemedStyled,
  spacing,
  typography,
} from '../../../../foundation';
import { RcCheckbox } from '../../../Forms/Checkbox';
import { RcFormControlLabel } from '../../../Forms/FormControlLabel';
import { RcRadio } from '../../../Forms/Radio';
import { RcSwitch } from '../../../Forms/Switch';
import { RcListItemSecondaryActionProps } from '../ListItemSecondaryAction';

export const ListItemSecondaryActionStyle: RcThemedStyled<
  RcListItemSecondaryActionProps,
  any
> = () => {
  return css`
    ${flexCenterStyle};
    ${typography('caption1')};
    color: ${palette2('neutral', 'f04')};

    ${RcFormControlLabel} {
      margin-right: -${spacing(2)};

      > ${RcRadio}, > ${RcCheckbox}, > ${RcSwitch} {
        margin-right: 0;
      }
    }

    > * + * {
      margin-left: ${spacing(2)};
    }
  `;
};
