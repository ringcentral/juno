import React, { FunctionComponent } from 'react';

import MuiPaper, { PaperProps as MuiPaperProps } from '@material-ui/core/Paper';

import { RcBaseProps } from '../../../foundation/typings';

export type RcPaperProps = RcBaseProps<MuiPaperProps>;

/** @deprecated please use release Paper */
export const RcPaper: FunctionComponent<RcPaperProps> & {
  dependencies?: any[];
} = React.memo((props) => <MuiPaper {...props} />);

RcPaper.displayName = 'RcPaper';
