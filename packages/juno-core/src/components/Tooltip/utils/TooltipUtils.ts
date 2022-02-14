import { RcClasses, spacing, typography, UnitMap } from '../../../foundation';
import { RcTooltipProps, RcTooltipSize } from '../Tooltip';

export const RcTooltipClasses = RcClasses<RcTooltipProps>(
  [
    'popper',
    'tooltip',
    'arrow',
    'tooltipPlacementBottom',
    'tooltipPlacementLeft',
    'tooltipPlacementRight',
    'tooltipPlacementTop',
  ],
  'RcTooltip',
);

export const RcTooltipTypography: UnitMap<RcTooltipSize> = {
  medium: typography('caption1'),
  large: typography('body1'),
  xlarge: typography('body1'),
};

export const RcTooltipSpace: UnitMap<RcTooltipSize> = {
  medium: spacing(2),
  large: spacing(3),
  xlarge: spacing(3),
};

export const RcTooltipPadding: UnitMap<RcTooltipSize> = {
  medium: spacing(1, 2),
  large: spacing(1, 2),
  xlarge: spacing(3, 3),
};
