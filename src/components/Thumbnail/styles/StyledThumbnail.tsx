import { css, fakeBorder, palette2, radius, styled } from '../../../foundation';
import { RcThumbnailProps } from '../Thumbnail';
import { RcThumbnailSizes } from '../utils';

export const StyledThumbnail = styled.span<RcThumbnailProps>`
  ${({ size, src }) => css`
    width: ${RcThumbnailSizes[size!]}px;
    height: ${RcThumbnailSizes[size!]}px;
    background-image: url(${src});
    border-radius: ${radius(size === 'small' ? 'sm' : 'lg')};
  `};
  display: inline-block;
  background-color: ${palette2('neutral', 'b03')};
  ${fakeBorder()};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
