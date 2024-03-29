import React from 'react';

import { useFixedEndSelection } from '@ringcentral/juno';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🚀 Cleanup Components/Dialer/useFixedEndSelection',
  argTypes: {},
} as Meta;

export const useFixedEndSelectionExample: Story<{}> = () => {
  const { ref, onFocus, onKeyDown, onClick } = useFixedEndSelection();

  return (
    <input
      ref={ref}
      type="text"
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      onClick={onClick}
    />
  );
};

useFixedEndSelectionExample.args = {};
useFixedEndSelectionExample.storyName = 'useFixedEndSelection';
