import { SyntheticEvent } from 'react';

/** check is that event preventDefault */
export const checkDefaultPrevented = (
  fc: (e: SyntheticEvent, ...args: any[]) => void,
) => {
  return (e: SyntheticEvent, ...args: any[]) => {
    if (e.defaultPrevented) return;
    fc(e, ...args);
  };
};
