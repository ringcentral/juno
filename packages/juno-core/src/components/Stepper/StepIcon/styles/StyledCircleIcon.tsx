import React, { FunctionComponent } from 'react';

import { flexCenterStyle, radius, styled } from '../../../../foundation';
import { RcIcon, RcIconProps } from '../../../Icon';
import { iconColor, iconTextColor } from '../utils';

export type StyledCircleIconProps = { isEdit?: boolean } & RcIconProps;

export const _StyledCircleIcon: FunctionComponent<StyledCircleIconProps> = ({
  isEdit,
  ...rest
}) => {
  return <RcIcon {...rest} />;
};

export const StyledCircleIcon = styled(_StyledCircleIcon)`
  width: 24px;
  height: 24px;
  ${flexCenterStyle};
  color: ${iconTextColor};
  svg {
    stroke-width: ${({ isEdit }) => (isEdit ? 1 : 2)}px;
  }
  border-radius: ${radius('circle')};
  background: ${iconColor};
`;
