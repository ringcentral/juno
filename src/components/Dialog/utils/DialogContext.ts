import { createContext, useContext } from 'react';

import { RcBaseSize, RcTheme } from '../../../foundation';

export type RcDialogChildrenSize = RcBaseSize<'small' | 'medium'>;

export type RcDialogChildrenProps = {
  /** size token */
  size?: RcDialogChildrenSize;
};

export type RcDialogContextValue = RcDialogChildrenProps;

export const RcDialogContext = createContext<RcDialogContextValue>({});

export const useRcDialogContext = () => useContext(RcDialogContext);

export const useDialogDefaultProps = ({
  theme,
  ...props
}: RcDialogChildrenProps & { theme?: RcTheme }) => {
  const context = useRcDialogContext();
  const { size = context.size || 'medium' } = props;

  return {
    ...props,
    size,
  };
};
