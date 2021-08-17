import { styled } from '../../../../../foundation';

export const YearsWrapper = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  flex: 1;
  height: 100%;
  overflow-y: auto;
  padding-left: 16px;
  min-height: 248px;

  li {
    list-style: none;
    &:not(:nth-child(4n + 1)) {
      margin-left: 4px;
    }
  }
`;
