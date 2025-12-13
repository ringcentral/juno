import React from 'react';

import MuiBackdrop, {
  BackdropProps as MuiBackdropProps,
} from '@material-ui/core/Backdrop';

export type RcBackdropProps = Omit<MuiBackdropProps, 'innerRef'> & {
  size?: 'small' | 'large';
};

export const RcBackdrop: React.FC<RcBackdropProps> & {
  dependencies?: any[];
} = React.memo((props) => <MuiBackdrop {...props} />);

RcBackdrop.displayName = 'RcBackdrop';
