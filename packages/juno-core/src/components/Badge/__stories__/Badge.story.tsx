import React, { ComponentProps, useState } from 'react';

import {
  RcAvatar,
  RcBadge,
  RcButton,
  RcGrid,
  RcIcon,
  RcText,
} from '@ringcentral/juno';
import { Phone } from '@ringcentral/juno-icon';
import {
  notControlInDocTable,
  notShowInDocTable,
  paletteChoice,
  sortInDocTable,
  switchToControlKnobs,
  Title,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🚀 Cleanup Components/Badge',
  component: RcBadge,
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
    ...sortInDocTable<keyof BadgeProps>([
      'variant',
      'badgeContent',
      'max',
      'showZero',
    ]),
    ...notControlInDocTable<keyof BadgeProps>(['overlap']),
    ...notShowInDocTable<keyof BadgeProps>([]),
  },
} as Meta;

type BadgeProps = ComponentProps<typeof RcBadge>;

export const Badge: Story<BadgeProps> = ({
  children,
  anchorOrigin,
  ...args
}) => {
  switchToControlKnobs();
  const [count, setCount] = useState(0);
  return (
    <RcBadge badgeContent={count} {...args}>
      <RcButton onClick={() => setCount(count + 1)}>+1</RcButton>
    </RcBadge>
  );
};

Badge.storyName = 'Badge';

Badge.args = {
  max: 5,
  showZero: true,
};

Badge.argTypes = {
  ...notControlInDocTable<keyof BadgeProps>([]),
};

Badge.parameters = {
  tags: [
    {
      name: 'Spec',
      href: 'https://app.abstract.com/projects/d893ad32-0d8d-4e65-a37a-b4a5c881c51b/branches/master/commits/61ef0d5dc04f09a714f4f7f383738f95e0826a16/files/8ffaf9bc-6939-4ef9-9bd1-6aa5b460e2ae/layers/701C6EEF-518C-4FDD-BB1E-5B5A78356269',
    },
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/badges/#badge',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

export const BadgeExamples: Story<BadgeProps> = ({
  children,
  anchorOrigin,
  ...args
}) => {
  switchToControlKnobs();
  return (
    <RcGrid container>
      <RcGrid item xs>
        <Title>overlap="rectangular"</Title>
        <RcBadge {...args}>
          <RcButton>right bottom</RcButton>
        </RcBadge>
        <br />
        <br />
        <RcBadge
          {...args}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <RcButton>right bottom</RcButton>
        </RcBadge>
        <br />
        <br />
        <RcBadge
          {...args}
          anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
        >
          <RcButton>left top</RcButton>
        </RcBadge>
        <br />
        <br />
        <RcBadge
          {...args}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        >
          <RcButton>left bottom</RcButton>
        </RcBadge>
      </RcGrid>
      <RcGrid item xs>
        <Title>overlap="circular"</Title>
        <RcBadge {...args} overlap="circular">
          <RcAvatar>CK</RcAvatar>
        </RcBadge>
        <br />
        <br />
        <RcBadge
          {...args}
          overlap="circular"
          dotProps={{ size: 'large' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <RcAvatar>CK</RcAvatar>
        </RcBadge>
        <br />
        <br />
        <RcBadge
          {...args}
          overlap="circular"
          dotComponent={null}
          anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
        >
          <RcAvatar>CK</RcAvatar>
        </RcBadge>
        <br />
        <br />
        <RcBadge
          {...args}
          overlap="circular"
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        >
          <RcAvatar>CK</RcAvatar>
        </RcBadge>
      </RcGrid>
      <RcGrid item xs>
        <Title>Overlap None</Title>
        <RcBadge {...args} badgeContent="abc" overlap="none" />
        <br />
        <RcBadge {...args} overlap="none" />
        <br />
        <br />
        <Title>With Icon</Title>
        <RcBadge {...args} overlap="circular">
          <RcIcon symbol={Phone} color="interactive.f01" />
        </RcBadge>
        <br />
        <br />
        <Title variant="body1">
          When BadgeContent is number, that will limit with prop{' '}
          <RcText highlight>max</RcText>
        </Title>
        <RcBadge {...args} badgeContent="123" overlap="circular" max={5}>
          <RcAvatar>CK</RcAvatar>
        </RcBadge>
        <br />
        <br />
        <Title variant="body1">
          When BadgeContent is not number, that will not limit with prop{' '}
          <RcText highlight>max</RcText>
        </Title>
        <RcBadge {...args} badgeContent="- 123 -" overlap="circular" max={5}>
          <RcAvatar>CK</RcAvatar>
        </RcBadge>
      </RcGrid>
    </RcGrid>
  );
};

BadgeExamples.storyName = 'Badge Examples';

BadgeExamples.args = {
  badgeContent: 1,
};

BadgeExamples.argTypes = {
  ...notControlInDocTable<keyof BadgeProps>(['overlap']),
};
