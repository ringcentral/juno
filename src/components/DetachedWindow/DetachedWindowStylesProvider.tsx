import MUIStylesProvider, {
  StylesContext as MUIStylesContext,
} from '@material-ui/styles/StylesProvider';
import { Jss } from 'jss';
import React, { FunctionComponent, useEffect, useRef } from 'react';
// @ts-ignore
import { __PRIVATE__ } from 'styled-components';
import { StyleSheetManager } from '../../foundation';
import { buildJssFromWindow } from './utils';

export type RcDetachedWindowStylesProviderProps = {
  /**
   * the window to render content
   */
  externalWindow: Window;

  /**
   * the insertion point for jss
   */
  jssInsertionPoint?: string;
};

export const RcDetachedWindowStylesProvider: FunctionComponent<RcDetachedWindowStylesProviderProps> = (
  props,
) => {
  const { externalWindow, jssInsertionPoint, children } = props;

  const sheetsManagerRef = useRef(new Map());
  const jssCache = useRef<Jss>();
  const sheetCache = useRef<StyleSheet>();

  useEffect(
    () => () => {
      jssCache.current = undefined;
      sheetCache.current = undefined;
    },
    [],
  );

  if (!jssCache.current) {
    jssCache.current = buildJssFromWindow(externalWindow, {
      insertionPoint: jssInsertionPoint,
    });
  }

  // We need to use the same styleSheet for the same window in case styled-component insert styles multiple times
  if (!sheetCache.current) {
    sheetCache.current = __PRIVATE__.masterSheet.reconstructWithOptions(
      { target: externalWindow.document.head },
      false,
    );
  }

  return (
    <StyleSheetManager sheet={sheetCache.current}>
      <MUIStylesContext.Consumer>
        {(options) => (
          <MUIStylesProvider
            {...options}
            jss={jssCache.current}
            sheetsManager={sheetsManagerRef.current}
          >
            {children}
          </MUIStylesProvider>
        )}
      </MUIStylesContext.Consumer>
    </StyleSheetManager>
  );
};
