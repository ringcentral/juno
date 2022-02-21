import React, { useState } from 'react';

import {
  flexCenterStyle,
  palette2,
  RcSwitch,
  RcZoomInFadeOut,
  styled,
} from '@ringcentral/juno';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🚀 Cleanup Components/🌈Animations/Transition/ZoomInFadeOut',
} as Meta;

const Item = styled.div`
  height: 300px;
  width: 300px;
  background-color: ${palette2('highlight', 'b03')};
  color: ${palette2('neutral', 'f06')};
  ${flexCenterStyle};
`;

export const ZoomInFadeOut: Story<any> = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <RcSwitch
        checked={open}
        label="Show"
        onClick={() => {
          setOpen(!open);
        }}
      />
      <RcZoomInFadeOut in={open}>
        <Item>ZoomInFadeOut</Item>
      </RcZoomInFadeOut>
    </>
  );
};

ZoomInFadeOut.storyName = 'ZoomInFadeOut';

ZoomInFadeOut.args = {};

ZoomInFadeOut.argTypes = {};

ZoomInFadeOut.parameters = {
  tags: [
    {
      name: 'Source',
      value: 'react-transition-group',
      href: 'http://reactcommunity.org/react-transition-group/transition',
    },
  ],
};
