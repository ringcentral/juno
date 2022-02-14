import React, { ComponentProps } from 'react';

import { Emoji, Quote, Signal0, Unpin } from '@ringcentral/juno-icon';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
  Title,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

import { palette2, shadows, styled } from '../../../../foundation';
import { RcIconButton } from '../../IconButton';
import { RcIconButtonGroup } from '../IconButtonGroup';

export default {
  title: '🚀 Cleanup Components/Buttons/IconButtonGroup',
  component: RcIconButtonGroup,
  argTypes: {
    ...sortInDocTable<keyof IconButtonGroupProps>([]),
    ...notControlInDocTable<keyof IconButtonGroupProps>([]),
    ...notShowInDocTable<keyof IconButtonGroupProps>([]),
  },
} as Meta;

const Wrapper = styled.div`
  .group {
    background: ${palette2('neutral', 'b03')};
    box-shadow: ${shadows('3')};
  }
`;

type IconButtonGroupProps = ComponentProps<typeof RcIconButtonGroup>;

export const IconButtonGroup: Story<IconButtonGroupProps> = ({
  children,
  ...args
}) => {
  switchToControlKnobs();

  return (
    <Wrapper>
      <RcIconButtonGroup {...args} className="group">
        <RcIconButton variant="plain" title="like" symbol={Emoji} />
        <RcIconButton variant="plain" title="like" symbol={Quote} />
        <RcIconButton variant="plain" title="like" symbol={Unpin} />
        <RcIconButton variant="plain" title="like" symbol={Signal0} />
      </RcIconButtonGroup>
    </Wrapper>
  );
};

IconButtonGroup.storyName = 'IconButtonGroup';

IconButtonGroup.args = {
  gap: 5,
  space: 2,
  radius: 'round',
};

IconButtonGroup.argTypes = {
  ...notControlInDocTable<keyof IconButtonGroupProps>([]),
};

IconButtonGroup.parameters = {
  tags: [
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

export const IconButtonGroupExamples: Story<IconButtonGroupProps> = ({
  ...args
}) => {
  switchToControlKnobs();
  return (
    <Wrapper style={{ textAlign: 'center' }}>
      <Title>plain</Title>
      <RcIconButtonGroup
        {...args}
        className="group"
        space={2}
        gap={3}
        radius="round"
      >
        <RcIconButton variant="plain" title="like" symbol={Emoji} />
        <RcIconButton variant="plain" title="like" symbol={Quote} />
        <RcIconButton variant="plain" title="like" symbol={Unpin} />
        <RcIconButton variant="plain" title="like" symbol={Signal0} />
      </RcIconButtonGroup>

      <Title>round</Title>

      <RcIconButtonGroup {...args} className="group" radius="round">
        <RcIconButton variant="round" title="like" symbol={Emoji} />
        <RcIconButton variant="round" title="like" symbol={Quote} />
        <RcIconButton variant="round" title="like" symbol={Unpin} />
        <RcIconButton variant="round" title="like" symbol={Signal0} />
      </RcIconButtonGroup>

      <Title>inverse</Title>

      <RcIconButtonGroup {...args} className="group" radius="round">
        <RcIconButton variant="inverse" title="like" symbol={Emoji} />
        <RcIconButton variant="inverse" title="like" symbol={Quote} />
        <RcIconButton variant="inverse" title="like" symbol={Unpin} />
        <RcIconButton variant="inverse" title="like" symbol={Signal0} />
      </RcIconButtonGroup>

      <Title>outline</Title>
      <RcIconButtonGroup {...args} className="group" radius="md">
        <RcIconButton variant="outline" title="like" symbol={Emoji} />
        <RcIconButton variant="outline" title="like" symbol={Quote} />
        <RcIconButton variant="outline" title="like" symbol={Unpin} />
        <RcIconButton variant="outline" title="like" symbol={Signal0} />
      </RcIconButtonGroup>
    </Wrapper>
  );
};

IconButtonGroupExamples.storyName = 'IconButtonGroup Examples';
