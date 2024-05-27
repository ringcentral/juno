import React, { useEffect, useRef } from 'react';

import range from 'lodash/range';

import {
  RcTypography,
  RcAvatar,
  RcBox,
  RcText,
  useFocusInside,
} from '@ringcentral/juno';
import { Title } from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🔧 Foundation/Hooks/useFocusInside',
  argTypes: {},
} as Meta;

export const useFocusInsideExample: Story<{}> = () => {
  const containerRef = useRef<HTMLElement>(null);
  const focusInside = useFocusInside({ containerRef });

  useEffect(() => {
    // just simulate focus first element, then focus will move inside the container
    const container = containerRef.current;
    container?.querySelector<HTMLElement>('[data-focusable]')?.focus();
  }, []);

  return (
    <>
      <Title>
        Focus will alway inside the container with{' '}
        <RcText highlight>useFocusInside</RcText>
        <br />
        <br />
        use tab to switch focus, will alway keep inside container{' '}
      </Title>
      <RcBox
        ref={containerRef}
        display="flex"
        width="100%"
        flexWrap="wrap"
        border="1px solid blue"
        padding="16px"
        maxWidth="400px"
      >
        {focusInside.start}
        {range(10).map((i) => {
          return (
            <RcAvatar key={i} data-focusable clickable>
              <RcTypography color="neutral.f04">{`${i}`}</RcTypography>
            </RcAvatar>
          );
        })}
        {focusInside.end}
      </RcBox>
    </>
  );
};

useFocusInsideExample.args = {};
useFocusInsideExample.storyName = 'useFocusInside';
