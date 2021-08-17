import MuiBadge, { BadgeProps as MuiBadgeProps } from '@material-ui/core/Badge';
import React, { memo, SFC } from 'react';

import styled, { css } from '../../foundation/styled-components';

const MAX_SIZE = 6;

const badgeWidth = `${MAX_SIZE * 4}px`;
const badgeHeight = `${MAX_SIZE * 4}px`;
const badgeOffsetX = `${-(MAX_SIZE / 2) * 4}px`;
const badgeOffsetY = `${-(MAX_SIZE / 2) * 4}px`;

const badgePlacementStyles = {
  'top-left': css`
    top: ${badgeOffsetY};
    right: auto;
    bottom: auto;
    left: ${badgeOffsetX};
  `,
  'top-right': css`
    top: ${badgeOffsetY};
    right: ${badgeOffsetX};
    bottom: auto;
    left: auto;
  `,
  'bottom-left': css`
    top: auto;
    right: auto;
    bottom: ${badgeOffsetY};
    left: ${badgeOffsetX};
  `,
  'bottom-right': css`
    top: auto;
    right: ${badgeOffsetX};
    bottom: ${badgeOffsetY};
    left: auto;
  `,
};

const StyledBadge = styled(MuiBadge)<RcBadgeProps>`
  .badge {
    width: ${badgeWidth};
    height: ${badgeHeight};
    ${({ placement }) => badgePlacementStyles[placement!]};
  }
`;

type RcBadgeProps = Pick<
  MuiBadgeProps,
  'children' | 'classes' | 'badgeContent' | 'color'
> & {
  placement?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
};

/** @deprecated please use `components/Badge` */
const RcBadge: SFC<RcBadgeProps> = memo((props: RcBadgeProps) => (
  <StyledBadge
    {...props}
    classes={{
      badge: 'badge',
    }}
  >
    {props.children}
  </StyledBadge>
));

RcBadge.defaultProps = {
  placement: 'top-right',
};

RcBadge.displayName = 'RcBadge';

export { RcBadge, RcBadgeProps };
