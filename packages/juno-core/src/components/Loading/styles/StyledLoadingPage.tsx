import React from 'react';

import { opacity, palette2, styled, withDelay } from '../../../foundation';
import { RcCircularProgress } from '../../Progress/CircularProgress';

export type StyledLoadingPageProps = {
  size?: number;
  backgroundType?: 'mask';
  disableShrink?: boolean;
};

export const StyledLoadingPage = styled.div<StyledLoadingPageProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0px;
  left: 0px;
  opacity: ${({ backgroundType }) =>
    backgroundType ? opacity('40', true) : 1};
  background: ${palette2('neutral', 'b01')};
  z-index: 1000;
`;

export const RcDefaultLoadingWithDelay = withDelay(
  ({ backgroundType, size, disableShrink }: StyledLoadingPageProps) => (
    <StyledLoadingPage
      data-test-automation-id="loading-page"
      backgroundType={backgroundType}
    >
      <RcCircularProgress size={size} disableShrink={disableShrink} />
    </StyledLoadingPage>
  ),
);
