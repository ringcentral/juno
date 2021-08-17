import {
  css,
  palette2,
  px,
  RcThemedStyled,
  typography,
} from '../../../../foundation';
import { RcTabProps } from '../Tab';
import { RcTabClasses } from '../utils';

const getMinHeight = (size: RcTabProps['size']) => (size === 'large' ? 60 : 32);

export const TabStyle: RcThemedStyled<RcTabProps, any> = (props) => {
  const { size, direction: directionProp } = props;

  const isVertical = directionProp === 'vertical';

  return css`
    text-transform: none;
    box-sizing: border-box;
    ${typography('body1')};
    color: ${palette2('tab', 'default')};

    &.${RcTabClasses.selected} {
      ${typography('body2')};
      color: ${palette2('tab', 'selected')};
    }

    min-height: ${px(getMinHeight(size!))};
    min-width: 32px;

    ${directionProp !== undefined &&
      css`
        .${RcTabClasses.wrapper} {
          flex-direction: ${isVertical ? 'row' : 'column'};
        }

        &.${RcTabClasses.labelIcon} .${RcTabClasses.wrapper} > *:first-child {
          margin-bottom: ${isVertical && 'unset'};
          // 6px is follow mui
          margin-right: ${isVertical && '6px'};
        }
      `}
  `;
};
