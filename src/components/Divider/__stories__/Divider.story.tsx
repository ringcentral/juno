import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';

import { palette2, styled } from '../../../foundation';
import { paletteChoice, switchToControlKnobs } from '../../../storybook';
import { RcDivider } from '../Divider';

export default {
  title: '🚀 Cleanup Components/Divider',
  component: RcDivider,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: paletteChoice,
      },
    },
    titleBgColor: {
      control: {
        type: 'select',
        options: paletteChoice,
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
