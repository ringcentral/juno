import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import { useFixedEndSelection } from '../utils/useFixedEndSelection';

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
