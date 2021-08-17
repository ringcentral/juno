import MuiButton from '@material-ui/core/Button';

import { styled, typography, palette2 } from '../../../../../foundation';
import {
  disabledColor,
  primaryColor,
  primaryHoverColor,
  textColor,
} from '../utils';

export const StyledYear = styled(MuiButton)`
  width: 56px;
  min-width: 56px;
  height: 28px;
  color: ${textColor};
  ${typography('body1')};
  padding: 0;
  margin: 4px 0;
  line-height: 28px;
  border-radius: 28px;
  box-shadow: none;

  :hover {
    background-color: ${primaryHoverColor};
  }

  &.Year-disabled {
    color: ${disabledColor};
    pointer-events: none;
  }

  &.Year-selected {
    color: ${palette2('neutral', 'f01')};
    background: ${primaryColor};
  }
`;
