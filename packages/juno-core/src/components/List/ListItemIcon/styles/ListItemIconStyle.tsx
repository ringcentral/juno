import {
  css,
  flexCenterStyle,
  getParsePaletteColor,
  RcThemedStyled,
  spacing,
} from '../../../../foundation';
import { RcIconButton } from '../../../Buttons/IconButton';
import { RcCheckbox } from '../../../Forms/Checkbox';
import { RcRadio } from '../../../Forms/Radio';
import { RcSwitch } from '../../../Forms/Switch';
import { RcIcon } from '../../../Icon';
import { RcListItemIconProps } from '../ListItemIcon';

export const ListItemIconStyle: RcThemedStyled<RcListItemIconProps, any> = ({
  color,
}) => {
  return css`
    ${flexCenterStyle};
    width: auto;
    height: unset;
    color: ${getParsePaletteColor(color, ['neutral', 'f04'])};
    min-width: unset;

    > ${RcRadio}, > ${RcCheckbox} {
      margin-right: ${spacing(1)};
    }

    > ${RcSwitch} {
      /** The DOM structure of Switch is special,
        should remove margin-left after fix Switch as common control */
      margin-left: ${spacing(1)};
      margin-right: ${spacing(1)};
    }

    > ${RcIconButton}, > ${RcIcon} {
      margin-right: ${spacing(2)};
    }
  `;
};
