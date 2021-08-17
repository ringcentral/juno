import { RcClasses, UnitMap } from '../../../../foundation';
import { StyledTabProps } from '../styles/StyledTab';
import { StyledTabsProps } from '../styles/StyledTabs';
import { RcTabPosition } from '../Tabs';

const RcStyledTabClasses = RcClasses<StyledTabProps>(
  ['root', 'selected', 'wrapper'],
  'StyledTab',
);

const RcStyledTabsClasses = RcClasses<StyledTabsProps>(
  ['root', 'flexContainer', 'indicator'],
  'StyledTabs',
);

const RcTabPositions: UnitMap<RcTabPosition> = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center',
};

const RcMoreTabClassName = 'RcStyledTab-more';

export const IndicatorDefaultClassName = 'RcTabs-indicatorDefault';

export {
  RcTabPositions,
  RcStyledTabClasses,
  RcStyledTabsClasses,
  RcMoreTabClassName,
};
