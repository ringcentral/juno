import React, { FunctionComponent } from 'react';

import { palette, styled } from '../../../../foundation';
import { RcMenuItem } from '../../MenuItem';
import { RcMenuOptionProps } from '../MenuOption';

const _StyledMenuOption: FunctionComponent<RcMenuOptionProps> = (props) => (
  <RcMenuItem {...props} />
);

const StyledMenuOption = styled(_StyledMenuOption)`
  && {
    &:hover {
      background: ${palette('neutral', 'b01')};
    }

    &:focus {
      background-color: ${palette('grey', '500', 1)};
    }

    &:active {
      background-color: ${palette('primary', 'main')};
    }
  }
`;

export { StyledMenuOption };
