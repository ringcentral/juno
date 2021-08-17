import { boolean, select, text } from '@storybook/addon-knobs';
import React, { forwardRef } from 'react';

import { RcTooltipProps } from '../../Tooltip';
import { withTooltip } from '../withTooltip';

export default {
  title: '🚀 Cleanup Components/Tooltip/withTooltip',
};

function getKnobs() {
  const title = text('title', 'button');
  const useRcTooltip = boolean('useRcTooltip', true);
  const placement = select<RcTooltipProps['placement']>(
    'placement',
    {
      top: 'top',
      'top-start': 'top-start',
      'top-end': 'top-end',
      right: 'right',
      'right-start': 'right-start',
      'right-end': 'right-end',
      bottom: 'bottom',
      'bottom-start': 'bottom-start',
      'bottom-end': 'bottom-end',
      left: 'left',
      'left-start': 'left-start',
      'left-end': 'left-end',
    },
    'bottom',
  );
  return {
    title,
    useRcTooltip,
    placement,
  };
}

type CustomComponentProps = { content?: string };
const CustomComponent = forwardRef<HTMLButtonElement, CustomComponentProps>(
  ({ content, ...rest }, ref) => {
    return (
      <button {...rest} ref={ref}>
        {content}
      </button>
    );
  },
);

const WithTooltipComponent = withTooltip(CustomComponent);

export const _withTooltip = () => {
  const { placement, ...rest } = getKnobs();

  return (
    <WithTooltipComponent
      content="Custom Button"
      {...rest}
      TooltipProps={{
        placement,
      }}
    />
  );
};

_withTooltip.story = {
  name: 'withTooltip',
};
