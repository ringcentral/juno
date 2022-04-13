import { createGlobalStyle } from 'styled-components';

import { RcClasses, RcClassesProps } from './utils/classes';
import { combineProps } from './utils/combineProps';

/**
 * Conditionally apply a workaround for the CSS transition bug in Safari 15.4.
 * Remove this workaround once the Safari bug is fixed.
 */
export const isSafari154 =
  typeof navigator !== 'undefined' &&
  (/^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
    /(iPhone|iPad)/.test(navigator.userAgent)) &&
  /15\.[4-9]/i.test(navigator.userAgent);

const FixSafari154Classes = RcClasses<RcClassesProps<'paper'>>(
  ['paper'],
  'RcFixSafari154',
);

/**
 * Conditionally apply a workaround for the CSS transition bug in Safari 15.4.
 * Remove this workaround once the Safari bug is fixed.
 */
export const getSafari154Theme = (theme: any, enable?: boolean) => {
  if (enable ?? isSafari154) {
    return combineProps(
      {
        props: {
          // * set all grow related to only have one transition to make animation not shake after safari 15.4
          MuiMenu: {
            PopoverClasses: { paper: FixSafari154Classes.paper },
          },
          RcVirtualizedMenu: {
            PopoverClasses: { paper: FixSafari154Classes.paper },
          },
          MuiPopover: {
            PaperProps: { className: FixSafari154Classes.paper },
          },
          // mui tooltip prop will cover all existing props
          RcTooltip: {
            classes: {
              tooltip: FixSafari154Classes.paper,
            },
          },
          // mui grow not accept global prop
          RcGrow: {
            className: FixSafari154Classes.paper,
          },
        },
      },
      theme,
    );
  }

  return theme;
};

export const fixSafariTransitionStyle =
  'all 159ms cubic-bezier(0.4, 0, 0.2, 1) 0ms';
/**
 * A global style that can be used to apply a workaround for the CSS transition bug in Safari 15.4.
 */
export const GlobalFixSafariStyle = createGlobalStyle`
  .${FixSafari154Classes.paper} {
    transition: ${fixSafariTransitionStyle} !important;
  }
`;
