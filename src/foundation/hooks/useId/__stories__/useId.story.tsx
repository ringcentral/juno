import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Title } from '../../../../storybook/components';
import { useId } from '../useId';

export default {
  title: '🔧 Foundation/Hooks/useId',
  argTypes: {},
} as Meta;

export const useIdExample: Story<{}> = () => {
  const id = useId();
  const id2 = useId();
  const customId = useId('custom-prefix', true);
  const customId2 = useId('custom-prefix', true);

  return (
    <>
      <Title>
        useId provide you a unique id, id will auto increase for each call,
        <br />
        That will be helpful when you want a unique id
      </Title>
      <br />
      <br />
      <Title variant="body1">Default: {id}</Title>
      <Title variant="body1">Default: {id2}</Title>
      <br />
      <br />
      <Title variant="body1">CustomPrefix: {customId}</Title>
      <Title variant="body1">CustomPrefix: {customId2}</Title>
    </>
  );
};

useIdExample.args = {};
useIdExample.storyName = 'useId';
