import React, { useState } from 'react';

import { RcIconButton, useAudio } from '@ringcentral/juno';
import { PauseCircleBorder, PlayCircleBorder } from '@ringcentral/juno-icon';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🔧 Foundation/Hooks/useAudio',
  argTypes: {},
} as Meta;

export const SimpleAnnouncer: Story<{}> = () => {
  const audio = useAudio((instance) => {
    instance.src =
      'https://www.bensound.com/bensound-music/bensound-ukulele.mp3';
  });

  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <RcIconButton
      size="medium"
      variant="contained"
      CircularProgressProps={{ color: 'inherit' }}
      stretchIcon
      color="interactive.b02"
      symbol={isPlaying ? PauseCircleBorder : PlayCircleBorder}
      onClick={() => {
        setIsPlaying(!isPlaying);
        if (isPlaying) {
          audio.pause();
        } else {
          audio.play();
        }
      }}
    />
  );
};

SimpleAnnouncer.args = {};
SimpleAnnouncer.storyName = 'useAudio';
