import {
  css,
  flexCenterStyle,
  focusVisible,
  focusVisibleColor,
  focusVisibleShadowStyle,
  nonTouchHoverMedia,
  palette2,
  radius,
  spacing,
  styled,
  typography,
} from '../../../../../foundation';
import { RcIconButton, RcIconButtonGroup } from '../../../../Buttons';
import { RcIconButtonClasses } from '../../../../Buttons/IconButton/utils';
import { RcIcon } from '../../../../Icon';
import { DatePickerHeaderProps } from '../DatePickerHeader';
import { textColor } from '../utils';

type StyledCurrentMonthProps = Pick<DatePickerHeaderProps, 'view'>;

const monthInactiveStyle = css`
  &,
  ${RcIcon} {
    color: ${focusVisibleColor};
  }
`;

const StyledCurrentMonth = styled.button<StyledCurrentMonthProps>`
  background: none;
  border: none;
  cursor: pointer;
  outline: inherit;

  ${flexCenterStyle};
  position: relative;
  cursor: pointer;
  margin-left: ${spacing(5)};
  color: ${textColor};
  ${typography('body2')};
  border-radius: ${radius('sm')};

  padding: ${spacing(1, 0, 1, 1)};

  ${focusVisibleShadowStyle('lg', undefined, undefined, 2)};

  ${RcIcon} {
    margin-left: ${spacing(2)};
    transform: rotate(${({ view }) => (view === 'day' ? '0' : '180')}deg);
    color: ${palette2('neutral', 'f04')};
  }

  ${focusVisible} {
    ${monthInactiveStyle};
  }

  ${nonTouchHoverMedia} {
    &:hover {
      ${monthInactiveStyle};
    }
  }
`;

const SwitchHeaderWrapper = styled.div<Pick<DatePickerHeaderProps, 'size'>>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  ${({ size }) => {
    if (size === 'small') {
      return '';
    }
    return css`
      height: 24px;
      margin-bottom: 12px;
    `;
  }}
`;

type SwitchHeaderProps = Pick<DatePickerHeaderProps, 'size' | 'view'>;

const SwitchHeaderButtonWrapper = styled(RcIconButtonGroup)<SwitchHeaderProps>`
  flex: 1;
  display: ${({ view }) => (view === 'day' ? 'flex' : 'none')};
  justify-content: flex-end;
  padding-right: 12px;

  ${({ size }) => {
    if (size === 'small') {
      return css`
        flex: 1 1 100%;
      `;
    }
    return css`
      height: 24px;
    `;
  }}
`;

const SwitchHeaderButton = styled(RcIconButton)`
  &.${RcIconButtonClasses.root} {
    ${RcIcon} {
      font-size: 24px;
    }
  }
`;

export {
  StyledCurrentMonth,
  SwitchHeaderButton,
  SwitchHeaderButtonWrapper,
  SwitchHeaderWrapper,
};
