import { styled, spacing, RcThemedStyled } from '../../../../foundation';
import { RcButtonBarProps } from '../ButtonBar';

const leftPadding: RcThemedStyled<RcButtonBarProps, any> = ({
  direction,
  overlapSize,
}) => direction === 'horizontal' && overlapSize && spacing(-overlapSize!);

const topPadding: RcThemedStyled<RcButtonBarProps, any> = ({
  direction,
  overlapSize,
}) => direction === 'vertical' && overlapSize && spacing(-overlapSize!);

const StyledButtonBar = styled('div')<RcButtonBarProps>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === 'vertical' ? 'column' : 'row'};
  white-space: nowrap;
  flex-wrap: nowrap;
  flex-shrink: 0;
  align-items: center;

  margin: ${({ margin }) => (margin ? spacing(...margin) : spacing(0))};

  && > *:nth-child(n + 2) {
    margin-left: ${leftPadding};
    margin-top: ${topPadding};
  }
`;

export { StyledButtonBar };
