import { capitalize } from '@material-ui/core/utils';
import clsx from 'clsx';
import React, { createContext, forwardRef, useContext } from 'react';
import { combineProps } from '../../foundation';
import { RcBox } from '../Box';
import { DefaultDotComponent } from './styles';
import { RcBadgeClasses } from './utils';
import type { RcBadgeProps } from './Badge';

export const DotBadgeContext = createContext<
  Pick<
    RcBadgeProps,
    | 'dotProps'
    | 'invisible'
    | 'overlap'
    | 'anchorOrigin'
    | 'children'
    | 'dotComponent'
    | 'showZero'
    | 'badgeContent'
  >
>({});

export const DotBadge = forwardRef<any, any>(
  ({ children: OmitChildren, ...rest }, ref) => {
    const {
      anchorOrigin,
      dotComponent,
      dotProps,
      invisible: invisibleProp,
      badgeContent,
      showZero,
      overlap,
      children,
    } = useContext(DotBadgeContext);

    // sync with mui
    let invisible = invisibleProp;
    if (typeof invisibleProp !== 'boolean' && badgeContent === 0 && !showZero) {
      invisible = true;
    }

    const { horizontal, vertical } = anchorOrigin!;

    const addClassName = `MuiBadge-anchorOrigin${capitalize(
      vertical!,
    )}${capitalize(horizontal!)}${capitalize(overlap!)}`;

    const DotComponent = dotComponent ?? DefaultDotComponent;

    const applyDotProps = combineProps(
      {
        className: clsx(addClassName, RcBadgeClasses.badge, {
          [RcBadgeClasses.invisible]: invisible,
          'MuiBadge-invisible': invisible,
        }),
      },
      dotProps,
    );

    return (
      <div {...rest} ref={ref}>
        {children}
        {dotComponent !== null && (
          <RcBox position="absolute" zIndex="1" clone>
            <DotComponent {...applyDotProps} />
          </RcBox>
        )}
      </div>
    );
  },
);
