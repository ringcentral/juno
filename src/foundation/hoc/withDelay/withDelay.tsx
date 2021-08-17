import React, { ComponentType, ReactNode, useEffect, useState } from 'react';

type WithDelay = { delay?: number; placeholder?: ReactNode };

function withDelay<T extends object>(Component: ComponentType<T>) {
  return function ComponentWithDelay(props: T & WithDelay) {
    const { delay = 0, placeholder = null, ...rest } = props;
    const [visible, setVisible] = useState(delay === 0);

    useEffect(() => {
      const timeout = !visible
        ? window.setTimeout(() => setVisible(true), delay)
        : undefined;

      return () => {
        if (timeout) {
          clearTimeout(timeout);
        }
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return visible ? <Component {...(rest as T)} /> : placeholder;
  } as ComponentType<T & WithDelay>;
}

export { withDelay, WithDelay };
