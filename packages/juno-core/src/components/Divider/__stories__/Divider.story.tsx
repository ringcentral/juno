import React, { ComponentProps } from 'react';

import { palette2, RcDivider, styled } from '@ringcentral/juno';
import {
  paletteChoice,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🚀 Cleanup Components/Divider',
  component: RcDivider,
  argTypes: {
    color: {
      options: paletteChoice,
      control: {
        type: 'select',
      },
    },
    titleBgColor: {
      options: paletteChoice,
      control: {
        type: 'select',
      },
    },
  },
} as Meta;

const P = styled.p`
  padding: 10px;
  margin: 0;
  color: ${palette2('interactive', 'f01')};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

type DividerProps = ComponentProps<typeof RcDivider>;

export const Divider: Story<DividerProps> = ({ children, ...args }) => {
  switchToControlKnobs();
  return (
    <Wrapper
      style={{
        flexDirection: args.vertical ? 'row' : 'column',
        height: args.vertical ? '3em' : 'auto',
      }}
    >
      <P>test test test test test</P>
      <RcDivider {...args} />
      <P>test test test test test</P>
      <RcDivider {...args} />
      <P>test test test test test</P>
      <RcDivider {...args} />
    </Wrapper>
  );
};

Divider.args = {};

Divider.parameters = {
  tags: [
    {
      name: 'Spec',
      href: 'https://app.abstract.com/projects/d893ad32-0d8d-4e65-a37a-b4a5c881c51b/branches/master/commits/c098bb8a667d08ce4af62c20b580dbcf8629238e/files/8ffaf9bc-6939-4ef9-9bd1-6aa5b460e2ae/layers/9C67772C-84D8-432A-9B2A-A5CF971B0DAF',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

export const DividerExamples: Story<DividerProps> = () => {
  return (
    <>
      <Wrapper
        style={{
          flexDirection: 'column',
        }}
      >
        <P>test test test test test</P>
        <RcDivider title="divider title" />
        <P>test test test test test</P>
        <RcDivider title="divider title" />
        <P>test test test test test</P>
        <RcDivider title="divider title" />
      </Wrapper>
      <br />
      <Wrapper
        style={{
          flexDirection: 'row',
          height: '3em',
        }}
      >
        <P>test test test test test</P>
        <RcDivider vertical />
        <P>test test test test test</P>
        <RcDivider vertical />
        <P>test test test test test</P>
        <RcDivider vertical />
      </Wrapper>
    </>
  );
};

DividerExamples.argTypes = {
  color: {
    control: {
      type: null,
    },
  },
  titleBgColor: {
    control: {
      type: null,
    },
  },
};
