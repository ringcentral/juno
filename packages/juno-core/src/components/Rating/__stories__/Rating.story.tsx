import React, { ComponentProps, useState } from 'react';

import { Meta, Story } from '@storybook/react';

import { styled } from '../../../foundation';
import { Add, AddBorder } from '@ringcentral/juno-icon';
import {
  notControlInDocTable,
  paletteChoice,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { RcIcon } from '../../Icon';
import { RcTypography } from '../../Typography';
import { RcRating } from '../Rating';

export default {
  title: '🚀 Cleanup Components/Rating',
  component: RcRating,
  argTypes: {
    color: {
      options: paletteChoice,
      control: {
        type: 'select',
      },
    },
    ...notControlInDocTable<keyof RatingProps>(['icon', 'emptyIcon']),
  },
  args: {
    defaultValue: 1,
    tooltips: ['Poor', 'Fair', 'Okay', 'Good', 'Great'],
  },
} as Meta;

type RatingProps = ComponentProps<typeof RcRating>;

export const Rating: Story<RatingProps> = ({ icon, emptyIcon, ...args }) => {
  switchToControlKnobs();
  return <RcRating {...args} />;
};

Rating.parameters = {
  tags: [
    {
      name: 'Spec',
      href: 'https://app.abstract.com/projects/d893ad32-0d8d-4e65-a37a-b4a5c881c51b/branches/master/commits/3d6eba7c40a87916a314315eaa635be6ae8c0c3e/files/8ffaf9bc-6939-4ef9-9bd1-6aa5b460e2ae/layers/233B16D2-EEE7-4F28-8DAD-F64F9C472C7F',
    },
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/rating/#rating',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

const CustomWrapper = styled.div`
  height: 100px;
  width: 100px;
  font-size: 80px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const customIcon = (
  <CustomWrapper>
    + <RcTypography color="neutral.f04">(a)</RcTypography>
  </CustomWrapper>
);

const customEmptyIcon = (
  <CustomWrapper>
    - <RcTypography color="neutral.f04">(b)</RcTypography>
  </CustomWrapper>
);

export const CustomRatingRender: Story<RatingProps> = ({
  icon,
  emptyIcon,
  ...args
}) => {
  switchToControlKnobs();

  const [value, setValue] = useState<number | null>(2);

  return (
    <>
      <RcRating
        value={value}
        onChange={(e, newValue) => {
          setValue(newValue);
        }}
        icon={<RcIcon symbol={Add} />}
        emptyIcon={<RcIcon symbol={AddBorder} />}
        {...args}
      />
      <br />
      <RcRating
        value={value}
        name="add"
        onChange={(e, newValue) => {
          setValue(newValue);
        }}
        icon={customIcon}
        emptyIcon={customEmptyIcon}
        {...args}
      />
    </>
  );
};

CustomRatingRender.args = {
  color: 'success.b04',
  emphasized: false,
};

CustomRatingRender.argTypes = {
  ...notControlInDocTable<keyof RatingProps>(['defaultValue', 'value']),
};
