import { RcDetachedWindowProps, RcDetachedWindowRef } from '../DetachedWindow';

export const DetachedWindowRefMaps = new Map<
  React.RefObject<RcDetachedWindowRef>,
  any
>();

export const openExternalWindow = ({
  url = '',
  name,
  specs,
  replace,
}: RcDetachedWindowProps): Window | null => {
  let newWindow: Window | null = null;

  for (const [key] of DetachedWindowRefMaps) {
    const result = key.current?.window?.open(url, name, specs, replace);
    if (result) {
      newWindow = result;
      break;
    }
  }

  // * if that hostWindow open fail, try current window open again
  if (!newWindow) {
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    newWindow = window.open(url, name, specs, replace);
    if (!newWindow) {
      return null;
    }
  }

  const body = newWindow.document?.body;

  if (!body) return null;

  return newWindow;
};
