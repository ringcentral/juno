import { Meta, Story } from '@storybook/react';
import React from 'react';

import { RcBox } from '../../../../components';
import { Title } from '../../../../storybook/components';
import { RcGlobalScrollBarStyle } from '../GlobalScrollBarStyle';

export default {
  title: '💅 Style system/utils/GlobalScrollBarStyle',
  argTypes: {},
} as Meta;

export const GlobalScrollBarStyleExample: Story<{}> = () => {
  return (
    <RcBox height="200px" overflow="auto">
      <Title>Custom ScrollBar</Title>
      <RcGlobalScrollBarStyle />
      {[...new Array(100)].map((x, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <React.Fragment key={i}>
          {i}
          <br />
        </React.Fragment>
      ))}
    </RcBox>
  );
};

GlobalScrollBarStyleExample.args = {};
GlobalScrollBarStyleExample.storyName = 'GlobalScrollBarStyle';
