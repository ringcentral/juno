import { styled } from '../../../../../foundation';

type YearsWrapperProps = {
  columns: number;
};

export const YearsWrapper = styled.ul<YearsWrapperProps>`
  display: flex;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  overflow-y: auto;
  padding-left: 16px;

  li {
    list-style: none;

    &:not(:nth-child(${({ columns }) => columns}n + 1)) {
      margin-left: 4px;
    }
  }
`;
