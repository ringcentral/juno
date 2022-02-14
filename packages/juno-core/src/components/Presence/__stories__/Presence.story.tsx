import React, { ComponentProps } from 'react';

import {
  paletteChoice,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

import { palette2, styled } from '../../../foundation';
import { RcPresence } from '../Presence';
import { RcPresenceColors } from '../utils';

export default {
  title: '🚀 Cleanup Components/Presence',
  component: RcPresence,
  parameters: {
    backgroundColor: 'informative.b01',
  },
  argTypes: {
    color: {
      options: paletteChoice,
      control: {
        type: 'select',
      },
    },
  },
} as Meta;

type PresenceProps = ComponentProps<typeof RcPresence>;

export const Presence: Story<PresenceProps> = ({ children, ...args }) => {
  switchToControlKnobs();
  return <RcPresence {...args}>{children}</RcPresence>;
};

Presence.args = {};
Presence.parameters = {
  tags: [
    {
      name: 'Spec',
      href: 'https://app.abstract.com/projects/62a84878-b3f6-4fd5-a347-2e6941c7753d/branches/master/commits/43b6a77214eda68d934bc8369aad5b5e37b30e28/files/620ad987-618f-4395-a945-495a61a844e9/layers/6F98D42C-A874-433E-91A8-B3FC59712FCA',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

const StyledWrapper = styled.div`
  display: flex;
  padding: 10px;
`;

const StyledText = styled.span`
  margin-left: 5px;
  color: ${palette2('neutral', 'f06')};
`;

const sizes: PresenceProps['size'][] = [
  'xxsmall',
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
];

const types: PresenceProps['type'][] = Object.keys(RcPresenceColors) as any;

export const PresenceExamples: Story<PresenceProps> = () => {
  return (
    <>
      {types.map((type) => (
        <StyledWrapper key={type}>
          {sizes.map((size) => (
            <RcPresence key={`${type}_${size}`} size={size} type={type} />
          ))}
          <StyledText>{type}</StyledText>
        </StyledWrapper>
      ))}

      <StyledWrapper>
        {sizes.map((size) => (
          <RcPresence
            key={size}
            size={size}
            color={palette2('interactive', 'b02')}
          />
        ))}
        <StyledText>Custom Color with theme method</StyledText>
      </StyledWrapper>
      <StyledWrapper>
        {sizes.map((size) => (
          <RcPresence key={size} size={size} color={'yellow'} />
        ))}
        <StyledText>Custom Color with css color</StyledText>
      </StyledWrapper>
    </>
  );
};
