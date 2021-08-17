import { styled, spacing } from '../../../../../foundation';
import { RcIcon } from '../../../../Icon';
import { StyledMenuItem } from '../../MenuItem/styles';

const StyledSubMenuItem = styled(StyledMenuItem)`
  && {
    display: flex;
    justify-content: space-between;
  }
`;

const StyledRcIconography = styled(RcIcon)`
  && {
    margin-left: ${spacing(2)};
  }
`;

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
`;

export { StyledSubMenuItem, StyledRcIconography, StyledTitle };
