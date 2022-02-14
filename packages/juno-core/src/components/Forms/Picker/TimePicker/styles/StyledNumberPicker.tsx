import {
  focusVisible,
  focusVisibleShadowStyle,
  palette2,
  spacing,
  styled,
} from '../../../../../foundation';
import { RcIconButton } from '../../../../Buttons';
import { RcIconButtonClasses } from '../../../../Buttons/IconButton/utils';

export const StyledNumberPicker = styled.div`
  display: flex;
  flex-direction: column;

  outline: none;
  border: 1px solid transparent;
  position: relative;

  ${focusVisibleShadowStyle('lg')};

  ${focusVisible} {
    ${RcIconButton} {
      ${`&:not(.${RcIconButtonClasses.disabled})`} .icon {
        color: ${palette2('interactive', 'f01')};
      }
    }
  }

  > * + * {
    margin-top: ${spacing(2)};
  }
`;
