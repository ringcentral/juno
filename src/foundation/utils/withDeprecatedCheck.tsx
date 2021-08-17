import React, {
  ComponentProps,
  ComponentType,
  forwardRef,
  useEffect,
} from 'react';

import { rcConfiguration } from '../config';
import { isShowJunoWarning } from './isShowJunoWarning';

/* eslint-disable no-console */
type WithDeprecatedCheckArgs<TKey> = {
  prop: TKey;
  comment?: string;
  time: string;
};

export type ShowDeprecatedArgs = {
  component: string;
  target?: string;
  time?: string;
  comment?: string;
  /** if you provide message that will give you warm like
   * JUNO [`component`]: `message`
   */
  message?: string;
  /** level */
  level?: 'warn' | 'log' | 'error';
};

function showDeprecated({
  component,
  target,
  time,
  comment,
  message,
  level,
}: ShowDeprecatedArgs) {
  const showMessage =
    message ||
    `props => (${target}) be deprecated, that will be remove in ${time} release${
      comment ? `, ${comment}` : ''
    }`;

  rcConfiguration.WARNING_FUNCTION(`JUNO [${component}]: ${showMessage}`, {
    level,
  });
}

export function logInDev(args: ShowDeprecatedArgs, cb?: Function) {
  if (isShowJunoWarning) {
    showDeprecated(args);
    cb?.();
  }
}

export const useDeprecatedLog = (...args: Parameters<typeof logInDev>) => {
  if (isShowJunoWarning) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      logInDev(...args);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  }
};

export function withDeprecatedCheck<
  T extends ComponentType<any>,
  K extends keyof ComponentProps<T>
>(Component: T, depreciates: WithDeprecatedCheckArgs<K>[], source?: string) {
  if (!isShowJunoWarning) {
    return Component;
  }

  const name = Component.displayName || source || '';

  return (forwardRef((props: any, ref) => {
    useEffect(() => {
      depreciates.forEach(({ prop, comment, time }) => {
        if (
          props[prop] !== undefined &&
          // * also not to be default value
          props[prop] !== Component.defaultProps?.[prop]
        ) {
          showDeprecated({
            component: name,
            target: prop as any,
            time,
            comment,
          });
        }
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Component {...props} ref={ref} />;
  }) as any) as T;
}
