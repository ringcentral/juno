import { styled } from '../../../foundation';

export const menuListBoundaryPadding = 8;

type StyledMenuListPaddingProps = {
  /** that element height */
  height: number;
};

export const StyledMenuListPadding = styled.div<StyledMenuListPaddingProps>`
  height: ${({ height = menuListBoundaryPadding }) => height}px;
`;
