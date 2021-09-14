import { styled, typography } from '../../../../../foundation';
import { RcIconButtonClasses } from '../../../../Buttons/IconButton/utils';
import { PickerBaseIconButton } from '../../styles';
import { RcDatePickerIconWidths } from '../utils';

export const StyledDay = styled(PickerBaseIconButton)`
  &.${RcIconButtonClasses.root} {
    width: ${({ size }) => RcDatePickerIconWidths[size!]};
    height: ${({ size }) => RcDatePickerIconWidths[size!]};
    margin: 0 2px;
    visibility: ${({ hidden }) => hidden && 'hidden'};
    ${typography('caption1')};
  }
`;
