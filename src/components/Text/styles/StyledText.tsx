import { css, palette2, RcThemedStyled } from '../../../foundation';
import { RcTextProps } from '../Text';

export const highlightClassName = 'highlight-term';

export const textStyle: RcThemedStyled<RcTextProps, any> = (props) => {
  const { titleWhenOverflow, flexFull } = props;

  return css`
    ${typeof titleWhenOverflow === 'number' &&
    css`
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: ${titleWhenOverflow};
      -webkit-box-orient: vertical;
      white-space: normal;
    `};

    flex: ${flexFull && '1 1 auto'};

    &.${highlightClassName} {
      color: ${palette2('highlight', 'f01')} !important;
      background-color: ${palette2('highlight', 'b02')} !important;
    }
  `;
};
