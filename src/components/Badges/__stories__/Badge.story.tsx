import React from 'react';

import { RcBadge } from '..';
import { styled } from '../../../foundation';

export default {
  title: '🖤 deprecated Components/Badges',
};

const Wrapper = styled.div`
  margin-left: 20px;
`;

export const SimpleBadge = () => (
  <div>
    <div>
      <RcBadge badgeContent={1} color="primary">
        <button>primary</button>
      </RcBadge>
    </div>
    <br />
    <div>
      <RcBadge badgeContent={10} color="secondary">
        <button>secondary</button>
      </RcBadge>
    </div>
  </div>
);

export const Placement = () => (
  <Wrapper>
    <div>
      <RcBadge badgeContent={1} color="primary" placement="top-left">
        <button>top-left</button>
      </RcBadge>
      <RcBadge badgeContent={1} color="primary">
        <button>top-right</button>
      </RcBadge>
    </div>
    <div>
      <RcBadge badgeContent={1} color="primary" placement="bottom-left">
        <button>bottom-left</button>
      </RcBadge>
      <RcBadge badgeContent={1} color="primary" placement="bottom-right">
        <button>bottom-right</button>
      </RcBadge>
    </div>
  </Wrapper>
);

export const CustomizedBadge = () => (
  <div>
    <RcBadge badgeContent={<input type="checkbox" />}>
      <button>I have special badge</button>
    </RcBadge>
  </div>
);
