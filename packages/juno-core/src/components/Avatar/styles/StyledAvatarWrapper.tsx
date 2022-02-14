import React, { forwardRef } from 'react';

import {
  css,
  focusVisible,
  focusVisibleColor,
  focusWithin,
  nonStyleButton,
  opacity,
  styled,
} from '../../../foundation';
import { RcAvatarProps } from '../Avatar';
import { RcAvatarClasses } from '../utils';

export type StyledAvatarWrapperProps = {} & RcAvatarProps<true>;

const _StyledAvatarWrapper = forwardRef<any, StyledAvatarWrapperProps>(
  (
    { children, clickable, color, shouldRenderPresenceHovered, ...rest },
    ref,
  ) => {
    if (clickable) {
      return (
        // as any to prevent div and button type different issue
        <button ref={ref} type="button" {...(rest as any)}>
          {children}
        </button>
      );
    }

    return (
      <div ref={ref as any} {...(rest as any)}>
        {children}
      </div>
    );
  },
);

const focusVisibleAndAvatarContainer = `${focusVisible} .${RcAvatarClasses.avatarContainer}`;

export const StyledAvatarWrapper = styled(_StyledAvatarWrapper)`
  position: relative;
  display: inline-flex;
  outline: 0;

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      opacity: ${opacity('32')};
    `};

  ${({ shouldRenderPresenceHovered }) =>
    shouldRenderPresenceHovered &&
    css`
      .${RcAvatarClasses.presenceWrapper} {
        visibility: hidden;
      }

      ${focusWithin} {
        .${RcAvatarClasses.presenceWrapper} {
          visibility: visible;
        }
      }
    `}

  ${({ clickable }) =>
    clickable &&
    css`
      ${nonStyleButton};

      ${focusVisible} {
        box-shadow: 0 0 0 1px ${focusVisibleColor};
        border-radius: 4px;
      }

      ${focusVisibleAndAvatarContainer},
      .${RcAvatarClasses.avatarContainer}:hover {
        opacity: ${opacity('12', true)};
      }

      ${focusVisibleAndAvatarContainer},
      .${RcAvatarClasses.avatarContainer} {
        &:active {
          opacity: ${opacity('24', true)};
        }
      }
    `};
`;
