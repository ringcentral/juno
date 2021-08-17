import React, { FunctionComponent } from 'react';

import { RcMenu, RcMenuProps } from '../../../Menu';

type ExtendedRcMenuProps = {
  /** Tabs component need value to identify non tab */
  value: number;
} & Partial<{
  // * MuiTabs will add props into children, need pick those
  fullWidth: boolean;
  indicator: boolean;
  selectionFollowsFocus: boolean;
  textColor: any;
}> &
  RcMenuProps;

export const ExtendedRcMenu: FunctionComponent<ExtendedRcMenuProps> = ({
  value,
  fullWidth,
  indicator,
  selectionFollowsFocus,
  textColor,
  ...rest
}) => <RcMenu {...rest} />;
