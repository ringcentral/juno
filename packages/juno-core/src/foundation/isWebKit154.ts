import { createGlobalStyle } from 'styled-components';

import { RcClasses, RcClassesProps } from './utils/classes';
import { combineProps } from './utils/combineProps';

// * this whole file should be remove after webkit154 issue be fixed

/**
 * Conditionally apply a workaround for the CSS transition bug in Safari 15.4 / WebKit browsers.
 * Remove this workaround once the WebKit bug fix is released.
 *
 * follow up:
 * https://github.com/mui/material-ui/pull/31975/files
 * https://github.com/mui/material-ui/pull/32202/files
 */
export const isWebKit154 =
  typeof navigator !== 'undefined' &&
  /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
  /(os |version\/)15(.|_)[4-9]/i.test(navigator.userAgent);

const FixWebKit154Classes = RcClasses<RcClassesProps<'paper'>>(
  ['paper'],
  'RcFixWebKit154',
);

/**
 * Conditionally apply a workaround for the CSS transition bug in Safari 15.4.
 * Remove this workaround once the Safari bug is fixed.
 */
export const getWebKit154Theme = (theme: any, enable?: boolean) => {
  if (enable ?? isWebKit154) {
    return combineProps(
      {
        props: {
          // * set all grow related to only have one transition to make animation not shake after safari 15.4
          MuiMenu: {
            PopoverClasses: { paper: FixWebKit154Classes.paper },
          },
          RcVirtualizedMenu: {
            PopoverClasses: { paper: FixWebKit154Classes.paper },
          },
          MuiPopover: {
            PaperProps: { className: FixWebKit154Classes.paper },
          },
          // mui tooltip prop will cover all existing props
          RcTooltip: {
            classes: {
              tooltip: FixWebKit154Classes.paper,
            },
          },
          // mui grow not accept global prop
          RcGrow: {
            className: FixWebKit154Classes.paper,
          },
        },
      },
      theme,
    );
  }

  return theme;
};

export const fixWebKitTransitionStyle =
  'all 159ms cubic-bezier(0.4, 0, 0.2, 1) 0ms';

/**
 * A global style that can be used to
 * apply a workaround for the CSS transition bug after WebKit 15.4.
 */
export const GlobalFixWebKitStyle = createGlobalStyle`
  .${FixWebKit154Classes.paper} {
    transition: ${fixWebKitTransitionStyle} !important;
  }
`;
