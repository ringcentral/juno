import { palette2, setOpacity, styled } from '../../foundation';

export const RcTableRow = styled.tr`
  outline: none;

  &:not(:last-child) {
    border-bottom: 1px solid ${palette2('neutral', 'l02')};
  }

  &:hover {
    background-color: ${setOpacity(palette2('action', 'grayLight'), '08')};
  }
`;
