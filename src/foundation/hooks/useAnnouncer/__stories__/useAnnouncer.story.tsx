import React, { useState } from 'react';

import { Meta, Story } from '@storybook/react';

import { RcBox } from '../../../../components/Box';
import { RcButton } from '../../../../components/Buttons';
import { useAnnouncer } from '../useAnnouncer';

export default {
  title: '🔧 Foundation/Hooks/useAnnouncer',
  argTypes: {},
} as Meta;

export const SimpleAnnouncer: Story<{}> = () => {
  const announce = useAnnouncer('simpleId');
  const [announceTimes, setAnnounceTimes] = useState<number>(0);

  const handleClick = () => {
    setAnnounceTimes(announceTimes + 1);
    announce(`You click "Announce" button ${announceTimes} times`);
  };

  return (
    <RcBox color="neutral.f06">
      Please enable the Screen Reader, and click the "Announce" button.
      <br /> For example, Mac: VoiceOver; Windows: NVDA;
      <br />
      <br />
      Announcement: You click "Announce" button {announceTimes} times
      <br />
      <br />
      <RcButton onClick={handleClick}>Announce</RcButton>
    </RcBox>
  );
};

SimpleAnnouncer.args = {};
SimpleAnnouncer.storyName = 'useAnnouncer';
