import {
  getParsePaletteColor,
  palette2,
  radius,
  shadows,
  spacing,
  styled,
  typography,
} from '../../foundation';

export const Tag = styled.div`
  display: inline-flex;
  border-radius: ${radius('xxl')};
  overflow: hidden;
  box-shadow: ${shadows('4')};
  ${typography('caption1')};

  > * {
    margin: 0;
    padding: 0;
    padding: ${spacing(1, 2)};
  }

  > :first-child {
    background: ${({ color }) => getParsePaletteColor(color)};
  }

  > :last-child {
    background: ${palette2('neutral', 'b02')};
  }
`;

Tag.defaultProps = {
  color: 'success.b04',
};
