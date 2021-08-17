import MuiGrid, { GridProps as MuiGridProps } from '@material-ui/core/Grid';
import React from 'react';

export type RcGridProps = MuiGridProps;

export const RcGrid: React.SFC<RcGridProps> & {
  dependencies?: any[];
} = React.memo((props) => <MuiGrid {...props} />);

RcGrid.displayName = 'RcGrid';
RcGrid.dependencies = [RcGrid];
