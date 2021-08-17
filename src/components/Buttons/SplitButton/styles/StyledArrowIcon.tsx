import React, { FunctionComponent } from 'react';

import { styled } from '../../../../foundation';
import { RcIcon, RcIconProps } from '../../../Icon';
import arrowDownSvg from '../../../../icon/ArrowDown';

export type StyledArrowIconProps = {
  open: boolean;
} & RcIconProps;

const _StyledArrowIcon: FunctionComponent<StyledArrowIconProps> = (props) => (
  <RcIcon symbol={arrowDownSvg} size="medium" {...props} />
);

export const StyledArrowIcon = styled(_StyledArrowIcon)`
  transform: ${({ open }) => open && 'rotate(180deg)'};

  &&& {
    color: inherit;
    margin-right: 0;
  }
`;
