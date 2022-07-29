import React, { forwardRef } from 'react';

import { RcTooltipProps, withTooltip } from '@ringcentral/juno';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🚀 Cleanup Components/Tooltip/withTooltip',
  argTypes: {
    useRcTooltip: {
      control: {
        type: 'boolean',
      },
    },
    placement: {
      options: [
        'top',
        'top-start',
        'top-end',
        'right',
        'right-start',
        'right-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'left-end',
      ],
      control: {
        type: 'select',
      },
    },
    title: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta;

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
type WithTooltipProps = {
  placement: RcTooltipProps['placement'];
  title: string;
  useRcTooltip: boolean;
};

export const _withTooltip: Story<WithTooltipProps> = ({
  placement,
  ...rest
}) => {
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

_withTooltip.args = {
  title: 'button',
  useRcTooltip: true,
  placement: 'bottom',
};

_withTooltip.storyName = 'withTooltip';
