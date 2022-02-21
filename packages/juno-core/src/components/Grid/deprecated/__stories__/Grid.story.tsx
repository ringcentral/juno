import React from 'react';

import { RcGrid, RcPaper } from '@ringcentral/juno';

export default {
  title: '🖤 Deprecated Components/Grid',
};

export const Grid = () => (
  <div>
    <RcGrid container spacing={9}>
      <RcGrid item xs={12}>
        <RcPaper>xs=12</RcPaper>
      </RcGrid>
      <RcGrid item xs={6}>
        <RcPaper>xs=6</RcPaper>
      </RcGrid>
      <RcGrid item xs={6}>
        <RcPaper>xs=6</RcPaper>
      </RcGrid>
      <RcGrid item xs={3}>
        <RcPaper>xs=3</RcPaper>
      </RcGrid>
      <RcGrid item xs={3}>
        <RcPaper>xs=3</RcPaper>
      </RcGrid>
      <RcGrid item xs={3}>
        <RcPaper>xs=3</RcPaper>
      </RcGrid>
      <RcGrid item xs={3}>
        <RcPaper>xs=3</RcPaper>
      </RcGrid>
    </RcGrid>
  </div>
);
