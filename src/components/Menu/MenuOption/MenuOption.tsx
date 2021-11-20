import React, { FunctionComponent, useCallback } from 'react';
import { RcBaseProps } from '../../../foundation';
import { RcMenuItemProps } from '../MenuItem';
import { StyledMenuOption } from './styles';

type RcMenuOptionProps = RcBaseProps<RcMenuItemProps>;

/** @deprecated use `RcMenuItem` directly */
const RcMenuOption: FunctionComponent<RcMenuOptionProps> = (props) => {
  const { onMouseEnter, ...rest } = props;

  const mouseEnterHandler = useCallback(
    (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      e.currentTarget.focus();

      onMouseEnter && onMouseEnter(e);
    },
    [onMouseEnter],
  );

  return <StyledMenuOption {...rest} onMouseEnter={mouseEnterHandler} />;
};

RcMenuOption.displayName = 'RcMenuOption';

export { RcMenuOption };
export type { RcMenuOptionProps };
