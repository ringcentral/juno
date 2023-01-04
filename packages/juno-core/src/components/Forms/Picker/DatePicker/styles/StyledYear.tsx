import { styled, typography } from '../../../../../foundation';
import { RcIconButtonClasses } from '../../../../Buttons/IconButton/utils';
import {
  datePickerCustomFocusRingStyle,
  PickerBaseIconButton,
} from '../../styles';

export const StyledYear = styled(PickerBaseIconButton)`
  &.${RcIconButtonClasses.root} {
    width: 56px;
    min-width: 56px;
    height: 28px;
    margin: 4px 0;
    ${typography('body1')};
    ${datePickerCustomFocusRingStyle};
  }
`;
