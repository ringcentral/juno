import React, { ComponentProps } from 'react';

import { RcThumbnail } from '@ringcentral/juno';
import { NonEdit } from '@ringcentral/juno-icon';
import { notShowInDocTable } from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🚀 Cleanup Components/Thumbnail',
  component: RcThumbnail,
} as Meta;

type ThumbnailProps = ComponentProps<typeof RcThumbnail>;

export const Thumbnail: Story<ThumbnailProps> = ({ ...args }) => {
  return <RcThumbnail {...args} />;
};

Thumbnail.args = {
  src: 'https://picsum.photos/100/100/?image=1',
  symbol: NonEdit,
};

Thumbnail.argTypes = {
  ...notShowInDocTable<keyof ThumbnailProps>(['iconType', 'url']),
};
