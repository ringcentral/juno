import { css, palette2, RcThemedStyled } from '../../../../foundation';
import { RcTabsProps } from '../Tabs';
import { RcTabsClasses } from '../utils';

export const TabsStyle: RcThemedStyled<RcTabsProps, any> = () => {
  return css`
    min-height: auto;

    .${RcTabsClasses.indicator} {
      background-color: ${palette2('tab', 'selected')};
    }
  `;
};
