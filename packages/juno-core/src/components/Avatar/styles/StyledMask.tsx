import { Edit } from '@ringcentral/juno-icon';
import React, { FunctionComponent } from 'react';
import {
  flexCenterStyle,
  palette2,
  setOpacity,
  styled,
} from '../../../foundation';
import { RcIcon } from '../../Icon';

const StyledMask = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 100%;
  height: 27.5%;
  background-color: ${setOpacity(palette2('neutral', 'b06'), '56')};
  color: ${palette2('neutral', 'f01')};
  text-align: center;
  ${flexCenterStyle}
`;
const defaultChildren = <RcIcon size="small" symbol={Edit} />;

type RcAvatarMaskProps = {
  className?: string;
};

const RcAvatarMask: FunctionComponent<RcAvatarMaskProps> = ({
  className,
  children = defaultChildren,
}) => {
  return <StyledMask className={className}>{children}</StyledMask>;
};

export { RcAvatarMask };
export type { RcAvatarMaskProps };
