import React, { FunctionComponent } from 'react';

import { WithTooltipProps } from '../../Tooltip';
import { RcAvatarProps } from '../Avatar';

export type AvatarDocProps = RcAvatarProps<boolean> & WithTooltipProps;

const AvatarDoc: FunctionComponent<AvatarDocProps> = (props) => {
  return <>This component only for props generator</>;
};

export { AvatarDoc };
