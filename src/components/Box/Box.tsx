import React, { forwardRef } from 'react';

import MuiBox, { BoxProps as MuiBoxProps } from '@material-ui/core/Box';

import { RcBaseProps, RcPaletteKeys, useThemeProps } from '../../foundation';

type RcBoxProps = {
  /** all palette color support */
  color?: RcPaletteKeys;
  /** all palette color support */
  bgcolor?: RcPaletteKeys;
  /** all palette color support */
  borderColor?: RcPaletteKeys;
} & RcBaseProps<MuiBoxProps, 'color' | 'bgcolor' | 'borderColor'>;

const RcBox = forwardRef<any, RcBoxProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcBox' });

  // TODO: that ref don't include in mui props, use this way to apply ref to MuiBox, that will be fix in v5
  const addProps = { ref };

  return <MuiBox {...addProps} {...props} />;
});

export { RcBox };
export type { RcBoxProps };
