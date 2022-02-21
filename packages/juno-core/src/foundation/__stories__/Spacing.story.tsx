import React from 'react';

import { css, RcGrid, RcTypography, spacing, styled } from '@ringcentral/juno';

export default {
  title: '🔧 Foundation/Spacing',
};

const items = [
  {
    color: '#ef99b7',
    count: 1,
  },
  {
    color: '#79ecfa',
    count: 2,
  },
  {
    color: '#e479f7',
    count: 3,
  },
  {
    color: '#f8a58b',
    count: 4,
  },
  {
    color: '#91a0f9',
    count: 5,
  },
  {
    color: '#f9cf7a',
    count: 6,
  },
  {
    color: '#79d7e4',
    count: 8,
  },
  {
    color: '#79c4be',
    count: 10,
  },
  {
    color: '#a88ec9',
    count: 12,
  },
];

type SpaceItemProps = { vertical?: boolean } & typeof items[number];

const defaultSize = '100px';

const SpaceItem = styled.div<SpaceItemProps>`
  background: ${({ color }) => color};
  ${({ vertical, count }) => {
    if (vertical) {
      return css`
        width: ${defaultSize};
        height: ${spacing(count)};
      `;
    }
    return css`
      margin-right: 30px;
      width: ${spacing(count)};
      height: ${defaultSize};
    `;
  }}
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  span {
    margin-left: 10px;
  }
`;

export const Spacing = () => {
  return (
    <RcGrid container>
      <RcGrid item xs={4}>
        {items.map((item) => {
          return (
            <FlexContainer key={item.color}>
              <SpaceItem {...item} vertical />
              <span>
                <RcTypography color="neutral.b06">
                  spacing({item.count})
                </RcTypography>
                <RcTypography color="neutral.f04">
                  {item.count * 4}px
                </RcTypography>
              </span>
            </FlexContainer>
          );
        })}
      </RcGrid>
      <RcGrid item xs={8}>
        <FlexContainer>
          {items.map((item) => {
            return <SpaceItem key={item.color} {...item} />;
          })}
        </FlexContainer>
      </RcGrid>
    </RcGrid>
  );
};
