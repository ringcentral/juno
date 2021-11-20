import React, { forwardRef, ComponentProps, useMemo } from 'react';
import clsx from 'clsx';

import { styled, RcClassesProps, useThemeProps } from '../../../foundation';
import { CardHoverActionsStyle } from './styles';
import { RcCardHoverActionsClasses } from './utils';

type RcCardHoverActionsClassKey = RcClassesProps<'root' | 'visible'>;

type RcCardHoverActionsProps = {
  /** forces visibility regardless of parent card hover state */
  visible?: boolean;
} & RcCardHoverActionsClassKey &
  ComponentProps<'div'>;

const _RcCardHoverActions = forwardRef<any, RcCardHoverActionsProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcCardHoverActions' });
    const { className: classNameProp, visible, ...rest } = props;
    const className = useMemo(
      () =>
        clsx(classNameProp, RcCardHoverActionsClasses.root, {
          [RcCardHoverActionsClasses.visible]: visible,
        }),
      [classNameProp, visible],
    );

    return <div {...rest} ref={ref} className={className} />;
  },
);

const RcCardHoverActions = styled(_RcCardHoverActions)`
  ${CardHoverActionsStyle}
`;

RcCardHoverActions.defaultProps = {};

RcCardHoverActions.displayName = 'RcCardHoverActions';

export { RcCardHoverActions };
export type { RcCardHoverActionsProps };
