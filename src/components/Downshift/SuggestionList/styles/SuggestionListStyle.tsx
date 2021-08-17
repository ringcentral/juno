import { css, RcThemedStyled, spacing } from '../../../../foundation';
import { InnerSuggestionListProps } from '../SuggestionList';
import { RcSuggestionListClasses } from '../utils';

export const SuggestionListStyle: RcThemedStyled<
  InnerSuggestionListProps,
  any
> = () => {
  return css`
    .${RcSuggestionListClasses.toggle} {
      margin-right: -${spacing(3)};

      transform: rotate(0deg);
      transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

      &.${RcSuggestionListClasses.expanded} {
        transform: rotate(180deg);
      }
    }
  `;
};
