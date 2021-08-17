import React, { createContext, FunctionComponent, useContext } from 'react';

type ScreenReaderProps = {
  getMonthYearAriaLabel: (monthLabel?: string, expanded?: boolean) => string;
  getYearAriaLabel: (year?: string, selected?: boolean) => string;
  getSwitchMonthAriaLabel: (isNext?: boolean, currentMonth?: string) => string;
  getBackToTodayAriaLabel: () => string;
  getDayAriaLabel: (selected?: boolean, day?: string) => string;
};

const ScreenReaderContext = createContext<ScreenReaderProps>(
  {} as ScreenReaderProps,
);

const useScreenReaderContext = () =>
  useContext(ScreenReaderContext) as Partial<ScreenReaderProps>;

type ScreenReaderProviderProps = {
  screenReaderProps: ScreenReaderProps;
};

const ScreenReaderProvider: FunctionComponent<ScreenReaderProviderProps> = ({
  screenReaderProps,
  children,
}) => {
  return (
    <ScreenReaderContext.Provider value={screenReaderProps || {}}>
      {children}
    </ScreenReaderContext.Provider>
  );
};

export {
  ScreenReaderProps,
  ScreenReaderContext,
  ScreenReaderProviderProps,
  ScreenReaderProvider,
  useScreenReaderContext,
};
