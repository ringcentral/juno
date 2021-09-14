import { spacing, styled, typography } from '../../../../../foundation';
import { StyledTimeIconButton } from './StyledTimeIconButton';

export const StyledSelectionItem = styled(StyledTimeIconButton)`
  && {
    ${typography('body1')};
    /* when itemLength is 4 which makes it to become two line, so add padding for it. */
    margin: ${({ itemLength, wrapperSize }) =>
      spacing(wrapperSize === 'small' && itemLength === 4 ? 2 : 1)};
  }
`;
