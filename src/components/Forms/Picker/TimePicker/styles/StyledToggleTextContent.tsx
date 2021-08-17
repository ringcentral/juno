import { styled } from '../../../../../foundation';
import { RcTimePickerProps } from '../TimePicker';
import { RcTimePickerUtils } from '../utils';

const StyledToggleTextContent = styled.div<Pick<RcTimePickerProps, 'size'>>`
  height: 100%;
  margin-left: ${({ size }) => RcTimePickerUtils[size!].timeSystem.margin};
  display: flex;
`;

export { StyledToggleTextContent };
