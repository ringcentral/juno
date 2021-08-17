import { boolean, number, text } from '@storybook/addon-knobs';
import React from 'react';

import { RcImageView } from '../ImageView';

export default {
  title: 'Components/ImageView',
};

const knobs = {
  open: () => boolean('open', true),
  src: () =>
    text('src', 'https://fengyuanchen.github.io/viewerjs/images/tibet-3.jpg'),
  containerWidth: () => number('containerWidth', 600),
  containerHeight: () => number('containerHeight', 400),
};

export const ImageView = () => (
  <div
    style={{
      width: knobs.containerWidth(),
      height: knobs.containerHeight(),
    }}
  >
    <RcImageView src={knobs.src()} width={300} />
  </div>
);

ImageView.story = {
  name: 'ImageView',
};
