import { styled } from '../../../../foundation';

const StyledTabContent = styled.div`
  flex: 1;
  display: none;
  min-height: 0;
  &.show {
    display: flex;
  }
`;

export { StyledTabContent };
