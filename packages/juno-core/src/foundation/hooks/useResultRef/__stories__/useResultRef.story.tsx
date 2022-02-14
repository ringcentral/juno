import React, { useEffect } from 'react';

import { Title } from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

import { useResultRef } from '../useResultRef';

export default {
  title: '🔧 Foundation/Hooks/useResultRef',
  argTypes: {},
} as Meta;

export const useResultRefExample: Story<{}> = () => {
  const ref = useResultRef(() => {
    console.log('only trigger once');
    return 1 + 1;
  });

  useEffect(() => {
    console.log('refA', ref.current); // get that current div dom
  }, []);

  return <Title>{ref.current}</Title>;
};

useResultRefExample.args = {};
useResultRefExample.storyName = 'useResultRef';
