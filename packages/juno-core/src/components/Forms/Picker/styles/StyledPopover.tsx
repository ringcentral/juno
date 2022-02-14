import { fakeBorder, styled } from '../../../../foundation';
import { RcPopover } from '../../../Popover';
import { RcDatePickerClasses } from '../DatePicker/utils';
import { RcTimePickerClasses } from '../TimePicker/utils';

export const StyledPopover = styled(RcPopover)`
  .${RcDatePickerClasses.popoverPaper}, .${RcTimePickerClasses.popoverPaper} {
    ${fakeBorder({ pseudo: true, radius: 'lg' })};
  }
`;
