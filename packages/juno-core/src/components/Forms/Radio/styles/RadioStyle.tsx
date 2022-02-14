import { css, px, RcThemedStyled } from '../../../../foundation';
import { RcIconButtonSizes } from '../../../Buttons/IconButton/utils';
import { checkedStyles } from '../../utils';
import { RcRadioProps } from '../Radio';
import { RadioButtonIconClasses, RcRadioClasses } from '../utils';

export const RadioStyle: RcThemedStyled<RcRadioProps, any> = ({
  size,
  ...rest
}) => {
  // * for overwrite Mui fontSize in default Radio
  // * 1.2 for mui icon have some apace in radio
  const currSize = RcIconButtonSizes[size!];

  const fontSize = px(currSize * 1.2);

  // * 0.2 / 2 for both direction
  const disSize = px(currSize * 0.1);

  return css`
    ${checkedStyles({ size, ...rest, classes: RcRadioClasses })};

    .${RadioButtonIconClasses.root} {
      svg {
        font-size: ${fontSize};
        margin: -${disSize};
      }
    }
  `;
};
