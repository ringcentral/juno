import React, { FunctionComponent } from 'react';

import { styled } from '../../../../foundation';
import arrowDownSvg from '../../../../icon/ArrowDown';
import { RcIcon, RcIconProps } from '../../../Icon';

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
