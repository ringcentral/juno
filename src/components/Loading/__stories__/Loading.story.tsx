import { Meta, Story } from '@storybook/react';
import React, { ComponentProps, useState } from 'react';

import { flexCenterStyle, palette2, styled } from '../../../foundation';
import { notShowInDocTable } from '../../../storybook';
import { RcButton } from '../../Buttons';
import { RcLoading } from '../Loading';

export default {
  title: '🚀 Cleanup Components/Loading',
  component: RcLoading,
  argTypes: {
    ...notShowInDocTable<keyof LoadingProps>([]),
  },
} as Meta;

type LoadingProps = ComponentProps<typeof RcLoading>;

const Container = styled.div`
  position: relative;
  height: 300px;
  width: 300px;
  background: ${palette2('neutral', 'b03')};
  ${flexCenterStyle};
`;

export const Loading: Story<LoadingProps> = ({
  children,
  loading: loadingProp,
  ...args
}) => {
  const [loading, setLoading] = useState(loadingProp);
  return (
    <>
      <Container>
        <RcLoading {...args} loading={loading}>
          <>
            <RcButton onClick={() => setLoading(true)}>start loading</RcButton>
          </>
        </RcLoading>
      </Container>
      <RcButton onClick={() => setLoading(true)}>start loading </RcButton>
      <RcButton onClick={() => setLoading(false)}>end loading </RcButton>
    </>
  );
};

Loading.args = {};

Loading.parameters = {
  tags: [
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
