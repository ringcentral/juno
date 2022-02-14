import { isUrl } from '../utils';
import createTheme from './createTheme';
import options from './options.json';
import { RcTheme, RcThemeInput } from './theme.type';

type RcThemeEmitter = (theme: RcTheme) => any;

/** @deprecated never use that anymore */
export class RcThemeHandler {
  private static instance?: RcThemeHandler;

  private currentTheme: RcTheme;

  private emit: RcThemeEmitter;

  private themeCache = new Map<string, RcTheme>();

  themeProviderRef = 0;

  static getInstance(): RcThemeHandler {
    if (!RcThemeHandler.instance) {
      RcThemeHandler.instance = new RcThemeHandler();
    }
    return RcThemeHandler.instance;
  }

  listen(cb: RcThemeEmitter) {
    this.emit = cb;
  }

  destroy() {
    RcThemeHandler.instance = undefined;
  }

  getTheme() {
    return this.currentTheme;
  }

  /** Set Theme with theme object */
  setTheme(themeOptions: RcThemeInput, isEmit = true) {
    const currentKey = JSON.stringify(themeOptions);

    const currentTheme = this.themeCache.get(currentKey);

    if (currentTheme) {
      this.currentTheme = currentTheme;
    } else {
      const theme = createTheme(themeOptions);
      this.themeCache.set(currentKey, theme);
      this.currentTheme = theme;
    }

    if (isEmit && this.emit) {
      this.emit(this.currentTheme);
    }

    return this.currentTheme;
  }

  /** Set Theme Name with read static json file */
  async setThemeName(name: string) {
    const theme = await this.read(name);
    this.setTheme(theme);
  }

  read(theme: string) {
    // If that is pass url into, using that file directly.
    if (isUrl(theme)) {
      return this.loadUrl(theme);
    }
    return this.loadUrl(`${options.basePath}${theme}.json`);
  }

  async loadUrl(url: string): Promise<RcThemeInput> {
    try {
      const response = await fetch(url, { cache: 'force-cache' });
      if (response.ok) {
        try {
          return await response.json();
        } catch (e) {
          return Promise.reject(new Error(`failed parsing ${url} to json`));
        }
      }
      return await Promise.reject(new Error(`failed loading ${url}`));
    } catch (e) {
      return await Promise.reject(new Error(`failed loading ${url}`));
    }
  }
}
