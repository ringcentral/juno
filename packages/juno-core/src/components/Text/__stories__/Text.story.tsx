import React, { ComponentProps, useState } from 'react';

import { Meta, Story } from '@storybook/react';

import { RcButton } from '../../Buttons';
import { RcLink } from '../../Link';
import TypographyStory from '../../Typography/__stories__/Typography.story';
import { RcText } from '../Text';

export default {
  title: '🚀 Cleanup Components/Typography/Text',
  component: RcText,
  argTypes: {
    ...TypographyStory.argTypes,
  },
} as Meta;

type TextProps = ComponentProps<typeof RcText>;

export const Text: Story<TextProps> = ({ children, ...args }) => {
  const [width, setWidth] = useState<number | undefined>(undefined);

  return (
    <>
      <RcButton
        onClick={() => {
          setWidth(width === undefined ? 400 : undefined);
        }}
      >
        Resize Container
      </RcButton>
      <div style={{ width }}>
        <RcText {...args}>{children}</RcText>
      </div>
    </>
  );
};

Text.args = {
  children:
    'RcText will auto add title with text, when that children is string, and the default wrap is noWrap',
};

export const TextWithHighlight: Story<TextProps> = () => {
  return (
    <>
      <RcText variant="subheading1" color="neutral.f06">
        highlight text will be
        <RcText highlight>"Span"</RcText>
        tag, and set color to be
        <RcText highlight variant="headline1">
          "mention"
        </RcText>
      </RcText>
    </>
  );
};

TextWithHighlight.argTypes = {
  color: {
    control: {
      type: null,
    },
  },
};

export const TextWithLink: Story<TextProps> = () => {
  return (
    <RcText variant="caption1" color="neutral.f03">
      You are an admin to this team.
      <RcLink variant="inherit">Learn about team administration</RcLink>
    </RcText>
  );
};

TextWithLink.argTypes = {
  color: {
    control: {
      type: null,
    },
  },
};

export const TextWithoutDefaultTitle: Story<TextProps> = () => {
  return (
    <RcText color="neutral.f06">
      <>
        Make that wrap with a react element will ignore that auto title feature
      </>
    </RcText>
  );
};

TextWithoutDefaultTitle.argTypes = {
  color: {
    control: {
      type: null,
    },
  },
};

export const TextWithTitleWhenOverflow: Story<TextProps> = () => {
  const [width, setWidth] = useState<number | undefined>(undefined);
  return (
    <>
      <RcButton
        onClick={() => {
          setWidth(width === undefined ? 400 : undefined);
        }}
      >
        Resize Container
      </RcButton>
      <div style={{ width }}>
        <RcText titleWhenOverflow color="neutral.f05">
          Show title only when text overflow, default is always show title with
          same value with children
        </RcText>
        <RcText titleWhenOverflow color="neutral.f05" title="cool" useRcTooltip>
          Show title only when text overflow, default is always show title with
          same value with children, also support custom Title
        </RcText>
        <RcText titleWhenOverflow={2} color="neutral.f05">
          Show title only when text overflow, default is always show title with
          same value with children, also support custom Title and line ellipsis.
        </RcText>
      </div>
    </>
  );
};

TextWithTitleWhenOverflow.argTypes = {
  color: {
    control: {
      type: null,
    },
  },
};
