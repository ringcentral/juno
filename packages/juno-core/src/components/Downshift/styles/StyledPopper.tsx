import React, { forwardRef, ComponentType } from 'react';

import { css, palette2, radius, shadows, styled } from '../../../foundation';
import { RcPopper, RcPopperProps } from '../../Popper';

const radiusLg = radius('lg');

export type PopperPosition = 'top-start' | 'bottom-start';

type StyledPopperProps = RcPopperProps & {
  position: PopperPosition;
  /**
   * custom component for popper
   */
  component?: ComponentType<RcPopperProps>;
};

const _StyledPopper = forwardRef<any, StyledPopperProps>(
  ({ position, component: Component = RcPopper, ...rest }, ref) => {
    return <Component ref={ref} {...rest} />;
  },
);

export const StyledPopper = styled(_StyledPopper)`
  > div {
    box-shadow: ${shadows('1')};
    background-color: ${palette2('neutral', 'elevation')};
    overflow: hidden;

    ${({ position }) =>
      position === 'top-start'
        ? css`
            border-top-right-radius: ${radiusLg};
            border-top-left-radius: ${radiusLg};
          `
        : css`
            border-bottom-right-radius: ${radiusLg};
            border-bottom-left-radius: ${radiusLg};
          `}
  }
`;
