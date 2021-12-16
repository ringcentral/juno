import { ShowDeprecatedArgs } from './utils';

/* eslint-disable no-console */
const JUNO_WARNING_IGNORE_KEY = '__JUNO_WARNING_IGNORE__';

type WarningFunctionType = (
  /** warning message */
  message: string,
  /** addition options with that warning */
  options?: Pick<ShowDeprecatedArgs, 'level'>,
) => void;

class RcConfig {
  private _WARNING_IGNORE: boolean = false;

  private _WARNING_FUNCTION: WarningFunctionType = (
    message: string,
    options,
  ) => {
    console[options?.level || 'warn'](message);
  };

  constructor() {
    if (typeof window !== 'undefined') {
      // SSR support
      // * get value once when init
      this._WARNING_IGNORE =
        window?.localStorage?.getItem(JUNO_WARNING_IGNORE_KEY) === 'true';

      // * also provide user to set variable from window
      (window as any).__JUNO__ = this;
    }
  }

  set WARNING_IGNORE(value: boolean) {
    if (value) {
      console.log('---------------- [Juno] ----------------');
      console.log(
        `Don't recommended you close it, we should avoid use any deprecated props or methods.`,
      );
      console.log('---------------- [Juno] ----------------');
    }

    this._WARNING_IGNORE = !!value;

    window?.localStorage?.setItem(
      JUNO_WARNING_IGNORE_KEY,
      `${this._WARNING_IGNORE}`,
    );
  }

  get WARNING_IGNORE() {
    return this._WARNING_IGNORE;
  }

  set WARNING_FUNCTION(func: WarningFunctionType) {
    if (typeof func === 'function') {
      this._WARNING_FUNCTION = func;
    } else {
      console.warn('[Juno] config warningFunction is not a function.');
    }
  }

  get WARNING_FUNCTION() {
    return this._WARNING_FUNCTION;
  }
}

/** config instance */
const rcConfiguration = new RcConfig();

type RcConfigure = {
  /** is show warning message in development */
  warning?: boolean;
  /** custom warning callback */
  warningFunction?: WarningFunctionType;
};

/**
 * set config with Juno
 */
export const configure = ({ warning, warningFunction }: RcConfigure) => {
  if (warning !== undefined) {
    rcConfiguration.WARNING_IGNORE = !warning;
  }
  if (warningFunction !== undefined) {
    rcConfiguration.WARNING_FUNCTION = warningFunction;
  }
};

export { rcConfiguration };
export type { WarningFunctionType };
