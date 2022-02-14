import { css, RcThemedStyled } from '../../../../foundation';
import { checkedStyles } from '../../utils';
import { RcCheckboxProps } from '../Checkbox';
import { RcCheckboxClasses } from '../utils';

export const CheckboxStyle: RcThemedStyled<RcCheckboxProps, any> = ({
  ...rest
}) => {
  return css`
    ${checkedStyles({ ...rest, classes: RcCheckboxClasses })}
  `;
};
