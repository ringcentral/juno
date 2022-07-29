import React, { ComponentProps } from 'react';

import { RcTag } from '@ringcentral/juno';
import {
  notShowInDocTable,
  paletteChoice,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🚀 Cleanup Components/Tag',
  component: RcTag,
  argTypes: {
    color: {
      options: paletteChoice,
      control: {
        type: 'select',
      },
    },
    textColor: {
      options: paletteChoice,
      control: {
        type: 'select',
      },
    },
    borderColor: {
      options: paletteChoice,
      control: {
        type: 'select',
      },
    },
  },
} as Meta;

type TagProps = ComponentProps<typeof RcTag>;

export const Tag: Story<TagProps> = ({ children, ...args }) => {
  return (
    <>
      <RcTag {...args}>{children}</RcTag>
    </>
  );
};

Tag.args = {
  children: 'tag test overflowsannsadsndjdnsaasddksjnadsndsasdasdadsadsdsa',
};

Tag.argTypes = {
  ...notShowInDocTable<keyof TagProps>(['content']),
};

Tag.parameters = {
  tags: [
    {
      name: 'Spec',
      href: 'https://app.abstract.com/projects/d893ad32-0d8d-4e65-a37a-b4a5c881c51b/branches/master/commits/a6497a24bcae3cd22071b657cca0b73b11887d09/files/8ffaf9bc-6939-4ef9-9bd1-6aa5b460e2ae/layers/2AC918E7-7D85-4BF4-B43E-C01311A9383D',
    },
  ],
};

export const TagWithCustomBorder = () => {
  return (
    <RcTag
      color="neutral.b01"
      textColor="interactive.f01"
      borderColor="highlight.f02"
      onClick={() => {
        console.log('tag click');
      }}
    >
      tag test overflowsannsadsndjdnsaasddksjnadsndsasdasdadsadsdsa
    </RcTag>
  );
};
