import {
  css,
  flexCenterStyle,
  palette2,
  styled,
  typography,
} from '../../../../../foundation';
import { ToggleTextProps } from '../ToggleText';
import { clearButtonStyle, clickFiledStyle } from './clickFiledStyle';

type StyledToggleTextProps = Pick<ToggleTextProps, 'size' | 'disabled'>;

const StyledToggleText = styled.button<StyledToggleTextProps>`
  ${clickFiledStyle}
  margin: auto;
  border-radius: 28px;
  ${clearButtonStyle};
  ${({ size }) => size === 'medium' && typography('title1')};

  ${flexCenterStyle}

  ${({ disabled }) => {
    if (disabled) {
      return css`
        color: ${palette2('disabled', 'f02')};
      `;
    }

    return css`
      color: ${palette2('interactive', 'f01')};
      cursor: pointer;
    `;
  }}
`;

export { StyledToggleText };
