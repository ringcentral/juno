import React, { ComponentProps, FunctionComponent } from 'react';

import { styled } from '../../../foundation';
import { RcIcon } from '../../Icon';

type StyledIconAvatarProps = { size: number } & Pick<
  ComponentProps<typeof RcIcon>,
  'symbol'
>;

const _StyledIconAvatar: FunctionComponent<StyledIconAvatarProps> = ({
  size,
  ...rest
}) => <RcIcon size="inherit" {...rest} />;

export const StyledIconAvatar = styled(_StyledIconAvatar)`
  font-size: ${({ size }) => size}px;
`;
