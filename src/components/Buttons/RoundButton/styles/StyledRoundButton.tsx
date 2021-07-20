import MuiButton from '@material-ui/core/Button';
import React, { FunctionComponent } from 'react';

import {
  fakeBorder,
  grey,
  palette,
  paletteContrastText,
  radius,
  shadows,
  spacing,
  styled,
  typography,
  useDeprecatedLog,
} from '../../../../foundation';
import { RcRoundButtonProps } from '../RoundButton';

const _StyledRoundButton: FunctionComponent<RcRoundButtonProps> = (props) => {
  useDeprecatedLog({
    component: 'RcRoundButton',
    message: 'please use `Button` with `radius: round` replace that',
  });

  return <MuiButton focusRipple {...props} />;
};

const radiusToken = 'round';

const StyledRoundButton = styled(_StyledRoundButton)`
  && {
    min-width: 104px;
    display: inline-flex;
    text-transform: none;
    text-align: center;
    height: 28px;
    border-radius: ${radius(radiusToken)};
    padding: ${spacing(0, 4)};
    background-color: ${paletteContrastText(palette('primary', '700'))};
    color: ${palette('interactive', 'f01')};
    ${typography('caption1')};
    min-height: unset;
    width: inherit;
    box-shadow: ${shadows('3')};
    &:hover {
      background-color: ${grey(50)};
      &:active {
        box-shadow: ${shadows('1')};
        background-color: ${palette('neutral', 'b03')};
        ${fakeBorder({ pseudo: true, radius: radiusToken })};
      }
    }
  }
`;

export { StyledRoundButton };
