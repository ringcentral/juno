import { RcClasses, UnitMap } from '../../../foundation';
import { RcDrawerProps } from '../Drawer';

export const RcDrawerClasses = RcClasses<RcDrawerProps>(
  [
    'paper',
    'paperAnchorLeft',
    'paperAnchorRight',
    'paperAnchorTop',
    'paperAnchorBottom',
  ],
  'RcDrawer',
);

export const drawerRadius: UnitMap<
  NonNullable<RcDrawerProps['anchor']>,
  number[]
> = {
  left: [0, 1, 1, 0],
  right: [1, 0, 0, 1],
  top: [0, 0, 1, 1],
  bottom: [1, 1, 0, 0],
};
