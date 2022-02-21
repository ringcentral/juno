import React, {
  forwardRef,
  memo,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import ReactDOM from 'react-dom';

import { useForkRef } from '@material-ui/core/utils';

import {
  logInDev,
  RcPortalWindowContext,
  useEventCallback,
  useThemeProps,
} from '../../foundation';
import { RcDetachedWindowStylesProvider } from './DetachedWindowStylesProvider';
import { GlobalStyle } from './styles';
import {
  addCommentInHeader,
  DetachedWindowRefMaps,
  MUI_INSERTION_POINT,
  openExternalWindow,
} from './utils';

type RcDetachedWindowProps = {
  /**
   * open state of that window
   */
  open: boolean;
  /**
   * trigger when window `unload`, you must change `open` state to `false` when `onUnload`
   * otherwise that will cause problem when user close window directly
   */
  onUnload: (e: Event) => any;
  /**
   * trigger when window open
   */
  onOpen?: (window: Window) => any;
  /**
   * `Optional`. Specifies the URL of the page to open. If no URL is specified, a new window/tab with about:blank is opened
   */
  url?: string;
  /**
   * `Optional`. Specifies the target attribute or the name of the window. The following values are supported:
   * - `_blank` - URL is loaded into a new window, or tab. This is default
   * - `_parent` - URL is loaded into the parent frame
   * - `_self` - URL replaces the current page
   * - `_top` - URL replaces any framesets that may be loaded
   * - `name` - The name of the window (Note: the name does not specify the title of the new window)
   */
  name?: string;
  /**
   * Optional. A comma-separated list of items, no whitespace.
   * The following values are supported: https://www.w3schools.com/jsref/met_win_open.asp
   */
  specs?: string;
  /** title for that new window */
  title?: string;
  /** trigger when window `onload` */
  onload?: (e: Event) => any;
  /** trigger when window `beforeunload` */
  onBeforeunload?: (e: BeforeUnloadEvent) => any;
  /** children for render */
  children?: ReactNode;
  /** keep children render when not open */
  keep?: boolean;
  /**
   * when you want open window by yourself, get `window` when `open={true}`
   *
   * ```tsx
    <RcDetachedWindow
      open={open}
      onUnload={() => setOpen(false)}
      getWindow={()=>{
        const win = window.open('', '_blank', 'top=0,left=800,width=400,height=400');
        return win;
      }}
    >
      Content here
    </RcDetachedWindow>
   * ```
   */
  getWindow?: (
    props: Pick<RcDetachedWindowProps, 'url' | 'name' | 'specs' | 'title'>,
  ) => Window | undefined | null;
};

type RcDetachedWindowRef = {
  /** target opened window, only can get after `onload` */
  window?: Window;
};

/**
 * That can make render element on new window, and can shared state easier
 * implementation follow `window.open` api
 * https://www.w3schools.com/jsref/met_win_open.asp
 */
const RcDetachedWindow = memo(
  forwardRef<RcDetachedWindowRef, RcDetachedWindowProps>((inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcDetachedWindow' });
    const {
      children: childrenProp,
      onBeforeunload,
      onUnload,
      onload,
      title,
      url,
      name,
      specs,
      open,
      onOpen,
      getWindow,
      keep,
    } = props;
    const [externalWindow, setExternalWindow] = useState<Window>();
    const isCloseByWindowExitRef = useRef(false);

    const innerRef = useRef<RcDetachedWindowRef>(null);

    const instanceRef = useForkRef(ref, innerRef);

    const beforeMainUnload = useEventCallback(() => {
      if (externalWindow) {
        closeWindow(externalWindow);
      }
    });

    const closeWindow = useEventCallback(
      (externalWindow: Window, isState = true) => {
        // * remember remove main window listener beforeunload when close window
        window.removeEventListener('beforeunload', beforeMainUnload);

        if (!isCloseByWindowExitRef.current) externalWindow.close();
        isCloseByWindowExitRef.current = false;

        if (isState) {
          setExternalWindow(undefined);
        }
      },
    );

    const openWindow = useEventCallback(() => {
      const newWindow = getWindow
        ? getWindow({ url, name, specs, title })
        : openExternalWindow(props);

      if (!newWindow) {
        if (process.env.NODE_ENV !== 'production') {
          logInDev({
            component: 'RcDetachedWindow',
            message:
              'Please check your window instance, that `window.open` should not trigger by another window',
          });
        }

        return;
      }

      if (title) newWindow.document.title = title;
      addCommentInHeader(newWindow);

      if (onload) newWindow.onload = onload;
      if (onUnload) newWindow.addEventListener('unload', onUnload);
      newWindow.addEventListener('beforeunload', (e) => {
        isCloseByWindowExitRef.current = true;
        onBeforeunload?.(e);
      });

      onOpen?.(newWindow);
      setExternalWindow(newWindow);

      // * also need listen when main window close
      window.addEventListener('beforeunload', beforeMainUnload);

      return newWindow;
    });

    useEffect(() => {
      DetachedWindowRefMaps.set(innerRef, true);

      let newWindow: Window | undefined;

      if (open) {
        newWindow = openWindow();
      } else if (externalWindow) {
        closeWindow(externalWindow);
      }

      return () => {
        DetachedWindowRefMaps.delete(innerRef);

        // * when window is open, and destroy mean that trigger by whole component destroy
        if (open && newWindow) {
          closeWindow(newWindow, false);
        }
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    useImperativeHandle(
      instanceRef,
      () => ({
        window: externalWindow,
      }),
      [externalWindow],
    );

    const children = useMemo<React.ReactNode>(() => {
      if (!externalWindow?.document.body) return null;

      return (
        <RcDetachedWindowStylesProvider
          jssInsertionPoint={MUI_INSERTION_POINT}
          externalWindow={externalWindow}
        >
          <RcPortalWindowContext.Provider
            value={{
              externalWindow,
              document: externalWindow?.document || document,
            }}
          >
            <GlobalStyle />
            {childrenProp}
          </RcPortalWindowContext.Provider>
        </RcDetachedWindowStylesProvider>
      );
    }, [childrenProp, externalWindow]);

    if (!open && keep) return childrenProp as any;

    if (externalWindow) {
      return ReactDOM.createPortal(children, externalWindow.document.body);
    }

    return null;
  }),
);

RcDetachedWindow.displayName = 'RcDetachedWindow';

export { RcDetachedWindow };
export type { RcDetachedWindowProps, RcDetachedWindowRef };
