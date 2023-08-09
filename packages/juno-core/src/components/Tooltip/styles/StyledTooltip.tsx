import { css, getParsePaletteColor, RcThemedStyled } from '../../../foundation';
import { RcTooltipProps } from '../Tooltip';
import {
  RcTooltipClasses,
  RcTooltipPadding,
  RcTooltipSpace,
  RcTooltipTypography,
} from '../utils';

const tooltipTypography: RcThemedStyled<RcTooltipProps, any> = ({ size }) =>
  RcTooltipTypography[size!];

const placementSpace: RcThemedStyled<RcTooltipProps, string> = ({ size }) =>
  RcTooltipSpace[size!];

const tooltipPadding: RcThemedStyled<RcTooltipProps, string> = ({ size }) =>
  RcTooltipPadding[size!];

const tooltipColor: RcThemedStyled<RcTooltipProps> = ({ color }) =>
  getParsePaletteColor(color);

const tooltipTextColor: RcThemedStyled<RcTooltipProps> = ({ textColor }) =>
  getParsePaletteColor(textColor);

const arrowSize = {
  vertical: css`
    height: 0.4em;
    width: 0.6em;
  `,
  horizontal: css`
    height: 0.6em;
    width: 0.4em;
  `,
};

const marginOffset = '-0.4em';

const horizontalMarginTopAndMarginBottom = css`
  margin-top: 3px;
  margin-bottom: 3px;
`;

export const tooltipStyle: RcThemedStyled<RcTooltipProps, any> = () => {
  return css`
    ${
      // The preventOverflowModifier of popperjs has 5px padding.
      // So need set max-width to calc(100% - 10px) to prevent overflow when the tooltip is too long.
      ''
    }
    max-width: calc(100% - 10px);

    .${RcTooltipClasses.tooltip} {
      ${tooltipTypography};
      background-color: ${tooltipColor};
      color: ${tooltipTextColor};
      padding: ${tooltipPadding};
      word-break: break-word;
      position: relative;
    }

    .${RcTooltipClasses.tooltipPlacementTop},
      .${RcTooltipClasses.tooltipPlacementBottom} {
      margin: ${placementSpace} 0;
    }

    .${RcTooltipClasses.tooltipPlacementRight},
      .${RcTooltipClasses.tooltipPlacementLeft} {
      margin: 0 ${placementSpace};
    }

    .${RcTooltipClasses.arrow} {
      color: ${tooltipColor};
    }

    .${RcTooltipClasses.tooltipPlacementTop} {
      .${RcTooltipClasses.arrow} {
        margin-bottom: ${marginOffset};
        ${arrowSize.vertical}
      }
    }

    .${RcTooltipClasses.tooltipPlacementBottom} {
      .${RcTooltipClasses.arrow} {
        margin-top: ${marginOffset};
        ${arrowSize.vertical}
      }
    }

    .${RcTooltipClasses.tooltipPlacementLeft} {
      .${RcTooltipClasses.arrow} {
        margin-right: ${marginOffset};
        ${arrowSize.horizontal}
        ${horizontalMarginTopAndMarginBottom}
      }
    }

    .${RcTooltipClasses.tooltipPlacementRight} {
      .${RcTooltipClasses.arrow} {
        margin-left: ${marginOffset};
        ${arrowSize.horizontal}
        ${horizontalMarginTopAndMarginBottom}
      }
    }
  `;
};
