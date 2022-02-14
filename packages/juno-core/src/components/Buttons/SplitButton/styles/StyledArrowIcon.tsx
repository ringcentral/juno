import React, { FunctionComponent } from 'react';

import { ArrowDown } from '@ringcentral/juno-icon';

import { styled } from '../../../../foundation';
import { RcIcon, RcIconProps } from '../../../Icon';

export type StyledArrowIconProps = {
  open: boolean;
} & RcIconProps;

const _StyledArrowIcon: FunctionComponent<StyledArrowIconProps> = (props) => (
  <RcIcon symbol={ArrowDown} size="medium" {...props} />
);

export const StyledArrowIcon = styled(_StyledArrowIcon)`
  transform: ${({ open }) => open && 'rotate(180deg)'};

  &&& {
    color: inherit;
    margin-right: 0;
  }
`;
