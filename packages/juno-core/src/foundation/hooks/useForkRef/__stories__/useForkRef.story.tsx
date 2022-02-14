import React, { useEffect, useRef } from 'react';

import { Meta, Story } from '@storybook/react';

import { Title } from '@ringcentral/juno-storybook';
import { useForkRef } from '../useForkRef';

export default {
  title: '🔧 Foundation/Hooks/useForkRef',
  argTypes: {},
} as Meta;

export const useForkRefExample: Story<{}> = () => {
  const refA = useRef<HTMLDivElement>(null);
  const refB = useRef<HTMLDivElement>(null);

  const ref = useForkRef(refA, refB);

  useEffect(() => {
    console.log('refA', refA); // get that current div dom
    console.log('refB', refB); // also get that current div dom
  }, []);

  return (
    <div ref={ref}>
      <Title>view console to get ref value</Title>
    </div>
  );
};

useForkRefExample.args = {};
useForkRefExample.storyName = 'useForkRef';
