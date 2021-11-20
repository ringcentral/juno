import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import { RcIconButton } from '../../../../components/Buttons';
import PauseCircleBorder from '../../../../icon/PauseCircleBorder';
import PlayCircleBorder from '../../../../icon/PlayCircleBorder';
import { useChange } from '../../useChange';
import { useAudio } from '../useAudio';

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
