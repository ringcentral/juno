import { focusVisible, palette2, styled } from '../../../../../foundation';
import { RcIconButton } from '../../../../Buttons';
import { RcIconButtonClasses } from '../../../../Buttons/IconButton/utils';
import { clearButtonStyle } from './clickFiledStyle';

const StyledNumberPicker = styled.div`
  border-radius: 4px;
  ${clearButtonStyle};
  ${focusVisible} {
    ${RcIconButton} {
      ${`&:not(.${RcIconButtonClasses.disabled})`} .icon {
        color: ${palette2('interactive', 'f01')};
      }
    }
  }
`;

export { StyledNumberPicker };
