import { addPropertyControls, ControlType } from 'framer';

import * as lib from '../src';

const RcThemeProvider: React.ComponentType = ({
  children,
  themeId,
  ...rest
}: any) => {
  const theme = (lib.RcThemes as any)[themeId];

  return (
    <lib.RcThemeProvider {...rest} theme={theme}>
      {children[0]}
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcThemeProvider, {
  themeId: {
    title: 'themeId',
    type: ControlType.Enum,
    defaultValue: 'rcBlue',
    options: lib.themeOptions,
  },
  children: {
    type: ControlType.ComponentInstance,
  },
});

export default RcThemeProvider;
