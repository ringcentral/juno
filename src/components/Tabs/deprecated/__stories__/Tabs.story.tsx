import { boolean, select } from '@storybook/addon-knobs';
import React from 'react';

import { RcTab, RcTabs } from '..';
import { palette2, styled } from '../../../../foundation';

export default {
  title: '🖤 Deprecated Components/Tabs',
};

const Wrapper = styled('div')`
  width: 360px;
  height: 280px;
  margin: 0 auto;
  background: ${palette2('neutral', 'b01')};
  border: 1px solid ${palette2('neutral', 'l02')};
`;

const tabsConfig = [
  {
    key: 100,
    title: '0Pinned',
    children: <div>Pinned List</div>,
  },
  {
    key: 101,
    title: '1Files Files Files Files Files',
    children: <div>Files List</div>,
  },
  {
    key: 102,
    title: '2Images',
    children: <div>Images List</div>,
  },
  {
    key: 103,
    title: '3Tasks',
    children: <div>Tasks List</div>,
  },
  {
    key: 104,
    title: '4Notes',
    children: <div>Notes List</div>,
  },
  {
    key: 105,
    title: '5Events',
    children: <div>Events List</div>,
  },
  {
    key: 106,
    title: '6Integration',
    children: <div>Integration List</div>,
  },
];

function getKnobs() {
  const averageWidth = boolean('averageWidth', false);
  const position = select(
    'position',
    {
      left: 'left',
      center: 'center',
      right: 'right',
    },
    'left',
  );
  const size = select(
    'size',
    {
      small: 'small',
      large: 'large',
    },
    'small',
  );
  return {
    averageWidth,
    position,
    size,
  };
}

export const Tabs = () => {
  const { ...rest } = getKnobs();
  return (
    <Wrapper>
      <RcTabs
        defaultActiveIndex={5}
        tag="right-shelf"
        moreText="More"
        {...rest}
        MoreButtonProps={{
          'aria-label': 'test',
        }}
      >
        {tabsConfig.map((tab) => {
          const { title, children, key } = tab;
          return (
            <RcTab title={title} key={key}>
              {children}
            </RcTab>
          );
        })}
      </RcTabs>
    </Wrapper>
  );
};
