import React from 'react';

import { ellipsis, styled } from '@ringcentral/juno';
import { number, text } from '@storybook/addon-knobs';

import { RcTextWithTooltip } from '../TextWithTooltip';

export default {
  title: '🖤 Deprecated Components/Text/TextWithTooltip',
};

const Parent = styled.div`
  ${ellipsis()};
`;

export const TextWithTooltip = () => {
  const width = number('width', 400);
  const content = text(
    'text',
    'If the text is truncated, will show tooltip when hovered. hahahahahahah',
  );
  return (
    <Parent style={{ width: `${width}px` }}>
      <RcTextWithTooltip>{content}</RcTextWithTooltip>
    </Parent>
  );
};

TextWithTooltip.storyName = 'TextWithTooltip';
